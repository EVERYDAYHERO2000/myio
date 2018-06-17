<template>
	<div class="panel-header"> 
	
		<div class="panel-header__titlebar" v-on:click="toggleHeaderPanel">{{title}}</div>
		<div class="panel-header__form">
			<slot></slot>
		</div>
	
</div>
</template>


<script>
	import $ from 'jquery';
	
	export default {
		props: {
			title : String,
			opt: Object
		},
		components: {

		},
		methods: {
			toggleHeaderPanel: function() {
				var el = this.$el;
				$(el).toggleClass('panel-header_active');
				this.isShowed = !this.isShowed;
			}
		},
		data: function() {
			return {
				isShowed: false
			}
		}
	}
</script>


<style lang="less">
	@import '../less/main.less';


	.panel-header {

		@animation-speed: 0.3s;

		position: absolute;
		top: 0;
		left: 0;
		width: 100%;

		max-height: @height-header;
		z-index: 1000;
		box-sizing: border-box;
		.f-border(bottom);
		background-color: @color-white;
		box-shadow: 0px 2px 20px rgba(0, 0, 0, .05);
		transition: max-height @animation-speed ease;
		color: @color-gray-font;
		overflow: hidden;


		&_active {

			max-height: calc(100vh - @height-header);
			transition: max-height @animation-speed ease;
			overflow: visible;
			animation: overflowed @animation-speed 1 ease;
		}

		@keyframes overflowed {
			0%,
			99% {
				overflow: hidden;
			}
			100% {
				overflow: visible;
			}
		}

		&__titlebar {
			padding: 10px 0px 10px 10px;
			line-height: 20px;

			&:after {
				display: block;
				content: '';
				height: @height-header;
				width: @height-header;
				background-image: ~'url(../assets/more-vert.svg)';
				background-size: 20px;
				background-position: center;
				background-repeat: no-repeat;
				position: absolute;
				top: 0;
				right: -8px;
				opacity: 0.8;

			}
		}

		&__form {
			padding: 0 10px 10px 10px;

			

			&>div:first-child {
				padding-top: 20px;
			}

		}

	}
</style>