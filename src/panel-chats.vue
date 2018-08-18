<template>
	<div class="panel-chats">

	<panel-header
		v-bind:opt="opt"
		v-bind:app="app"
		v-bind:title="panelTitle">
		
		<text-field 
			v-bind:label="''"
			v-bind:placeholder="d('Search')"
			v-bind:type="'search'">
		</text-field>
		
	</panel-header> 

	<div class="panel-chats__list">
	
		<chat-list-item 
			v-for="chat in chatList"
			v-if="chat.isPinned"
			v-bind:app="app"
			v-bind:opt="opt" 
			v-bind:chat="chat"
			v-bind:type="'chat'"
			v-bind:key="chat.id">
		</chat-list-item>
	
		<chat-list-item 
			v-for="chat in chatList"
			v-if="!chat.isPinned"
			v-bind:app="app"
			v-bind:opt="opt" 
			v-bind:chat="chat"
			v-bind:type="'chat'"
			v-bind:key="chat.id">
		</chat-list-item>
		
	</div>

</div>
</template>


<script>
	import panelHeader from './components/panel-header.vue';
	import chatListItem from './components/chat-list-item.vue';
	import textField from './components/text-field.vue';
	
	export default {
		props: {
			opt: Object,
			app: Object,
			panelTitle: String,
			type: String
		},
		components: {
			panelHeader : panelHeader,
			chatListItem : chatListItem,
			textField: textField
		},
		created: function(){

		},
		methods: {
			d: function(w){
				return this.app.d[w.toLowerCase()][this.app.lang];
			}
		},
		computed : {
			chatList : function(){
				let chats = this.opt.chats;
				let chatsRooms = this.opt.chatsRooms
				let chatsLength = chats.length;
				let chatsRoomsLength = chatsRooms.length;
				let newList = [];
				for(var i = 0; i < chatsLength; i++){
					if (chats[i].taskStatus == 'chat'){
						for(var c = 0; c < chatsRoomsLength; c++){
							if (chats[i].id == chatsRooms[c].chatsId){
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
				}
				return newList;
			}
		}
	}
</script>


<style lang="less">
	@import './less/main.less';

	.panel-chats {
		.flex-block();
		height: 100vh;
		.flex-direction(row);

		&__list {
			height: calc(100vh - @height-header);
			width: 100%;
			.transform(translateY(@height-header));
			.vertical-scroll();
		}
	}
</style>