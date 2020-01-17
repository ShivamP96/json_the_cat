const request = require('request');
//const fs = require('fs');

let URL = 'https://api.thecatapi.com/v1/breeds/search?q=';
let searchTerm = "";
let URLFinal;

const fetchBreedDescription = function(breedName, callback) {

  searchTerm = breedName;
  URLFinal = URL + searchTerm;
  

  request(URLFinal, (error, response, body) => {

    const data = JSON.parse(body);

    if (data.length === 0) {

      callback("cannot find the breed, please retry", null);

    } else if (response.statusCode === 404) {

      callback(`invalid url ${response.statusCode}`, null);

    } else {

      callback(null, `${data[0].description}`);

    }
  });
};

module.exports = fetchBreedDescription;

// response.statusCode === 404