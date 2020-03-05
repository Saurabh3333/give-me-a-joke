const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

exports.getRandomCNJoke = function (joke) {
    request('http://api.icndb.com/jokes/random?limitTo=[nerdy]', function (error, response, body) {
        if(!error && response.statusCode === 200) {
            const dataJSON = JSON.parse(body);
            joke(dataJSON.value.joke);
        }
    });
}

exports.getCustomJoke = function (firstName, lastName, joke) {
    const fn = firstName;
    const ln = lastName;
    request('http://api.icndb.com/jokes/random?firstName=' + fn + '&lastName=' + ln + "&limitTo=[nerdy]", function (error, response, body) {
        if(!error && response.statusCode === 200) {
            const dataJSON = JSON.parse(body);
            joke(dataJSON.value.joke);
        }
    });
}

exports.getRandomDadJoke = function (joke) {
    const options = {
        url: 'https://icanhazdadjoke.com/',
        headers: {
            'Accept': 'application/json'
        }
    };
    request(options, function (error, response, body) {
        if(!error && response.statusCode === 200) {
            const dataJSON = JSON.parse(body);
            joke(dataJSON.joke);
        }
    });
}
