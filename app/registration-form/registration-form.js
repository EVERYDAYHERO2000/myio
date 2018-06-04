"use strict";
/*
форма регистрации
*/
Vue.component('registration-form', {
	props:['opt'],
  template: 
	`<div class="registration-form">
		<div class="registration-form__header">Create your account</div>

		<text-field 
			v-on:onValue="setLogin" 
			v-bind:lable="'Login'">
		</text-field>

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

    <text-field 
			v-on:onValue="setPass"
			v-bind:lable="'Confirm password'" 
			v-bind:type="'password'">
		</text-field>

		<div class="registration-form__button-group">

			<btn 
				v-bind:title="'Sign in'" 
				v-on:click.native="registration">
			</btn>

			<btn
				v-bind:title="'Login'" 
				v-bind:class="'btn_link'" 
				v-on:click.native="setState('login')" >
			</btn>

		</div>
	</div>`,
	dats: function(){
		return {
			__login: '',
			__pass: '',
			__email: ''
		}
	},	
	methods: {
		setState: function(s) {
			let $el = this.$el;
			$($el).addClass('registration-form_hide').delay(200).queue(function(){
				APP.$.$data.opt.options.app.screen = s;
			});
		},
		setPass: function(e){
			this.__pass = e;
		},
		setEmail: function(e){
			this.__email = e;
		},
		setLogin: function(e){
			this.__login = e;
		},
		registration: function() {
			let __this = this,
					__login = this.__login,
					__email = this.__email,
					__pass = this.__pass;
			
			if (__login && __email && __pass){
				$.post(APP.URL.registration, {
					login: __login,
					email: __email,
					pass: __pass
					
				}, function(e){
					
					if (e == true){
						__this.setState('login');
					}
					
				});
			}
			
		}
	}
});