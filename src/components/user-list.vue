<template>
<div class="user-list">
  <div class="user-list__header">
    <div class="user-list__title">Users</div>
    <div class="user-list__counter">{{UsersCanBeRemoved.length}}</div>
  </div>

  <div class="user-list__users" v-if="UsersCanBeRemoved.length">
		<user-item 
			v-for="(user, index) in UsersCanBeRemoved" 
			v-on:onRemove="removeUser" 
			v-bind:opt="user"
			v-bind:key="user.id" 
			v-bind:index="index">
		</user-item>	
  </div>
  
	<select-list 
		v-if="UsersCanBeAdded.length"
		v-bind:class="'user-list__list'"
		v-bind:name="name" 
		v-bind:options="UsersCanBeAdded" 
		v-bind:active="0"
		v-bind:k="'id'"
		v-bind:v="'name'"
		v-on:onActive="this.addUser">
  </select-list>
		
</div>
</template>


<script>
	import $ from 'jquery';
	
	import selectList from '../components/select-list.vue';
	import userItem from '../components/user-item.vue';
	
	export default {
		props: {
			opt: Object,
			name: String
		},
		components: {
			selectList: selectList,
			userItem: userItem
		},
		methods: {
			addUser: function(e) {
				this.UsersCanBeRemoved.push(this.UsersCanBeAdded[e]);
				this.UsersCanBeAdded.splice(e, 1);
				this.$emit('onValue', this.UsersCanBeRemoved);
			},
			removeUser: function(e) {
				this.UsersCanBeAdded.push(this.UsersCanBeRemoved[e]);
				this.UsersCanBeRemoved.splice(e, 1);
			}
		},
		created: function(){
			
		},
		mounted: function() {
			this.UsersCanBeAdded = JSON.parse(JSON.stringify(this.opt.users));
		},
		data: function() {
			return {
				UsersCanBeAdded: [],
				UsersCanBeRemoved: []
			}
		}
	}
</script>


<style lang="less">
	@import '../less/main.less';
	
	.user-list {
		box-sizing: border-box;
		padding: 40px 0 0 0;

		&__header {
			font-size: @font-size-main;
			padding: 0 5px;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;

		}

		&__users+&__list {
			margin: -30px 0 0 0 !important;
		}

		&__title {
			font-weight: 500;
		}

		&__counter {
			color: @color-active;
		}

		&__add-user {
			display: flex;
			align-items: flex-end;
		}

		&__list {}

		&__header~&__list {
			margin: -20px 0 0 0;
		}

	}
</style>