<template>
	
	<div class="work-states">
	
		<div 
			class="work-states__state" 
			v-if="app.state === 'chats'">
			<Split 
				v-bind:gutterSize="1" 
				class="split_flex"
				v-on:onDragEnd="onDragEnd" 
				v-on:onDragStart="onDragStart" 
				v-on:onDrag="onDrag">

				<!--CHATS-->
				<SplitArea 
					class="panel panel_white"
					v-bind:size="panelsSettings.panelLeft" 
					v-bind:minSize="300">

					<panel-chats 
						v-bind:opt="opt" 
						v-bind:app="app" 
						v-bind:type="'chats'" 
						v-bind:panelTitle="$d('Chats')">
					</panel-chats>

				</SplitArea>
				<!--CHATS END-->
				
				<!--MESSAGES-->
				<SplitArea 
					class="panel panel_messages"
					v-bind:size="panelsSettings.panelCenter" 
					v-bind:minSize="300">
				 
					<panel-messages 
						v-bind:opt="opt"
						v-bind:app="app"
						v-bind:type="'messages'"
						v-bind:panelTitle="$d('Messages')">
					</panel-messages>
					
				</SplitArea>
				<!--MESSAGES END-->
				
				<!--TASKS-->  
				<SplitArea 
				 class="panel panel_white"
				 v-bind:size="panelsSettings.panelRight" 
				 v-bind:minSize="300">

					<panel-tasks 
						v-bind:opt="opt"
						v-bind:app="app"
						v-bind:type="'tasks'" 
						v-bind:panelTitle="$d('Tasks')">
					</panel-tasks>

				</SplitArea>
				<!--TASKS END-->
				
			</Split>
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
	import VueSplit 				from 'vue-split-panel';
	import settingsForm 		from './settings-form.vue';
	import panelMessages 		from './panel-messages.vue';
	import socketListener 	from './socket-listener.vue';

	export default {
		props: {
			opt: Object,
			app: Object
		},
		components: {
			panelChats: panelChats,
			panelTasks: panelTasks,
			Split: VueSplit.Split,
			SplitArea: VueSplit.SplitArea,
			settingsForm: settingsForm,
			panelMessages: panelMessages,
			socketListener: socketListener
		},
		methods: {
			onDragStart(size) {
				
			},
			onDrag(size) {
				
			},
			onDragEnd(size) {
				this.panelsSettings = {
					panelLeft : size[0],
					panelCenter : size[1],
					panelRight : size[2]
				}
				localStorage.setItem("panelsSettings", JSON.stringify(this.panelsSettings));
				
			},
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
			let user = auth.load();
			let chatsId = F.joinObjectsKeys(APP.opt.chatsRooms, 'chatsId').array;
			
			if (chatsId.length) this.loadMessages(user.email, user.pass, chatsId);
			
		},
		data: function(){
			return {
				panelsSettings : (function() {
					let localPanelsSettings = localStorage.getItem("panelsSettings");
					let defaultWidth = 100 / 3;//33.333333;
					return (localPanelsSettings) ? JSON.parse(localPanelsSettings) : {
						panelLeft : defaultWidth,
						panelCenter : defaultWidth,
						panelRight : defaultWidth
					};
				})() 
			}
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

	.split_flex {
		.flex-block();
		box-sizing: border-box;
		position: absolute;
		width:100%;
		height:100%;
	}
	
	.panel {
		box-sizing: border-box;
		overflow: hidden;
		.flex-block();
		.flex-direction(column);
		position: relative;
		min-width: 300px;

		&:first-child {
			.f-border(right);
		}

		&:last-child {
			.f-border(left);
		}

		&_white {
			background-color: @color-white;
		}
		&_messages {
			box-shadow: inset 0px 0px 50px rgba(0, 0, 0, 0.03);
		}
	}

	.gutter.gutter-horizontal {
		background-image: none;
		background-color: @color-active;
		.transform-origin(center center);
		position: relative;
		z-index: 10000;
		opacity: 0;
		.transition(all .2s ease);

		& {
			.transform(scaleX(10) translateX(-0.1px));
		}

		&+.panel+& {
			.transform(scaleX(10) translateX(0.1px));
		}

		&:hover,
		&:active {
			opacity: 0.05;
			.transition(all .2s .2s ease);
		}
	}
</style>