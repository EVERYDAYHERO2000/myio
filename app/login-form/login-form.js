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

  <text-field 
		v-on:onValue="setEmail" 
		v-bind:lable="'Email'" 
		v-bind:type="'email'">
	</text-field>

  <text-field 
		v-on:onValue="setPass"
		v-bind:lable="'Password'" 
		v-bind:type="'password'">
	</text-field>

  <div class="login-form__link_forgot" v-on:click="setState('forgot')">Forgot password</div>
  <div class="login-form__button-group">

		<btn 
			v-bind:title="'Login'" 
			v-on:click.native="login">
		</btn>

		<btn 
			v-bind:title="'Sign in'" 
			v-bind:class="'btn_link'" 
			v-on:click.native="setState('registration')" >
		</btn>

  </div>
</div>`,
	dats: function(){
		return {
			__pass: '',
			__email: ''
		}
	},
	beforeMount: function(){
		//if (localStorage['authValid']) __this__.setState('main');
		
	},
	methods: {
		setState: function (s) {
			let $el = this.$el;
			$($el).addClass('login-form_hide').delay(200).queue(function () {
				APP.$.$data.opt.options.app.screen = s;
			});
		},
		setPass: function(e){
			this.__pass = e;
		},
		setEmail: function(e){
			this.__email = e;
		},
		login: function() {
			let __this = this,
					__email = this.__email,
					__pass = this.__pass;
			
			if (__email && __pass){
				
				$.post(APP.URL.auth, {
					email:__email,
					pass: __pass
				}, function(e){

					if (e == true){
						APP.f.auth.setup(__email, __pass);
						__this.setState('main');
					}

				});
			}
		}
	}
});