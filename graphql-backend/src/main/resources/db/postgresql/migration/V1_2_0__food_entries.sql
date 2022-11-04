CREATE TABLE IF NOT EXISTS food_entries (
    id SERIAL PRIMARY KEY,
    food_name VARCHAR(64) NOT NULL,
    calorie_value integer NOT NULL,
    price double precision DEFAULT 0.0,
    created_by integer not null,
    created_at timestamp DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX created_at_created_by_food_name_index ON food_entries (created_at, id);
