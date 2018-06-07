"use strict";
/*
список пользователей
*/
Vue.component('user-list', {
  props: ['opt'],
  template: 
`<div class="user-list">
  <div class="user-list__header">
    <div class="user-list__title">Users</div>
    <div class="user-list__counter">{{UsersCanBeRemoved.length}}</div>
  </div>

  <div class="user-list__users" v-if="UsersCanBeRemoved.length">
		<user-item 
			v-for="(user, index) in UsersCanBeRemoved" 
			v-on:onRemove="removeUser" 
			v-bind:opt="user" 
			v-bind:index="index">
		</user-item>	
  </div>
  
	<select-list 
		v-if="UsersCanBeAdded.length"
		v-bind:class="'user-list__list'"
		v-bind:name="'test'" 
		v-bind:options="UsersCanBeAdded" 
		v-bind:active="0"
		v-bind:k="'id'"
		v-bind:v="'name'"
		v-on:onActive="this.addUser">
  </select-list>
		
</div>`,
  methods: {
    addUser: function(e){
      this.UsersCanBeRemoved.push( this.UsersCanBeAdded[e] );
			this.UsersCanBeAdded.splice(e, 1);
			this.$emit('onValue',  this.UsersCanBeRemoved ); 
    },
		removeUser: function(e){
      this.UsersCanBeAdded.push( this.UsersCanBeRemoved[e] );
			this.UsersCanBeRemoved.splice(e, 1);
    }
  },
  created: function(){
    
  },
	data: function(){
		return {
			UsersCanBeAdded : JSON.parse( JSON.stringify( this.opt.users ) ),
			UsersCanBeRemoved : []
		}
	}
});