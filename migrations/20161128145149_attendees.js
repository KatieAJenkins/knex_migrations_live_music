'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('attendees' , function(table){
    //id
    table.increments();
    //concert_id
    table.integer('concert_id').notNullable().references('id').inTable('concerts').onDelete('cascade');
    //name
    table.string('name');
    //age
    table.integer('age');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('attendees');
};
