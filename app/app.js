"use strict";

const APP = {};

//functions
APP.f = {}

//vue app
APP.$ = {};

APP.URL = {};
APP.URL.base = 'http://localhost/chattask_server';
APP.URL.auth = APP.URL.base + '/auth.php';
APP.URL.registration = APP.URL.base + '/registration.php';
APP.URL.addNew = APP.URL.base + '/addnew.php';

//load js
requirejs([
  //core
  'functions',
	'dictionary',
  'data',
	'auth',
	//components
  'app-states/app-states',
	'work-states/work-states',
	'app-modal/app-modal',
	'loading-spinner/loading-spinner',
	'toolbar/toolbar',
	'toolbar-tool/toolbar-tool',
	'text-field/text-field',
	'logo/logo',
	'btn/btn',
	'select-list/select-list',
  'login-form/login-form',
	'forgot-form/forgot-form',
	'registration-form/registration-form',
  'add-form/add-form',
	'panel-chats/panel-chats',
	'panel-header/panel-header',
	'chat-list-item/chat-list-item',
	'contact-icon-chip/contact-icon-chip',
  'user-list/user-list',
	'user-item/user-item'
], function () {


  APP.$ = new Vue({
    el: '#app',
    data: {
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
				taskList : [],
				users : []
			},
			auth: APP.f.auth.load()
    },
		created: function () {
			const __this__ = this;
			if (__this__.auth.authValid == 'true') {
				
				__this__.opt.options.app.screen = 'main';
				
			}
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
  });


});