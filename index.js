const axios = require('axios');
const request = require('request');

const getRandomCNJoke = async (callback) => {
  const url = 'http://api.icndb.com/jokes/random?limitTo=[nerdy]';
  const response = await axios.get(url);
  callback(response.data.value.joke);
};

const getCustomJoke = async (firstName, lastName, callback) => {
  const url = `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]`;
  try {
    const response = await axios.get(url);
    callback(response.data.value.joke);
  } catch (error) {
    console.error(error);
  }
};

const getRandomDadJoke = (joke) => {
  const options = {
    url: 'https://icanhazdadjoke.com/',
    headers: {
      Accept: 'application/json',
    },
  };
  request(options, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const dataJSON = JSON.parse(body);
      joke(dataJSON.joke);
    }
  });
};

const getRandomJokeOfTheDay = async (category, callback) => {
  let query = '';
  if (category) query += `?category=${category}`;
  const url = `https://api.jokes.one/jod${query}`;
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  try {
    const response = await axios.get(url, config);
    callback(response.data.contents.jokes[0].joke.text);
  } catch (error) {
    console.log('Sorry, Free limit Exceeded!');
    console.log(error);
  }
};

exports.getRandomDadJoke = getRandomDadJoke;
exports.getRandomCNJoke = getRandomCNJoke;
exports.getCustomJoke = getCustomJoke;
exports.getRandomJokeOfTheDay = getRandomJokeOfTheDay;
