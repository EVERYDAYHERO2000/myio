<template>
	<div class="app__inner">
	<app-states v-bind:opt="opt"></app-states>
	<app-modal v-bind:opt="opt"></app-modal>
	</div>
</template>

<script>
	import $ from 'jquery';
	import platform from 'platform';
	
	
	
	import auth from './functions/auth.js';

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
						email: null,
						id: null,
						login: null,
						name: null,
						pined_id: null,
						app: {
							modal: false,
							screen: "login",
							state: "chats"
						}
					},
					taskList: [],
					users: []
				},
				auth: auth.load()
			}
		},
		created: function () {
			window.APP = this;
			if (this.auth.authValid == 'true') this.opt.options.app.screen = 'main';
			
			$('body').addClass(function(){
				let classList = '';
				classList = classList + platform.os.family.replace(/ /g, '-').toLowerCase() + ' ';
				classList = classList + platform.name.replace(/ /g, '-').toLowerCase() + ' ';
				console.log(platform)	
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