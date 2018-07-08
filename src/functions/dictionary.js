"use strict";

let d = {

		'help' : {
			eng: 'Help',
			ru : 'Помощь',
			zh: '幫'
		},
		'email' : {
			eng: 'Email',
			ru : 'Email',
			zh: '電郵'
		},
		'name' : {
			eng: 'Name',
			ru : 'Имя',
			zh: '名字'
		},
		'login' : {
			eng: 'Login',
			ru : 'Логин',
			zh: '注冊'
		},
		'log in' : {
			eng: 'Login',
			ru: 'Войти',
			zh: '注冊'
		},
		'pass' : {
			eng: 'Pass',
			ru : 'Пароль',
			zh: '密碼'
		},
		'password' : {
			eng: 'Password',
			ru : 'Пароль',
			zh: '密碼'
		},
		'settings' : {
			eng: 'Settings',
			ru : 'Настройки',
			zh: '應用設置'
		},
		'space' : {
			eng: 'Space',
			ru : 'Пространство',
			zh: '空間'
		},
		'spaces' : {
			eng: 'Spaces',
			ru : 'Пространства',
			zh: '空間'
		},
		'profile' : {
			eng: 'Profile',
			ru : 'Профиль',
			zh: '私人'
		},
		'general' : {
			eng: 'General',
			ru : 'Основные',
			zh: '主要'
		},
		'forgot password' : {
			eng: 'Forgot password',
			ru : 'Напомнить пароль',
			zh: '忘記密碼'
		},
		'request password' : {
			eng: 'Request Password',
			ru : 'Отправить пароль',
			zh: '要求密碼'
		},
		'calendar' : {
			eng: 'Calendar',
			ru : 'Календарь',
			zh: '日曆'
		},
		'files' : {
			eng: 'Files',
			ru : 'Файлы',
			zh: '檔'
		},
		'user' : {
			eng: 'User',
			ru : 'Пользователь',
			zh: '用戶'
		},
		'users' : {
			eng: 'Users',
			ru : 'Пользователи',
			zh: '用戶'
		},
		'add' : {
			eng: 'Add',
			ru : 'Добавить',
			zh: '加'
		},
		'add file' : {
			eng : 'Add file',
			ru : 'Добавить файл',
			zh: '添加文件'
		},
		'add user' : {
			eng : 'Add user',
			ru : 'Добавить пользователя',
			zh: '添加用戶'
		},
		'create' : {
			eng: 'Create',
			ru : 'Создать',
			zh: '創建'
		},
		'create new' : {
			eng : 'Create new',
			ru : 'Создать новый',
			zh: '創建新的'
		},
		'chats' : {
			eng: 'Chats',
			ru : 'Чаты',
			zh: '聊天記錄'
		},
		'tasks' : {
			eng: 'Tasks',
			ru : 'Задачи',
			zh: '任務'
		},
		'messages' : {
			eng: 'Messages',
			ru : 'Сообщения',
			zh: '消息'
		},
		'search' : {
			eng: 'Search',
			ru : 'Поиск',
			zh: '搜索'
		},
		'find' : {
			eng: 'Find',
			ru : 'Найти',
			zh: '找'
		},
		'find chat' : {
			eng : 'Find chat',
			ru : 'Найти чат',
			zh: '找到聊天'
		},
		'find task' : {
			eng : 'Find task',
			ru : 'Найти задачу',
			zh: '找到任務'
		},
		'all' : {
			eng: 'All',
			ru : 'Всё',
			zh: '所有'
		},
		'all tasks' : {
			eng : 'All tasks',
			ru : 'Все задачи',
			zh: '所有任務'
		},
		'created by me' : {
			eng : 'Created by me',
			ru : 'Созданные мной',
			zh: '由我創造'
		},
		'assigned to me' : {
			eng : 'Assigned to me',
			ru : 'Назначенные на меня',
			zh: '分配給我'
		},
		'sign in': {
			eng: 'Sign in',
			ru: 'Регистрация',
			zh: '簽到'
		},
		'send' : {
			eng: 'Send',
			ru : 'Отправить',
			zh: '發送'
		},
		'send message' : {
			eng : 'Send message',
			ru : 'Отправить сообщение',
			zh: '發信息'
		},
		'new task' : {
			eng : 'New task',
			ru : 'Новая задача',
			ch : '新任務'
		},
		'new chat' : {
			eng : 'New chat',
			ru : 'Новый чат',
			zh: '新聊天'
		}, 
		'title' : {
			eng: 'Title',
			ru : 'Название',
			zh: '標題'
		},
		'description' : {
			eng: 'Description',
			ru : 'Описание',
			zh: '描述'
		},
		'confirm password' : {
			eng: 'Confirm password',
			ru: 'Проверка пароля',
			zh: '確認密碼'
		},
		'deadlined' : {
			eng : 'Done until',
			ru : 'Сделать до',
			zh: '做完，直到'
		},
		'invite' : {
			eng: 'Invite',
			ru : 'Пригласить',
			zh: '邀請'
		},
		'pin' : {
			eng: 'Pin',
			ru : 'Закрепить',
			zh: '銷'
		},
		'pin chat' : {
			eng : 'Pin chat',
			ru : 'Закрепить чат',
			zh: '針聊天'
		},
		'pin task' : {
			eng : 'Pin task',
			ru : 'Закрепить задачу',
			zh: '針腳任務'
		},
		'pin message' : {
			eng : 'Pin message',
			ru : 'Закрепить сообщение',
			zh: '銷'
		},
		'create your account' : {
			eng: 'Create your account',
			ru : 'Новый аккаунт',
			zh: '創建您的帳戶'
		},
		'work spaces' : {
			eng : 'Work spaces',
			ru : 'Рабочие пространства',
			zh: '工作空間'
		},
		'expand' : {
			eng: 'Expand',
			ru: 'Развернуть',
			zh: '擴大'
		},
		'ru' : {
			eng: 'Russian',
			ru: 'Русский',
			zh: '俄語'
		},
		'eng': {
			eng: 'English',
			ru: 'Английский',
			zh: '英語'
		},
		'zh': {
			eng: 'Chinese',
			ru: 'Китайский',
			zh: '中國'
		}
	};

export default d;