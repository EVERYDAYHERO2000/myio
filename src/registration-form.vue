<template>
	<div class="registration-form">
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
					v-on:onClick="registration">
				</btn>

				<btn
					v-bind:title="'Login'" 
					v-bind:class="'btn_link'" 
					v-on:onClick="setState('login')" >
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
		data: function() {
			return {
				__login: '',
				__pass: '',
				__email: ''
			}
		},
		components: {
			btn : btn,
			textField : textField,
			logo : logo
		},
		methods: {
			setState: function(s) {
				let $el = this.$el;
				let __this__ = this;
				$($el).addClass('registration-form_hide').delay(200).queue(function() {
					__this__.opt.options.app.screen = s;
				});
			},
			setPass: function(e) {
				this.__pass = e;
			},
			setEmail: function(e) {
				this.__email = e;
			},
			setLogin: function(e) {
				this.__login = e;
			},
			registration: function() {
				let __this = this,
					__login = this.__login,
					__email = this.__email,
					__pass = this.__pass;

				if (__login && __email && __pass) {
					$.post(URL.registration, {
						login: __login,
						email: __email,
						pass: __pass

					}, function(e) {

						if (e == true) {
							__this.setState('login');
						}

					});
				}

			}
		}
	}
</script>


<style lang="less">
	@import './less/main.less';
	.registration-form {
		width: 250px;
		margin: 0 auto;
		height: 100vh;
		.flex-block();
		.flex-direction(column);
		.justify-content(center);
		opacity: 1;

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

		&__header {
			font-size: 24px;
			font-weight: 500;
			text-align: center;
			padding: 0 5px;
		}

		&_hide {
			opacity: 0;
			transition: all 0.2s ease;
		}
	}
</style>