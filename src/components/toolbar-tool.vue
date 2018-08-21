<template>
	<div 
		v-on:click="toggleState" 
		class="toolbar-tool"
		v-bind:class="{ 'toolbar-tool_active' : app.state === data }"
		v-bind:style="'background-image: url(' + icon + ');'"
		v-bind:title="title">
	</div>
</template>


<script>
	import $ from 'jquery';
	
	export default {
		props: {
			opt: Object,
			app: Object,
			icon: String,
			data: {
				default: '',
				type: String
			},
			title: String
		},
		methods: {
			toggleState: function() {
				if (this.data && this.app.state !== this.data) this.app.state = this.data;
			}
		}
	}
</script>


<style lang="less">
	@import '../less/main.less';
	
	.toolbar-tool {
		width: @width-toolbar;
		height: calc(@width-toolbar - 10px);
		min-width: @width-toolbar;
		max-height: @width-toolbar;
		background-position: center;
		background-repeat: no-repeat;
		background-size: auto;
		opacity: 0.8;
		.transition( all .2s );

		&:last-child {
			margin: 0 0 10px 0;
		}

		&_active {
			opacity: .2;
			.transition( all .2s );
			pointer-events: none;
		}
		
		&:hover {
			/*.f-recolor(@color-active);
			.transition(none);
			opacity: 1;*/
		}
	}
</style>