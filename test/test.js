"use strict"

var tape = require("tape")
var b2str = require("../dbl2b2.js")

tape("double-to-base-2-string", function(t) {

  //Test special values
  t.equals(b2str(Infinity), "∞")
  t.equals(b2str(-Infinity), "-∞")
  t.equals(b2str(0), "0")
  t.equals(b2str(-0), "-0")
  t.equals(b2str(NaN), "NaN")
  t.equals(b2str(1), "1")
  t.equals(b2str(-1), "-1")
  t.equals(b2str(2), "2")
  t.equals(b2str(-2), "-2")

  //Generic values
  t.equals(b2str(1.5), "1.1")
  t.equals(b2str(3), "1.1*2")
  t.equals(b2str(8), "2^3")
  t.equals(b2str(7), "1.11*2^2")
  t.equals(b2str(-4), "-2^2")
  t.equals(b2str(-6), "-1.1*2^2")

  //Powers of 2
  for(var i=-1052; i<1024; ++i) {
    if(i == 0 || i == 1) {
      continue
    }
    t.equals(b2str(Math.pow(2, i)), "2^" + i)
    t.equals(b2str(-Math.pow(2, i)), "-2^" + i)
  }

  t.end()
})