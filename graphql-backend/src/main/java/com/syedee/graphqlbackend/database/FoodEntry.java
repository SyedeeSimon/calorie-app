package com.syedee.graphqlbackend.database;

public class FoodEntry {
    public Integer id;
    public String foodName;
    public int calorieValue;
    public Double price;
    public User createdBy;
    public String createdAt;

    public FoodEntry(Integer id, String foodName, int calorieValue, Double price, User createdBy, String createdAt) {
        this.id = id;
        this.foodName = foodName;
        this.calorieValue = calorieValue;
        this.price = price;
        this.createdBy = createdBy;
        this.createdAt = createdAt;
    }
}
