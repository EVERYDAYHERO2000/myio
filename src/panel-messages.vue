<template>

	<div class="panel-messages">	
		
		<panel-header
			v-bind:position="'layer'"
			v-bind:title="panelTitle">
			
			<user-list 
				v-on:onValue="setUserList"
				v-bind:userExcludeId="opt.user.id"
				v-bind:userList="opt.userList">
			</user-list>
			
		</panel-header> 
		
		<div class="panel-messages__chat">
			<div class="panel-messages__list">
				<div class="panel-messages__list-inner">	
					
					<message
						v-for="(message,index) in messages"
						v-bind:avatar="(messages[index - 1] && message.userId != messages[index - 1].userId)"
						v-bind:opt="opt"
						v-bind:key="index"
						v-bind:message="message">
					</message>
					
				</div>	
			</div>
			
			
			<chat-input 
				v-bind:opt="opt">
			</chat-input>
			
			
		</div>
	</div>
	
</template>


<script>
	/**
 	* Функции 
 	*/
	import F 							from './functions/functions.js';
	
	/**
 	* Компоненты 
 	*/
	import panelHeader 		from './components/panel-header/panel-header.vue';
	import selectList 		from './components/select-list/select-list.vue';
	import textField 			from './components/text-field/text-field.vue';
	import userList 			from './components/user-list/user-list.vue';
	import chatInput 			from './components/chat-input/chat-input.vue';
	import message 				from './components/message/message.vue';
	
	/**
 	* Панель с лентой сообщений чата. 
 	*/
	export default {
		props: {
			opt : Object,
			panelTitle: String
		},
		components : {
			panelHeader: panelHeader,
			selectList: selectList,
			textField: textField,
			chatInput: chatInput,
			userList: userList,
			message: message
		},
		methods: {
			setUserList: function(e) {
				this.userList = e;
			}
		},
		data : function(){
			return {
				/**
 				* Список пользователей
 				*/
				userList: []
			}
		},
		created:function(){
			
		},
		computed: {
			/**
 			* Список сообщений чата 
 			*/
			messages : function(){
				let tempList = [];
				F.ifExist(this.opt.messages, 'chatsId', this.opt.user.activeChatId, function(e){
					tempList.push(e.object);
				});
				return tempList;
			}
		}
	}

</script>


<style lang="less">
	@import './less/main.less';
	
	.panel-messages {
		height: 100vh;
		width: 100%;
		
		&__chat {
			.flex-block();
			.flex-direction(column);
			height: calc(100vh - @height-header);
			.transform(translateY(@height-header));
			width: 100%;
		}
		
		&__list {
			width: 100%;
			.vertical-scroll();
			flex-grow: 1;
			position: relative;
			
		}
		
		&__list-inner {
			height: auto;
			width: 100%;
			position: absolute;
			bottom: 0;
			max-height: 100%;
		}
		
	}
	
	
	
</style>