'use strict';

const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config); //takes config as argument and ties together

const userName = "'; DROP TABLE users; -- ";

// const sql = knex('movies').toString();
const sql = knex('users').where('name', userName).toString();

knex('movies')
  .select('title', 'id', 'score')
  .orderBy('score').first()
  .then((result) => {
    console.log(result);
    knex.destroy();
  })
.catch((err) => {
  console.error(err);
  knex.destroy();
  process.exit(1);
});

// console.log(sql);
