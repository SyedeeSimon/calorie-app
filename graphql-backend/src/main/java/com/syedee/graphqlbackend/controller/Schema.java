package com.syedee.graphqlbackend.controller;

import com.syedee.graphqlbackend.helper.Crypto;
import java.util.List;

abstract class Edge {
    String cursor;

    public Edge(String cursor) {
        this.cursor = cursor;
    }
}

class PageInfo {
    boolean hasNextPage;
    boolean hasPreviousPage;
    String startCursor;
    String endCursor;

    public PageInfo(boolean hasNextPage, boolean hasPreviousPage, String startCursor, String endCursor) {
        this.hasPreviousPage = hasPreviousPage;
        this.hasNextPage = hasNextPage;
        this.startCursor = startCursor;
        this.endCursor = endCursor;
    }

    public static PageInfo of(boolean hasNextPage) {
        return new PageInfo(hasNextPage, false, null, null);
    }

    public static PageInfo of(
            boolean hasNextPage,
            String startCursor,
            String endCursor
    ) {
        return new PageInfo(hasNextPage, false, startCursor, endCursor);
    }
}

class UserDto {
    Integer id;
    String name;
    Integer dailyCalorieLimit;
    Double monthlyExpenseLimit;
    String role;

    public UserDto(Integer id, String name, Integer dailyCalorieLimit, Double monthlyExpenseLimit, String role) {
        this.id = id;
        this.name = name;
        this.dailyCalorieLimit = dailyCalorieLimit;
        this.monthlyExpenseLimit = monthlyExpenseLimit;
        this.role = role;
    }
}

class FoodEntryDto {
    String id;
    String foodName;
    int calories;
    Double price;
    String createdAt;
    UserDto owner;

    public FoodEntryDto(String id, String foodName, int calories, Double price, String createdAt, UserDto owner) {
        this.id = id;
        this.foodName = foodName;
        this.calories = calories;
        this.price = price;
        this.createdAt = createdAt;
        this.owner = owner;
    }
}

class FoodEntryEdgeDto extends Edge {
    FoodEntryDto node;
    String cursor;

    public FoodEntryEdgeDto(FoodEntryDto node, String cursor) {
        super(cursor);
        this.node = node;
        this.cursor = cursor;
    }

    public static FoodEntryEdgeDto of(FoodEntryDto node) {
        return new FoodEntryEdgeDto(node, Crypto.encodeBase64(node.id));
    }
}

class FoodEntryConnectionDto {
    PageInfo pageInfo;
    List<FoodEntryEdgeDto> edges;
    Integer totalCount;

    public FoodEntryConnectionDto(PageInfo pageInfo, List<FoodEntryEdgeDto> edges, Integer totalCount) {
        this.pageInfo = pageInfo;
        this.edges = edges;
        this.totalCount = totalCount;
    }
}

class FoodEntriesFilter {
    String startDate;
    String endDate;
    List<String> foodIds;

    public FoodEntriesFilter(String startDate, String endDate, List<String> foodIds) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.foodIds = foodIds;
    }
}

class DailyCalorieDto {
    String id;
    String date;
    int value;

    public DailyCalorieDto(String id, String date, int value) {
        this.id = id;
        this.date = date;
        this.value = value;
    }
}

class DailyCalorieEdgeDto extends Edge {
    DailyCalorieDto node;
    String cursor;

    public DailyCalorieEdgeDto(DailyCalorieDto node, String cursor) {
        super(cursor);
        this.node = node;
        this.cursor = cursor;
    }

    public static DailyCalorieEdgeDto of(DailyCalorieDto node) {
        return new DailyCalorieEdgeDto(node, Crypto.encodeBase64(node.date));
    }
}

class DailyCalorieConnectionDto {
    PageInfo pageInfo;
    List<DailyCalorieEdgeDto> edges;

    public DailyCalorieConnectionDto(PageInfo pageInfo, List<DailyCalorieEdgeDto> edges) {
        this.pageInfo = pageInfo;
        this.edges = edges;
    }
}

class MonthlyExpenseDto {
    String id;
    String monthAndYear;
    double value;

    public MonthlyExpenseDto(String id, String monthAndYear, double value) {
        this.id = id;
        this.monthAndYear = monthAndYear;
        this.value = value;
    }
}

class MonthlyExpenseEdgeDto extends Edge {
    MonthlyExpenseDto node;
    String cursor;

    public MonthlyExpenseEdgeDto(MonthlyExpenseDto node, String cursor) {
        super(cursor);
        this.node = node;
        this.cursor = cursor;
    }

    public static MonthlyExpenseEdgeDto of(MonthlyExpenseDto node) {
        return new MonthlyExpenseEdgeDto(node, Crypto.encodeBase64(node.monthAndYear));
    }
}

class MonthlyExpenseConnectionDto {
    PageInfo pageInfo;
    List<MonthlyExpenseEdgeDto> edges;

    public MonthlyExpenseConnectionDto(PageInfo pageInfo, List<MonthlyExpenseEdgeDto> edges) {
        this.pageInfo = pageInfo;
        this.edges = edges;
    }
}
