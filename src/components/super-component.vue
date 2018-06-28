<template>
	<div class="super-component">
	
		<btn 
			v-if="com.component == 'btn'" 
			v-bind:label="com.label">
		</btn>
		
		<select-list 
			v-if="com.component == 'selectList'"
			v-bind:name="com.name" 
			v-bind:options="com.options" 
			v-bind:active="com.active"
			v-bind:k="com.k"
			v-bind:v="com.v">
		</select-list>
		
		<text-field 
	    v-if="com.component == 'textField'" 
		  v-bind:label="com.label"
		  v-bind:placeholder="com.placeholder"
			v-bind:value="com.value"
			v-bind:type="com.fieldType">
		</text-field>
		
		<user-list 
			v-if="com.component == 'userList'"
			v-bind:opt="com.opt"
			v-bind:name="com.name">
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