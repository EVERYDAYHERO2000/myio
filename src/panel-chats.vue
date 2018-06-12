<template>
	<div class="panel-chats">

	<panel-header
		v-bind:type="type"
		v-bind:title="panelTitle" 
		v-bind:opt="opt">
	</panel-header>

	<div v-if="type == 'chats'" class="panel-chats__list">
		<chat-list-item 
			v-for="chat in opt.inboxList" 
			v-bind:chat="chat"
			v-bind:key="chat.id">
		</chat-list-item>
	</div>

	<div v-if="type == 'tasks'" class="panel-chats__list">
2
	</div>

</div>
</template>


<script>
	import panelHeader from './panel-header.vue';
	import chatListItem from './chat-list-item.vue';
	
	export default {
		props: {
			opt: Object,
			panelTitle: String,
			type: String
		},
		components: {
			panelHeader : panelHeader,
			chatListItem : chatListItem
		},
		created: function(){

		}
	}
</script>


<style lang="less">
	@import './less/variables.less';

	.panel-chats {
		display: flex;
		height: 100vh;
		flex-direction: row;

		&__list {
			height: calc(100vh - @height-header);
			width: 100%;
			transform: translateY(@height-header);
			overflow: hidden;
			overflow-y: scroll;
		}
	}
</style>