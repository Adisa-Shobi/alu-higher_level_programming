#!/usr/bin/node

let max = 0;
let second = 0;
for (let i = 2; i < process.argv.length; i++) {
  const current = parseInt(process.argv[i]);
  if (current > max) {
    second = max;
    max = current;
  }
}
console.log(second);
