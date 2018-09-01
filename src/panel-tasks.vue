<template>
	<div class="panel-tasks">

	<panel-header
		v-bind:title="panelTitle">
		
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
				v-bind:type="'search'">
			</text-field>
			
	</panel-header> 

	<div class="panel-tasks__list">
	
		<chat-list-item 
			v-for="chat in chatList"
			v-if="chat.isPinned"
			v-bind:app="app"
			v-bind:opt="opt" 
			v-bind:chat="chat"
			v-bind:type="'task'"
			v-bind:key="chat.id">
		</chat-list-item>
	
		<chat-list-item 
			v-for="chat in chatList"
			v-if="!chat.isPinned"
			v-bind:app="app"
			v-bind:opt="opt" 
			v-bind:chat="chat"
			v-bind:type="'task'"
			v-bind:key="chat.id">
		</chat-list-item>
		
	</div>

</div>
</template>


<script>

	import F from './functions/functions.js';
	
	import panelHeader from './components/panel-header.vue';
	import selectList from './components/select-list.vue';
	import textField from './components/text-field.vue';
	import chatListItem from './components/chat-list-item.vue';
	
	import chatList__mixin from './mixins/chat-list.js';
	
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
			textField: textField
		},
		mixins: [chatList__mixin],
		created: function(){
			
		},
		methods: {
			setActive: function(e){
				this.active = e;
			}
		},
		data: function(){
			return {
				taskStatus: ['started','needInfo','review','closed'],
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
		.flex-direction(row);

		&__list {
			height: calc(100vh - @height-header);
			width: 100%;
			.transform(translateY(@height-header));
			.vertical-scroll();
		}
	}
</style>