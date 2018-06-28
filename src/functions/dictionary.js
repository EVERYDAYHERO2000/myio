"use strict";

let Dictionary = function(word,lang){
	let lang = lang || 'eng'; 
	let w = word.toLowerCase();
	let words = {

		help : {
			ru : 'Помощь'
		},
		email : {
			ru : 'email'
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
		},
		forgot : {
			eng: 'Forgot password',
			ru : 'Напомнить пароль'
		},
		calendar : {
			ru : 'Календарь'
		},
		files : {
			ru : 'Файлы'
		},
		user : {
			ru : 'Пользователь'
		},
		users : {
			ru : 'Пользователи'
		},
		add : {
			ru : 'Добавить'
		},
		addF : {
			eng : 'Add file',
			ru : 'Добавить файл'
		},
		addU : {
			eng : 'Add user',
			ru : 'Добавить пользователя'
		},
		create : {
			ru : 'Создать'
		},
		createN : {
			eng : 'Create new',
			ru : 'Создать новый'
		},
		chats : {
			ru : 'Чаты'
		},
		tasks : {
			ru : 'Задачи'
		},
		messages : {
			ru : 'Сообщения'
		},
		search : {
			ru : 'Поиск'
		},
		find : {
			ru : 'Найти'
		},
		findC : {
			eng : 'Find chat',
			ru : 'Найти чат'
		},
		findT : {
			eng : 'Find task',
			ru : 'Найти задачу'
		},
		all : {
			ru : 'Всё'
		},
		allT : {
			eng : 'All task',
			ru : 'Все задачи'
		},
		createdT : {
			eng : 'Created by me',
			ru : 'Созданные мной'
		},
		assignedT : {
			eng : 'Assigned to me',
			ru : 'Назначенные на меня'
		},
		send : {
			ru : 'Отправить'
		},
		sendM : {
			eng : 'Send message',
			ru : 'Отправить сообщение'
		},
		newT : {
			eng : 'New task',
			ru : 'Новая задача'
		},
		newC : {
			eng : 'New chat',
			ru : 'Новый чат'
		}, 
		title : {
			ru : 'Название'
		},
		description : {
			ru : 'Описание'
		},
		deadlineD : {
			eng : 'Done until',
			ru : 'Сделать до'
		},
		invite : {
			ru : 'Пригласить'
		},
		pin : {
			ru : 'Закрепить'
		},
		pinC : {
			eng : 'Pin chat',
			ru : 'Закрепить чат'
		},
		pinT : {
			eng : 'Pin task',
			ru : 'Закрепить задачу'
		},
		pinM : {
			eng : 'Pin message',
			ru : 'Закрепить сообщение'
		}
	};
	
	return (words[w][lang]) ? words[w][lang] : word;
	
}

export default Dictionary;