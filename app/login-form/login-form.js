"use strict";
/*
форма входа
*/
Vue.component('login-form', {
	props: ['opt'],
	template: 
`<div class="login-form">
  <div class="login-form__logo">
    <logo></logo>
  </div>
  <text-field v-bind:lable="'Email'" v-bind:type="'email'"></text-field>
  <text-field v-bind:lable="'Password'" v-bind:type="'password'"></text-field>
  <div class="login-form__link_forgot" v-on:click="setState('forgot')">Forgot password</div>
  <div class="login-form__button-group">
		<btn v-bind:title="'Login'" v-on:click.native="setState('main')"></btn>
		<btn v-bind:title="'Sign in'" v-bind:class="'btn_link'" v-on:click.native="setState('registration')" ></btn>
  </div>
</div>`,
	methods: {
		setState: function (s) {
			let $el = this.$el;
			$($el).addClass('login-form_hide').delay(200).queue(function () {
				APP.$.$data.opt.options.app.screen = s;
			});
		}
	}
});