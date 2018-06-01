"use strict";
/*
панель списка чатов/задач
*/
Vue.component('panel-chats', {
	props: ['opt','panelTitle','type'],
  template: 
`<div class="panel-chats">
	<panel-header v-bind:title="panelTitle" v-bind:opt="opt"></panel-header>

	<div v-if="type == 'chats'" class="panel-chats__list">
		<chat-list-item 
			v-for="chat in opt.inboxList" 
			v-bind:chat="chat">
		</chat-list-item>
	</div>

	<div v-if="type == 'tasks'" class="panel-chats__list">
2
	</div>

</div>`
	
});