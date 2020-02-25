# give-me-a-joke
> A npm-module for random and customized jokes.

## Install

```
$ npm install --save give-me-a-joke
```

## Usage

```js
var giveMeAJoke = require('give-me-a-joke');

// To get a random dad joke
giveMeAJoke.getRandomDadJoke (function(joke) {
    //=> console.log(joke);
});

// To get a random Chuck Norris joke
giveMeAJoke.getRandomCNJoke (function(joke) {
    //=> console.log(joke);
});

// To get a customized joke
const fn = "Jim";
const ln = "Carrey";
giveMeAJoke.getCustomJoke (fn, ln, function(joke) {
    //=> console.log(joke);
});
```

## Contributing

I would love to have your help on this! Do check out the issues dashboard of this repository,
and submit a PR on any one of those issues, and I will be happy to merge! If there are no issues
on the dashboard, please do feel free to create new ones!

## License

MIT © [Saurabh Shubham](http://saurabhshubham.com)
