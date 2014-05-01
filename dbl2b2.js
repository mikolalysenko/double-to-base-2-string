"use strict"

module.exports = doubleToBase2String

var db = require("double-bits")
var pad = require("pad")

function doubleToBase2String(n) {
  if(n === Infinity) {
    return "∞"
  } else if(n === -Infinity) {
    return "-∞"
  } else if(isNaN(n)) {
    return "NaN"
  }
  var sign = db.sign(n)
  if(n === 0) {
    if(sign) {
      return "-0"
    } else {
      return "0"
    }
  } else if(n === 1) {
    return "1"
  } else if(n === -1) {
    return "-1"
  } else if(n === 2) {
    return "2"
  } else if(n === -2) {
    return "-2"
  }
  var exponent = db.exponent(n)
  var fraction = db.fraction(n)
  var b0 = pad(fraction[0].toString(2), 32, "0")
  var b1 = fraction[1].toString(2)
  var str = b1 + b0
  if(db.denormalized(n)) {
    if(!fraction[1]) {
      str = fraction[0].toString(2)
    }
    exponent = -1023 - (52 - str.length)
  }
  var nz = str.length-1
  while(nz >= 0 && str.charAt(nz) === "0") {
    nz -= 1
  }
  str = str.substr(0, nz+1)
  if(str.length > 1) {
    str = "1." + str.substr(1) + "*"
  } else {
    str = ""
  }
  return (sign ? "-" : "") + str + "2^" + exponent
}