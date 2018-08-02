<template>
	<div 
		v-if="app.modal" 
		class="app-modal">
		<div class="app-modal__panel"></div>
	</div>
</template>


<script>
	import $ from 'jquery';
	
	export default {
		props: {
			opt : Object,
			app : Object
		},
		methods: {
			toggleShow: function() {
				let $el = this.$el;
				$($el).find('.app-modal__panel').delay(100).queue(function() {
					$($el).find('.app-modal__panel').toggleClass('app-modal__panel_active');
					//$('.app-states').toggleClass('app-states_blur');
				});
			},
			d: function(w){
				return this.app.d[w.toLowerCase()][this.app.lang];
			}
		},
		mounted: function() {
			this.toggleShow();
		},
		updated: function() {
			this.toggleShow();
		}
	}
</script>


<style lang="less">
	@import './less/main.less';
	
	.app-modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		.flex-block();
		.justify-content(center);

		&__panel {
			background: @color-white;
			width: 500px;
			min-height: 100px;
			position: absolute;
			top: 0;
			box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
			.transform-origin(center top);
			.transform(translateY(-50vh));
			.transition(all .3s ease); 

			&_active {
				.transform(translateY(0px));
				.transition(all .3s ease);
			}
		}
	}
</style>