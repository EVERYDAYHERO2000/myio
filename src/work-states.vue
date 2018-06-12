<template>
	<div v-if="opt.options.app.state === 'chats'" class="work-states">

		<div class="panel panel_white">
			<panel-chats 
				v-bind:opt="opt" 
				v-bind:type="'chats'" 
				v-bind:panelTitle="'Chats'">
			</panel-chats>
		</div>


		<div class="panel panel_chat">

		</div>


		<div class="panel panel_white">
			<panel-chats 
				v-bind:opt="opt"
				v-bind:type="'tasks'" 
				v-bind:panelTitle="'Tasks'">
			</panel-chats>
		</div>

	</div>
</template>


<script>
	import $ from 'jquery';
	import URL from './functions/urls-option.js';
	import data from './functions/data.js';

	import panelChats from './panel-chats.vue';

	export default {
		props: {
			opt: Object
		},
		components: {
			panelChats: panelChats
		},
		methods: {
			loadData: function() {
				let __this__ = this;
				$.get(URL.testData, function(d) {
					
					APP.$data.opt = data.getData(d, APP.$data.opt);
					
				});
			}
		},
		created: function() {
			
			this.loadData();
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
	}

	.panel {
		width: calc(100% / 3);
		box-sizing: border-box;
		border-left: 1px solid @color-border;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		position: relative;

		&:first-child {
			border-left: none;
		}

		&_white {
			background: #fff;
		}
		&_chat {
			box-shadow: inset 0px 0px 50px rgba(0, 0, 0, 0.03);
		}
	}
</style>