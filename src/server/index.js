const fs = require('fs');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);

const { COURSES } = require('../app/courses/courses.mock');

// app.use(express.static("dist"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/c', (req, res, next) => {
  if (req) {
    console.log('kkkkk');
    res;
    res.json(COURSES);
  }
});

/*
app.get(
  "/req/:data",
  [
    sanitizeParam("data")
      .trim()
      .escape()
  ],
  controllers.retrieveKbspace,
  (req, res, next) => {
    const query = req.params.data;
    const kbspace = req.data.kbspace.title;

    axios
      .get(`${process.env.SEARCH_QUERY}?spaceKey=${kbspace}&query=${query}`, {
        headers: {
          Authorization: `Basic ${encoded}`,
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
      .then(response => {
        res.send(response.data.result);
      })
      .catch(error => {
        next(error);
      });
  }
);

router.use((req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    req.session.returnTo = req.path;
    res.redirect("/login");
  }
});




app.post("/admin/save", controllers.bodyError, (req, res, next) => {
  if (req.body.table === "card") {
    req.body.card = {
      id: req.body.id,
      title: req.body.title,
      icon: req.body.icon
    };
    controllers.updateCard(req, res, next);
  } else if (req.body.table === "admins") {
    controllers.updateAdmins(req, res, next);
  } else if (req.body.table === "links") {
    controllers.updateLinks(req, res, next);
  } else {
    res.end();
  }
});

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
