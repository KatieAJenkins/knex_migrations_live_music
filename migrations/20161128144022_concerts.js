'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('concerts' , function(table) {
    //id
    table.increments();
    //name
    table.string('name');
    //price
    table.decimal('price', 4, 2);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('concerts');
};
