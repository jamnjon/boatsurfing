# Schema Information

## lakes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
state       | text      | not null

## hosts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
lake        | string    | not null
time        | string    | not null
date        | string    | not null
boat_type   | string    | not null
activity    | string    | not null

## travellers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
lake        | string    | not null
time        | string    | not null
date        | string    | not null
activity    | string    | not null


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
average_rating  | float     | not null, primary key
num_ratings     | integer   | not null, primary key
