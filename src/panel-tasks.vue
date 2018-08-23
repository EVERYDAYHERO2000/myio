<template>
	<div class="panel-tasks">

	<panel-header
		v-bind:opt="opt"
		v-bind:app="app"
		v-bind:title="panelTitle">
		
			<select-list 
				v-bind:name="'test'" 
				v-bind:options="this.dataTaskState" 
				v-bind:active="this.active"
				v-bind:k="'value'"
				v-bind:v="'name'"
				v-on:onActive="this.setActive">
			</select-list>

			<text-field 
				v-bind:label="''" 
				v-bind:placeholder="$d('Search')"
				v-bind:type="'search'">
			</text-field>
			
	</panel-header> 

	<div class="panel-tasks__list">
	
		<chat-list-item 
			v-for="chat in chatList"
			v-if="chat.isPinned"
			v-bind:app="app"
			v-bind:opt="opt" 
			v-bind:chat="chat"
			v-bind:type="'task'"
			v-bind:key="chat.id">
		</chat-list-item>
	
		<chat-list-item 
			v-for="chat in chatList"
			v-if="!chat.isPinned"
			v-bind:app="app"
			v-bind:opt="opt" 
			v-bind:chat="chat"
			v-bind:type="'task'"
			v-bind:key="chat.id">
		</chat-list-item>
		
	</div>

</div>
</template>


<script>
	import $ from 'jquery';
	import F from './functions/functions.js';
	
	import panelHeader from './components/panel-header.vue';
	import selectList from './components/select-list.vue';
	import textField from './components/text-field.vue';
	import chatListItem from './components/chat-list-item.vue';
	
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
			selectList: selectList,
			textField: textField
		},
		created: function(){
			
		},
		methods: {
			setActive: function(e){
				this.active = e;
			}
		},
		data: function(){
			return {
				active: 0
			}
		},
		computed : {
			dataTaskState: function(){
				return [
					{
						value: '1',
						name: this.$d('All tasks')
					},
					{
						value: '2',
						name: this.$d('Created by me')
					},
					{
						value: '3',
						name: this.$d('Assigned to me')
					}
				]
			},
			chatList : function(){
				let chats = this.opt.chats;
				let chatsRooms = this.opt.chatsRooms
				let chatsLength = chats.length;
				let chatsRoomsLength = chatsRooms.length;
				let newList = [];
				let __this = this;
				
				for(var i = 0; i < chatsLength; i++){
					if (chats[i].taskStatus != 'chat'){
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

	.panel-tasks {
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