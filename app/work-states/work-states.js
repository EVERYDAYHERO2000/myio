"use strict";
/*
рабочие состояния приложения
*/
Vue.component('work-states', {
	props: ['opt'],
  template: 
`<div v-if="opt.options.app.state === 'chats'" class="work-states">

  <div class="panel panel_white">
    <panel-chats 
			v-bind:opt="opt" 
			v-bind:type="'chats'" 
			v-bind:panelTitle="'Chats'">
		</panel-chats>
  </div>


  <div class="panel panel_chat">
		
  </div>


  <div class="panel panel_white">
    <panel-chats 
			v-bind:opt="opt"
			v-bind:type="'tasks'" 
			v-bind:panelTitle="'Tasks'">
		</panel-chats>
  </div>

</div>`
	
});