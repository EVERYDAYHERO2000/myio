<template>

	<div class="panel-messages">	
		
		<panel-header
			v-bind:title="panelTitle" 
			v-bind:opt="opt">
			<div>wewewewew</div>
		</panel-header> 
		
		<div class="panel-messages__inner">
			<div class="panel-messages__messages-list">chat</div>
			<div class="panel-messages__input">123</div>
		</div>
	</div>
	
</template>


<script>
	import $ from 'jquery';
	
	import panelHeader from './components/panel-header.vue';
	import selectList from './components/select-list.vue';
	import textField from './components/text-field.vue';
	
	export default {
		props: {
			opt : Object,
			type: String,
			panelTitle: String
		},
		components : {
			panelHeader: panelHeader,
			selectList: selectList,
			textField: textField
		},
		data : function(){
			return {
				
			}
		}
	}

</script>


<style lang="less">
	@import './less/variables.less';
	
	.panel-messages {
		height: 100vh;
		width: 100%;
		
		&__inner {
			display: flex;
			flex-direction:column;
			height: calc(100vh - @height-header);
			transform: translateY(@height-header);
			width: 100%;
		}
		
		&__messages-list {
			width: 100%;
			overflow: hidden;
			overflow-y: scroll;
			flex-grow: 1;
			align-content: flex-end;
		}
		
		&__input {
			
		}
		
	}
	
</style>