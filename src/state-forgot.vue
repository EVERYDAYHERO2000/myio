<template>

	<screen
		v-bind:param="nextScreen"
		v-bind:logo="false"
		v-bind:header="$d('request password')"
		v-bind:incorrect="incorrect"
		v-on:onClose="setState">
		
		<text-field 
			v-bind:label="$d('Email')" 
			v-bind:type="'email'">
		</text-field>
			
		<btn-group>
			
			<btn 
				v-bind:label="$d('send')">
			</btn>
			
			<btn 
				v-bind:label="$d('Back')" 
				v-bind:theme="'link'"
				v-on:onClick="nextScreen = 'login'" >
			</btn>
			
		</btn-group>
		
	</screen>
	
</template>


<script>

	import auth 				from './functions/auth.js';
	import URL 					from './functions/urls-option.js';
	
	import btn 					from './components/btn/btn.vue';
	import textField 		from './components/text-field/text-field.vue';
	import logo 				from './components/logo/logo.vue';
	import btnGroup 		from './components/btn-group/btn-group.vue';
	import screen 			from './components/screen/screen.vue'
	
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
				incorrect: false,
				nextScreen: ''
			}
		},
		methods: {
			setState: function(s) {
				this.app.screen = s; 
			},
		}
	}
</script>


<style lang="less">
	@import './less/main.less';
	
</style>