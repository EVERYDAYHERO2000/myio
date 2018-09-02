<template>
	<div class="space-form">
	
		<header-title 
			v-bind:title="$d('Spaces')"
			class="space-form__header">
		</header-title>
		
		<menu-list
			v-bind:k="'name'"
			v-bind:list="opt.spaces">
		</menu-list>
		
	</div>
</template>


<script>
	
	import menuList 		from './components/menu-list/menu-list.vue';
	import headerTitle 	from './components/header-title/header-title.vue';
	
	export default {
		props : {
			opt: Object,
			app: Object
		},
		components: {
			menuList: menuList,
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
	
</style>