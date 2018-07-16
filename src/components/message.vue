<template>
	<div class="message">
		<contactIconChip
			v-bind:title="'User Name'" 
			v-bind:image="''"
			v-bind:size="'s'">
		</contactIconChip>
		<div class="message__content">
			<user-name v-bind:name="'User Name'">User name</user-name>
			<div><slot></slot></div>
		</div>
		<div class="message__info">
			<date-time 
				v-bind:format="'dateTime'">
			</date-time>
		</div>
	</div>
	
</template>


<script>
	import $ from 'jquery';
	import contactIconChip from '../components/contact-icon-chip.vue';
	import userName from '../components/user-name.vue';
	import dateTime from '../components/date-time.vue';
	
	export default {
		props : {
			opt: Object
		},
		components : {
			contactIconChip: contactIconChip,
			userName: userName,
			dateTime: dateTime
		}
	}

</script>


<style lang="less">
	@import '../less/main.less';
	
	.message {
		box-sizing: border-box;
		min-height: 50px;
		.flex-block();
		padding: 5px;
		width: 100%;
		
		&__content {
			flex-grow: 1;
			padding: 0 5px;
			box-sizing: border-box;
		}
		
		&__info {
			box-sizing: border-box;
			color: @color-gray-font;
		}
	}

</style>