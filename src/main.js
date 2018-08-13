import Vue from 'vue';
import $ from 'jquery';
import App from './App.vue';
import URL from './functions/urls-option.js';
import VueSocketio from 'vue-socket.io';

Vue.use(VueSocketio, URL.sockets); 

new Vue({
	el: '#app',
	render: h => h(App),
	
	created: function () {
		
	}
});
