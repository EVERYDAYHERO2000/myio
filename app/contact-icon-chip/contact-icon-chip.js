
Vue.component('contact-icon-chip', {
  props: ['title','image'],
  template: 
`<div 
	v-if="image && image.length" 
	v-bind:style="'background-image:url(' + image + ')'" 
	class="contact-icon-chip">
</div>

<div 
	v-else 
	v-bind:style="'background-color:' + color"
	class="contact-icon-chip" >
		{{title[0]}}
</div>`,
	data: function(){
		return {
			color : APP.f.changeColor(this.title)
		}
	},
	created: function(){
		
	}
	
});