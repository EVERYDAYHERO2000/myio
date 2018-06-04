"use strict";
/*
поле ввода
*/
Vue.component('text-field', {
  props: ['lable','type','value'],
  template: 
`<div class="text-field" v-bind:class="(type == 'search') ? 'text-field_search' : ''" >
	
	<div v-if="type == 'search'" class="text-field__search-icon"></div>

  <input 
		v-bind:value="value"
		v-bind:type="fieldType" 
		v-on:keyup="onChange" required>
	</input>

  <label>{{lable}}</label>
  <div class="text-field__bar"></div>
</div>`,
	computed: {
		fieldType : function(){
			return (this.type) ? this.type : 'text';
		}
	},
	methods: {
		onChange : function(e){
			this.$emit('onValue',  $(this.$el).find('input').val() );
		}
	}
});