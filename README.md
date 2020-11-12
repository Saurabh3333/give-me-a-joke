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

// To get a random Joke of the Day (Categories allowed: "blonde", "knock-knock", "animal", "jod")
var category = "blonde";
giveMeAJoke.getRandomJokeOfTheDay (category, function(joke) {
    //=> console.log(joke);
});
```
# Usage in discord bot.
If you want to use the package inside of your discord bot as a command so people can enjoy in your server more. so with further due let's started.
```js
// Basic Discord bot structure.
const Discord = require('discord.js');
const client = new Discord.Client();
// import the module
const giveMeAJoke = require('give-me-a-joke');

//login 
client.login('Bot-token');

// Message Event
client.on('message', msg => {
  if (msg.content === 'joke') {
    giveMeAJoke.getRandomDadJoke(function(joke){
      msg.channel.send(joke);
    });
  }
});
// SO that's how you can use this package in your discord bot.
```

## Contributing

I would love to have your help on this! Do check out the issues dashboard of this repository,
and submit a PR on any one of those issues, and I will be happy to merge! If there are no issues
on the dashboard, please do feel free to create new ones!

## License

MIT © [Saurabh Shubham](https://saurabh3333.github.io/)
