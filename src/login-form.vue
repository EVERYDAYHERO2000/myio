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

		<div 
			class="login-form__link_forgot" 
			v-on:click="setState('forgot')">{{this.d('forgot password')}}
		</div>
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
	import request from './functions/request.js';
	import data from './functions/data.js';
	import lang from './functions/lang.js';
	
	import btn from './components/btn.vue';
	import textField from './components/text-field.vue';
	import logo from './components/logo.vue';
	
	export default {
		props: {
			opt: Object,
			app: Object
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
			let __auth = auth.load();
			if (__auth.authValid == 'true') this.loadData(__auth.email, __auth.pass);
			
		},
		methods: {
			setState: function(s) {
				let $el = this.$el;
				let __this = this;
				$($el).addClass('login-form_hide').delay(200).queue(function() {
					
					__this.app.screen = s;
					
				});
			},
			d: function(w){
				return this.app.d[w.toLowerCase()][this.app.lang];
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
					this.loadData(__email, __pass);
					
				} else {
					this.incorrect();
				}
			},
			loadData: function(email, pass) {
				let __this = this;
				this.app.screen = 'loading';
				
				request.post('login',{
					email: email,
					pass: pass
				}, function(e){
					APP.$data.opt = data.loadData(e.data);
					auth.setup(email, pass);
					lang.setLang(e.data.user.lang);
					__this.setState('main');
					
				});
				
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
		.fullscreen-form();
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
			.animation(form-bounce .5s 1 ease);
			
			& * {
				pointer-events: none;
			}
		}
	
	}
</style>