"use strict";
/*
Форма добавления нового: чата, задачи, пользователя
*/
Vue.component('add-form', {
	props:['opt'],
  template: 
`<div class="add-form">

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
				v-bind:lable="'Title'">
			</text-field>

      <text-field 
				v-on:onValue="setDescription" 
				v-bind:type="'text'"
				v-bind:lable="'Description'">
			</text-field>

      <text-field 
				v-on:onValue="setDate"
				v-bind:value="this.date"
				v-bind:type="'date'"
				v-bind:lable="'Deadline date'">
			</text-field>

      <user-list 
				v-on:onValue="setUserList"
				v-bind:opt="opt">
			</user-list>

      <div class="add-form__button-group">
		    <btn v-bind:title="'Create'" v-on:click.native="createNew"></btn>
      </div>
    </div>

    <div v-if="this.active == 1">

      <text-field 
				v-on:onValue="setTitle"
				v-bind:type="'text'"
				v-bind:lable="'Title'">
			</text-field>

      <text-field 
				v-on:onValue="setDescription"
				v-bind:type="'text'"
				v-bind:lable="'Description'">
			</text-field>

      <user-list 
				v-on:onValue="setUserList"
				v-bind:opt="opt">
			</user-list>

      <div class="add-form__button-group">
		    <btn v-bind:title="'Create'" v-on:click.native="createNew"></btn>
      </div>
    </div>

    <div v-if="this.active == 2">

      <text-field 
				v-on:onValue="setEmail" 
				v-bind:type="'email'"
				v-bind:lable="'Email'">
			</text-field>

      <div class="add-form__button-group">
		    <btn v-bind:title="'Invite'" v-on:click.native="createNew"></btn>
      </div>
    </div>

</div>`,
	methods: {
		setState: function(s) {
			let $el = this.$el;
			$($el).addClass('add-form_hide').delay(200).queue(function(){
				
			});
		},
    setActive: function(e){
      this.active = e;
    },
		setTitle: function(e){
			this.title = e;
		},
		setDescription: function(e){
			this.description = e;
		},
		setEmail: function(e){
			this.email = e;
		},
		setDate: function(e){
			this.date = e;
		},
		setUserList: function(e){
			this.userList = e;
		},
		createNew: function(){
			
			let data = {
				author: APP.$.$data.opt.options.id,
				eventType : this.dataType[this.active].name,
				title: this.title,
				description: this.description,
				email: this.email,
				date: this.date,
				userList: this.userList
			}
			console.log(data);
		}
	},
  data: function () {
		return {
			dataType: [
				{
					value: '1',
					name: 'New task'
				},
					{
						value: '2',
						name: 'New chat'
				},
					{
						value: '3',
						name: 'Add user'
				}
			],
			active: 0,
			title : '',
			description : '',
			email : '',
			date : APP.f.getDateTime().dateOnly,
			userList: []
		}
	}
});