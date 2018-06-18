<template>
	<div class="settings-form">
		<div class="settings-form__setting-list">
			<div class="settings-form__header">Settings</div>
			<div class="link-list">
				<div class="link-list__link link-list__link_active">Profile</div>
				<div class="link-list__link">General</div>
				<div class="link-list__link">Spaces</div>
			</div>
		</div>	
		<div class="settings-form__form">
			<div class="settings-form__header">Profile</div>
		</div>
	</div>
</template>


<script>
	
	export default {
		props: {
			opt: Object
		}
	}
	
</script>

<style lang="less">
	@import './less/main.less';
	
	@left-side: 15px;
	
	.settings-form {
		width: 100%;
		height: 100%;
		background: @color-white;
		.flex-block();
		
		&__setting-list {
			width: 269px;
			height: 100%;
			.f-border(right);
			box-sizing: border-box;
		}
		
		&__setting-list &__header {
			padding: 0 @left-side;
		}
		
		&__form {
			flex-grow: 1;
			box-sizing: border-box;
			padding: 0 @left-side;
		}
		
		&__form &__header {
			font-weight: 300;
		}
		
		&__header {
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