<template>
	<div class="login-form">
		<div class="login-form__logo">
			<logo></logo>
		</div>

		<text-field 
			v-on:onValue="setEmail" 
			v-bind:label="this.d('Email')" 
			v-bind:type="'email'">
		</text-field>

		<text-field 
			v-on:onValue="setPass"
			v-bind:label="this.d('Password')" 
			v-bind:type="'password'">
		</text-field>

		<div class="login-form__link_forgot" v-on:click="setState('forgot')">{{this.d('forgot password')}}</div>
		<div class="login-form__button-group">

			<btn 
				v-bind:label="this.d('log in')" 
				v-on:onClick="login">
			</btn>

			<btn 
				v-bind:label="this.d('Sign in')" 
				v-bind:type="'link'"
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
			d: function(w){
				return this.opt.options.d[w.toLowerCase()][this.opt.options.app.lang];
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
						eventType: 'login',
						email: __email,
						pass: __pass
					}, function(data) {
						
						if (data.status == true) {
							auth.setup(__email, __pass);
							__this.setState('main');
						}

					}, 'json');
				} else {
					this.incorrect();
				}
			},
			incorrect: function() {
				let $el = this.$el;
				$($el).addClass('login-form_incorrect').delay(500).queue(function() {
					$(this).removeClass('login-form_incorrect');
					$(this).dequeue(); 
				});
			} 
		}
	}
</script>


<style lang="less">
	@import './less/main.less';
	@import './less/animations.less';

	.login-form {
		width: @width-form;
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
		
		&_incorrect {
			animation: form-bounce .5s 1 ease;
			
			& * {
				pointer-events: none;
			}
		}
	
	}
</style>