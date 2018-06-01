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
    v-on:onActive="this.getActive">
  </select-list>
    
    <div v-if="this.active == 0">
      <text-field v-bind:lable="'Task title'"></text-field>
      <text-field v-bind:lable="'Description'"></text-field>
      <text-field v-bind:lable="'Deadline date'"></text-field>
      <user-list v-bind:opt="opt"></user-list>
      <div class="add-form__button-group">
		    <btn v-bind:title="'Create'" v-on:click.native="setState('main')"></btn>
      </div>
    </div>

    <div v-if="this.active == 1">
      <text-field v-bind:lable="'Chat title'"></text-field>
      <text-field v-bind:lable="'Description'"></text-field>
      <user-list v-bind:opt="opt"></user-list>
      <div class="add-form__button-group">
		    <btn v-bind:title="'Create'" v-on:click.native="setState('main')"></btn>
      </div>
    </div>

    <div v-if="this.active == 2">
      <text-field v-bind:lable="'Email'"></text-field>
      <div class="add-form__button-group">
		    <btn v-bind:title="'Invite'" v-on:click.native="setState('main')"></btn>
      </div>
    </div>

</div>`,
	methods: {
		setState: function(s) {
			let $el = this.$el;
			$($el).addClass('add-form_hide').delay(200).queue(function(){
				
			});
		},
    getActive: function(e){
      this.active = e;
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
    active: 0
		}
	}
});