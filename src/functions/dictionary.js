"use strict";

let Dictionary = function(word,lang){
	let lang = lang || 'eng'; 
	let w = word.toLowerCase();
	let words = {
		help : {
			ru : 'Помощь'
		},
		name : {
			ru : 'Имя'
		},
		login : {
			ru : 'Логин'
		},
		pass : {
			ru : 'Пароль'
		},
		password : {
			ru : 'Пароль'
		},
		settings : {
			ru : 'Настройки'
		},
		spaces : {
			ru : 'Пространства'
		},
		profile : {
			ru : 'Профиль'
		},
		general : {
			ru : 'Основные'
		}
	};
	
	return (words[w][lang]) ? words[w][lang] : word;
	
}

export default Dictionary;