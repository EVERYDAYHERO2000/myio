<template>
	
	<div class="work-states">
	
		<div 
			class="work-states__state" 
			v-if="app.state === 'chats'">
			
			<split-panel>

				<!--CHATS-->
					<panel-chats 
						slot="left"
						v-bind:opt="opt" 
						v-bind:app="app" 
						v-bind:type="'chats'" 
						v-bind:panelTitle="$d('Chats')">
					</panel-chats>
				<!--CHATS END-->
				
				<!--MESSAGES-->				 
					<panel-messages 
						slot="center"
						v-bind:opt="opt"
						v-bind:panelTitle="$d('Messages')">
					</panel-messages>
				<!--MESSAGES END-->
				
				<!--TASKS-->  
					<panel-tasks 
						slot="right"
						v-bind:opt="opt"
						v-bind:app="app"
						v-bind:type="'tasks'" 
						v-bind:panelTitle="$d('Tasks')">
					</panel-tasks>
				<!--TASKS END-->
				
			</split-panel>
			
		</div>

		<div 
			class="work-states__state" 
			v-if="app.state === 'settings'">
			<settings-form 
				v-bind:app="app"
				v-bind:opt="opt">
			</settings-form>
		</div>
		
		<div 
			class="work-states__state" 
			v-if="app.state === 'files'">
		files
		</div>
		
		<div 
			class="work-states__state" 
			v-if="app.state === 'calendar'">
		calendar
		</div>
		
		<socket-listener>
		</socket-listener>

	</div>

</template>


<script>
	/**
 	* Функции 
 	*/
	import request 					from './functions/request.js';
	import data 						from './functions/data.js';
	import auth 						from './functions/auth.js';
	import F 								from './functions/functions.js';

	/**
 	* Секции
 	*/
	import panelChats 			from './panel-chats.vue';
	import panelTasks 			from './panel-tasks.vue';
	import settingsForm 		from './settings-form.vue';
	import panelMessages 		from './panel-messages.vue';
	import socketListener 	from './socket-listener.vue';
	
	/**
 	* Компоненты
 	*/
  import splitPanel 			from './components/split-panel/split-panel.vue';
	
	/**
 	* Рабочий экран приложения 
	* используется в App.vue
 	*/
	export default {
		props: {
			opt: Object,
			app: Object,
			auth: Object
		},
		components: {
			panelChats: panelChats,
			panelTasks: panelTasks,
			splitPanel: splitPanel,
			settingsForm: settingsForm,
			panelMessages: panelMessages,
			socketListener: socketListener
		},
		methods: {
			loadMessages(email,pass,chatsId){
				if (this.opt.chats){
				
					request.post('loadMessages', {
						chatsId: chatsId.join()
					}, function(e){
						APP.$set(APP.opt, 'messages', e.data);
					});
	
				}
			}
		},
		created: function() { 

			let chatsId = F.joinObjectsKeys(this.opt.chatsRooms, 'chatsId').array;
			
			if (chatsId.length) this.loadMessages(this.auth.email, this.auth.pass, chatsId);
		}
	}
</script>


<style lang="less">
	@import './less/main.less';

	.work-states {
		width: calc(100% - @width-toolbar);
		height: 100vh;
		.transform(translateX(@width-toolbar));
		box-sizing: border-box;
		
		&__state {
			width: 100%;
			height: 100%;
			position: absolute;
		}
	}

</style>