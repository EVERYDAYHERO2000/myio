"use strict";
/*
кнопка
*/
Vue.component('btn', {
	props:['title'],
  template: 
`<div v-on:mousedown="makeDrop" v-on:mousemove="getCoordinate" class="btn">
  <button>
    <span>{{title}}</span>
  </button>
  <div class="btn__drop"></div>
</div>`,
	methods: {
    getCoordinate : function (e) {
      let $el = this.$el;      
      $($el).find('.btn__drop').css({
        top : e.layerY + 'px',
        left : e.layerX + 'px'
      });
			
    },
    makeDrop : function (e) {
      let $el = this.$el;
      $($el).find('.btn__drop').removeClass('btn__drop_down').delay(10).queue(function(){
        $(this).addClass('btn__drop_down').dequeue();
      });
    }
	}
});