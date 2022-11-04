package com.syedee.graphqlbackend.database;

import com.syedee.graphqlbackend.helper.Crypto;
import graphql.com.google.common.collect.Maps;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;
import java.util.Map;

@Service
public class PostgresQueryService {

    private static final ZoneId UTC = ZoneId.of("UTC");

    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public List<FoodEntry> fetchFoodEntries(
            Integer limit,
            Integer idGreaterThan,
            String startDate,
            String endDate,
            User user
    ) {
        var startDateTime = LocalDateTime.ofInstant(Instant.parse(startDate), UTC);
        var endDateTime = LocalDateTime.ofInstant(Instant.parse(endDate), UTC);

        var sql = "SELECT fe.id AS id, fe.food_name AS food_name, fe.calorie_value AS calorie_value, fe.price AS price, fe.created_at AS created_at, fe.created_by AS created_by, u.name AS user_name, u.id AS user_id FROM food_entries AS fe\n" +
                "JOIN users AS u ON fe.created_by = u.id\n" +
                "WHERE fe.created_at <= :startDate \n" +
                "AND fe.created_at > :endDate \n" +
                (user.role.equals("USER") ? "AND fe.created_by = :user_id" : "") + "\n" +
                (idGreaterThan != null ? "AND fe.id < :id_greater_than" : "") + "\n" +
                "ORDER BY (fe.created_at, fe.id) \n DESC " +
                "LIMIT :limit";

        Map params = Maps.newHashMap();
        params.put("startDate", startDateTime);
        params.put("endDate", endDateTime);
        params.put("id_greater_than", idGreaterThan);
        params.put("limit", limit);
        params.put("user_id", user.id);

        return namedParameterJdbcTemplate.query(sql, params, (rs, rowNum) -> {
            return new FoodEntry(rs.getInt("id"),
                    rs.getString("food_name"),
                    rs.getInt("calorie_value"),
                    rs.getDouble("price"),
                    User.of(rs.getInt("user_id"), rs.getString("user_name")),
                    rs.getString("created_at") + "Z"
            );
        });
    }

    public List<DailyCalorie> fetchDailyCalories(
            String idGreaterThan,
            Integer limit,
            Integer userId
    ) {
        var sql = "SELECT to_char(created_at AT TIME ZONE 'UTC' AT TIME ZONE 'BDT', 'YYYY-MM-dd') AS created_at_date, SUM(fe.calorie_value) AS calorie_value, u.name AS user_name FROM food_entries AS fe \n" +
                "JOIN users AS u ON fe.created_by = u.id \n" +
                "WHERE fe.created_by = :user_id \n" +
                (idGreaterThan != null ?  "AND to_char(created_at AT TIME ZONE 'UTC' AT TIME ZONE 'BDT', 'YYYY-MM-dd') < :id_greater_than" : "") + " \n" +
                "GROUP BY (user_name, created_at_date) \n" +
                "ORDER BY created_at_date DESC \n" +
                "LIMIT :limit;";

        Map params = Maps.newHashMap();
        params.put("user_id", userId);
        params.put("id_greater_than", idGreaterThan);
        params.put("limit", limit);

        return namedParameterJdbcTemplate.query(sql, params, (rs, rowNum) -> {
            return new DailyCalorie(
                    rs.getString("created_at_date"),
                    rs.getInt("calorie_value"),
                    User.of(userId, rs.getString("user_name"))
            );
        });
    }

    public List<MonthlyExpense> fetchMonthlyExpenses(
            String idGreaterThan,
            Integer limit,
            Integer userId
    ) {
        var sql = "SELECT to_char(fe.created_at, 'YYYY-MM') AS created_at_year_month, SUM(fe.price) AS total_price, u.name AS user_name FROM food_entries AS fe \n" +
                "JOIN users AS u ON fe.created_by = u.id \n" +
                "WHERE fe.created_by = :user_id \n" +
                (idGreaterThan != null ?  "AND to_char(fe.created_at, 'YYYY-MM') < :id_greater_than" : "") + " \n" +
                "GROUP BY (user_name, created_at_year_month) \n" +
                "ORDER BY created_at_year_month DESC \n" +
                "LIMIT :limit;";

        Map params = Maps.newHashMap();
        params.put("user_id", userId);
        params.put("id_greater_than", idGreaterThan);
        params.put("limit", limit);

        return namedParameterJdbcTemplate.query(sql, params, (rs, rowNum) -> {
            return new MonthlyExpense(
                    rs.getString("created_at_year_month"),
                    rs.getDouble("total_price")
            );
        });
    }

    public FoodEntry createOrUpdate(FoodEntry foodEntry) {

        var insertPrefix = "INSERT INTO food_entries (food_name, calorie_value, price, created_by, created_at) \n" +
                "VALUES (:food_name, :calorie_value, :price, :user_id, :created_at) \n";

        var updatePrefix = "INSERT INTO food_entries (id, food_name, calorie_value, price, created_by, created_at) \n" +
                "VALUES (:id_value, :food_name, :calorie_value, :price, :user_id, :created_at) \n";

        var sql = (foodEntry.id == null ? insertPrefix : updatePrefix) +
                "ON CONFLICT (id) DO UPDATE \n" +
                "SET food_name = excluded.food_name, \n" +
                "calorie_value = excluded.calorie_value,\n" +
                "price = excluded.price, \n" +
                "created_at = excluded.created_at \n" +
                "RETURNING *";

        var createdAt = LocalDateTime.ofInstant(Instant.parse(foodEntry.createdAt), UTC);

        Map params = Maps.newHashMap();
        params.put("id_value", foodEntry.id);
        params.put("food_name", foodEntry.foodName);
        params.put("calorie_value", foodEntry.calorieValue);
        params.put("price", foodEntry.price);
        params.put("user_id", foodEntry.createdBy.id);
        params.put("created_at", createdAt);

         return namedParameterJdbcTemplate.<FoodEntry>queryForObject(sql, params, (rs, rowNum) -> {
            return new FoodEntry(
                    rs.getInt("id"),
                    rs.getString("food_name"),
                    rs.getInt("calorie_value"),
                    rs.getDouble("price"),
                    User.of(foodEntry.createdBy.id, foodEntry.createdBy.name),
                    rs.getString("created_at") + "Z"
            );
        });
    }

    public User findUser(String userName) {
        var sql = "SELECT * FROM users WHERE name = :user_name";
        Map params = Maps.newHashMap();
        params.put("user_name", userName);
        return namedParameterJdbcTemplate.<User>queryForObject(sql, params, (rs, rowNum) -> {
            return new User(
                    rs.getInt("id"),
                    rs.getString("name"),
                    rs.getInt("daily_calorie_limit"),
                    rs.getDouble("monthly_expense_limit"),
                    rs.getString("password"),
                    rs.getString("role")
            );
        });
    }

    public boolean deleteFoodEntry(String idString) {
        Integer id_param = Integer.valueOf(idString);
        var sql = "DELETE FROM food_entries where id = :id_param";
        var params = Maps.<String, Integer>newHashMap();
        params.put("id_param", id_param);
        return namedParameterJdbcTemplate.update(sql, params) == 0;
    }

    @PostConstruct
    private void printToken() {
        String[] userNames = new String[]{"@simon", "@james", "@remy", "@terry", "@daniel", "@ebad"};
        for (int i=0;i<6;i++) {
            User user = findUser(userNames[i]);
            System.out.println(String.format("Token for %s is %s", user.name, "Basic "+Crypto.encodeBase64(user.name+":"+user.password)));
        }
    }

}
