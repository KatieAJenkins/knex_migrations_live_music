'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('attendees').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('attendees').insert({
          id: 1,
          concert_id: 1,
          name: 'Daniel Bailey',
          age: 52
        }),
        knex('attendees').insert({
          id: 2,
          concert_id: 1,
          name: 'Heidi McGuire',
          age: 30
      })
    ]);
  });
};
