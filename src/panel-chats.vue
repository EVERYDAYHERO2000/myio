<template>
	<div class="panel-chats">

	<panel-header
		v-bind:menu="contextMenu"
		v-bind:title="(searchResult) ? panelTitle + ':' + searchResult : panelTitle">
		
		<text-field 
			v-bind:label="''"
			v-bind:placeholder="$d('Search')"
			v-on:onValue="setSearchResult"
			v-bind:type="'search'">
		</text-field>
		
	</panel-header> 

	<div class="panel-chats__list">
	
		<chat-list-item 
			v-for="chat in chatList"
			v-if="chat.isPinned"
			v-bind:opt="opt" 
			v-bind:chat="chat"
			v-bind:type="'chat'"
			v-bind:searchResult="searchResult" 
			v-bind:key="chat.id"> 
		</chat-list-item>
	
		<chat-list-item 
			v-for="chat in chatList"
			v-if="!chat.isPinned"
			v-bind:opt="opt" 
			v-bind:chat="chat"
			v-bind:type="'chat'"
			v-bind:searchResult="searchResult"
			v-bind:key="chat.id">
		</chat-list-item>
		
		<btn-group
			v-bind:align="'center'">
			
			<btn
				v-on:click.native="addChat"
				style="margin: 30px 0"
				v-bind:theme="'link'"
				v-bind:label="$d('new chat')">
			</btn>	
						
		</btn-group>
		
	</div>
	

</div>
</template>


<script>
	/**
 	* Компоненты 
 	*/
	import panelHeader 				from './components/panel-header/panel-header.vue';
	import chatListItem 			from './components/chat-list-item/chat-list-item.vue';
	import textField 					from './components/text-field/text-field.vue';
	import btnGroup						from './components/btn-group/btn-group.vue';
	import btn								from './components/btn/btn.vue';
	
	/**
 	* Миксины 
 	*/
	import chatList__mixin 		from './mixins/chat-list.js';
	
	/**
 	* Панель список чатов 
 	*/
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
			textField: textField,
			btnGroup: btnGroup,
			btn: btn
		},
		mixins: [chatList__mixin],
		methods: {
			setSearchResult: function(e){
				this.searchResult = e;
			},
			addChat: function(){
				const toolbar = APP.$data.app.store.toolbar;
				toolbar.addForm.state = 1;
				toolbar.toggleToolbarAdd();
			}
		},
		data: function(){
			return {
				taskStatus: ['chat'],
				searchResult : '',
				contextMenu: [
					{
						name: this.$d('new chat'),
						action: this.addChat
					},
					{
						name: this.$d('mute notification')
					}
				]
			}
		}
	}
</script>


<style lang="less">
	@import './less/main.less';

	.panel-chats {
		.flex-block();
		height: 100vh;
		.flex-direction(column);

		&__list {
			height: calc(100vh - @height-header);
			width: 100%;
			
			.vertical-scroll();
		}
	}
</style>