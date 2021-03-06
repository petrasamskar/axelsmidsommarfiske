var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var fs = require("fs");
var path = require("path"); //behövs den??
var app = express();

app.use(express.static(path.join(__dirname, "/build")));

//now we should configure the API to use bodyParser and look for
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//now we can set the route path & initialize the API
// router.get("/", function(req, res) {
//   res.json({ message: "API Initialized!" });
// });
//Use our router configuration when we call /api
// app.use("/api", router);
//starts the server and listens for requests

// app.use(function(req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET,HEAD,OPTIONS,POST,PUT,DELETE"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
//   );

//   //and remove cacheing so we get the most recent comments
//   res.setHeader("Cache-Control", "no-cache");
//   next();
// });

// db ======================
//mongoose.connect('mongodb://localhost/midsummer');              // connect to mongoDB database
mongoose.connect(process.env.MONGODB_URI);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {});

// define model =================
var Participant = mongoose.model("participant", {
  year: String,
  place: Number,
  name: String,
  score: Number
});

// api =========================================

//will get all years sorted
app.get("/api/years", function(req, res) {
  Participant.find().distinct("year", function(err, years) {
    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    if (err) res.send(err);
    res.json(years.sort().reverse()); // return all years in JSON format
  });
});

//will get all participants for a specific year sorted
app.get("/api/competition", function(req, res) {
  Participant.find(
    { year: req.query.year },
    null,
    { sort: { place: 1 } },
    function(err, participants) {
      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err) res.send(err);
      res.json(participants); // return all participants in JSON format
    }
  );
});

//will return all winners and number of wins
app.get("/api/winners", function(req, res) {
  Participant.aggregate(
    [
      {
        $match: {
          place: 1
        }
      },
      {
        $group: {
          _id: "$name",
          total: { $sum: "$place" }
        }
      },
      { $sort: { total: -1, _id: 1 } }
    ],
    function(err, winners) {
      if (err) res.send(err);
      res.json(winners);
    }
  );
});

//will get all images from the folder
app.get("/api/images", function(req, res) {
  fs.readdir("./public/images/other", function(err, files) {
    if (err) res.send(err);
    res.json(files);
  });
});

//will create a new participant, gets data from form
app.post("/api/adscores", function(req, res) {
  var p = Participant({
    year: req.body.year,
    place: req.body.place,
    name: req.body.name,
    score: req.body.score
  });

  console.log(p);
  p.save(function(err) {
    if (err) res.status(400).end();
    res.send(p);
  });
});

//will delete a specific participant/score by id
app.delete("/api/participant/:scoreId", function(req, res) {
  console.log(req.params.scoreId);
  Participant.findByIdAndRemove(req.params.scoreId, function(err) {
    if (err) res.status(400).end();
    res.send();
  });
});

var port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
