"use strict";

Vue.component('app-modal', {
  props: ['opt'],
  template: 
`<div v-if="opt.options.app.modal" class="app-modal">
	<div class="app-modal__panel"></div>
</div>`,
	methods: {
		toggleShow: function(){
			let $el = this.$el;
			$($el).find('.app-modal__panel').delay(100).queue(function(){
				$($el).find('.app-modal__panel').toggleClass('app-modal__panel_active');
				//$('.app-states').toggleClass('app-states_blur');
			});
		}
	},
	mounted: function(){
		this.toggleShow();
	},
	updated: function(){
		this.toggleShow();
	}
});