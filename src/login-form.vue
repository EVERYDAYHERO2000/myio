<template>
	<div class="login-form">
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
				v-on:onClick="login">
			</btn>

			<btn 
				v-bind:title="'Sign in'" 
				v-bind:class="'btn_link'" 
				v-on:onClick="setState('registration')" >
			</btn>

		</div>
	</div>
</template>


<script>
	import $ from 'jquery';
	import auth from './functions/auth.js';
	import URL from './functions/urls-option.js';
	
	import btn from './components/btn.vue';
	import textField from './components/text-field.vue';
	import logo from './components/logo.vue';
	
	export default {
		props: {
			opt: Object
		},
		components: {
			btn : btn,
			textField : textField,
			logo : logo
		},
		data: function() {
			return {
				__pass: '',
				__email: ''
			}
		},
		created: function(){
			
		},
		beforeMount: function() {
			//if (localStorage['authValid']) __this__.setState('main');
		},
		methods: {
			setState: function(s) {
				let $el = this.$el;
				let __this__ = this;
				$($el).addClass('login-form_hide').delay(200).queue(function() {
					//APP.$.$data.opt.options.app.screen = s;
					__this__.opt.options.app.screen = s;
					
				});
			},
			setPass: function(e) {
				this.__pass = e;
			},
			setEmail: function(e) {
				this.__email = e;
			},
			login: function() {
				let __this = this,
					__email = this.__email,
					__pass = this.__pass;

				if (__email && __pass) {

					$.post(URL.auth, {
						email: __email,
						pass: __pass
					}, function(e) {

						if (e == true) {
							auth.setup(__email, __pass);
							__this.setState('main');
						}

					});
				}
			}
		}
	}
</script>


<style lang="less">
	@import './less/main.less';

	.login-form {
		width: 250px;
		margin: 0 auto;
		height: 100vh;
		.flex-block();
		.flex-direction(column);
		.justify-content(center);
		opacity: 1;

		&__link_forgot {
			text-align: right;
			line-height: 32px;
			color: @color-active;
		}

		&__button-group {
			.flex-block();
			.justify-content(space-between);

			& .btn:first-child {
				margin-right: 20px;
			}
		}

		&__logo {
			.flex-block();
			.justify-content(center);
		}

		&_hide {
			opacity: 0;
			.transition(all 0.2s ease);
		}
	}
</style>