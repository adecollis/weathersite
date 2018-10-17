const request = require('request');
const argv = require('yargs').argv;

let apiKey = '3a504cae29fa808b76a687852878e3ed';
let city = argv.c || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp}c in ${weather.name}!`;
    console.log(message);
  }
});