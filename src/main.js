import Vue from 'vue';
import $ from 'jquery';
import App from './App.vue';
import VueSocketio from 'vue-socket.io';
import URL from './functions/urls-option.js';

Vue.use(VueSocketio, URL.sockets); 



new Vue({
	el: '#app',
	render: h => h(App),
	sockets: {
		connect: function () {
			console.log('socket connected')
		},
		customEmit: function (val) {
			console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
		}
	},
	created: function () {
		this.$socket.emit('chat message', 'kokoko');
		this.$socket.on('chat message',function(msg){console.log(msg)});
		this.$options.sockets.event_name = (data) => {
			console.log(data)
			
		}
	}
});
