#!/usr/bin/node
const input = process.argv[2];
if (!isNaN(input)) {
  console.log('Number: ' + parseInt(input));
} else {
  console.log('Not a number');
}
