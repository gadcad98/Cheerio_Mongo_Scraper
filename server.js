var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// craping tools
var axios = require("axios");
var cheerio = require("cheerio");

// require all Models
var db = require("./models");

var PORT = PORT;

// initialize express
var app = express();

// Configuring Middleware

// use morgan logger for logging requests
app.use(logger("dev"));
// use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// connnect to Mongo DB
mongoose.connect("");

// Routes

// a GET route for scraping the website
app.get("/scrape", function(req, res) {
    // grab the body of the html request
    axios.get("").then(function(response) {
        // load that into cheerio and save it to $ for a shorthand selector
        var $ = cheerio.load(response.data);

        
    })
})