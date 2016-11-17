SELECT * FROM students WHERE id = 1;

knex('students')
  .select('id' , 1);

SELECT * FROM students WHERE gpa = 3 LIMIT 1;

knex('students')
  .select('id' , 1)
  .where ('gpa', 3)
  .limit(1);

SELECT COUNT(*) students;

knex('students')
  .count()

SELECT MAX('gpa') FROM students;

knex('students')
  .max('gpa')

SELECT * FROM students WHERE name IS NOT NULL;

knex('students')
  .whereNotNull('name');

SELECT * FROM students WHERE id IN (1, 2, 3) OR gpa IN (3, 4);

knex('students')
  .whereIn('id', [1,2,3])
  .orWhereIn('gpa', [3,4]);


SELECT * FROM students LIMIT 10 OFFSET 30;

knex('students')
  .limit(10)
  .offset(30);


INSERT INTO students (name, fav_color) VALUES ('Prince', 'purple');

knex('students')
  .insert ({
    name: 'Prince',
    fav_color: 'purple'
  });

INSERT INTO students (name, fav_color) VALUES ('Liz', 'blue') RETURNING *;

knex('students')
  .insert({
    name: 'Liz',
    fav_color: 'blue'
  }, '*');

UPDATE students SET name = 'Cho' WHERE id = 5;

knex('students')
  .update ({
    name: 'Cho'
  })
  .where ('id' , 5);

DELETE FROM students WHERE gpa = 0;

knex('students')
  .delete ()
  .where('gpa', 0);

UPDATE students SET gpa = gpa + 1 WHERE id = 4;

knex('students')
  .update ({
    gpa: 'gpa + 1'
  })
  .where ('id' , 4);

SELECT * FROM students INNER JOIN homeworks ON homeworks.student_id = students.id;

knex.from('students').innerJoin('homeworks', 'homeworks.student_id = student.id');





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
