const fs = require('fs');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);

// const { COURSES } = require('./courses.data');
const { courses } = require('./courses.json');
const { users } = require('./users.json');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  next();
});

app.get('/courses', (req, res, next) => {
  if (req.query) {
    console.log('req', req.query);
    const { start, count } = req.query;
    const data = courses.slice(start, count);
    res.json(data);
  } else {
    res.end();
  }
});

app.get('/search', (req, res, next) => {
  if (req.query) {
    console.log('sear', req.query);
    const { searchTerm } = req.query;
    const data = courses.filter(
      el =>
        el.title.includes(searchTerm) || el.description.includes(searchTerm),
    );
    res.json(data);
  } else {
    res.end();
  }
});

app.get('/course', (req, res) => {
  if (req.query) {
    const id = +req.query.id;
    const data = courses.slice();
    const item = data.find(e => e.id === id);
    res.json(item);
  } else {
    res.end();
  }
});

app.post('/login', (req, res, next) => {
  console.log('wwwwwww', req.body);
  const { login, token } = req.body;
  const user = users.find(user => user.login === login);
  if (user) {
    // MUTATION!
    user.token = token;
    fs.writeFileSync(
      'src/server/users.json',
      JSON.stringify({ users }, null, 2),
    );
  }
  console.log('serv', user);
  res.json(user || {});
});

app.post('/delete', (req, res, next) => {
  const id = req.body && +req.body.id;
  const newCourses = courses.slice();
  const index = newCourses.findIndex(e => e.id === id);
  newCourses.splice(index, 1);

  if (newCourses && index) {
    // instead of DB
    fs.writeFileSync(
      'src/server/courses.json',
      JSON.stringify({ courses: newCourses }, null, 2),
    );
  }
  res.json(newCourses);
});

let lastId = courses.slice().reduce((acc, el) => {
  return el.id > acc ? el.id : acc;
}, 0);

console.log(lastId);

app.post('/add', (req, res, next) => {
  const id = ++lastId;
  const { course } = req.body;
  course.id = id;
  course.creationDate = new Date();
  course.topRated = false;
  console.log('eeeee', course);
  const newCourses = courses.slice();
  newCourses.push(course);
  if (newCourses) {
    // instead of DB
    fs.writeFileSync(
      'src/server/courses.json',
      JSON.stringify({ courses: newCourses }, null, 2),
    );
  }
  res.json(newCourses);
});

app.post('/login', (req, res, next) => {
  console.log('wwwwwww', req.body);
  const { login, token } = req.body;
  const user = users.find(user => user.login === login);
  if (user) {
    // MUTATION!
    user.token = token;
    fs.writeFileSync(
      'src/server/users.json',
      JSON.stringify({ users }, null, 2),
    );
  }
  console.log('serv', user);
  res.json(user || {});
});

/*
app.get(
  "/req/:data",
  (req, res, next) => {
    const query = req.params.data;
  }
);
https://manfredsteyer.github.io/angular-oauth2-oidc/docs/additional-documentation/working-with-httpinterceptors.html
 https://angular.io/guide/service-worker-intro
*/

function errorHandler(err, req, res, next) {
  console.error('error', err.message);

  res.status(500);
  res.send('error');
}

server.listen(3200, () => {
  let port = server.address().port;
  console.log(`The server works successfully on port ${port}`);
});
