"use strict";
/*
панель с заголовком для списка чатов/тасков
*/
Vue.component('panel-header', {
	props: ['opt', 'title'],
	template: 
`<div class="panel-header">
	<div class="panel-header__titlebar" v-on:click="toggleHeaderPanel">{{title}}</div>
</div>`,
	methods: {
		toggleHeaderPanel: function () {
			var el = this.$el;
			$(el).toggleClass('panel-header_active');
			this.isShowed = !this.isShowed;
		}
	},
	data: function(){
		return {
			isShowed: false
		}
	}

});