<template>
	<div class="chat-input">
		<div class="chat-input__add-file"></div>
		<textarea autofocus class="chat-input__input" 
				v-model="textInput"
				v-on:keyup="resizeTextarea"
				v-on:keydown="handleCmdEnter($event)"></textarea>
		<div class="chat-input__send" v-on:click="addNewMessage" title="⌘ + Enter"></div>
	</div>
</template>


<script>
	import $ from 'jquery';

	export default {
		props: {
			opt: Object 
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
			d: function(w){
				return this.opt.options.d[w.toLowerCase()][this.opt.options.app.lang];
			},
			addNewMessage: function() {
				/*
				if (this.newText) {
					var date = __F__.getDateTime(new String(new Date()));
					var v_data = APP.$data;
					var __this__ = this;
					v_data.app.newText = this.newText;
					this.newText = '';

					var newMessage = {
						event: 'new_message',
						message: v_data.app.newText,
						author_id: v_data.user.id,
						chat_id: __this__.prop,
						date: date.formated
					}

					DATA.save(newMessage, function(d) {
						var v_data = APP.$data;
						APP.$data.messages.push({
							message: v_data.app.newText,
							author: v_data.user.name,
							author_id: v_data.user.id,
							chat_id: __this__.prop,
							date: date.dateTime,
							id: parseInt(d, 10)
						});

						$.each(v_data.inboxList, function(i, e) {
							if (e.id === v_data.user.activeChat_id) {
								e.last_message.author = v_data.user.name;
								e.last_message.text = v_data.app.newText;
								e.last_message.date = date;
							}
						});
					});
				}
				var input = this.$el;
				$(this.$el).find('.chat-input__input').css({
					'height': '50px'
				}).focus();
				*/
			},
			resizeTextarea: function() {
				let el = this.$el;
				let $textarea = $(el).find('.chat-input__input');
				let offset = $textarea[0].offsetHeight - $textarea[0].clientHeight;	

				$textarea.removeAttr('style').css({
					'height': $textarea[0].scrollHeight + offset + 'px'
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
	@import './less/main.less';

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
			background-image: ~"url(./assets/add-file.svg)";
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
			overflow: hidden;
			//transition: height .2s;

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
			background-image: ~"url(./assets/send.svg)";
			background-size: @icon-size @icon-size;
			background-position: center;
			background-repeat: no-repeat;
		}
	}
</style>