const request = require('request');
//const fs = require('fs');


const input = process.argv.slice(2);
let URL = 'https://api.thecatapi.com/v1/breeds/search?q=';
let searchTerm = input[0];

//let filePath = input[1];

// fetch the data from the url

let URLFinal = URL + searchTerm;
//console.log(URLFinal);
request(URLFinal, (error, response, body) => {
  const data = JSON.parse(body);
  //console.log(JSON.parse(response.body).status)
  if (data.length === 0) {
    return console.log("cannot find the breed, please retry");
  } else if (JSON.parse(response.body).status === 404) {
    console.log("invalid url");
  } else {
    console.log(data[0].description);

  }


});





// response.statusCode === 404