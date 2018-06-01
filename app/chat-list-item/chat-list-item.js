"use strict";
/*
элемент списка чатов
*/

Vue.component('chat-list-item', {
  props: ['chat'],
  template: 
`<div v-on:click="setInboxActive" class="chat-list-item" v-bind:class="{ 'chat-list-item_active' : chat.isActive }">
	<contact-icon-chip v-bind:title="chat.title"></contact-icon-chip>
	<div class="chat-list-item__content">
		<div class="chat-list-item__title">{{ chat.title }}</div>
		<div class="chat-list-item__description">
      <span class="chat-list-item__username">{{chat.last_message.author}}</span> 
      {{ chat.last_message.text }}
		</div>
	</div>
  <div class="chat-list-item__info">
    <div class="chat-list-item__date"><span>{{ chat.last_message.date.dateTime }}</span></div>
    <div v-on:click.stop="chat.isPined = !chat.isPined" class="chat-list-item__keep" v-bind:class="{ 'chat-list-item__keep_pined' : chat.isPined }"></div>
  </div>
</div>`,
  methods: {
    setInboxActive: function () {
      var id = this._props.chat.id;
      var data = APP.$data;
      for (var i = 0; i < data.inboxList.length; i++) {
        data.inboxList[i].isActive = false;
        if (data.inboxList[i].id === id) {
          data.inboxList[i].isActive = true;
          data.user.activeChat_id = data.inboxList[i].id;
        }
      }
    }
  }
});