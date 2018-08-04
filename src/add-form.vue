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
    
    <div v-if="this.active == 0">

      <text-field 
				v-on:onValue="setTitle"
				v-bind:type="'text'"
				v-bind:label="this.d('title')">
			</text-field>

      <text-field 
				v-on:onValue="setDescription" 
				v-bind:type="'text'"
				v-bind:label="this.d('description')">
			</text-field>

      <text-field 
				v-on:onValue="setDate"
				v-bind:value="this.date"
				v-bind:type="'date'"
				v-bind:label="this.d('deadlined')">
			</text-field>

      <user-list 
				v-on:onValue="setUserList"
				v-bind:app="app"
				v-bind:opt="opt">
			</user-list>

      <div class="add-form__button-group">
		    <btn 
		    	v-bind:label="this.d('create')" 
		    	v-on:click.native="createNew">
		    </btn>
      </div>
    </div>

    <div v-if="this.active == 1">

      <text-field 
				v-on:onValue="setTitle"
				v-bind:type="'text'"
				v-bind:label="this.d('title')">
			</text-field>

      <text-field 
				v-on:onValue="setDescription"
				v-bind:type="'text'"
				v-bind:label="this.d('description')">
			</text-field>

      <user-list 
				v-on:onValue="setUserList"
				v-bind:app="app"
				v-bind:opt="opt">
			</user-list>

      <div class="add-form__button-group">
		    <btn 
		    	v-bind:label="this.d('create')" 
		    	v-on:click.native="createNew">
		    </btn>
      </div>
    </div>

    <div v-if="this.active == 2">

      <text-field 
				v-on:onValue="setEmail" 
				v-bind:type="'email'"
				v-bind:label="this.d('email')">
			</text-field>

      <div class="add-form__button-group">
		    <btn 
		    	v-bind:label="this.d('invite')" 
		    	v-on:click.native="createNew">
		    </btn>
      </div>
    </div>

</div>
</template>


<script>
	import $ from 'jquery';

	import getDateTime from './functions/date-time.js';
	import request from './functions/request.js';

	import btn from './components/btn.vue';
	import textField from './components/text-field.vue';
	import selectList from './components/select-list.vue';
	import userList from './components/user-list.vue';

	
	export default {
		props: {
			opt: Object,
			app: Object
		},
		components: {
			btn: btn,
			textField: textField,
			selectList: selectList,
			userList: userList
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
			setEmail: function(e) {
				this.email = e;
			},
			setDate: function(e) {
				this.date = e;
			},
			setUserList: function(e) {
				this.userList = e;
			},
			d: function(w){
				return this.app.d[w.toLowerCase()][this.app.lang];
			},
			createNew: function() {
				let __this__ = this;
				
				//типа события
				let eventType = (function(e){
					return (e != '3') ? 'createNewChat' : 'addNewUser';
				})(this.dataType[this.active].value);
				
				//тип чата:чат/задача
				let chatType = (function(e){
					var temp = null
					if (e == '1'){
						temp = 'started';
					} else if (e == '2') {
						temp = 'chat';
					} 
					return temp;
				})(this.dataType[this.active].value);
				
				//список пользователей
				let userList = (function(arr){
					var tempList = [];
					for(var i = 0; i < arr.length; i++ ){
						tempList.push(arr[i].id);
					}
					return tempList.join();
				})(this.userList);
				
				//текущее пространство
				let currentSpace = (function(opt){
					var temp;
					for (var i = 0; i < opt.chats.length; i++){
						if (opt.chats[i].id == opt.user.activeChatId) temp = opt.chats[i].spacesId;
					}
					return temp;
				})(this.opt);
				
				request.post(eventType, {
					author: this.opt.user.id,
					name: this.title,
					description: this.description,
					date: this.date,
					userList: userList,
					chatType: chatType,
					newUser: this.email || null,
					space: currentSpace
				}, function(e){
					
				});
				__this__.$emit('success', true);
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
						name: this.d('new task')
					},
					{
						value: '2',
						name: this.d('new chat')
					},
					{
						value: '3',
						name: this.d('add user')
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

		&__button-group {
			.flex-block();
			.justify-content(space-between);
			background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 30%, rgba(255, 255, 255, 1) 100%);
			position: sticky;
			bottom: 0px;
			padding: 0 0 20px 0;

			& .btn:first-child {
				margin-right: 20px;
			}
		}

		&__logo {
			.flex-block();
			.justify-content(center);
		}

		&__header {
			.form-header();
			text-align: center;
			padding: 0 5px;
		}

		&_hide {
			opacity: 0;
			.transition(all 0.2s ease);
		}
	}
</style>