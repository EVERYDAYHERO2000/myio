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
      
      <user-item
      	v-bind:removeble="false"
      	v-bind:opt="user"
      	v-if="state == 3">
      </user-item>
      

      <btn-group 
      	v-if="state != 2"	
				class="btn-group_shade">
		    <btn 
		    	v-bind:label="d('invite')" 
		    	v-on:click.native="createNew">
		    </btn>
      </btn-group>
      
	</div>
</template>


<script>
	import $ from 'jquery';
	import request from './functions/request.js';
	
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
				if (validateEmail(e)){
					this.email = e;
					this.findUser(e);
				}
			},
			findUser:function(e){
				let __this = this;
				this.state = 1;
				if (window.throttle) clearTimeout(window.throttle);
				if (this.email != this.opt.user.email ){
				
					window.throttle = setTimeout(function(e){
						if (e == __this.email){
							
							request.post('findUser',{
								email : __this.email
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
					this.state = 2;
					this.user = {};
				}
			},
			addUser: function(){
				
				if (this.user.id){
					
					request.post('addUser', {
						userId: this.user.id,
						chatId: q.chatId,
						cpaceId: q.spaceId
					}, function(d){
						
					});
					
				}
				
			}
		},
		data : function(){
			return {
				email: '',
				state: 0,
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