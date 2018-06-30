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
				v-bind:opt="opt">
			</user-list>

      <div class="add-form__button-group">
		    <btn v-bind:label="this.d('create')" v-on:click.native="createNew"></btn>
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
	import d from './functions/dictionary.js';

	import btn from './components/btn.vue';
	import textField from './components/text-field.vue';
	import selectList from './components/select-list.vue';
	import userList from './components/user-list.vue';

	
	export default {
		props: {
			opt: Object
		},
		components: {
			btn: btn,
			textField: textField,
			selectList: selectList,
			userList: userList
		},
		created: function() {
			console.log(this.opt.options.app.lang)
		},
		methods: {
			setState: function(s) {
				let $el = this.$el;
				$($el).addClass('add-form_hide').delay(200).queue(function() {

				});
			},
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
				return this.opt.options.d[w.toLowerCase()][this.opt.options.app.lang];
			},
			createNew: function() {

				let data = {
					author: this.opt.options.id,
					eventType: this.dataType[this.active].name,
					title: this.title,
					description: this.description,
					email: this.email,
					date: this.date,
					userList: this.userList
				}
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
			font-size: 24px;
			font-weight: 500;
			text-align: center;
			padding: 0 5px;
		}

		&_hide {
			opacity: 0;
			.transition(all 0.2s ease);
		}
	}
</style>