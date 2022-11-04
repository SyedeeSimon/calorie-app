package com.syedee.graphqlbackend.controller;

import com.syedee.graphqlbackend.database.DailyCalorie;
import com.syedee.graphqlbackend.database.FoodEntry;
import com.syedee.graphqlbackend.database.MonthlyExpense;
import com.syedee.graphqlbackend.database.User;
import com.syedee.graphqlbackend.helper.Crypto;

import java.util.List;

public class Helper {

    public static final String GRAPHQL_USER_CONTEXT_NAME = ":";

    public static FoodEntryDto convertEntityToDto(FoodEntry entry) {
        return new FoodEntryDto(
                Integer.toString(entry.id),
                entry.foodName,
                entry.calorieValue,
                entry.price,
                entry.createdAt,
                convertEntityToDto(entry.createdBy)
        );
    }

    public static DailyCalorieDto convertEntityToDto(DailyCalorie dailyCalorie) {
        return new DailyCalorieDto(dailyCalorie.date, dailyCalorie.date, dailyCalorie.value);
    }

    public static MonthlyExpenseDto convertEntityToDto(MonthlyExpense monthlyExpense) {
        return new MonthlyExpenseDto(monthlyExpense.monthAndYear, monthlyExpense.monthAndYear, monthlyExpense.value);
    }

    public static FoodEntry convertDtoToEntity(FoodEntryDto dto) {
        Integer id = dto.id != null ? Integer.valueOf(dto.id) : null;
        return new FoodEntry(
                id,
                dto.foodName,
                dto.calories,
                dto.price,
                convertDtoToEntity(dto.owner),
                dto.createdAt
        );
    }

    public static UserDto convertEntityToDto(User user) {
        return new UserDto(
                user.id,
                user.name,
                user.dailyCalorieLimit,
                user.monthlyExpenseLimit,
                user.role
        );
    }

    public static User convertDtoToEntity(UserDto dto) {
        return new User(
                dto.id,
                dto.name,
                dto.dailyCalorieLimit,
                dto.monthlyExpenseLimit,
                null,
                dto.role
        );
    }

    public static String getIdGreaterThanString(String after) {
        if (after == null) {
            return null;
        }
        return Crypto.decodeBase64(after);
    }

    public static Integer getIdGreaterThanInteger(String after) {
        if (after == null) {
            return null;
        }
        return Integer.valueOf(Crypto.decodeBase64(after));
    }

    public static PageInfo getPageInfo(List<? extends Edge> edges, int limit) {
        if (edges.size() == 0 ) {
            return PageInfo.of(false);
        }
        var firstEdge = edges.get(0);
        var lastEdge = edges.get(edges.size()-1);
        return PageInfo.of(edges.size() == limit, firstEdge.cursor, lastEdge.cursor);
    }
}
