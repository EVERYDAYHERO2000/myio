import Vue from 'vue';
import $ from 'jquery';
import App from './App.vue';
import URL from './functions/urls-option.js';
import VueSocketio from 'vue-socket.io';
import d from './plugins/d.js';

Vue.use(VueSocketio, URL.sockets); 
Vue.use(d); 

new Vue({
	el: '#app',
	render: h => h(App),
	
	created: function () {
		
	}
});
