<template>
	<div class="forgot-form">
		<div class="login-form__logo">
			<logo></logo>
		</div>
			<text-field 
				v-bind:label="this.d('Email')" 
				v-bind:type="'email'">
			</text-field>
			
		<btn-group>
			<btn 
				v-bind:label="this.d('request password')">
			</btn>
		</btn-group>
		
	</div>
</template>


<script>
	import $ from 'jquery';
	import auth from './functions/auth.js';
	import URL from './functions/urls-option.js';
	
	import btn from './components/btn.vue';
	import textField from './components/text-field.vue';
	import logo from './components/logo.vue';
	import btnGroup from './components/btn-group.vue';
	
	export default {
		props: {
			opt: Object,
			app: Object
		},
		components: {
			btn : btn,
			textField : textField,
			logo : logo,
			btnGroup : btnGroup 
		},
		methods: {
			d: function(w){
				return this.app.d[w.toLowerCase()][this.app.lang];
			}
		}
	}
</script>


<style lang="less">
	@import './less/main.less';
	.forgot-form {
		.fullscreen-form();
		opacity: 1;

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