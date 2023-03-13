const axios = require('axios');
const request = require('request');

exports.getRandomCNJoke = (joke) => {
  axios
    .get('https://api.chucknorris.io/jokes/random')
    .then((response) => {
      joke(response.data.value);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getCustomJoke = (firstName, lastName, joke) => {
  const fn = firstName;
  const ln = lastName;
  axios
    .get(`http://api.icndb.com/jokes/random?firstName=${fn}&lastName=${ln}&limitTo=[nerdy]`)
    .then((response) => {
      joke(response.data.value.joke);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getRandomDadJoke = function (joke) {
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

exports.getRandomJokeOfTheDay = (category, joke) => {
  let query = '';
  if (category) query += `?category=${category}`;

  const configJOD = {
    url: `https://api.jokes.one/jod${query}`,
    headers: {
      'Content-type': 'application/json',
    },
  };
  axios(configJOD)
    .then((response) => {
      joke(response.data.contents.jokes[0].joke.text);
    })
    .catch((err) => {
      console.log('Sorry, Free limit Exceeded!');
    });
};
