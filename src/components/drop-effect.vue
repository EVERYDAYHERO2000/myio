<template>
	<transition v-on:after-enter="fadeDrop" name="drop-effect">
	<div 
		v-if="isDrop"
		v-bind:style="{ top : y + 'px', left : x + 'px' }" 
		v-bind:class="{'drop-effect_light' : theme == 'light', 'drop-effect_dark' : theme == 'dark'}"
		class="drop-effect">
	</div>
	</transition>
</template>


<script>
	export default {
		props: {
			isDroped : {
				default: false,
				type: Boolean
			},
			theme : {
				default : 'light',
				type: String
			}
		},
		methods: {
			makeDrop: function(e){
				this.x = e.layerX;
				this.y = e.layerY;
				this.isDrop = true;
			},
			fadeDrop: function (e) {
				this.isDrop = false;
			}
		},
		data: function(){
			return {
				x : 0,
				y : 0,
				isDrop : false 
			}
		},
		mounted: function(){
			this.$parent.$el.addEventListener('mousedown', this.makeDrop, false);
		},
		beforeDestroy: function(){
			this.$parent.$el.removeEventListener('mousedown', this.makeDrop, false);
		}
	}
</script>


<style lang="less">
	@import '../less/main.less';
	
	.drop-effect {
		.border-radius(50%);
		.transform-origin(center);
		.transform(translate(-50%, -50%));
		position: absolute;
		opacity: 1;
		pointer-events: none;
		
		&_light {
			background-color: rgba(255, 255, 255, 0.3);
		}
		
		&_dark {
			background-color: rgba(red(@color-active), green(@color-active), blue(@color-active), 0.1);
		}
		
	}
	
	.drop-effect-enter {
		width: 1px;
		height: 1px;
		opacity: 1;
	}
		
	.drop-effect-enter-to {
		width: 300px;
		height: 300px;
		opacity: 0;
		}
		
	.drop-effect-enter-active {
		transition: all .5s ease;
	}
</style>