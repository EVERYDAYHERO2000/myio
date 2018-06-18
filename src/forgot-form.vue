<template>
	<div class="forgot-form">
		<div class="login-form__logo"><logo></logo></div>
			<text-field v-bind:lable="'Email'" v-bind:type="'email'"></text-field>
			<div class="login-form__button-group">

			<btn v-bind:title="'Request Password'"></btn>
		</div>
	</div>
</template>


<script>
	import $ from 'jquery';
	import auth from './functions/auth.js';
	import URL from './functions/urls-option.js';
	
	import btn from './components/btn.vue';
	import textField from './components/text-field.vue';
	import logo from './components/logo.vue';
	
	export default {
		props: {
			opt: Object
		},
		components: {
			btn : btn,
			textField : textField,
			logo : logo
		}
	}
</script>


<style lang="less">
	@import './less/main.less';
	.forgot-form {
		width: 250px;
		margin: 0 auto;
		height: 100vh;
		.flex-block();
		flex-direction: column;
		justify-content: center;
		opacity: 1;

		&__button-group {
			.flex-block();
			justify-content: space-between;

			& .btn:first-child {
				margin-right: 20px;
			}
		}

		&__logo {
			.flex-block();
			justify-content: center;
		}

		&_hide {
			opacity: 0;
			transition: all 0.2s ease;
		}
	}
</style>