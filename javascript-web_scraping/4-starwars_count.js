#!/usr/bin/node

const request = require('request');
const charId = 18;
const url = process.argv[2];
const charUrl = url.replace('films', `people/${charId}/`);
let count = 0;

request.get(url, (err, resp, body) => {
  if (err) {
    throw err;
  }
  body = JSON.parse(body);
  body.results.forEach((film, index) => {
    film.characters.forEach((character, index) => {
      if (character === charUrl) {
        count++;
      }
    });
  });
  console.log(count);
});
