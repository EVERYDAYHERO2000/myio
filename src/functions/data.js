"use strict";

import $ from 'jquery';
import getDateTime from '../functions/date-time.js';
import changeColor from '../functions/change-color.js';
import d from '../functions/dictionary.js';

const data = {};

data.loadData = function (newData, callback) {
	
	let DATA = {
		chats:[],
		chatsRooms:[],
		spaces:[],
		tags:[],
		userList:[],
		messages:[],
		user: {
			avatar: null,
			email: null,
			firstName: null,
			id: null,
			lang: null,
			lastName: null,
			login: null,
			password: null,
			registerDate: null,
			lastSessionDate: null
		}
	}
	console.log(newData);
	
	if (callback) callback(newData);
	return newData;
}


export default data;