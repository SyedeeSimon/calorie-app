package com.syedee.graphqlbackend.database;

public class DailyCalorie {
    public String date;
    public int value;
    public User user;

    public DailyCalorie(String date, int value, User user) {
        this.date = date;
        this.value = value;
        this.user = user;
    }
}
