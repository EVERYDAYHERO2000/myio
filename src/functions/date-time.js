"use strict";

const getDateTime = function (date) { 
	
	date = date || new Date();
	
	date = (date && typeof date == 'string' && date.indexOf('T') + 1 ) ? date.split('.')[0].replace(/T/gi, ' ') : date;	
	
	
	date = (date instanceof Date) ? date : new Date( date.replace(/-/g, '/') );
	let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	let dateTime = {}
	
	dateTime.raw = date;
	dateTime.currentTimeZoneOffsetInHours = date.getTimezoneOffset() / 60;
	dateTime.unix = Date.parse(date)
	dateTime.hours = stringifyNumber(date.getHours());
	dateTime.minute = stringifyNumber(date.getMinutes());
	dateTime.seconds = stringifyNumber(date.getSeconds());
	dateTime.fullYear = stringifyNumber(date.getFullYear());
	dateTime.month = stringifyNumber(date.getMonth() + 1);
	dateTime.monthName = monthNames[date.getMonth()];
	dateTime.day = stringifyNumber(date.getDate());
	dateTime.time = [dateTime.hours,dateTime.minute].join(':');
	dateTime.date = [dateTime.monthName,dateTime.day].join(' ');
	dateTime.dateTime = [dateTime.date,dateTime.time].join(', ');
	dateTime.dateOnly = [dateTime.fullYear,dateTime.month,dateTime.day].join('-');
	dateTime.formated = [dateTime.dateOnly,dateTime.time].join(' ');
	dateTime.value = Number([dateTime.fullYear,dateTime.month,dateTime.day,dateTime.hours,dateTime.minute,dateTime.seconds].join(''));

	function stringifyNumber(n) {
		return (n < 10) ? '0' + n : n.toString();
	}
	
	return dateTime; 
}


export default getDateTime;