<template>
<div class="add-form">

  <select-list 
    v-bind:name="'test'" 
    v-bind:options="this.dataType" 
    v-bind:active="this.active"
    v-bind:k="'value'"
    v-bind:v="'name'"
    v-on:onActive="this.setActive">
  </select-list>
    
    <!--CREATE TASK-->
    <div v-if="this.active == 0">

      <text-field 
				v-on:onValue="setTitle"
				v-bind:type="'text'"
				v-bind:label="$d('title')">
			</text-field>

      <text-field 
				v-on:onValue="setDescription" 
				v-bind:type="'text'"
				v-bind:label="$d('description')">
			</text-field>

      <text-field 
				v-on:onValue="setDate"
				v-bind:value="this.date"
				v-bind:type="'date'"
				v-bind:label="$d('deadlined')">
			</text-field>

      <user-list 
				v-on:onValue="setUserList"
				v-bind:app="app"
				v-bind:opt="opt">
			</user-list>

      <btn-group class="btn-group_shade">
		    <btn 
		    	v-bind:label="$d('create')" 
		    	v-on:click.native="createNew">
		    </btn>
      </btn-group>
      
    </div>
    <!--CREATE TASK END-->

   	<!--CREATE CHAT-->
    <div v-if="this.active == 1">

      <text-field 
				v-on:onValue="setTitle"
				v-bind:type="'text'"
				v-bind:label="$d('title')">
			</text-field>

      <text-field 
				v-on:onValue="setDescription"
				v-bind:type="'text'"
				v-bind:label="$d('description')">
			</text-field>

      <user-list 
				v-on:onValue="setUserList"
				v-bind:app="app"
				v-bind:opt="opt">
			</user-list>

      <btn-group class="btn-group_shade">
		    <btn 
		    	v-bind:label="$d('create')" 
		    	v-on:click.native="createNew">
		    </btn>
      </btn-group>
      
    </div>
    <!--CREATE CHAT END-->

   	<!--ADD USER-->
    <div v-if="this.active == 2">

     	<add-user
     		v-on:userSubmit="close"
     		v-bind:opt="opt"
     		v-bind:app="app">
     	</add-user>
      
    </div>
    <!--ADD USER END-->

</div>
</template>


<script>
	import $ from 'jquery';

	import getDateTime from './functions/date-time.js';
	import request from './functions/request.js';
	import F from './functions/functions.js';

	import addUser from './add-user.vue';
	import btn from './components/btn.vue';
	import textField from './components/text-field.vue';
	import selectList from './components/select-list.vue';
	import userList from './components/user-list.vue';
	import btnGroup from './components/btn-group.vue';

	
	export default {
		props: {
			opt: Object,
			app: Object
		},
		components: {
			btn: btn,
			textField: textField,
			selectList: selectList,
			userList: userList,
			btnGroup: btnGroup,
			addUser: addUser
		},
		created: function() {
			
		},
		methods: {
			
			setActive: function(e) {
				this.active = e;
			},
			setTitle: function(e) {
				this.title = e;
			},
			setDescription: function(e) {
				this.description = e;
			},
			setDate: function(e) {
				this.date = e;
			},
			setUserList: function(e) {
				this.userList = e;
			},
			close: function(){
				this.$emit('success', true);
			},
			createNew: function() {
				let __this = this;
				
				//тип чата:чат/задача
				let chatType = (function(e){
					let temp = null
					if (e == '1'){
						temp = 'started';
					} else if (e == '2') {
						temp = 'chat';
					} 
					return temp;
				})(this.dataType[this.active].value);
				
				//список пользователей
				let userList = F.joinObjectsKeys(this.userList,'id').string;
				
				//текущее пространство
				let currentSpace = F.ifExist(this.opt.chats, 'id', this.opt.user.activeChatId).object.spacesId;
				
				request.post('createNewChat', {
					author: this.opt.user.id,
					name: this.title,
					description: this.description,
					date: this.date,
					userList: userList,
					chatType: chatType,
					newUser: this.email || null,
					space: currentSpace
				}, function(e){
					APP.$data.opt.chats.push(e.data.chats[0]);
					APP.$data.opt.chatsRooms.push(e.data.chatsRooms[0]);
				});
				__this.$emit('success', true);
			}
		},
		data: function() {
			return {
				active: 0,
				title: '',
				description: '',
				email: '',
				date: getDateTime().dateOnly,
				userList: []
			}
		},
		computed: {
			dataType: function() {
				return [
					{
						value: '1',
						name: this.$d('new task')
					},
					{
						value: '2',
						name: this.$d('new chat')
					},
					{
						value: '3',
						name: this.$d('add user')
					}
				]
			}
		}
	}
</script>


<style lang="less">
	@import './less/main.less';
	
	.add-form {
		margin: 0 auto;
		height: 100vh;
		opacity: 1;
		padding: 20px 20px 0 0;
		box-sizing: border-box;

		&_hide {
			opacity: 0;
			.transition(all 0.2s ease);
		}
	}
</style>