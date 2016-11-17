// Return the id, title, and score of the single lowest scoring movie in the table.


// Return the id, title, and duration of the "X-Men: Apocalypse" and "The Princess Bride" movies.

knex('movies')

  .select('id', 'title', 'duration')
  .where ('title', 'X-Men: Apocalypse')
  .orWhere('title', 'The Princess Bride')

// Return the id, title, and released_at all the movies ordered by from oldest to newest.


// Return the id, title, genre, and score of all of the PG movies that scored between 7.5 and 8.5


// Return the title, score, award_kind, and award_name of all movies ordered alphabetically by its title.


// Return the title, actor_name, role of "Pulp Fiction" ordered by youngest to oldest actors.
