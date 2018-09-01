<template>

	<screen
		v-bind:param="nextScreen"
		v-bind:logo="false"
		v-bind:incorrect="incorrect"
		v-bind:header="$d('Create your account')"
		v-on:onClose="setState">
		
			<text-field 
				v-on:onValue="setLogin" 
				v-bind:label="$d('Login')">
			</text-field>

			<text-field 
				v-on:onValue="setEmail" 
				v-bind:label="$d('Email')" 
				v-bind:type="'email'">
			</text-field>
			
			<text-field 
				v-on:onValue="setSpace" 
				v-bind:label="$d('Space')">
			</text-field>

			<text-field 
				v-on:onValue="setPass" 
				v-bind:label="$d('Password')" 
				v-bind:type="'password'">
			</text-field>

			<text-field 
				v-on:onValue="setPass"
				v-bind:label="$d('Confirm password')" 
				v-bind:type="'password'">
			</text-field>

			<btn-group>

				<btn 
					v-bind:label="$d('Sign in')" 
					v-on:onClick="registration">
				</btn>

				<btn
					v-bind:label="$d('Log in')" 
					v-bind:type="'link'"
					v-on:onClick="nextScreen = 'login'" >
				</btn>

			</btn-group>
			
	</screen>
	
</template>


<script>

	import auth from './functions/auth.js';
	import request from './functions/request.js';
	
	import btn from './components/btn.vue';
	import textField from './components/text-field.vue';
	import logo from './components/logo.vue';
	import btnGroup from './components/btn-group.vue';
	import screen from './components/screen.vue';
	
	export default {
		props: {
			opt: Object,
			app: Object
		},
		data: function() {
			return {
				__login: '',
				__pass: '',
				__space: '',
				__email: '',
				incorrect: false,
				nextScreen: ''
			}
		},
		components: {
			btn : btn,
			textField : textField,
			logo : logo,
			btnGroup : btnGroup,
			screen : screen
		},
		methods: {
			setState: function(s) {
				this.app.screen = s;
			},
			setPass: function(e) {
				this.__pass = e;
			},
			setEmail: function(e) {
				this.__email = e;
			},
			setSpace: function(e) {
				this.__space = e;
			},
			setLogin: function(e) {
				this.__login = e;
			},
			registration: function() {
				let __this = this,
					__login = this.__login,
					__email = this.__email,
					__space = this.__space,	
					__pass = this.__pass;

				if (__login && __email && __pass) {
					
					request.post('registration', {
						login: __login,
						email: __email,
						space: __space,
						pass: __pass
					}, function(e){
						__this.setState('login');	
					});
					
				}

			}
		}
	}
</script>


<style lang="less">
	@import './less/main.less';
</style>