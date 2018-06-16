<template>
	<div class="panel-tasks">

	<panel-header
		v-bind:title="panelTitle" 
		v-bind:opt="opt">
		
			<select-list 
				v-bind:name="'test'" 
				v-bind:options="this.dataTaskState" 
				v-bind:active="this.active"
				v-bind:k="'value'"
				v-bind:v="'name'"
				v-on:onActive="this.selectTaskType">
			</select-list>

			<text-field 
				v-bind:lable="''" 
				v-bind:type="'search'">
			</text-field>
			
	</panel-header> 

	<div class="panel-tasks__list">
		<chat-list-item 
			v-for="task in opt.taskList" 
			v-bind:chat="task"
			v-bind:key="task.id">
		</chat-list-item>
	</div>

</div>
</template>


<script>
	import $ from 'jquery';
	
	import panelHeader from './components/panel-header.vue';
	import selectList from './components/select-list.vue';
	import textField from './components/text-field.vue';
	import chatListItem from './chat-list-item.vue';
	
	export default {
		props: {
			opt: Object,
			panelTitle: String,
			type: String
		},
		components: {
			panelHeader : panelHeader,
			chatListItem : chatListItem,
			selectList: selectList,
			textField: textField
		},
		created: function(){
			
		},
		methods: {
			selectTaskType: function(e){
				this.active = e;
			}
		},
		data: function(){
			return {
				active: 0,
				dataTaskState: [{
						value: '1',
						name: 'All tasks'
					},
					{
						value: '2',
						name: 'Created by me'
					},
					{
						value: '3',
						name: 'Assigned to me'
					}
				]
			}
		}
	}
</script>


<style lang="less">
	@import './less/variables.less';

	.panel-tasks {
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