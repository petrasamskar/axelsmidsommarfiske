 // set up ========================
    var express  = require('express');
    var app      = express();                              // create our app w/ express
    
    var mongoose = require('mongoose');                     // mongoose for mongodb
    var morgan = require('morgan');             // log requests to the console (express4)
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
//    var glob = require('glob-fs')({ gitignore: true });
    var fs = require('fs');
    var path = require('path');




    // configuration =================

    mongoose.connect('mongodb://localhost/midsummer');     // connect to mongoDB database on modulus.io

    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());



    // define model =================
    var Participant = mongoose.model('participant', {
        year : String,
        place : Number,
        name : String,
        score : Number
    });

    // routes ======================================================================

    // api ---------------------------------------------------------------------
     app.get('/api/years', function(req, res) {

        Participant.find().distinct('year', function(err, years) {
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)
            //TODO det behöver inte vara lagrat reverse, man skulle vilja sortera istället
            res.json(years.sort().reverse()); // return all years in JSON format
            //res.json(years);
            console.log(years);
        });



    });

    // get all participants
    app.get('/api/participants', function(req, res) {

        // use mongoose to get all participants in the database
        console.log(req.query.year);
        //find all participants per year, sort by place
        Participant.find({year:req.query.year}, null, {sort: {place: 1}}, function(err, participants) {
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(participants); // return all participants in JSON format
        });
    });

    //get all images
    app.get('/api/images', function(req, res) {
        fs.readdir('./public/fishingimages', function(err, files) {
            if (err) 
                res.send(err);
            
           res.json(files); 
        });


    });

    //delete a specific participant/score by id
    app.delete('/api/participant/:scoreId', function (req, res) {
/*
    if (!auth.isValidUser(req.user.userName, req.user.password)) {
        res.status(401).end();
    };
*/
        Participant.findByIdAndRemove(req.params.scoreId, function (err) {
            if (err) res.status(400).end();
            res.send();
        });
    });

    // create participant, get data from form
    app.post('/api/adscores', function(req, res) {
         var p = Participant({
                 year: req.body.year,
                 place: req.body.place, 
                 name: req.body.name,
                 score: req.body.score
             });
    
             p.save(function(err) {
                 //if (err) res.status(400).end();
                 //res.send(p);
             });


    });
    
    // listen (start app with node server.js) ======================================
    app.listen(8080);
    console.log("App listening on port 8080");
