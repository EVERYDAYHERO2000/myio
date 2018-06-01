"use strict";
/*
кнопка для боковой панели
*/
Vue.component('toolbar-tool', {
	props: ['opt', 'icon', 'data'],
	template: 
`<div v-on:click="toggleState" class="toolbar-tool"></div>`,
  
	methods: {
		toggleState: function () {
			if (this.data && this.opt.options.app.state !== this.data) {
				APP.$.$data.opt.options.app.state = this.data;
				this.setActive();
			}
		},
		setActive: function () {
			if (this.data && this.opt.options.app.state === this.data) {
				let $el = this.$el;
				$('.toolbar-tool').removeClass('toolbar-tool_active');
				$($el).addClass('toolbar-tool_active');
			} 
		}
	},
	mounted: function () {
		let $el = this.$el;
		$($el).css({
			'background-image': 'url(' + this.icon + ')'
		});
		this.setActive();
	}
});