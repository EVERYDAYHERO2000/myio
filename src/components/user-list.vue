<template>
<div class="user-list">
  <div class="user-list__header">
    <div class="user-list__title">{{$d('Users')}}</div>
    <div class="user-list__counter">{{UsersCanBeRemoved.length}}</div>
  </div>

  <div 
  	class="user-list__users" 
  	v-if="UsersCanBeRemoved.length">
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
		v-bind:options="UsersCanBeAdded" 
		v-bind:active="0"
		v-bind:k="'id'"
		v-bind:v="'email'"
		v-on:onActive="this.addUser">
  </select-list>
		
</div>
</template>


<script>

	import F from '../functions/functions.js';

	import selectList from '../components/select-list.vue';
	import userItem from '../components/user-item.vue';


	export default {
		props: {
			opt: Object,
			app: Object
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
			},
			users: function() {
				let temp = JSON.parse(JSON.stringify(this.opt.userList));

				F.ifExist(temp, 'id', APP.$data.opt.user.id, function(e) {}, function(e) {
					temp.splice(e.index, 1);
				});

				return temp;
			}
		},
		data: function() {
			return {
				UsersCanBeAdded: this.users(),
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
			.flex-block();
			.justify-content(space-between);

		}

		&__users+&__list {
			margin: 0px 0 0 0 !important;
			padding: 20px 0 0 0;
		}

		&__title {
			font-weight: 500;
		}

		&__counter {
			color: @color-active;
		}

		&__add-user {
			.flex-block();
			.align-items(flex-end);
		}

		&__list {}

		&__header~&__list {
			margin: -20px 0 0 0;
		}

	}
</style>