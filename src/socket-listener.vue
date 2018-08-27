<template>

</template>


<script>
import F from './functions/functions.js';	
	
export default {
	sockets: {
			connect: function () {
				console.log('socket connected')
			},
			customEmit: function (val) {
				console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
			}
	},
	created: function(){
		this.$socket.on('chat message',function(msg){
				let temp = JSON.parse(msg);
				
				F.ifExist(APP.$data.opt.chats, 'id', temp.data.chatsId, undefined, function(e){
					APP.$data.opt.messages.push(temp.data);
				});
				
			});
			
			this.$socket.on('add user',function(msg){
				let temp = JSON.parse(msg);
				
				if (F.ifExist(APP.$data.opt.spaceRoles, 'spaceId', temp.spaceId)){

					request.post('loadUser', {
						id : temp.userId
					}, function(d){
						APP.$data.opt.userList.push(d.data[0]);
					});
				}
				
				
				
			});
			
			this.$options.sockets.event_name = (data) => {
				console.log(data)
			
			}
	}
}	

</script>


<style lang="less">

</style>