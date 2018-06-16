<template>
	<div class="panel-chats">

	<panel-header
		v-bind:title="panelTitle" 
		v-bind:opt="opt">
		
		<text-field 
			v-bind:lable="''"
			v-bind:placeholder="'Search'"
			v-bind:type="'search'">
		</text-field>
		
	</panel-header> 

	<div class="panel-chats__list">
	
		<chat-list-item 
			v-for="chat in opt.inboxList" 
			v-bind:chat="chat"
			v-bind:key="chat.id">
		</chat-list-item>
		
	</div>

</div>
</template>


<script>
	import panelHeader from './components/panel-header.vue';
	import chatListItem from './chat-list-item.vue';
	import textField from './components/text-field.vue';
	
	export default {
		props: {
			opt: Object,
			panelTitle: String,
			type: String
		},
		components: {
			panelHeader : panelHeader,
			chatListItem : chatListItem,
			textField: textField
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