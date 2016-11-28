'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('concerts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('concerts').insert({
          id: 1,
          name: 'Capitol Hill Block Party 2016',
          price: 49.99
        }),
        knex('concerts').insert({
          id: 2,
          name: 'Bumbershoot 2016',
          price: 64.99
        })
      ]);
    });
};
