<template>
	<div
		v-on:mouseout="hideMenu"
		v-bind:style="position()"
		v-if="isShowed"
		class="context-menu">
		
		<div
			v-on:contextmenu.prevent="hideNative"
			v-for="(item,index) in menu" 
			class="context-menu__item">
			{{item.name}}
		</div>
		
	</div>
	
</template>


<script>
	import $ from 'jquery';
	import findZindex from '../functions/find-zindex.js'
	
	export default {
		props: {
			x: Number,
			y: Number,
			isShowed: Boolean,
			menu: Array
		},
		methods: {
			position: function(){
				let offset = 20;
				let width;
				let height;
				let winWidth = window.innerWidth;
				let winHeight = window.innerHeight;
				let x = 'left: ' + (this.x - offset) + 'px;';
				let y = 'top: ' + (this.y - offset) + 'px;';
				let zIndex = 'z-index: ' + findZindex('div') + ';';
				
				this.$nextTick(function () {
					
					width = this.$el.offsetWidth;
					height = this.$el.offsetHeight

					x = (this.x + width < winWidth) ? 'left: ' + (this.x - offset) + 'px;' : 'right: 0;';
					y = (this.y + height < winHeight) ? 'top: ' + (this.y - offset) + 'px;' : 'bottom: 0;';
					$(this.$el).attr('style', [x,y,zIndex].join(''));
					
					
				});
				return [y,x,zIndex].join('');
			},
			hideMenu: function(event){
				
				let target = event.toElement || event.relatedTarget;
				if ( !$(target).is('.context-menu__item') ){
					APP.$data.app.context.isShowed = false;
				}
			},
			hideNative: function(){
				return false;
			}
		},
		updated: function(){
			
		}
	}
</script>


<style lang="less">
	@import '../less/main.less';
	@import '../less/animations.less';
	
	.context-menu {
		@menu-width: 200px;
		position: fixed;
		background: @color-white;
		box-sizing: border-box;
		box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
		min-width: @menu-width;
		overflow: hidden;
		border-radius: 3px;
		.animation(show-menu 0.1s 1 ease); 
		
		&__item {
			box-sizing: border-box;
			padding: 10px 10px 10px 15px;
			.transition(all .2s ease);
		}
		
		&__item:hover {
			color: @color-active;
			background-color: lighten(@color-active, 40%);
			.transition(all .2s ease);
		}
		
	}
</style>