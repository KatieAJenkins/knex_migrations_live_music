# To Set Up Database

**Step 1 - Brainstorm**

* Draw out data and information on whiteboard
* List out columns of information you'd like to collect in your database

**Step 2 - Create an ERD (Entity Relationship Diagram)**

* This example can be represented in 3 tables:
  * One trail could have many conditions
  * One runner might post many conditions
  * A trail condition can be connected to only one trail
  * A trail condition can have only runner who posted it
  * No direct relationship between trails and runners exists

```
┌──────────────┐       ┌───────────-──────┐       ┌──────────────┐
│              │      ╱│                  │╲      │              │
│    trails    │───────│ trail conditions │────--─│    runners   │
│              │      ╲│                  │╱      │              │
└──────────────┘       └────────────-─────┘       └──────────────┘


```

Following is an ERD to represent the relationship between trails and trail conditions:

```
┌──────────────┐       ┌──────────────┐
│    trails    │       │    trail     |
│              |       |  conditions  |
│──────────────│       │──────────────│
│ id           │       │ id           │
│ name         │       │ trail_id     │
│ length       │      ╱│ user_id      │
│ elev_gain    │───────│ condition    │
│              │      ╲│ creation_date│
└──────────────┘       └──────────────┘
```

**Step 3 - Create a Migration File**

* Choose data types for column carefully
* Choose column names carefully

**Step 4 - Create a Seed File**

**Step 5 - Hook it up to Knex.js**

**Step 6 - Query the Database**

* select rows
* insert rows
* update rows
* delete rows

# PostgreSQL

* PostgreSQL (PSQL) works with SQL to build tables and databases as well as query databases on a Postgres server. It's a RDMS (Relational Data Management System).

1. Navigate to database directory

2. Type **psql** to get into PostgreSQL

3. **\l** to list out all databases associated with a user

   ![user_databases](/screenshots/user_databases.png)

4. **\q** to quit the program or **q** to exit current screen

5. **\c** to connect to a database

   ![user_databases](/screenshots/database_tables.png)

6. **\d** to list all tables in database inc all table_id_seq tables (automatically created)

   1. **\dt** will show all tables schema in database
   2. **\d table_name** will show table with data types and constraints

# Joining Tables

* To confirm tables join:
  * Ensure the foreign table to join to has an additional column: primary_table_name_id (ex. Foreign = towns; Primary = countries; Towns table = country_id field)
  * Run the following SQL code and confirm expected results of query:

```
SELECT table1.name , table2.name
FROM table1
JOIN table2 ON table1.table2_id_field_name = table2.id;
```



# Knex.js

* See co_ghost_towns repo in GitHub

![knex_postgres](/screenshots/knex_postgres.png)



* Setup a new database in terminal

  ```
  dropdb database_name
  createdb database_name
  ```

* Setup new node.js project that connects to db created above

  ```terminal
  take directory_name
  npm init
  npm install --save pg //save postgres
  npm install --save knex //save knex
  touch knexfile.js
  touch index.js
  ```

* In knexfile.js file

  ```terminal
  module.exports = {
    development: {
      client: 'pg', //postgres is client
      connection: 'postgres://localhost/database_name'
    }
  };
  ```

* In index.js file

  * See [this](http://knexjs.org/#Installation-pooling) on knex = require('knex (config)')

  ```
  'use strict';

  const env = 'development'; //enironment name, also 'staging'
  const config = require('./knexfile.js')[env];
  const knex = require('knex')(config); //opens 2 port connections

  const sql = knex('directory_name').toString(); //builds SQL select cmd & returns as 												String to send SQL query to 														PostreSQL server

  console.log(sql);

  knex.destroy(); //to terminate program
  ```

* In shell terminal from directory, run

  ```knex
  node index.js
  ```

* Should see the following message:

![node_knex](/screenshots/node_knex.png)


* Set up **promises** - a callback not executed yet:

  ```
  knex('towns' , 'countries') //**checking on this syntax for multiple files**//
  .then((result) => {
    console.log(result);
    knex.destroy();
  })

  .catch ((err) => {
    console.error(err);
    knex.destroy();
    process.exit(1);
  });
  ```

* Run to confirm data pulls back as expected

  ```
  node index.js
  ```

* Add feature to prevent SQL injection attacks (escape special characters an user may enter into a website, accidently or purposefully attacking the system

  ```
  const sql = knex('users').where('name' , userName).toString(); //checking on this//
  ```

* Code should look like this: //**RESEARCH How to set up joins!!**//

  ```
  'use strict';

  const env = 'development';
  const config = require('./knexfile.js')[env];
  const knex = require('knex')(config);

  ///////promises///////
  knex('towns')
  .join ('counties', 'towns.county_id', '=' , 'counties.id')
  .select ('towns.name' ,'counties.name') //** checking on**// Enter query code here
  .then((result) => {
    console.log(result);
    knex.destroy();
  })

  .catch ((err) => {
    console.error(err);
    knex.destroy();
    process.exit(1);
  });
  ```

# Querying Databases

* select()

  ```
  .select('id', 'name')
  ```

* where()

  ```
  .select ('id' ,'name', 'county_id')
  .where ('id' , 4)
  ```

  ```
  .where ('date_est' , '>=' , 1890)
  ```

  ```
  .where ('date_est' , '<=' , 1890)
  .where ('county_id', '=' , 2)
  ```

  ```
  .where ('date_est' , '<=' , 1890)
  .where ({county_id: 2, gold_found: true})
  ```

  ```
  .where ('date_est' , '<=' , 1890)
  .where ({county_id: 2, gold_found: true})
  .orWhere ('tour' , false)
  ```

* orderBy()

  ```
  .select ('id' ,'name', 'county_id')
  .where ('date_est' , '<=' , 1890)
  .orderBy('name' , 'DESC') //or 'ASC'
  ```

  ​

* limit()

```
.select ('id' ,'name', 'county_id')
.where ('date_est' , '<=' , 1890)
.orderBy('name' , 'DESC')
.limit(1)
```



# Manipulate Databases 

* insert() with * to pass in columns in a row when inserting data

  ```
  .insert({
    name: 'TESTING',
    date_est: 2016,
    date_abnd: null,
    why_abnd: null,
    county_id: 2,
    elevation: 5280,
    cemetery: 'FALSE',
    gold_found: 'TRUE',
    tour: 'FALSE',
    date_visited: null
  } , '*')

  .then...
  .catch...
  ```

* update() with * to pass in all data —> will see "1" in terminal when node index.js is ran

  ```
  .update ({
    name: 'TESTING UPDATE'
  } , '*')
  .where('id' , 14)
  ```

* delete() —> will see "1" in terminal if successful

```
.delete()
.where ('id' , 14)
```



# SQL to Knex

```
SELECT * FROM students WHERE id = 1;

knex('students')
  .select('id' , 1);
```

```
SELECT * FROM students WHERE gpa = 3 LIMIT 1;

knex('students')
  .select('id' , 1)
  .where ('gpa', 3)
  .limit(1);
```

```
SELECT COUNT(*) students;

knex('students')
  .count()
```

```
SELECT MAX('gpa') FROM students;

knex('students')
  .max('gpa')
```

```
SELECT * FROM students WHERE name IS NOT NULL;

knex('students')
  .whereNotNull('name');
```

```
SELECT * FROM students WHERE id IN (1, 2, 3) OR gpa IN (3, 4);

knex('students')
  .whereIn('id', [1,2,3])
  .orWhereIn('gpa', [3,4]);
```

```
SELECT * FROM students LIMIT 10 OFFSET 30;

knex('students')
  .limit(10)
  .offset(30);
```

```
INSERT INTO students (name, fav_color) VALUES ('Prince', 'purple');

knex('students')
  .insert ({
    name: 'Prince',
    fav_color: 'purple'
  });
```

```
INSERT INTO students (name, fav_color) VALUES ('Liz', 'blue') RETURNING *;

knex('students')
  .insert({
    name: 'Liz',
    fav_color: 'blue'
  }, '*');
```

```
UPDATE students SET name = 'Cho' WHERE id = 5;

knex('students')
  .update ({
    name: 'Cho'
  })
  .where ('id' , 5);
```

```
DELETE FROM students WHERE gpa = 0;

knex('students')
  .delete ()
  .where('gpa', 0);
```

```
UPDATE students SET gpa = gpa + 1 WHERE id = 4;

knex('students')
  .update ({
    gpa: 'gpa + 1'
  })
  .where ('id' , 4);
```

```
SELECT * FROM students INNER JOIN homeworks ON homeworks.student_id = students.id;

knex.from('students').innerJoin('homeworks', 'homeworks.student_id = student.id');
```

```
SELECT DISTINCT students.name, homework.title, grades.score
FROM students
INNER JOIN homeworks ON homeworks.student_id = students.id
INNER JOIN grades ON grades.id = homeworks.grade_id
WHERE grades.score > 3;

knex('students')
  .distinct ('students.name' , 'homework.title' ,'grades.score')
  .innerJoin ('homeworks' , 'homeworks.student_id = students_id')
  .innerJoin('grades', 'grades.id = homeworks.grade_id')
  .where ('grades.score' , '>' , 3);
```

