<template>
	<div class="space-form">
		<div class="space-form__header">Spaces</div>
		<div class="link-list">
			<div class="link-list__link link-list__link_active">Profile</div>
			<div class="link-list__link">General</div>
			<div class="link-list__link">Spaces</div>
		</div>
	</div>
</template>


<script>
	import $ from 'jquery';
	
	export default {
		
	}
	
</script>


<style lang="less">
	@import './less/main.less';
	
	@left-side: 15px;
	
	.space-form {
		box-sizing: border-box;
		
		
		&__header {
			padding: 0 15px;
			font-size: 24px;
			font-weight: 500;
			text-align: left;
			line-height: 3;
		}
		
	}
	
	.link-list {
		width: 100%;
		box-sizing: border-box;
		
		&__link {
			padding: 10px 10px 10px @left-side;	
			transition: all .2s ease;
		}
		
		&__link_active {
			font-weight: 600;
		}
		
		&__link:hover {
			color: @color-active;
			background-color: lighten(@color-active, 40%);
			transition: all .2s ease;
		}
		
	}
	
</style>