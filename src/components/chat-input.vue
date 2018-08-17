<template>
	<div class="chat-input">
		<div 	
			v-bind:title="this.d('add file')" 
			class="chat-input__add-file">
		</div>
		<textarea 
			autofocus 
		  class="chat-input__input" 
			v-model="textInput"
			v-on:keyup="resizeTextarea"
			v-on:keydown="handleCmdEnter($event)">
		</textarea>
		<div 
			class="chat-input__send" 
			v-on:click="addNewMessage" 
			v-bind:title="this.d('send') + ': ⌘ + Enter'">
			
			<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    		<polygon 
    			transform="translate(0, 1)" 
    			points="0 18 20 9 0 0 0 7 14 9 0 11">
    		</polygon>
			</svg>
	
		</div>
	</div>
</template>


<script>
	import $ from 'jquery';
	import request from '../functions/request.js';

	export default {
		props: {
			opt: Object,
			app: Object
		},
		created: function() {
			$(this.$el).find('.chat-input__input').focus();
		},
		updated: function() {
			$(this.$el).find('.chat-input__input').focus();
		},
		methods: {
			handleCmdEnter: function(e) {
				if ((e.metaKey || e.ctrlKey) && e.keyCode == 13) {
					this.addNewMessage();
				}
			},
			d: function(w) {
				return this.app.d[w.toLowerCase()][this.app.lang];
			},
			addNewMessage: function() {
				let __this = this;
				
				request.post('newMessage',{
					pass : this.opt.user.password,
					email : this.opt.user.email,
					text : this.textInput,
					userId: this.opt.user.id,
					chatsId: this.opt.user.activeChatId,
				}, function(e){
					
					__this.textInput = '';
					__this.$socket.emit('chat message', JSON.stringify(e));
					
				});
				
			},
			resizeTextarea: function() {
				let el = this.$el;
				let $textarea = $(el).find('.chat-input__input');
				let offset = $textarea[0].offsetHeight - $textarea[0].clientHeight;

				$textarea.removeAttr('style').css({
					'height': [$textarea[0].scrollHeight + offset,'px'].join('')
				});
			}
		},
		data: function() {
			return {
				textInput: ''
			}
		}
	}
</script>


<style lang="less">
	@import '../less/main.less';

	.chat-input {
		@icon-size: 20px;
		.flex-block();
		width: 100%;
		box-sizing: border-box;
		min-height: 50px;
		background-color: @color-white;
		.f-border(top);

		&__add-file {
			box-sizing: border-box;
			min-width: @icon-size;
			min-height: @icon-size;
			margin: 8px;
			background-image: ~"url(../assets/add-file.svg)";
			background-size: @icon-size @icon-size;
			background-position: center;
			background-repeat: no-repeat;
		}

		&__input {
			box-sizing: border-box;
			display: block;
			border: none;
			flex-grow: 1;
			font-size: 14px;
			padding: 15px 0;
			line-height: 20px;
			min-height: 50px;
			height: 50px;
			resize: none;
			overflow: hidden; //transition: height .2s;
			&:focus {
				outline: none;
			}

			& * {
				max-width: 100%;
			}
		}

		&__send {
			box-sizing: border-box;
			min-width: @icon-size;
			min-height: @icon-size;
			margin: 8px;
			.flex-block();
    	align-items: center;
			
			& polygon {
				fill: @color-active;
				stroke: none;
			}
		}
	}
</style>