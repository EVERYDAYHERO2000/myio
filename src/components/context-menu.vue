<template>
	<div
		v-on:mouseout="hideMenu"
		v-bind:style="position()"
		v-if="isShowed"
		class="context-menu">
		
		<template v-for="(item,index) in menu">
		

			<menu-item
				v-if="item.name"
				v-on:contextmenu.prevent="hideNative"
				v-bind:title="item.name">
			</menu-item>

			<divider
				v-bind:margin="0"
				v-on:contextmenu.prevent="hideNative" 
				v-if="item.type && item.type == 'divider'">		
			</divider>
		
		</template>
		
	</div>
	
</template>


<script>
	import $ from 'jquery';
	import findZindex from '../functions/find-zindex.js'
	
	import divider from '../components/divider.vue';
	import menuItem from '../components/menu-item.vue';
	
	export default {
		props: {
			x: Number,
			y: Number,
			isShowed: Boolean,
			menu: Array
		},
		components:{
			divider : divider,
			menuItem : menuItem
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
				if ( !$(target).is('.menu-item, .divider, .context-menu') ){
					APP.$data.app.context.isShowed = false;
				}
			},
			hideNative: function(){
				return false;
			}
		},
		updated: function(){
			
		},
		created: function(){
			$(document).bind('contextmenu', function(e) {
				//return false;
			});
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
		transform:scale(1);
		.animation(show-menu 0.1s 1 ease); 
	}
</style>