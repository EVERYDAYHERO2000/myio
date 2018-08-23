<template>

	<div class="panel-messages">	
		
		<panel-header
			v-bind:opt="opt"
			v-bind:app="app"
			v-bind:title="panelTitle">
			
			<user-list 
				v-on:onValue="setUserList"
				v-bind:name="'users_2'"
				v-bind:app="app"
				v-bind:opt="opt">
			</user-list>
			
		</panel-header> 
		
		<div class="panel-messages__chat">
			<div class="panel-messages__list">
				<div class="panel-messages__list-inner">	
					
					<message
						v-for="message in messages"
						v-bind:opt="opt"
						v-bind:message="message">
					</message>
					
				</div>	
			</div>
			
			<div class="panel-messages__input">
				<chat-input 
					v-bind:app="app"
					v-bind:opt="opt">
				</chat-input>
			</div>
			
		</div>
	</div>
	
</template>


<script>
	import $ from 'jquery';
	import F from './functions/functions.js';
	
	import panelHeader from './components/panel-header.vue';
	import selectList from './components/select-list.vue';
	import textField from './components/text-field.vue';
	import userList from './components/user-list.vue';
	import chatInput from './components/chat-input.vue';
	import message from './components/message.vue';
	
	export default {
		props: {
			opt : Object,
			app: Object,
			type: String,
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
				userList: []
			}
		},
		created:function(){
			
		},
		computed: {
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
		
		&__input {
			
		}
		
	}
	
	
	
</style>