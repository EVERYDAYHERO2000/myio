<template>
<div 
	v-on:contextmenu.prevent="context"
	v-on:click="setChatActive" 
	class="chat-list-item" 
	v-bind:class="{ 'chat-list-item_active' : isActive }">
	
	<contact-icon-chip 
		v-bind:type="type"
		v-bind:title="chat.name">
	</contact-icon-chip>
	
	<div class="chat-list-item__content">
		<div class="chat-list-item__title">{{ chat.name }}</div>
		<div class="chat-list-item__description">
     
      <user-name 
      	v-if="lastMessage.isVisible"
      	v-bind:class="{ 'user-name__on-active' : isActive }" 
      	v-bind:name="(lastMessage.isVisible) ? lastMessage.author.login : ''">
      </user-name> 
      	
			<div class="chat-list-item__last-message"> {{ (lastMessage.isVisible) ? lastMessage.text : '' }}</div>
		</div>
	</div>
  <div class="chat-list-item__info">
    <div class="chat-list-item__date">
    
			<date-time 
				v-bind:format="'dateTime'"
				v-bind:date="lastMessage.date">
			</date-time>
			
    </div>
    
    <div class="chat-list-item__keep" v-on:click.stop="setChatPinned" >
    	
			<pin 
				v-bind:title="$d('pin')"
				v-bind:state="(chat.isPinned) ? true : false">
			</pin>
			
    </div>
    
  </div>
</div>
</template>


<script>
	import $ from 'jquery';
	import request from '../functions/request.js';
	import F from '../functions/functions.js';

	import contactIconChip from '../components/contact-icon-chip.vue';
	import userName from '../components/user-name.vue';
	import dateTime from '../components/date-time.vue';
	import pin from '../components/pin.vue';

	export default {
		props: {
			chat: Object,
			app: Object,
			opt: Object,
			type: String
		},
		created: function() {

		},
		components: {
			contactIconChip: contactIconChip,
			userName: userName,
			dateTime: dateTime,
			pin: pin
		},
		methods: {

			d: function(w) {
				return this.app.d[w.toLowerCase()][this.app.lang];
			},
			context: function(e){
				APP.$data.app.context.isShowed = true;
				APP.$data.app.context.x = e.clientX;
				APP.$data.app.context.y = e.clientY;
				APP.$data.app.context.menu = [
					{name: 'Копировать'},
					{name: 'Вставить'},
					{name: 'Удалить'}
				]
			},

			//сделать чат активным
			setChatActive: function() {
				let __this = this;
				request.post('setChatActive', {
					userId: this.opt.user.id,
					chatId: this.chat.id
				}, function(e) {
					APP.$set(APP.opt.user, 'activeChatId', __this.chat.id);
				});
			},
			//запинить/распинить чат
			setChatPinned: function() {
				let __this = this;

				let pin = !this.chat.isPinned;
				request.post('setChatPinned', {
					userId: __this.opt.user.id,
					chatId: __this.chat.id,
					isPinned: (pin) ? 1 : 0
				}, function(e) {
					APP.$set(APP.opt.chatsRooms[__this.chat.chatsRoomsIndex], 'isPinned', pin);
				});
			}
		},
		computed: {
			//активный/неактивный
			isActive: function() {
				return (this.chat.id == this.opt.user.activeChatId) ? true : false;
			},

			//последнее сообщение в чате
			lastMessage: function() {
				let __this = this;
				let message = {};

				F.ifExist(this.opt.messages, 'chatsId', this.chat.id, undefined, function(e){
					if (e.status){
						message.isVisible = true;
						message.date = e.object.date || __this.chat.creationDate;
						message.text = e.object.text || null;
						message.userId = e.object.userId || null;
						message.chatsId = e.object.chatsId || null;
						message.id = e.object.id || null;
						message.author = F.ifExist(__this.opt.userList, 'id', message.userId).object || { email:null };
					}
				});
				
				return message;
			}
		}
	}
</script>


<style lang="less">
	@import '../less/main.less';

	.chat-list-item {

		@transition-speed: .2s;
		@padding: 8px;

		box-sizing: border-box;
		.f-border(bottom);
		box-sizing: border-box;
		.flex-block();
		padding: @padding;
		position: relative;

		&:hover {
			background-color: @color-hover;
			border-bottom: 1px solid @color-border-hover;
		}

		&:hover &__date::before,
		&:hover &__date {
			background: transparent;
		}

		&_active {
			background-color: @color-active;
			border-bottom: 1px solid @color-border-active;
		}

		&_active &__date::before,
		&_active:hover &__date::before {
			background: transparent;
		}

		&_active:hover {
			border-bottom: 1px solid @color-border-active;
		}

		&_active:hover,
		&_active &__date,
		&_active:hover &__date {
			background-color: @color-active;
			color: @color-white;
		}

		&_active {
			color: @color-white;
		}

		&_active,
		&_active:hover {
			background-color: @color-active;
		}

		&__content {
			box-sizing: border-box;
			padding: 0 0 0 @padding;
			.flex-block();
			.flex-direction(column);
			width: auto;
			line-height: 20px;

			color: @color-black;
			flex-grow: 1;
			overflow: hidden;
			.justify-content(center);
		}


		&_active &__content {
			color: @color-white;

		}

		&__info {
			box-sizing: border-box;
			width: 0px;
			position: relative;
		}

		&__keep {
			position: absolute;
			right: 0;
			bottom: 0;
		}

		&__date {
			text-align: right;
			font-size: 12px;
			line-height: 10px;
			position: absolute;
			right: 0;
			background-color: @color-white;
			padding: 5px 10px 0 0;
			.transform(translate(10px, -8px));

			& span {
				display: inline-block;
				opacity: .35;
				white-space: nowrap;
			}
		}

		&__title {
			font-size: @font-size-main;
			opacity: 1;
			white-space: nowrap;
			font-weight: 500;
			box-sizing: border-box;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		&__description {
			font-size: 14px;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			padding: 0 20px 0 0;
			display: flex;
		}

		&__last-message {
			text-overflow: ellipsis;
			padding: 0 0 0 5px;
			box-sizing: border-box;
			overflow: hidden;
		}

	}
</style>