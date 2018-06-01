"use strict";
/*
форма регистрации
*/
Vue.component('registration-form', {
	props:['opt'],
  template: 
	`<div class="registration-form">
		<div class="registration-form__header">Create your account</div>
		<text-field v-bind:lable="'Login'"></text-field>
		<text-field v-bind:lable="'Email'" v-bind:type="'email'"></text-field>
		<text-field v-bind:lable="'Password'" v-bind:type="'password'"></text-field>
    <text-field v-bind:lable="'Confirm password'" v-bind:type="'password'"></text-field>
		<div class="registration-form__button-group">
			<btn v-bind:title="'Sign in'" v-on:click.native="setState('main')"></btn>
			<btn v-bind:title="'Login'" v-bind:class="'btn_link'" v-on:click.native="setState('login')" ></btn>
		</div>
	</div>`,
	methods: {
		setState: function(s) {
			let $el = this.$el;
			$($el).addClass('registration-form_hide').delay(200).queue(function(){
				APP.$.$data.opt.options.app.screen = s;
			});
		}
	}
});