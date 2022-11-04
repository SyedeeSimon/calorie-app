package com.syedee.graphqlbackend.database;

public class MonthlyExpense {
    public String monthAndYear;
    public double value;

    public MonthlyExpense(String monthAndYear, double value) {
        this.monthAndYear = monthAndYear;
        this.value = value;
    }
}
