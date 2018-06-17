<template>

	<div class="panel-messages">	
		
		<panel-header
			v-bind:opt="opt"
			v-bind:title="panelTitle">
			
			<user-list 
				v-on:onValue="setUserList"
				v-bind:name="'users_2'"
				v-bind:opt="opt">
			</user-list>
			
		</panel-header> 
		
		<div class="panel-messages__inner">
			<div class="panel-messages__messages-list">chat</div>
			<div class="panel-messages__input">
				<chat-input>
				</chat-input>
			</div>
		</div>
	</div>
	
</template>


<script>
	import $ from 'jquery';
	
	import panelHeader from './components/panel-header.vue';
	import selectList from './components/select-list.vue';
	import textField from './components/text-field.vue';
	import userList from './components/user-list.vue';
	import chatInput from './chat-input.vue';
	
	export default {
		props: {
			opt : Object,
			type: String,
			panelTitle: String
		},
		components : {
			panelHeader: panelHeader,
			selectList: selectList,
			textField: textField,
			chatInput: chatInput,
			userList: userList
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
			
		}
	}

</script>


<style lang="less">
	@import './less/main.less';
	
	.panel-messages {
		height: 100vh;
		width: 100%;
		
		&__inner {
			display: flex;
			flex-direction:column;
			height: calc(100vh - @height-header);
			transform: translateY(@height-header);
			width: 100%;
		}
		
		&__messages-list {
			width: 100%;
			overflow: hidden;
			overflow-y: scroll;
			flex-grow: 1;
			align-content: flex-end;
		}
		
		&__input {
			
		}
		
	}
	
</style>