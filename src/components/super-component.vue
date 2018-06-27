<template>
	<div class="super-component">
	
		<btn 
			v-if="com.component == 'btn'" 
			v-bind:label="com.label">
		</btn>
		
		<select-list 
			v-if="com.component == 'selectList'">
		</select-list>
		
		<text-field 
	    v-if="com.component == 'textField'" 
		  v-bind:label="com.label">
		</text-field>
		
		<user-list 
			v-if="com.component == 'userList'">
		</user-list>
	
	</div>
</template>


<script>
	import btn from '../components/btn.vue';
	import selectList from '../components/select-list.vue';
	import textField from '../components/text-field.vue';
	import userList from '../components/user-list.vue';
	
	export default {
		props : {
			com: Object
		},
		components: {
			btn: btn,
			selectList: selectList,
			textField: textField,
			userList: userList
		}
	}
</script>


<style lang="less">
	@import '../less/main.less';
	
	.super-component {
		
	}
	
</style>