"use strict";
/*
выпадающий список
*/
Vue.component('select-list', {
  props: ['options','name','active','k','v'],
  template: 
`<div class="select-list">
	<button class="select-list__placeholder" v-on:click="toggleShow">{{getActive}}</button>
  <div class="select-list__bar"></div>
  <div class="select-list__back" v-on:click="toggleShow"></div>
	<div class="select-list__list">
		<div v-for="(option, index) in options" class="select-list__option">
			<input 
				type="radio" 
				v-bind:name="name" 
				v-bind:value="option[k]" 
				v-bind:id="name + '_' + index"
				v-bind:data-key="index">
    	<label 
				v-bind:data-key="index" 
				v-on:click="select" 
				v-bind:for="name + '_' + index">{{option[v]}}
      </label>
		</div>
	</div>
</div>`,
	created : function(){
		
	},
	methods: {
		toggleShow: function() {
			let $el = this.$el;
			let zIndex = APP.f.findHighestZIndex('div');
      $($el).find('.select-list__back').toggleClass('select-list__back_active');
			$($el).find('.select-list__list').toggleClass('select-list__list_active').css({'z-index' : zIndex + 1});
		},
		select: function(e){
			let index = $(e.target).attr('data-key');
			let selected = this.options[index];
			this.active = index;
			this.toggleShow();
      
      this.$emit('onActive', index);
		}
	},
	computed : {
		getActive: function(){
      
			return this.options[this.active][this.v];
		}
	}
});


//<select-list v-bind:name="'test'" v-bind:options="this.d" v-bind:active="0"></select-list>

/*

	data: function () {
		return {
			d: [
				{
					value: '1',
					name: 'first child'
			},
				{
					value: '2',
					name: 'next child'
			},
				{
					value: '3',
					name: 'last child'
			}
		]
		}
	}
*/

