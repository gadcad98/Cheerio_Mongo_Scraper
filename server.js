const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

// scraping tools
const axios = require("axios");
const cheerio = require("cheerio");

// require all Models
const db = require("./models");

const PORT = process.env.PORT || 3000;

// initialize express
const app = express();

// Configuring Middleware

// use morgan logger for logging requests
app.use(logger("dev"));
// use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// use express.static to serve the public folder as a static directory
app.use(express.static(__dirname + "public"));

// connnect to Mongo DB
mongoose.connect("");

// Routes

// GET route for scraping Sherdog
app.get("/scrape", function(req, res) {
    // grab the body of the html request
    axios.get("http://forums.sherdog.com/forums/ufc-discussion.2/").then(function(response) {
        // load that into cheerio and save it to $ for a shorthand selector
        const $ = cheerio.load(response.data);

        // Grab the titles
        $("h3 title").each(function(i, element) {
            // Save an empty result object
            const result = {};

            // 
        })
    });

});

app.listen(PORT, function(){
    console.log("listening on port: ", PORT);
});