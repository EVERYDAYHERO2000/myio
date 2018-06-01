"use strict";
//date object from string date
//return date object [object]
APP.f.getDateTime = function (date) {
  date = (date instanceof Date) ? date : new Date(date);
  let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let dateTime = {
    raw: date,
    fullYear: null,
    month: null,
    monthName: null,
    day: null,
    time: null,
    hours: null,
    minute: null,
    date: null,
    dateTime: null,
    formated: null
  }
  dateTime.hours = date.getHours();
  dateTime.minute = date.getMinutes();
  dateTime.fullYear = date.getFullYear();
  dateTime.month = date.getMonth() + 1;
  dateTime.monthName = monthNames[date.getMonth()];
  dateTime.day = date.getDate();
  dateTime.time = (function () {
    let hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
    let minute = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
    return hours + ':' + minute;
  })();
  dateTime.date = dateTime.monthName + ' ' + dateTime.day;
  dateTime.dateTime = dateTime.date + ', ' + dateTime.time;
  dateTime.formated = dateTime.fullYear + '-' + dateTime.month + '-' + dateTime.day + ' ' + dateTime.time;
  return dateTime;
}

//color from first char
//return color [string]
APP.f.changeColor = function (str) {

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

APP.f.concat = function(currentArr, newArr){
  $.each(newArr,function(i,e){
    currentArr.push(newArr[e]);
  });
  return currentArr;       
}

APP.f.findHighestZIndex = function(elem){
  let elems = document.getElementsByTagName(elem);
  let highest = 0;
  for (var i = 0; i < elems.length; i++){
    let zindex = document.defaultView.getComputedStyle(elems[i],null).getPropertyValue("z-index");
    if ((zindex > highest) && (zindex != 'auto')){
      highest = zindex;
    }
  }
  return new Number(highest);
}