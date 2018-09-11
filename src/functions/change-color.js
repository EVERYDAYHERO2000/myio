"use strict";

/**
 * Функция возвращает совпадение первого знака строки с цветом из массива
 * @param {String} str Строка текста
 * @return {String} HEX цвет 
 */
const changeColor = function (str) {

	let char = str[0].toUpperCase();
	
	const chars = ["!", "#", "%", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "J", "V", "X", "Y", "Z", "Ё", "А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ы", "Э", "Ю", "Я"];
	
	const colors = ['#f78987', '#f28aad', '#c17bcc', '#9a74dd', '#7fbded', '#79cc8f', '#ffd571', '#67c4bb', '#d0b582', '#ef7139', '#5387c4'];

	for (var i = 0, c = 0; i < chars.length; i++){
		
		if (char === chars[i]) return colors[c];
		
		if (c < colors.length - 1) {
			c++;
		} else {
			c = 0;
		}
	}

}

export default changeColor;