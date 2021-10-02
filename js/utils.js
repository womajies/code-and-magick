'use strict';

function getRandomInt(min, max) {
  if (min <= 0) {
    min = 0;
  }
  if (max < min) {
    var temp = min;
    min = max;
    max = temp;
  }
  var rand = Math.round(Math.random() * (max - min) + min);
  return rand;
}

function isMaxLength(string, maxLength) {
  // if (!maxLength && !0) {
  //   maxLength = 5;
  // }

  return string.length <= maxLength ? true : false;
}

getRandomInt();
isMaxLength('ahaha', 3);
