<template>
	<div class="app__inner" v-bind:lang="opt.options.app.lang">
	<app-states v-bind:opt="opt"></app-states>
	<app-modal v-bind:opt="opt"></app-modal>
	</div>
</template>

<script>
	import $ from 'jquery';
	import platform from 'platform';
	
	import auth from './functions/auth.js';
	import lang from './functions/lang.js';
	import d from './functions/dictionary.js';

	import appStates from './app-states.vue';
	import appModal from './app-modal.vue';

	export default {
		name: 'app',
		components: {
			appStates : appStates,
			appModal : appModal
		},
		data: function() {
			return {
				opt: {
					inboxList: [],
					messages: [],
					options: {
						d: d, 
						email: null,
						id: null,
						login: null,
						name: null,
						pined_id: null,
						app: {
							modal: false,
							screen: "login",
							state: "chats",
							lang: lang.load()
						}
					},
					taskList: [],
					users: []
				},
				auth: auth.load()
			}
		},
		methods: {
			setLang: lang.setLang
		},
		created: function () {
			window.APP = this;
			if (this.auth.authValid == 'true') this.opt.options.app.screen = 'main';
			
			
			$('body').addClass(function(){
				let classList = '';
				classList = classList + platform.os.family.replace(/ /g, '-').toLowerCase() + ' ';
				classList = classList + platform.name.replace(/ /g, '-').toLowerCase() + ' ';
				
				return classList.trim();
			})
				
		},
		mounted: function () {
      $('#loading').remove();

      $(window).bind('mousewheel DOMMouseScroll', function (event) {
        if (event.ctrlKey == true) {
          event.preventDefault();
        }
      });
      $(document).bind("contextmenu", function (e) {
        //return false;
      });
    }
	}
	
</script>

<style lang="less">
	@import '~normalize.css/normalize.css';
	@import './less/prefixer.less';
	@import './less/font.less'; 
	@import './less/main.less'; 
	@import './less/loading-spinner.less';
	
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
		cursor:default;
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

	#app, .app__inner {
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
</style>