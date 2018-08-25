'use strict';

const chatList = {
	computed: {
		chatList: function () {
			let chats = this.opt.chats;
			let chatsRooms = this.opt.chatsRooms
			let chatsLength = chats.length;
			let chatsRoomsLength = chatsRooms.length;
			let newList = [];
			for (var i = 0; i < chatsLength; i++) {
				if ( exist(chats[i].taskStatus, this.taskStatus) ) push();
			}
			
			function exist(str, arr){
				let length = arr.length;
				for(var i = 0; i < length; i++){
					if (str == arr[i]){
						return true;
					}
				}
				return false;
			}
			
			function push(){
				for (var c = 0; c < chatsRoomsLength; c++) {
						if (chats[i].id == chatsRooms[c].chatsId) {
							newList.push({
								createrId: chats[i].createrId,
								creationDate: chats[i].creationDate,
								deadlineDate: chats[i].deadlineDate,
								endDate: chats[i].endDate,
								icon: chats[i].icon,
								id: chats[i].id,
								isDeleted: chats[i].isDeleted,
								name: chats[i].name,
								parentId: chats[i].parentId,
								spacesId: chats[i].spacesId,
								taskStatus: chats[i].taskStatus,
								updateDate: chats[i].updateDate,
								joinDate: chatsRooms[c].joinDate,
								lastSeenDate: chatsRooms[c].lastSeenDate,
								chatRole: chatsRooms[c].chatRole,
								isPinned: chatsRooms[c].isPinned,
								chatsIndex: i,
								chatsRoomsIndex: c
							});
						}
					}
			}
			
			return newList;
		}
	}
}

export default chatList;