<template>
<div 
	v-on:click="setInboxActive" 
	class="chat-list-item" 
	v-bind:class="{ 'chat-list-item_active' : chat.isActive }">
	<contact-icon-chip 
		v-bind:type="type"
		v-bind:title="chat.name">
	</contact-icon-chip>
	<div class="chat-list-item__content">
		<div class="chat-list-item__title">{{ chat.name }}</div>
		<div class="chat-list-item__description">
      <user-name v-bind:name="'username'"></user-name> 
			<div>{{ 'last message text' }}</div>
		</div>
	</div>
  <div class="chat-list-item__info">
    <div class="chat-list-item__date">
			<date-time 
				v-bind:format="'dateTime'"
				v-bind:date="'00:00:00'">
			</date-time>
    </div>
    <div 
    	v-on:click.stop="chat.isPined = !chat.isPined" 
    	class="chat-list-item__keep" 
    	v-bind:class="{ 'chat-list-item__keep_pined' : chat.isPined }">
    </div>
  </div>
</div>
</template>


<script>
	import $ from 'jquery';
	
	import contactIconChip from '../components/contact-icon-chip.vue';
	import userName from '../components/user-name.vue';
	import dateTime from '../components/date-time.vue';

	export default {
		props: {
			chat: Object,
			app: Object,
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
			setInboxActive: function() {
				let id = this._props.chat.id;
				let data = APP.$data;
				for (var i = 0; i < data.inboxList.length; i++) {
					data.inboxList[i].isActive = false;
					if (data.inboxList[i].id === id) {
						data.inboxList[i].isActive = true;
						data.user.activeChat_id = data.inboxList[i].id;
					}
				}
			}
		},
		computed: {
			getLastMassage: function(){
				let message = ''
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