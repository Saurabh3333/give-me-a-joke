var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

exports.getRandomCNJoke = function (joke) {
    request('http://api.icndb.com/jokes/random?limitTo=[nerdy]', function (error, response, body) {
        if(!error && response.statusCode === 200) {
            var dataJSON = JSON.parse(body);  
            joke(dataJSON.value.joke);
        }
    });    
}

exports.getCustomJoke = function (firstName, lastName, joke) {
    var fn = firstName;
    var ln = lastName;
    request('http://api.icndb.com/jokes/random?firstName=' + fn + '&lastName=' + ln + "&limitTo=[nerdy]", function (error, response, body) {
        if(!error && response.statusCode === 200) {
            var dataJSON = JSON.parse(body);  
            joke(dataJSON.value.joke);
        }
    });
}

exports.getRandomDadJoke = function (joke) {
    var options = {
        url: 'https://icanhazdadjoke.com/',
        headers: {
          'Accept': 'application/json'
        }
      };
    request(options, function (error, response, body) {
        if(!error && response.statusCode === 200) {
            var dataJSON = JSON.parse(body);
            joke(dataJSON.joke);
        }
    });   
}

exports.getRandomJokeOfTheDay = function (category, joke) {
    let query = ''
    if (category)
        query += `?category=${category}`

    var options = {
        url: `https://api.jokes.one/jod${query}`,
        headers: {
            'Content-type': 'application/json'
        }
    };
    request(options, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var dataJSON = JSON.parse(body);
            joke(dataJSON.contents.jokes[0].joke.text);
        } else {
            throw error
        }
    });
}
