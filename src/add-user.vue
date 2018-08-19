<template>
	<div class="add-user">
		<text-field 
				v-on:onValue="setEmail" 
				v-bind:type="'email'"
				v-bind:label="d('email')">
			</text-field>
			
			<loading-spinner 
				v-if="state == 1"
				v-bind:type="'local'">
			</loading-spinner>
      
      <div 
      	v-if="state == 2">
      	Вы не можете пригласить сами себя
			</div>
     
     	<div
     		v-if="state == 4">
     		Пользователь уже есть в списке пользователей	
     	</div>
      
      <user-item
      	v-bind:removeble="false"
      	v-bind:opt="user"
      	v-if="state == 3">
      </user-item>
      

      <btn-group 
      	v-if="state != 2 && state != 4"	
				class="btn-group_shade">
		    <btn 
		    	v-bind:label="d('invite')" 
		    	v-on:click.native="addUser">
		    </btn>
      </btn-group>
      
	</div>
</template>


<script>
	import $ from 'jquery';
	import request from './functions/request.js';
	import F from './functions/functions.js';
	
	import btn from './components/btn.vue';
	import textField from './components/text-field.vue';
	import btnGroup from './components/btn-group.vue';
	import loadingSpinner from './components/loading-spinner.vue'
	import userItem from './components/user-item.vue';
	
	export default {
		props : {
			opt: Object,
			app: Object
		},
		components: {
			btn: btn,
			textField: textField,
			btnGroup: btnGroup,
			loadingSpinner: loadingSpinner,
			userItem: userItem
		},
		methods: {
			d: function(w){
				return this.app.d[w.toLowerCase()][this.app.lang];
			},
			setEmail: function(e) {
				function validateEmail(email) {
    			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    			return re.test(String(email).toLowerCase());
				}
				this.state = 0;
				this.user = {};
				if (validateEmail(e)){
					this.email = e;
					this.findUser(e);
				}
			},
			findUser:function(e){
				let __this = this;
				let __email = this.email.trim();
				
				this.state = 1;
				this.user = {};
				
				if (window.throttle) clearTimeout(window.throttle);
				if (this.email != this.opt.user.email ){
					
					if (!F.ifExist(__this.opt.userList, 'email', __email).status){
				
						window.throttle = setTimeout(function(e){
							
							if (e == __this.email){

								request.post('findUser',{
									email : __email
								}, function(d){
									__this.user = d.data;
									__this.state = 3;
								}, function(d){
									__this.user = {};
									__this.state = 0;
								});

							}

						},2000, e);
					} else {
						this.state = 4;
						this.user = {};
					}
				} else {
					this.state = 2;
					this.user = {};
				}
			},
			addUser: function(){
				
				if (this.user.id){
					let userId = this.user.id;
					let spaceId = F.ifExist(this.opt.chats, 'id', this.opt.user.activeChatId).object.spacesId;
					
					request.post('addUser', {
						userId: userId,
						spaceId: spaceId
					}, function(d){
						console.log(d)
					});
					
				}
				
			}
		},
		data : function(){
			return {
				email: '',
				state: 0, //0 — ничего, 1 — загрузка, 2 — ошибка (свой email), 3 — пользователь найден, 4 — ошибка (пользователь уже добавлен)
				user: {}
			}
		}
	}
</script>


<style lang="less">
	@import './less/main.less';
	.add-user {
		
	}
</style>