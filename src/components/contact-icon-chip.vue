<template>

	<div 
		v-bind:style="stylize()"
		class="contact-icon-chip"
		v-bind:class="cssClass()" >
			{{ (title) ? title[0] : '' }}
	</div>
	
</template>


<script>
	import $ from 'jquery';
	import changeColor from '../functions/change-color.js';

	export default {
		props: {
			title: String,
			image: String,
			type: String,
			size: String
		},
		methods: {
			stylize : function(){
				let cssRule = `background-color: ${changeColor(this.title)};`;
				if (this.image && this.image.length) {
					cssRule = cssRule + `background-image: url( ${this.image} ); color: transparent`;
				}
				return cssRule;
			},
			cssClass : function(){
				let typeCssClass = (this.type == 'task') ? 'contact-icon-chip_task' : 'contact-icon-chip_chat';
				let sizeCssClass = (this.size) ? 'contact-icon-chip' + this.size : 'contact-icon-chip_m';
				return [typeCssClass, sizeCssClass];
			}
		},
		created: function() {

		}
	}
</script>


<style lang="less">
	@import '../less/main.less';
	
	.contact-icon-chip {
		@size-m: 50px;
		@size-s: 35px;
		
		background-color: #eaeaea;
		overflow: hidden;
		background-size: cover;
		text-align: center;
		color: @color-white;
		font-size: 24px;
		line-height: 50px;
		box-shadow: inset 0px 0px 0px 1px rgba(0,0,0,0.02);

		&_chat {
			border-radius: 50%;
		}
		
		&_task {
			border-radius: 5px;
		}
		
		&_m {
			height: @size-m;
			width: @size-m;
			min-height: @size-m;
			min-width: @size-m;
		}
		
		&_s {
			height: @size-s;
			width: @size-s;
			min-height: @size-s;
			min-width: @size-s;
		}
	}
</style>