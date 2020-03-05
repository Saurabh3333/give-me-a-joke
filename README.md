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
var fn = "Jackie";
var ln = "Chan";
giveMeAJoke.getCustomJoke (fn, ln, function(joke) {
    //=> console.log(joke);
});
```
# Discord Bot Usage
Now if you guys wondering can i use this package in my Discord Bot? Yes, Yes.. You can, Here's an Quick example to show you.
```js
// Exporting the Module
const giveMeAJoke = require("give-me-a-joke");

// Regular Message Event
client.on("message", message => {
    if (message.conetnt === "joke") {
        giveMeAJoke.getRandomDadJoke (function(joke) {
      message.channel.send(joke);
    });
    }
});
```

## Contributing

I would love to have your help on this! Do check out the issues dashboard of this repository,
and submit a PR on any one of those issues, and I will be happy to merge! If there are no issues
on the dashboard, please do feel free to create new ones!

## License

MIT © [Saurabh Shubham](http://saurabhshubham.com)
