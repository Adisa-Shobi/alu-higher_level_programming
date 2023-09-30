#!/usr/bin/node

const Rectangle = require('./4-rectangle');

class Square extends Rectangle {
  constructor (size) {
    super(size, size);
  }

  charPrint (c) {
    let v = c;
    if (!c) {
      v = 'X';
    }
    for (let i = 0; i < this.height; i++) {
      console.log(v.repeat(this.width));
    }
  }
}

module.exports = Square;
