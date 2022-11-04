package com.syedee.graphqlbackend.main;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.time.Duration;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;
import java.util.Random;

class Food {
    String name;
    int cal;
    double price;

    public static Food of(String name, int cal, double price) {
        Food food = new Food();
        food.name = name;
        food.price = price;
        food.cal = cal;
        return food;
    }
}

public class Main {

    static Random rand = new Random();

    static Food[] meats = new Food[]{
            Food.of("Turkey", 400, 9),
            Food.of("Ostrich", 750, 17),
            Food.of("Chicken", 450, 9),
            Food.of("Duck", 600, 14),
            Food.of("Beef", 750, 12),
    };

    static Food[] fish = new Food[]{
            Food.of("Crap", 700, 22),
            Food.of("Salmon", 200, 20),
            Food.of("Red Snapper", 450, 11),
            Food.of("Sardines", 250, 8),
            Food.of("Sea Bass", 30, 7),
            Food.of("Prawn", 750, 15),
            Food.of("Tuna", 450, 20),
            Food.of("Squid", 600, 15),
            Food.of("Lobster", 320, 25),
    };

    static Food[] fruits = new Food[]{
            Food.of("Apple", 100, 6),
            Food.of("Banana", 80, 5),
            Food.of("Avocado", 450, 3),
            Food.of("Blackberries", 40, 2.5),
            Food.of("Mango", 200, 10),
            Food.of("Grapes", 250, 6),
            Food.of("Guava", 30, 3),
            Food.of("Jackfruit", 180, 9),
    };

    static Food[] drinks = new Food[]{
            Food.of("Coke", 300, 3),
            Food.of("Seven up", 350, 2.5),
            Food.of("Pepsi", 450, 3),
            Food.of("Mountain dew", 250, 1.5),
            Food.of("Sprite", 250, 2),
            Food.of("Fanta", 250, 1.5),
            Food.of("Diet Coke", 150, 3.5)
    };

    static Food[] fastfoods = new Food[]{
            Food.of("Burger", 900, 7),
            Food.of("Pizza", 1110, 15),
            Food.of("Kebab", 1400, 25),
            Food.of("Fish and chips", 700, 8),
            Food.of("Lasagna", 1000, 13),
    };

    static String sqltemplate = "INSERT INTO postgres.food_entries (food_name, calorie_value, price, created_by, created_at) VALUES ('%s', %d, %f, %d, '%s'); \n";

    private static final Instant START = Instant.parse("2021-01-01T00:00:00.000000Z");

    private static final Instant END = Instant.parse("2022-07-03T00:00:00.000000Z");


    public static void main(String[] args) throws IOException {

        File file = new File("dummy-data.txt");
        file.createNewFile();
        FileWriter writer = new FileWriter("dummy-data.txt");

        var current = START;
        while (current.isBefore(END)) {

            var i = rand.nextInt(6) + 1;
            var breakfast = current.plus(Duration.ofHours(1));
            var lunch = current.plus(Duration.ofHours(6));
            var fruit = current.plus(Duration.ofHours(10));
            var junk = current.plus(Duration.ofHours(15));
            printFood(getRandom(fish), breakfast, i, writer);
            printFood(getRandom(meats), lunch, i, writer);
            printFood(getRandom(fruits), fruit, i, writer);
            if (rand.nextInt(3) == 0) {
                printFood(getRandom(fastfoods), junk, i, writer);
                printFood(getRandom(drinks), junk, i, writer);
            }
            writer.flush();
            current = current.plus(Duration.ofDays(1));
        }
        writer.close();
    }

    static void printFood(Food food, Instant time, int userid, FileWriter writer) throws IOException {
        writer.write(String.format(sqltemplate, food.name, food.cal, food.price, userid, time(time)));
    }

    static String time(Instant time) {
        var v = LocalDateTime.ofInstant(time, ZoneId.of("UTC"));
        return String.format("%d-%02d-%02d %02d:%02d", v.getYear(), v.getMonthValue(), v.getDayOfMonth(), v.getHour(), v.getMinute());
    }

    static Food getRandom(Food[] list) {
        int index = rand.nextInt(list.length);
        return list[index];
    }

}
