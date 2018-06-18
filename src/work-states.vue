<template>
	
	<div class="work-states">
	
		<div class="work-states__state" v-if="opt.options.app.state === 'chats'">
			<Split 
				v-bind:gutterSize="1" 
				class="split_flex"
				v-on:onDragEnd="onDragEnd" 
				v-on:onDragStart="onDragStart" 
				v-on:onDrag="onDrag">

				<!--CHATS-->
				<SplitArea 
				 class="panel panel_white"
				 v-bind:size="this.panelsSettings.panelLeft" 
				 v-bind:minSize="300">

					<panel-chats 
						v-bind:opt="opt" 
						v-bind:type="'chats'" 
						v-bind:panelTitle="'Chats'">
					</panel-chats>

				</SplitArea>
				<!--CHATS END-->
				
				<!--MESSAGES-->
				<SplitArea 
				 class="panel panel_messages"
				 v-bind:size="this.panelsSettings.panelCenter" 
				 v-bind:minSize="300">
				 
					<panel-messages 
						v-bind:opt="opt"
						v-bind:type="'messages'"
						v-bind:panelTitle="'Messages'">
					</panel-messages>
					
				</SplitArea>
				<!--MESSAGES END-->
				
				<!--TASKS-->  
				<SplitArea 
				 class="panel panel_white"
				 v-bind:size="this.panelsSettings.panelRight" 
				 v-bind:minSize="300">

					<panel-tasks 
						v-bind:opt="opt"
						v-bind:type="'tasks'" 
						v-bind:panelTitle="'Tasks'">
					</panel-tasks>

				</SplitArea>
				<!--TASKS END-->
				
			</Split>
		</div>

		<div class="work-states__state" v-if="opt.options.app.state === 'settings'">
			<settings-form 
				v-bind:opt="opt">
			</settings-form>
		</div>
		
		<div class="work-states__state" v-if="opt.options.app.state === 'files'">
		files
		</div>
		
		<div class="work-states__state" v-if="opt.options.app.state === 'calendar'">
		calendar
		</div>

	</div>

</template>


<script>
	import $ from 'jquery';
	import URL from './functions/urls-option.js';
	import data from './functions/data.js';

	import panelChats from './panel-chats.vue';
	import panelTasks from './panel-tasks.vue';
	import VueSplit from 'vue-split-panel';
	import settingsForm from './settings-form.vue';
	import panelMessages from './panel-messages.vue';

	export default {
		props: {
			opt: Object
		},
		components: {
			panelChats: panelChats,
			panelTasks: panelTasks,
			Split: VueSplit.Split,
			SplitArea: VueSplit.SplitArea,
			settingsForm: settingsForm,
			panelMessages: panelMessages
		},
		methods: {
			loadData: function() {
				let __this__ = this;
				$.get(URL.testData, function(d) {

					APP.$data.opt = data.getData(d, APP.$data.opt);
					
				});
			},
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
				
			}
		},
		created: function() { 
			this.loadData();
			
		},
		data: function(){
			return {
				panelsSettings : (function() {
					let localPanelsSettings = localStorage.getItem("panelsSettings");
					let defaultWidth = 33.333333;
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
		flex-direction: column;
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
		transform-origin: center center;
		position: relative;
		z-index: 10000;
		opacity: 0;
		transition: all .2s ease;

		& {
			.transform(scaleX(10) translateX(-0.1px));
		}

		&+.panel+& {
			.transform(scaleX(10) translateX(0.1px));
		}

		&:hover,
		&:active {
			opacity: 0.05;
			transition: opacity .2s .2s ease;
		}
	}
</style>