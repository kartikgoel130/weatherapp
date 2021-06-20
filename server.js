const express = require('express')
const request = require('request')

const app = express()


app.get("/",(req,res)=>{
  let city = req.query.city;
  const request = require('request');
request(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d00f2af1975e61d03a1bb3d9786d1d84`, 
function (error, response, body) {
  let data = JSON.parse(body);
  if(response.statusCode === 200){
    // res.send(`The weather in your city "${city}" is ${data.weather[0].description}`),
    var num = data.main.temp - 273.15;
    num = num.toFixed(0);
    res.send(`<h1>The weather in your city "${city}" is ${num}</h1>`)
  }
});
});

app.listen(3000, () => console.log("Ya Dawgs Server started on Port 3000"))