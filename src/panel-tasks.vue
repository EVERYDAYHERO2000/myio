<template>
	<div class="panel-tasks">

	<panel-header
		v-bind:menu="[
					{name: $d('new task')},
					{name: $d('mute notification')}
				]"
		v-bind:title="(searchResult) ? panelTitle + ':' + searchResult : panelTitle">
		
			<select-list 
				v-bind:name="'test'" 
				v-bind:options="this.dataTaskState" 
				v-bind:active="this.active"
				v-bind:k="'value'"
				v-bind:v="'name'"
				v-on:onActive="this.setActive">
			</select-list>

			<text-field 
				v-bind:label="''" 
				v-bind:placeholder="$d('Search')"
				v-on:onValue="setSearchResult"
				v-bind:type="'search'">
			</text-field>
			
	</panel-header> 

	<div class="panel-tasks__list">
	
		<chat-list-item 
			v-for="chat in chatList"
			v-if="chat.isPinned"
			v-bind:opt="opt" 
			v-bind:chat="chat"
			v-bind:type="'task'"
			v-bind:searchResult="searchResult" 
			v-bind:key="chat.id">
		</chat-list-item>
	
		<chat-list-item 
			v-for="chat in chatList"
			v-if="!chat.isPinned"
			v-bind:opt="opt" 
			v-bind:chat="chat"
			v-bind:type="'task'"
			v-bind:searchResult="searchResult" 
			v-bind:key="chat.id">
		</chat-list-item>
		
		<btn-group
			v-bind:align="'center'">
			
			<btn
				style="margin: 30px 0"
				v-bind:theme="'link'"
				v-bind:label="$d('new task')">
			</btn>	
						
		</btn-group>
		
	</div>

</div>
</template>


<script>

	/**
 	* Компоненты 
 	*/
	import panelHeader 			from './components/panel-header/panel-header.vue';
	import selectList 			from './components/select-list/select-list.vue';
	import textField 				from './components/text-field/text-field.vue';
	import chatListItem 		from './components/chat-list-item/chat-list-item.vue';
	import btnGroup					from './components/btn-group/btn-group.vue';
	import btn							from './components/btn/btn.vue';
	
	/**
 	* Миксины 
 	*/
	import chatList__mixin 	from './mixins/chat-list.js';
	
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
			selectList: selectList,
			textField: textField,
			btnGroup: btnGroup,
			btn: btn
		},
		mixins: [chatList__mixin],
		methods: {
			setActive: function(e){
				this.active = e;
			},
			setSearchResult: function(e){ 
				this.searchResult = e;
			}
		},
		data: function(){
			return {
				taskStatus: ['started','needInfo','review','closed'],
				searchResult : '',
				active: 0
			}
		},
		computed : {
			dataTaskState: function(){
				return [
					{
						value: '1',
						name: this.$d('All tasks')
					},
					{
						value: '2',
						name: this.$d('Created by me')
					},
					{
						value: '3',
						name: this.$d('Assigned to me')
					}
				]
			}
		}
	}
</script>


<style lang="less">
	@import './less/main.less';

	.panel-tasks {
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