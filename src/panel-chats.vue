<template>
	<div class="panel-chats">

	<panel-header
		v-bind:menu="[
					{name: $d('new chat')},
					{name: $d('mute notification')}
				]"
		v-bind:title="panelTitle">
		
		<text-field 
			v-bind:label="''"
			v-bind:placeholder="$d('Search')"
			v-bind:type="'search'">
		</text-field>
		
	</panel-header> 

	<div class="panel-chats__list">
	
		<chat-list-item 
			v-for="chat in chatList"
			v-if="chat.isPinned"
			v-bind:app="app"
			v-bind:opt="opt" 
			v-bind:chat="chat"
			v-bind:type="'chat'"
			v-bind:key="chat.id">
		</chat-list-item>
	
		<chat-list-item 
			v-for="chat in chatList"
			v-if="!chat.isPinned"
			v-bind:app="app"
			v-bind:opt="opt" 
			v-bind:chat="chat"
			v-bind:type="'chat'"
			v-bind:key="chat.id">
		</chat-list-item>
		
	</div>
	

</div>
</template>


<script>
	import panelHeader 				from './components/panel-header/panel-header.vue';
	import chatListItem 			from './components/chat-list-item/chat-list-item.vue';
	import textField 					from './components/text-field/text-field.vue';
	
	import chatList__mixin 		from './mixins/chat-list.js';
	
	export default {
		props: {
			opt: Object,
			app: Object,
			panelTitle: String,
			type: String
		},
		components: {
			panelHeader : panelHeader,
			chatListItem : chatListItem,
			textField: textField
		},
		mixins: [chatList__mixin],
		created: function(){

		},
		methods: {
		},
		data: function(){
			return {
				taskStatus: ['chat']
			}
		},
		computed : {
			
		}
	}
</script>


<style lang="less">
	@import './less/main.less';

	.panel-chats {
		.flex-block();
		height: 100vh;
		.flex-direction(row);

		&__list {
			height: calc(100vh - @height-header);
			width: 100%;
			.transform(translateY(@height-header));
			.vertical-scroll();
		}
	}
</style>