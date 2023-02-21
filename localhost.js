var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mysql = require("mysql");

app.use(bodyParser.json());

var connection = mysql.createConnection({
  host: "localhost",
  user: "Tomatkostymen",
  password: "Lukas.kattson1",
  database: "localdb"
});

connection.connect(function(err) {
  if (err) {
    console.error("Error connecting to database: " + err.stack);
    return;
  }
  console.log("Connected to database as id " + connection.threadId);
});

app.post("/api/comments", function(req, res) {
  var comment = req.body;
  var query = `INSERT INTO comments (content, author, post_id) 
               VALUES ('${comment.content}', '${comment.author}', ${comment.postId})`;

  connection.query(query, function(err, result) {
    if (err) {
      console.error("Error inserting comment: " + err.stack);
      res.sendStatus(500);
      return;
    }
    res.sendStatus(200);
  });
});

app.listen(3000, function() {
  console.log("API listening on port 3000!");
});
