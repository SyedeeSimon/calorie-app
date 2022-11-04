CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(16) UNIQUE NOT NULL,
    daily_calorie_limit integer NOT NULL,
    monthly_expense_limit double precision,
    password VARCHAR(512) NOT NULL,
    role VARCHAR(8) NOT NULL default 'USER'
);

CREATE INDEX name_index ON users USING HASH (name);