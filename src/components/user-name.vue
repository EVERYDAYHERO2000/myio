<template>
	<div class="user-name">
		{{name}}
	</div>
</template>


<script>
	export default {
		props : {
			name : {
				default: 'Username', 
				type: String
			}
		}
	}
</script>


<style lang="less">
	@import '../less/main.less';
	
	.user-name {
		color: @color-active;
		font-size: @font-size-main;
	}
	
	.user-name__on-active {
		color: @color-white;
	}
</style>