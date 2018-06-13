<template>
	
		
		<Split 
			v-if="opt.options.app.state === 'chats'"
			v-bind:gutterSize="1" 
			class="work-states"
			v-on:onDragEnd="onDragEnd" 
			v-on:onDragStart="onDragStart" 
			v-on:onDrag="onDrag">
		
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
    	
    	<SplitArea 
       class="panel panel_chat"
       v-bind:size="this.panelsSettings.panelCenter" 
			 v-bind:minSize="300">
        chat
    	</SplitArea>
    	
    	<SplitArea 
       class="panel panel_white"
       v-bind:size="this.panelsSettings.panelRight" 
       v-bind:minSize="300">
       
        <panel-chats 
					v-bind:opt="opt"
					v-bind:type="'tasks'" 
					v-bind:panelTitle="'Tasks'">
				</panel-chats>
				
    	</SplitArea>
    	
		</Split>

</template>


<script>
	import $ from 'jquery';
	import URL from './functions/urls-option.js';
	import data from './functions/data.js';

	import panelChats from './panel-chats.vue';
	import VueSplit from 'vue-split-panel';

	export default {
		props: {
			opt: Object
		},
		components: {
			panelChats: panelChats,
			Split: VueSplit.Split,
			SplitArea: VueSplit.SplitArea
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
	@import './less/variables.less';

	.work-states {
		width: calc(100% - @width-toolbar);
		height: 100vh;
		transform: translateX(@width-toolbar);
		display: flex;
		box-sizing: border-box;
		position: absolute;
	}

	.panel {
		box-sizing: border-box;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		position: relative;
		min-width: 300px;

		&:first-child {
			border-right: 1px solid @color-border;
		}

		&:last-child {
			border-left: 1px solid @color-border;
		}

		&_white {
			background: #fff;
		}
		&_chat {
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
			transform: scaleX(10) translateX(-0.1px);
		}

		&+.panel+& {
			transform: scaleX(10) translateX(0.1px);
		}

		&:hover,
		&:active {
			opacity: 0.05;
			transition: opacity .2s .2s ease;
		}
	}
</style>