"use strict";

APP.f.data = APP.f.data || {};

APP.f.data.getData = function(newData, currentData){
	
				
  const DATA = {
		inboxList: currentData.inboxList || [],
		taskList: currentData.taskList || [],
		messages: currentData.messages || [],
		users: currentData.users || [],
		options: currentData.options || {}
	};
	
	
	if (newData.options) {
		DATA.options = {
			login: newData.options.login,
			id: newData.options.id,
			email: newData.options.email,
			name: newData.options.name,
			pined_id: newData.options.pined_id,
			active_chat_id: [],
			app: currentData.options.app
		}
	}
	
	
	if (newData.users) {
		DATA.users = APP.f.concat( newData.users );
	}
	
	if (newData.messages) {
		DATA.messages = APP.f.concat( messageList(newData.messages, DATA.users) );
	}
	
	if (newData.chats) {
		DATA.inboxList = APP.f.concat( sortChats(newData.chats, 'chat') );
		DATA.taskList = APP.f.concat( sortChats(newData.chats, 'task') );
    
	}
	
	function messageList(messages, users){
		$.each(messages, function (i, message) {
			let author_id = message.author_id;
			let author;
			$.each(users, function (i, user) {
				if (author_id === user.id) {
					author = user.name;
					return false;
				}
			});
			message.author = author;
		});
		return messages;
	}
	
	function sortChats(chats, key) {
		let inbox = [];
		key = key || 'chat';
		$.each(chats, function (i, chat) {
			if (chat.type === key) {
				chat.isPined = isPined(DATA.options.pined_id, chat);
				chat.isActive = false;
				chat.color = APP.f.changeColor(chat.title);
				chat.last_message = getLastMessage(DATA.messages, DATA.users, chat.last_message);
				chat.avatar = chat.avatar || null;
				chat.avatarChar = chat.title[0].toUpperCase();
				chat.title = chat.title;
				inbox.push(chat);
			}
		});
  
		return inbox;
	}
	
	function isPined(pined_id, elem) {
		let isPined = false;
		$.each(pined_id, function (i, id) {
			if (id === elem.id) {
				isPined = true;
				return false;
			}
		});
		return isPined;
	}
	
	function getLastMessage(messages, users, last_message_id) {
    
		let message = {
			author: null,
			text: null,
			message_id: parseInt(last_message_id, 10),
			date: null
		};
    
		$.each(messages, function (i, e) {
      
			if (e.id === message.message_id) {
				message.author = (function (users, author_id) {
					let name = null;
					$.each(users, function (i, e) {
						if (e.id === author_id) {
							name = e.name;
							return false;
						}
					});
					return name;
				})(users, e.author_id);
				message.text = e.message;
				message.date = APP.f.getDateTime(e.date);
			}
		});
		return message;
	}
	
	return DATA;
} 

APP.f.data.setData = function(){
  
}