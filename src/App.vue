<template>
	<div 
		class="app" 
		v-bind:class="getSystem()"
		v-bind:lang="app.lang"
		v-on:mousewheel="disableZoom"
		v-on:DOMMouseScroll="disableZoom">
		
		<div class="app-states">
				
			<div 
				class="app-states__screen" 
				v-if="app.screen === 'loading'">
				<loading-spinner>
				</loading-spinner>
			</div>

			<div 
				class="app-states__main" 
				v-else-if="app.screen === 'main'">
				<toolbar 
					v-bind:opt="opt" 
					v-bind:app="app">
				</toolbar>
				<work-states 
					v-bind:opt="opt"
					v-bind:app="app">
				</work-states>
			</div>

			<div 
				class="app-states__screen" 
				v-else-if="app.screen === 'registration'">
				<state-registration 
					v-bind:opt="opt"
					v-bind:app="app">
				</state-registration>
			</div>

			<div 
				class="app-states__screen" 
				v-else-if="app.screen === 'forgot'">
				<state-forgot 
					v-bind:opt="opt"
					v-bind:app="app">
				</state-forgot>
			</div>

			<div 
			 class="app-states__screen" 
			 v-else-if="app.screen === 'login'">
				<state-login 
					v-bind:opt="opt"
					v-bind:app="app">
				</state-login>
			</div>

		</div>
		
		<modal 
			v-bind:isVisible="app.modal">
		</modal>
		
		<context-menu
			v-bind:isShowed="app.context.isShowed"
			v-bind:menu="app.context.menu"
			v-bind:y="app.context.y"
			v-bind:x="app.context.x">
		</context-menu>
	
	</div>
</template>

<script>
	import platform 					from 'platform';

	import auth 							from './functions/auth.js';
	import lang 							from './functions/lang.js';

	import contextMenu 				from './components/context-menu.vue';
	import modal 							from './components/modal.vue';
	import loadingSpinner 		from './components/loading-spinner.vue';
	import toolbar 						from './toolbar.vue';
	import stateRegistration 	from './state-registration.vue';
	import stateForgot 				from './state-forgot.vue';
	import stateLogin 				from './state-login.vue';
	import workStates 				from './work-states.vue';

	export default {
		name: 'app',
		components: {
			modal: modal,
			contextMenu: contextMenu,
			workStates: workStates,
			loadingSpinner: loadingSpinner,
			toolbar: toolbar,
			stateRegistration: stateRegistration,
			stateForgot: stateForgot,
			stateLogin: stateLogin
		},
		data: function() {
			return {
				opt: {},
				auth: auth.load(),
				app: {
					modal: false,
					screen: "login",
					state: "chats",
					context: {
						isShowed: false,
						menu: [],
						x: null,
						y: null
					},
					lang: lang.load()
				}
			}
		},
		methods: {
			
			setLang: lang.setLang,
			
			getSystem : function(){
				return [
					platform.os.family.replace(/ /g, '-').toLowerCase(),
					platform.name.replace(/ /g, '-').toLowerCase()
				].join(' ');
			},
			
			disableZoom: function(e){
				if (e.ctrlKey == true) e.preventDefault();
			}
			
		},
		created: function() {
			window.APP = this;
		}
	}
</script>

<style lang="less">
	@import '~normalize.css/normalize.css';
	@import './less/prefixer.less';
	@import './less/font.less';
	@import './less/main.less';
	@import './less/loading-spinner.less';
	@import './less/animations.less';

	:root {
		--color-background: @color-background;
		--color-white: @color-white;
		--color-black: @color-black;
		--color-border: @color-border;
		--color-gray-font: @color-gray-font;
		--color-active: @color-active;
		--color-hover: @color-hover;
		--color-border-active: @color-border-active;
		--color-border-hover: @color-border-hover;
		--color-error: @color-error;
		--logo-color-main: @color-active;
		--logo-color-main-tint: darken(@color-active, 20%);
		--logo-color-font: @color-black;
		--logo-color-second: @color-white;
		--logo-color-second-tint: darken(@color-white, 20%);
	}

	body {
		margin: 0;
		padding: 0;
		.user-select(none);
		overflow: hidden;
		font-family: Roboto, Noto Sans, -apple-system, BlinkMacSystemFont, sans-serif;
		font-size: @font-size-main;
		color: @color-black;
		.f-font-smooth();
		cursor: default;
		scroll-behavior: smooth;
	}

	a {
		color: @color-active;
		text-decoration: none;

		&:focus {
			outline: none;
		}
	}

	input {
		font-family: Roboto, Noto Sans, -apple-system, BlinkMacSystemFont, sans-serif;
	}

	button {
		color: @color-black;
	}

	#app,
	.app {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 100;
	}

	#loading {
		width: 100%;
		height: 100%;
		background-color: @color-white;
	}

	.app-states {
		width: 100vw;
		height: 100vh;
		position: absolute;
		overflow: hidden;
		top: 0;
		left: 0;
		box-sizing: border-box;
		background-color: @color-background;
		.transition(all .3s ease);

		&__screen {
			width: 100%;
			height: 100%;
			background-color: @color-white;
			.animation(app-states_show .3s ease 1);
			.vertical-scroll();
		}

		&__main {
			width: 100%;
			height: 100%;
		}
	}
</style>