const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Article = require('./models/Article.js');

const app = express();
const port = process.env.PORT || 8080;

app.set('port', port);
//Make this a static directory
app.use(express.static(path.join(__dirname, './dist')));

// Run Morgan for Logging and set up body-parser middleware
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//MongoDB Configuration
mongoose.connect('mongodb://localhost/nytreact');
var db = mongoose.connection;
//let us know if mongoose connection fails
db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});
//let us know if mongoose connection succeeds
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

//Main route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/app.html');
});

//Route Working; Tested with Postman
app.post('/article/add', (req, res) => {
  console.log(req.body);
  // let article = new Article(req.body);
  // article.save();
  Article.create(req.body, (err) => {
    if (err)
      console.log(err);
    else
      res.send("Article Saved.");
  });
})

app.listen(port, function() {
  //log to console that server is running
  console.log('App listening on port', port);
});
