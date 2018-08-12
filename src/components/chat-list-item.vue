<template>
<div 
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
      <user-name v-bind:name="(lastMessage.isVisible) ? lastMessage.author.email : ''"></user-name> 
			<div>{{ (lastMessage.isVisible) ? lastMessage.text : '' }}</div>
		</div>
	</div>
  <div class="chat-list-item__info">
    <div class="chat-list-item__date">
			<date-time 
				v-bind:format="'dateTime'"
				v-bind:date="lastMessage.date">
			</date-time>
    </div>
    <div 
    	v-on:click.stop="setChatPinned" 
    	class="chat-list-item__keep" 
    	v-bind:class="{ 'chat-list-item__keep_pined' : isPinned }">
    </div>
  </div>
</div>
</template>


<script>
	import $ from 'jquery';
	import request from '../functions/request.js';
	
	import contactIconChip from '../components/contact-icon-chip.vue';
	import userName from '../components/user-name.vue';
	import dateTime from '../components/date-time.vue';

	export default {
		props: {
			chat: Object,
			app: Object,
			opt: Object,
			type: String
		},
		created: function(){

		},
		components: {
			contactIconChip: contactIconChip,
			userName: userName,
			dateTime: dateTime
		},
		methods: {
			
			setChatActive: function() {
				let __this = this;
				request.post('setChatActive', {
					userId: this.opt.user.id,
					chatId: this.chat.id
				}, function(e){
					APP.$set(APP.opt.user, 'activeChatId', __this.chat.id);
				});
			},
			
			setChatPinned: function() {
				let __this = this;
				
				this.getChatRoom(function(i,e){
					let pin = !e.isPinned;
					
					request.post('setChatPinned', {
						userId: __this.opt.user.id,
						chatId: __this.chat.id,
						isPinned: (pin) ? 1 : 0
					}, function(){
						
					});
					APP.$set(APP.opt.chatsRooms[i], 'isPinned', pin);
				});
				
			},
			
			getChatRoom: function(callback) {
				let chatsRooms = this.opt.chatsRooms;
				for (var i = 0; i < chatsRooms.length; i++){
					if (chatsRooms[i].chatsId == this.chat.id && chatsRooms[i].usersId == this.opt.user.id) {
						if (callback) callback(i, chatsRooms[i]);
						return chatsRooms[i];
					}
				}
			}
		},
		computed: {
			//активный/неактивный
			isActive: function(){
				return (this.chat.id == this.opt.user.activeChatId) ? true : false;
			},
			
			//запиненый да/нет
			isPinned: function(){
				return (this.chatRoom.isPinned) ? true : false;
			},
			
			//роль в чате
			chatRoom: function(){
				return this.getChatRoom();
			},
			
			//последнее сообщение в чате
			lastMessage: function(){
				let message = {};
				message.isVisible = false;
				message.date = this.chat.creationDate;
				message.author = {};
				message.text = null;
				message.id = null;
				message.userId = null;
				message.chatsId = null;
				
				let chatId = this.chat.Id;
				let messages = this.opt.messages;
				let length = (this.opt.messages) ? this.opt.messages.length : 0;
				var temp = {id: -1};
				
				if (length){
					for (var i = 0; i < length; i++ ) {
						if (this.opt.messages[i].chatsId == chatId){
							if (this.opt.messages[i].id > temp.id) temp = this.opt.messages[i];
						}
					}
					
					message.isVisible = true;
					message.date = temp.date || message.date;
					message.text = temp.text;
					message.userId = temp.userId;
					message.chatsId = temp.chatsId;
					message.id = temp.id;
					message.author = (function(userId, userList){
						let length = (userList) ? userList.length : 0;
						for (var i = 0; i < length; i++){
							if (message.userId == userList[i].id) return userList[i]; 
						}
					})(message.userId, this.opt.userList);
					
				} 
				
				return message
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

		&_active &__keep {
			.filter(brightness(10));
		}

		&__content {
			box-sizing: border-box;
			padding: 0 0 0 @padding;
			.flex-block();
			.flex-direction(column);
			width: auto;
			line-height: 22px;

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
			width: 20px;
			height: 20px;
			background-image: ~"url(../assets/keep.svg)";
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
			position: absolute;
			right: 0;
			bottom: 0;
			opacity: 0.2;
			.filter(grayscale(100));

			&_pined {
				opacity: 1;
				.filter(none);
			}
		}

		&__date {
			text-align: right;
			font-size: 12px;
			line-height: 20px;
			position: absolute;
			right: 0;
			background-color: @color-white;
			padding: 8px;
			.transform(translate(10px, -8px));

			& span {
				display: inline-block;
				opacity: .35;
				white-space: nowrap;
			}

			&::before {
				@size: 20px;
				content: '';
				display: block;
				position: absolute;
				width: @size;
				height: 36px;
				background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 70%);
				left: -@size;
				top: 0px
			}
		}

		&__title {
			font-size: @font-size-main;
			opacity: .8;
			white-space: nowrap;
		}

		&__description {
			font-size: 14px;
			opacity: .6;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			padding: 0 20px 0 0;
			display: flex;
		}

	}
</style>