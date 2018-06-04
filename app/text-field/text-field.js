"use strict";
/*
поле ввода
*/
Vue.component('text-field', {
  props: ['lable','type'],
  template: 
`<div class="text-field">

  <input 
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