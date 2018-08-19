"use strict";

const func = {};


/**
 * ищет в массиве объектов ключ
 * @param {Array} arr Массив с объектами	
 * @param {String} key Ключ объекта для сравнения
 * @param {String} value Значения для поиска
 * @param {Function} callback функция получает результат выполнения итерации цикла
 * @param {Function} final функция получает результат выполнения
 * @return {Object} Возвращает объект совпадение если найдено 
 */
func.ifExist = function(arr, key, value, callback, final) {
	let arrLength = arr.length;
	let result = {
		index : null,
		object : {},
		status : false
	}
	for (var i = 0; i < arrLength; i++) {
		if (arr[i][key] == [value]) {
			result.index = i;
			result.object = arr[i];
			result.status = true;
			if (callback) callback(result);
		}
	}
	if (final) final(result);
	return result;
}

export default func;