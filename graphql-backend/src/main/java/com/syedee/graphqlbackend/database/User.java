package com.syedee.graphqlbackend.database;

public class User {
    public int id;
    public String name;
    public Integer dailyCalorieLimit;
    public Double monthlyExpenseLimit;
    public String password;

    public String role;

    public User(int id, String name, Integer dailyCalorieLimit, Double monthlyExpenseLimit, String password, String  role) {
        this.id = id;
        this.name = name;
        this.dailyCalorieLimit = dailyCalorieLimit;
        this.monthlyExpenseLimit = monthlyExpenseLimit;
        this.password = password;
        this.role = role;
    }

    public static User of(int id, String name) {
        return new User(id, name, null, null, null, null);
    }
}
