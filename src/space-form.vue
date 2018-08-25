<template>
	<div class="space-form">
	
		<header-title 
			v-bind:title="$d('Spaces')"
			class="space-form__header">
		</header-title>
		
		<div class="link-list">
			
			<menu-item
				v-for="space in opt.spaces"
				v-bind:isActive="true"
				v-bind:title="space.name">
			</menu-item>
			
		</div>
	</div>
</template>


<script>
	import $ from 'jquery';
	
	import menuItem from './components/menu-item.vue';
	import headerTitle from './components/header-title.vue';
	
	export default {
		props : {
			opt: Object,
			app: Object
		},
		components: {
			menuItem : menuItem,
			headerTitle : headerTitle
		},
		methods: {
			
		}
	}
	
</script>


<style lang="less">
	@import './less/main.less';
	
	@left-side: 15px;
	
	.space-form {
		box-sizing: border-box;
		
		
		& .header-title {
			padding: 0 15px;
		}
		
	}
	
	.link-list {
		width: 100%;
		box-sizing: border-box;
		
	}
	
</style>