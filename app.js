const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const request = require('request');
const path = require('path');

//NO FILTER added as we want to apply this function 
//on all incoming requests
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//Get our API routes
const api = require('./server/api');

// Set our api routes
//app.use('/api', api);


app.get("/api/flickr-photos", (req, res, next) => {
    const mybody = req.body;
    console.log(mybody);
    //const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
    var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne";
    flickrAPI = flickrAPI + "?nojsoncallback=1"
        //+ "&tags=" + encodeURIComponent($scope.serchTextTags)
        //+ "&tagmode=" + $scope.mode
        + "&format=json";
      
    request(flickrAPI, { json: true }, (err, httpResponse, body) => {
       
        if (err) { return console.log(err); }
        //console.log(body.url);
        //console.log(body.explanation);
        console.log('------------------------------');
        //JSON_CALLBACK(httpResponse.body);
        console.log(httpResponse.body);

        res.status(200).json({
            message: "Posts fetched succesfully!",
            data: httpResponse.body
        });
        console.log('test A');
    });
    // res.status(200).json({
    //     message: "Posts fetched succesfully!",
    //     posts: {}
    // });
});

app.get("/api/flickr-photos-search/:searchtext", (req, res, next) => {
    const mybody = req.body;
    const searchText =  req.params.searchtext;
    
    var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne";
    flickrAPI = flickrAPI + "?nojsoncallback=1"
        + "&tags=" + encodeURIComponent(searchText)
        + "&tagmode=All" 
        + "&format=json";
        
      
    request(flickrAPI, { json: true }, (err, httpResponse, body) => {
       
        if (err) { return console.log(err); }

        console.log('****************************');
        //JSON_CALLBACK(httpResponse.body);
        console.log(httpResponse.body);

        res.status(200).json({
            message: "Posts fetched succesfully!",
            data: httpResponse.body
        });
        console.log('test B');
    });
});

// // Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/flicker-with-angular2')));

//Catch all other routes and return the index file
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname , 'dist/flicker-with-angular2/index.html'));
});
module.exports = app;
