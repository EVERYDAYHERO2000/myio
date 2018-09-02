<template>
	<screen
		v-bind:param="nextScreen"
		v-bind:logo="true"
		v-bind:incorrect="incorrect"
		v-on:onClose="setState">

		<text-field 
			v-on:onValue="setEmail" 
			v-bind:label="$d('Email')" 
			v-bind:type="'email'">
		</text-field>

		<text-field 
			v-on:onValue="setPass"
			v-bind:label="$d('Password')" 
			v-bind:type="'password'">
		</text-field>

		<div 
			class="link_forgot" 
			v-on:click="nextScreen = 'forgot'">
			{{$d('forgot password')}}
		</div>
		
		<btn-group>

			<btn 
				v-bind:label="$d('log in')" 
				v-on:onClick="login">
			</btn>

			<btn 
				v-bind:label="$d('Sign in')" 
				v-bind:theme="'link'"
				v-on:onClick="nextScreen = 'registration'" >
			</btn>

		</btn-group>
		
	</screen>
</template>


<script>

	import auth 				from './functions/auth.js';
	import request 			from './functions/request.js';
	import data 				from './functions/data.js';
	import lang 				from './functions/lang.js';
	
	import btn 					from './components/btn/btn.vue';
	import textField 		from './components/text-field/text-field.vue';
	import logo	 				from './components/logo/logo.vue';
	import btnGroup 		from './components/btn-group/btn-group.vue';
	import screen 			from './components/screen/screen.vue';
	
	export default {
		props: {
			opt: Object,
			app: Object
		},
		components: {
			btn : btn,
			textField : textField,
			logo : logo,
			btnGroup : btnGroup,
			screen : screen
		},
		data: function() {
			return {
				__pass: '',
				__email: '',
				incorrect: false,
				nextScreen: ''
			}
		},
		beforeMount: function() {
			let __auth = auth.load();
			if (__auth.authValid == 'true') this.loadData(__auth.email, __auth.pass);
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
			login: function() {
				let __this = this,
					__email = this.__email,
					__pass = this.__pass;

				if (__email && __pass) {
					this.loadData(__email, __pass);
					
				} else {
					this.incorrect = true;
				}
			},
			loadData: function(email, pass) {
				let __this = this;
				__this.setState('loading');
				
				request.post('login',{
					email: email,
					pass: pass
				}, function(e){
					APP.$data.opt = data.loadData(e.data);
					auth.setup(email, pass);
					lang.setLang(e.data.user.lang);
					__this.setState('main');
					
				});
			}
		}
	}
</script>


<style lang="less">
	@import './less/main.less';
	.link_forgot {
		text-align: right;
		line-height: 32px;
		color: @color-active;
	}
</style>