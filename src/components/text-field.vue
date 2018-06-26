<template>
	<div class="text-field" v-bind:class="classList">

		<div v-if="type == 'search'" class="text-field__search-icon"></div>

		<input 
			v-bind:placeholder="placeholder"
			v-bind:value="value"
			v-bind:type="fieldType" 
			v-on:keyup="onChange" required />

		<label>{{lable}}</label>
		<div class="text-field__bar"></div>
		<div class="text-field__error">{{error}}</div>
	</div>
</template>


<script>
	import $ from 'jquery';
	
	export default {
		props: {
			lable: String,
			type: String,
			value: String,
			placeholder: String,
			error: String
		},
		computed: {
			fieldType: function() {
				return (this.type) ? this.type : 'text';
			},
			classList: function() {
				let classList;
				switch (this.type) {
					case 'search':
						classList = 'text-field_search';
						break;

					case 'date':
						classList = 'text-field_date';
						break;

					default:
						classList = '';
						break;
				}
				return classList;
			}
		},
		methods: {
			onChange: function(e) {
				this.$emit('onValue', $(this.$el).find('input').val());
			}
		}
	}
</script>


<style lang="less">
	@import '../less/main.less';
	
		input:-webkit-autofill,
		input:-webkit-autofill:hover, 
		input:-webkit-autofill:focus
		input:-webkit-autofill {
			background-color: transparent!important;
			-webkit-text-fill-color: @color-active;
			-webkit-box-shadow: 0 0 0px 1000px @color-white inset;
			.transition(background-color 5000s ease-in-out 0s);
		}
	
	.text-field {
		.flex-block();
		.flex-direction(column);
		padding: 40px 0 0 0;
		.box-sizing(border-box);
		position: relative;
		.transition(all 0.2s ease);

		.safari & {
			padding:0;
			margin: 40px 0 0 0; 
		}

		& input {
			font-size: @font-size-main;
			padding: 10px 10px 10px 5px;
			display: block;
			border: none;
			border-bottom: 1px solid rgba(0, 0, 0, 0.2);
			.box-sizing(border-box);
		}

		& input[type='date'] {
			letter-spacing: 1px;
		}

		& input[type="password"] {

			&::-webkit-passman-key.highlighted {
				//background-color: @color-active!important;
			}

		}		
		
		& input:focus {
			outline: none;
		}

		& input~label {
			.transform(translate(0, 0) scale(1));
			.transform-origin(left center);
			padding: 10px 10px 10px 5px;
			font-size: @font-size-main;
			pointer-events: none;
			position: absolute;
			.transition(all .2s ease);
			color: rgba(0, 0, 0, 0.3);
			
			.safari & {
				top:0;
			}
		}

		& input:valid:not(:focus)~label {
			color: @color-gray-font;
		}

		& input:focus~label,
		& input:valid~label {
			.transform(translate(0px, -20px) scale(0.9));
			.transition(all .2s ease);
			color: @color-active;
		}

		& input[type='date']~label {
			.transform(translate(0px, -20px) scale(0.9));
		}

		&__bar {
			.transform(translate(0, -2px));
			width: 100%;
			.flex-block();
			.align-items(center);
			.flex-direction(column);

			&::after {
				content: '';
				height: 2px;
				background: @color-active;
				width: 0%;
				.transition(all .2s ease);
				margin: 0 0 -2px 0;
			}
		}

		& input:focus~&__bar::after {
			width: 100%;
			.transition(all .2s ease);
		}

		&_date {

			& input {}

			& input::-webkit-datetime-edit-text {
				margin: 0 5px;
				opacity: 0.5;
			}

			& input::-webkit-inner-spin-button {
				display: none;
			}

			& input::-webkit-clear-button {
				display: none;
			}

			& input::-webkit-calendar-picker-indicator {

				color: rgba(0, 0, 0, 0);
				opacity: 0.7;
				display: block;
				background: ~"url(../assets/arrow-drop-down.svg)";
				background-position: center;
				background-repeat: no-repeat;
				width: 20px;
				.transform(translateX(14px));
			}

			& input::-webkit-calendar-picker-indicator:hover {}

			& input::-webkit-calendar-picker-indicator::after {
				background: none;
				content: '';
				width: 20px;
				height: 20px;
				display: block;
			}

		}

		&_search {
			& input {
				padding-left: 25px;
			}

			& input::placeholder,
			& input::-webkit-input-placeholder {
				color: rgba(0, 0, 0, 0.2);
			}
		}

		&__search-icon {
			background-image: ~'url(../assets/search.svg)';
			background-repeat: no-repeat;
			background-position: center;
			opacity: 0.2;
			width: 20px;
			height: 20px;
			position: absolute;
			bottom: 10px;
		}

		&__error {
			color: @color-error;
			font-weight: 100;
			padding: 0px 0 0 5px;
			font-size: 12px;
			margin: 0px 0 -15px 0;
			min-height: 15px;
		}
		
		&_disabled {
			.filter(grayscale(100%));
			.transition(all 0.2s ease); 
		}

	}
</style>