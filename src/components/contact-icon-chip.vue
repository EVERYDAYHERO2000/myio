<template>
	<div 
	v-if="image && image.length" 
	v-bind:style="'background-image:url(' + image + ')'" 
	class="contact-icon-chip">
</div>

<div 
	v-else 
	v-bind:style="'background-color:' + color"
	class="contact-icon-chip" >
		{{title[0]}}
</div>
</template>


<script>
	import $ from 'jquery';
	import changeColor from '../functions/change-color.js';

	export default {
		props: {
			title: String,
			image: String
		},
		data: function() {
			return {
				color: changeColor(this.title)
			}
		},
		created: function() {

		}
	}
</script>


<style lang="less">
	@import '../less/variables.less';
	
	.contact-icon-chip {
		@size-m: 50px;
		@size-s: 35px;
		border-radius: 50%;
		height: @size-m;
		width: @size-m;
		min-height: @size-m;
		min-width: @size-m;
		background-color: #eaeaea;
		overflow: hidden;
		background-size: cover;
		text-align: center;
		color: #fff;
		font-size: 24px;
		line-height: 50px;

		&_s {
			height: @size-s;
			width: @size-s;
			min-height: @size-s;
			min-width: @size-s;
		}
	}
</style>