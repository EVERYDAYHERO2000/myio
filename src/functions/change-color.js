"use strict";

import $ from 'jquery';
 
const changeColor = function (str) {

  let char = str[0];
  let color = '#eaeaea';
  let colors = [
    {
      color: '#f78987',
      char: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '@', '%', '#', '!']
  },
    {
      color: '#f28aad',
      char: ['A', 'G', 'N', 'T', 'Б', 'З', 'О', 'Ф', 'Э']
  },
    {
      color: '#c17bcc',
      char: ['B', 'H', 'O', 'V', 'В', 'И', 'Й', 'П', 'Х', 'Ю']
  },
    {
      color: '#9a74dd',
      char: ['C', 'I', 'P', 'X', 'Г', 'К', 'Р', 'Ц', 'Я']
  },
    {
      color: '#98d2ff',
      char: ['D', 'K', 'Q', 'Y', 'Д', 'Л', 'С', 'Ч']
  },
    {
      color: '#67c4bb',
      char: ['E', 'L', 'R', 'Z', 'Е', 'Ё', 'М', 'Т', 'Ш', 'Щ']
  },
    {
      color: '#ffd571',
      char: ['F', 'M', 'S', 'А', 'Ж', 'Н', 'У', 'Ы']
  }
]
  $.each(colors, function (i, str) {
    $.each(str.char, function (i, c) {
      if (char === c) {
        color = str.color;
        return false;
      }
    });
  });

  return color;
}

export default changeColor;