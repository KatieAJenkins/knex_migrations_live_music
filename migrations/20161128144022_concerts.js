'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('concerts' , function(table) {
    //id
    table.increments() PRIMARY;
    //name
    table.string('name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('concerts');
};
