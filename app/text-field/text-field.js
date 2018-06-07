"use strict";
/*
поле ввода
*/

Vue.component('text-field', {
  props: ['lable','type','value','placeholder'],
  template: 
`<div class="text-field" v-bind:class="classList" >
	
	<div v-if="type == 'search'" class="text-field__search-icon"></div>

  <input 
		v-bind:placeholder="placeholder"
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
		},
		classList : function(){
			let classList;
				switch (this.type) {
					case 'search':
						classList = 'text-field_search';
						break;
						
					case 'date':
						classList = 'text-field_date';
						break;
						
					default:
						classList = '';
						break;		
				}
			return classList;
		}
	},
	methods: {
		onChange : function(e){
			this.$emit('onValue',  $(this.$el).find('input').val() );
		}
	}
});