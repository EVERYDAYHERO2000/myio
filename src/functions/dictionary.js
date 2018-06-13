"use strict";

let Dictionary = function(word,lang){
	let lang = lang || 'eng';
	let word = word.toLowerCase();
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
		}
	};
	
	return (words[word][lang]) ? words[word][lang] : word;
	
}

export default Dictionary;