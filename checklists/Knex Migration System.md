# Knex Migration System

1. Make directory for project

   ```
   take directory_name
   ```

2. Initialize

   ```
   git init
   npm install --save npm
   npm install --save pg knex
   npm install -g knex
   ```

3. git Ignore Files (private files have . at the beginning)

   ```
   touch .gitignore
   ```

4. Open file and add

   ```
   node_modules
   ```

5. ```
   touch knexfile.js
   ```

6. Open knexfile.js and add:

   ```
   'use strict';

   module.exports = {
     development: {	//only being used for development
       client: 'pg',	//database client being used here (postgresql)
       connection: 'postgres://localhost/trail_conditions' //:db to connectwhat// host name/db name
     }
   };
   ```

   ​

7. Create database in terminal

   ```
   createdb trail_conditions
   ```

8. Confirm db was created

   ```
   psql
   \l    //see database in list
   ```

   ​

9. Create first migration - creates new migration folder called _migrations_ - green message Created Migration

   1. Time stamp included in migration file name

   ```
   knex migrate:make trails
   ```

10. Open migration file to start making tables

   1. List out columns needed in file (//id)
      1. schema = method in knex to create and drop table
   2. Type return knex.schema.createTable('name of table', function(table) { //table passed into function is table created from knex.schema.createTable method})
      1. **if you forget _return_ statement, you will get an error _Already up to date_
      2. Need to drop & recreate database to resolve:
         1. cd to the database directory
         2. dropdb trail_conditions
         3. created trail_conditions


    3. Create drop table code

    4. For each column to create, think about **data type needed** and create a table:

       ​	id = table.increments();

       **table.data type of column. ('column name');**

    ​```
    'use strict';
    
    exports.up = function(knex, Promise) {
    	return knex.schema.createTable('trails', function(table) {
        //id
        table.increments();
        //name
        table.string('name');
        //length
        table.decimal('length' , 5 , 2);
        //elevation_gain
        table.integer('elevation_gain');
    	});
    };
    
    exports.down = function(knex, Promise) {
      return knex.schema.dropTable('trails');
    };
    ​```
    
    ​

11.  Run Migration

    ```
    knex migrate:latest
    ```

    Should see this if successful:

    ```
    knex_migrations_trail_conditions|master ⇒ knex migrate:latest
    Using environment: development
    (node:7437) DeprecationWarning: Using Buffer without `new` will soon stop working. Use `new Buffer()`, or preferably `Buffer.from()`, `Buffer.allocUnsafe()` or `Buffer.alloc()` instead.
    Batch 1 run: 1 migrations //can run multiple migration batches
    /Users/kind2karma/gschool/Q2/knex_migrations/knex_migrations_trail_conditions/migrations/20161128103521_trails.js
    ```

    ​

12.  Check database to make sure table was made - open new tab in Terminal for psql commands

    ```
    psql trail_conditions
    trail_conditions=# \dt

    knex_migrations_trail_conditions|master⚡ ⇒ psql trail_conditions
    psql (9.5.5)
    Type "help" for help.

    trail_conditions=# trail_conditions=# \dt
                     List of relations
     Schema |         Name         | Type  |   Owner    
    --------+----------------------+-------+------------
     public | knex_migrations      | table | kind2karma
     public | knex_migrations_lock | table | kind2karma
     public | trails               | table | kind2karma
    (3 rows)

    trail_conditions-# 
    ```

13.  Create seed file - name same name as migration file - will also create folder in directory called _seeds_

    ```
    knex seed:make trails

    knex_migrations_trail_conditions|master⚡ ⇒ knex seed:make trails
    Using environment: development
    (node:7510) DeprecationWarning: Using Buffer without `new` will soon stop working. Use `new Buffer()`, or preferably `Buffer.from()`, `Buffer.allocUnsafe()` or `Buffer.alloc()` instead.
    Created seed file: /Users/kind2karma/gschool/Q2/knex_migrations/knex_migrations_trail_conditions/seeds/trails.js
    ```

    ​

14.  Split screen in Atom (seed on left, migration on right)

15.  Open boiler plate code in Atom on seed file

16.  Rename seed files in order that they reference each other (primary key file first, then foreign key files):

    1. Example
       1. 01_trails.js
       2. 02_runners.js
       3. 03_conditions.js

17.  Modify table name:

    ```
      return knex('table_name').del() // add what table to insert and delete from
    ```

18.  Continue building out seed file

    ```
        .then(function () {
          return Promise.all([
            // Inserts seed entries
            knex('table_name').insert({id: 1, colName: 'rowValue1'}),
    ```

    Example

    ```
        .then(function () {
          return Promise.all([
            // Inserts seed entries
            knex('trails').insert({
          	  id: 1, //must add id to keep same id otherwise will restart numbering on 					next seed
          	  		//TO DO//look up code to include in seed to recreate serial numbers
              name: 'Mount Sanitas',
              length: 3.4,
              elevation_gain: 1700
          }),
          ]);
        });
    ```

    ​

19.  Run seed file - **run in alphabetical order which can cause some issues!**

    ```
    knex seed:make trails
    ```

    Successful Message:

    ```
    knex_migrations_trail_conditions|master⚡ ⇒ knex seed:run
    Using environment: development
    (node:7667) DeprecationWarning: Using Buffer without `new` will soon stop working. Use `new Buffer()`, or preferably `Buffer.from()`, `Buffer.allocUnsafe()` or `Buffer.alloc()` instead.
    Ran 1 seed files 
    /Users/kind2karma/gschool/Q2/knex_migrations/knex_migrations_trail_conditions/seeds/trails.js
    ```

    Check database in terminal by connecting and SELECT * FROM table_name;

    ```
    kind2karma=# \c trail_conditions 
    You are now connected to database "trail_conditions" as user "kind2karma".
    trail_conditions=# SELECT * FROM trails;
     id |     name      | length | elevation_gain 
    ----+---------------+--------+----------------
      1 | Mount Sanitas |   3.40 |           1700
    (1 row)
    ```



## Rollback Migration

* Delete table we just migrated to - will delete table

  ```
  knex migrate:rollback
  ```

  Success Message:

  ```
  knex_migrations_trail_conditions|master⚡ ⇒ knex migrate:rollback
  Using environment: development
  (node:7835) DeprecationWarning: Using Buffer without `new` will soon stop working. Use `new Buffer()`, or preferably `Buffer.from()`, `Buffer.allocUnsafe()` or `Buffer.alloc()` instead.
  Batch 1 rolled back: 1 migrations 
  /Users/kind2karma/gschool/Q2/knex_migrations/knex_migrations_trail_conditions/migrations/20161128103521_trails.js
  ```

  ​

## ReMigrate

```
knex_migrations_trail_conditions|master⚡ ⇒ knex migrate:latest
Using environment: development
(node:7868) DeprecationWarning: Using Buffer without `new` will soon stop working. Use `new Buffer()`, or preferably `Buffer.from()`, `Buffer.allocUnsafe()` or `Buffer.alloc()` instead.
Batch 1 run: 1 migrations 
/Users/kind2karma/gschool/Q2/knex_migrations/knex_migrations_trail_conditions/migrations/20161128103521_trails.js

knex_migrations_trail_conditions|master⚡ ⇒ knex seed:run
Using environment: development
(node:7882) DeprecationWarning: Using Buffer without `new` will soon stop working. Use `new Buffer()`, or preferably `Buffer.from()`, `Buffer.allocUnsafe()` or `Buffer.alloc()` instead.
Ran 1 seed files 
/Users/kind2karma/gschool/Q2/knex_migrations/knex_migrations_trail_conditions/seeds/trails.js
```

```
knex_migrations_trail_conditions|master⚡ ⇒ psql
psql (9.5.5)
Type "help" for help.

kind2karma=# \c trail_conditions 
You are now connected to database "trail_conditions" as user "kind2karma".
trail_conditions=# \dt
                 List of relations
 Schema |         Name         | Type  |   Owner    
--------+----------------------+-------+------------
 public | knex_migrations      | table | kind2karma
 public | knex_migrations_lock | table | kind2karma
 public | trails               | table | kind2karma
(3 rows)

trail_conditions=# SELECT * FROM trails;
 id |     name      | length | elevation_gain 
----+---------------+--------+----------------
  1 | Mount Sanitas |   3.40 |           1700
(1 row)

trail_conditions=# 
```



## Create Additional Migrations

1. Create migrate and seed files in terminal

```
knex_migrations_trail_conditions|master⚡ ⇒ knex migrate:make runners
Using environment: development
(node:7931) DeprecationWarning: Using Buffer without `new` will soon stop working. Use `new Buffer()`, or preferably `Buffer.from()`, `Buffer.allocUnsafe()` or `Buffer.alloc()` instead.
Created Migration: /Users/kind2karma/gschool/Q2/knex_migrations/knex_migrations_trail_conditions/migrations/20161128111707_runners.js

knex_migrations_trail_conditions|master⚡ ⇒ knex seed:make runners
Using environment: development
(node:7948) DeprecationWarning: Using Buffer without `new` will soon stop working. Use `new Buffer()`, or preferably `Buffer.from()`, `Buffer.allocUnsafe()` or `Buffer.alloc()` instead.
Created seed file: /Users/kind2karma/gschool/Q2/knex_migrations/knex_migrations_trail_conditions/seeds/runners.js
```

2. Create new migration file

3. Run migration

4. Should see this - **notice Batch 2**

   ```
   knex_migrations_trail_conditions|master⚡ ⇒ knex migrate:latest
   Using environment: development
   (node:8000) DeprecationWarning: Using Buffer without `new` will soon stop working. Use `new Buffer()`, or preferably `Buffer.from()`, `Buffer.allocUnsafe()` or `Buffer.alloc()` instead.
   Batch 2 run: 1 migrations 
   /Users/kind2karma/gschool/Q2/knex_migrations/knex_migrations_trail_conditions/migrations/20161128111707_runners.js
   ```

   ​

5. Fill in seed file

6. Run seed file

7. Confirm data is in table

## Foreign Keys referencing Primary Keys

1. Add foreign keys with constraints:
   1. Name the column based on the table name - singular (trail_id)
   2. Add .notNullable() - constraint that data cannot be NULL
   3. Add .reference('primary key id')
   4. Add .onDelete('cascade') - any conditions referencing this table are also deleted

```
'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('conditions', function(table){
    table.increments();
    //trail id 	 table.integer('trail_id').notNullable().references('id').inTable('trails').onDelete('cascade'); 
    //runner id table.integer('runner_id').notNullable().references('id').inTable('runners').onDelete('cascade'); //foreign key
  })
};

exports.down = function(knex, Promise) {

};
```



## Timestamps

* table.timestamps(true, true)
  * Will create **created_at** column AND **updated_at** column
* Can manually update by adding a **created_at: **column, copy timestamp syntax, and fill in with new timestamp manually
  * data type = string!

## Changing Schema on Table

1. Create a new migration file

   ```
   knex make migration:trails
   ```

2. Will run latest timestamp last - so will run your new migration file at the end

3. Keep old migration file in folder

   ​

## Alter Statements

Teddi Maull [11/28/2016 11:11 AM]  
TIP: Postgres keeps track of the sequences for any of the incrementing serial id columns in its tables. Doing a describe on a table will show the name of the sequence it is using in the modifiers column. When data is inserted with the id hardcoded, which is often desirable with test data, the sequence will not be aware of this. So, it's important to advance the sequence to the last id. An example alter statement to do this would be:

```knex.raw(&quot;SELECT setval(&#39;books_id_seq&#39;, (SELECT MAX(id) FROM books))&quot;)
knex.raw("SELECT setval('books_id_seq', (SELECT MAX(id) FROM books))")
```