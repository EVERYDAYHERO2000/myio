"use strict";
/*
элемент списка: пользователь
*/
Vue.component('user-item', {
	props:['opt','index'],
  template: 
`<div class="user-item" v-bind:data-index="index">

 	<contact-icon-chip 
		v-bind:title="opt.name" 
		v-bind:image="opt.avatar">
	</contact-icon-chip>

	<div class="user-item__content">
		<div class="user-item__user-name">{{opt.name}}</div>
	</div>	
	<div class="user-item__remove" v-on:click="onRemove"></div>

</div>`,
	methods: {
		onRemove: function(){
			let index = $(this.$el).data('index');
			this.$emit('onRemove', index);
		}
	},
	created: function(){
		
	}
});