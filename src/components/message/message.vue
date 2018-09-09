<template>
	<div 
		v-on:contextmenu.prevent="setContextMenu"
		class="message">
	
		<contactIconChip
			v-bind:title="user.login" 
			v-bind:image="''"
			v-bind:size="'s'">
		</contactIconChip>
		
		<div class="message__content">
			<user-name 
				v-bind:name="user.login">
			</user-name>
			<div clas="message__text">{{message.text}}</div>
		</div>
		
		<div class="message__info">
			<date-time 
				v-bind:date="message.date"
				v-bind:format="'dateTime'">
			</date-time>
		</div>
		
	</div>
	
</template>


<script>
	/**
 	* Функции 
 	*/
	import F 									from '../../functions/functions.js';
	
	/**
 	* Компоненты 
 	*/
	import contactIconChip 		from '../../components/contact-icon-chip/contact-icon-chip.vue';
	import userName 					from '../../components/user-name/user-name.vue';
	import dateTime 					from '../../components/date-time/date-time.vue'; 
	
	/**
 	* Миксины 
 	*/
	import contextMenu__mixin from '../../mixins/context-menu.js';
	
	/**
 	* Сообщение в чате 
 	*/
	export default {
		props : {
			/**
 			* глобальный объект с данными для поиска пользователя
 			*/
			opt: Object,
			/**
 			* объект сообщения
 			*/
			message: Object
		},
		mixins: [contextMenu__mixin],
		components : {
			contactIconChip: contactIconChip,
			userName: userName,
			dateTime: dateTime
		},
		computed : {
			user : function(){
				return F.ifExist(this.opt.userList, 'id', this.message.userId).object;
			}
		},
		data : function(){
			return {
				menu : [
					{name: this.$d('add user')},
					{type: 'divider'},
					{name: this.$d('pin')},
					{name: this.$d('delete')}, 
					{name: this.$d('convert to task')}
				]
			}
		}
	}

</script>


<style lang="less">
	@import '../../less/main.less';
	
	.message {
		box-sizing: border-box;
		min-height: 50px;
		.flex-block();
		padding: 5px 8px;
		width: 100%;
		
		&__content {
			flex-grow: 1;
			padding: 0 5px;
			box-sizing: border-box;
			user-select: all;
		}
		
		&__text {
			user-select: all;
		}
		
		&__info {
			box-sizing: border-box;
			color: @color-gray-font;
		}
	}

</style>