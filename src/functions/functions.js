"use strict";

const func = {};


/**
 * ищет в массиве объектов ключ
 * @param {Array} arr Массив с объектами	
 * @param {String} key Ключ объекта для сравнения
 * @param {String} value Значения для поиска
 * @param {Function} step функция получает результат выполнения итерации цикла
 * @param {Function} final функция получает результат выполнения
 * @return {Object} Возвращает объект совпадение если найдено 
 */
func.ifExist = function(arr, key, value, step, final) {
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
			if (step) step(result);
		}
	}
	if (final) final(result);
	return result;
}

/**
 * 
 * @param {Array} arr массив с объектами
 * @param {[[type]]} key ключ объекта
 * @param {[[type]]} step функция получает результат выполнения итерации цикла
 * @param {[[type]]} final функция получает результат выполнения
 * @return {[[type]]} Возвращает объект с массивом и массивом склеиным в строку
 */
func.joinObjectsKeys = function(arr, key, step, final){
	let tempList = [];
	let result = {};
	for(var i = 0; i < arr.length; i++ ){
		tempList.push(arr[i][key]);
		if (step) step({
			object: arr[i],
			value: arr[i][key],
			index: i
		});
	}
	result.array = tempList;
	result.string = tempList.join();
	if (final) final(result)
	return result
}

export default func;