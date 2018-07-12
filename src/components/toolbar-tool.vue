<template>
	<div 
		v-on:click="toggleState" 
		class="toolbar-tool"
		v-bind:title="title">
	</div>
</template>


<script>
	import $ from 'jquery';
	
	export default {
		props: {
			opt: Object,
			icon: String,
			data: String,
			title: String
		},
		methods: {
			toggleState: function() {
				if (this.data && this.opt.options.app.state !== this.data) {
					this.opt.options.app.state = this.data;
					this.setActive();
				}
			},
			setActive: function() {
				if (this.data && this.opt.options.app.state === this.data) {
					let $el = this.$el;
					$('.toolbar-tool').removeClass('toolbar-tool_active');
					$($el).addClass('toolbar-tool_active');
				}
			}
		},
		mounted: function() {
			let $el = this.$el;
			$($el).css({
				'background-image': 'url(' + this.icon + ')'
			});
			this.setActive();
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