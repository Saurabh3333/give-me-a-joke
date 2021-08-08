# give-me-a-joke

> A npm-module for random and customized jokes.

## Install

```
$ npm install --save give-me-a-joke
```

## Usage

```js
const giveMeAJoke = require('give-me-a-joke');

// To get a random dad joke
giveMeAJoke.getRandomDadJoke((joke) => {
  //=> console.log(joke);
});

// To get a random Chuck Norris joke
giveMeAJoke.getRandomCNJoke((joke) => {
  //=> console.log(joke);
});

// To get a customized joke
const fn = 'Jackie';
const ln = 'Chan';
giveMeAJoke.getCustomJoke(fn, ln, (joke) => {
  //=> console.log(joke);
});

// To get a random Joke of the Day (Categories allowed: "blonde", "knock-knock", "animal", "jod")
const category = 'blonde';
giveMeAJoke.getRandomJokeOfTheDay(category, (joke) => {
  // NOTE: The service provider has made the restriction of 5 calls an hour for RandomJokeOfTheDay
  //=> console.log(joke);
});
```

## Contributing

I would love to have your help on this! Do check out the issues dashboard of this repository,
and submit a PR on any one of those issues, and I will be happy to merge! If there are no issues
on the dashboard, please do feel free to create new ones!

## License

MIT © [Saurabh Shubham](https://saurabh3333.github.io/)
