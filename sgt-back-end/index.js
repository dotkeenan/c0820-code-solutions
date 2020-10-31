const pg = require('pg');
const express = require('express');
const app = express();
const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});
const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select *
    from "grades";
  `;
  db.query(sql)
    .then(result => res.status(200).json(result.rows))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.post('/api/grades', (req, res, next) => {
  const { name, course, grade } = req.body;

  if (!name || !course | !Number.isInteger(grade)) {
    res.status(400).json({
      error: 'Name, Course and Grade field are required and Grade must be an integer'
    });
  }

  const sql = `
       insert into "grades" ("name", "course", "grade")
       values ($1, $2, $3)
    returning *;
  `;
  const params = [name, course, grade];

  db.query(sql, params)
    .then(result => res.status(201).json(result.rows))
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res, err) => {
  const { name, course, grade } = req.body;
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0 || !Number.isInteger(grade)) {
    return res.status(400).json({
      error: '"gradeId" and/or "grade" must be a positive integer'
    });
  }
  const sql = `
    update "grades"
       set "name" = $1,
           "course" = $2,
           "grade" = $3
     where "gradeId" = $4
     returning *;
  `;
  const params = [name, course, grade, gradeId];
  db.query(sql, params)
    .then(result => {
      const gradeIdParam = result.rows[0];
      if (!gradeIdParam) {
        return res.status(404).json({
          error: 'That "gradeId" does not exist'
        });
      }
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    return res.status(400).json({
      error: '"gradeId must be a positive integer'
    });
  }

  const sql = `
       delete from "grades"
        where "gradeId" = $1
    returning *;
  `;

  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      const gradeIdInput = result.rows[0];
      if (!gradeIdInput) {
        return res.status(404).json({
          error: 'That "gradeId" does not exist'
        });
      }
      res.status(204).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
