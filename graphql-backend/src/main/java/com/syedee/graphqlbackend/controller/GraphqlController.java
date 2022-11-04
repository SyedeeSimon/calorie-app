package com.syedee.graphqlbackend.controller;

import com.syedee.graphqlbackend.database.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.*;
import org.springframework.stereotype.Controller;


import java.util.stream.Collectors;

import static com.syedee.graphqlbackend.controller.Helper.GRAPHQL_USER_CONTEXT_NAME;
import static com.syedee.graphqlbackend.controller.Helper.convertDtoToEntity;


@Controller
public class GraphqlController {

    @Autowired
    private PostgresQueryService postgresQueryService;

    @QueryMapping
    public UserDto currentUser(@ContextValue(name = GRAPHQL_USER_CONTEXT_NAME) UserDto userDto){
        return userDto;
    }


    @QueryMapping
    public FoodEntryConnectionDto foodEntries(
            @Argument Integer first,
            @Argument String after,
            @Argument FoodEntriesFilter filter,
            @ContextValue(name = GRAPHQL_USER_CONTEXT_NAME) UserDto userDto
    ) {
        var entries = postgresQueryService.fetchFoodEntries(
                first,
                Helper.getIdGreaterThanInteger(after),
                filter.startDate,
                filter.endDate,
                convertDtoToEntity(userDto)
        );
        var edges = entries.stream().map(entry -> FoodEntryEdgeDto.of(Helper.convertEntityToDto(entry))).collect(Collectors.toList());
        return new FoodEntryConnectionDto(Helper.getPageInfo(edges, first), edges, 2);
    }

    @QueryMapping
    public DailyCalorieConnectionDto dailyCalories(
            @Argument Integer first,
            @Argument String after,
            @ContextValue(name = GRAPHQL_USER_CONTEXT_NAME) UserDto userDto
    ) {
        var dailyCalories = postgresQueryService.fetchDailyCalories(
                Helper.getIdGreaterThanString(after),
                first,
                userDto.id
        );
        var edges = dailyCalories.stream().map(dailyCalorie -> DailyCalorieEdgeDto.of(Helper.convertEntityToDto(dailyCalorie))).collect(Collectors.toList());
        return new DailyCalorieConnectionDto(Helper.getPageInfo(edges, first), edges);
    }

    @QueryMapping
    public MonthlyExpenseConnectionDto monthlyExpenses(
            @Argument Integer first,
            @Argument String after,
            @ContextValue(name = GRAPHQL_USER_CONTEXT_NAME) UserDto userDto
    ) {
        var monthlyExpenses = postgresQueryService.fetchMonthlyExpenses(
                Helper.getIdGreaterThanString(after),
                first,
                userDto.id
        );
        var edges = monthlyExpenses.stream().map(me -> MonthlyExpenseEdgeDto.of(Helper.convertEntityToDto(me))).collect(Collectors.toList());
        return new MonthlyExpenseConnectionDto(Helper.getPageInfo(edges, first), edges);
    }

    @MutationMapping
    public FoodEntryDto saveFoodEntry(
            @Argument(name = "foodEntry") FoodEntryDto foodEntryDto,
            @ContextValue(name = GRAPHQL_USER_CONTEXT_NAME) UserDto userDto
    ) {
        // Only admin requests will have the owner value
        // End user requests will infer it from auth token
        if (foodEntryDto.owner == null) {
            foodEntryDto.owner = userDto;
        }
        var foodEntry = postgresQueryService.createOrUpdate(Helper.convertDtoToEntity(foodEntryDto));
        return Helper.convertEntityToDto(foodEntry);
    }

    @MutationMapping
    public boolean deleteFoodEntry(@Argument String id) {
        return postgresQueryService.deleteFoodEntry(id);
    }


}
