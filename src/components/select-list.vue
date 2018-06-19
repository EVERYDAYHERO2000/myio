<template>
	<div class="select-list">
	<button class="select-list__placeholder" v-on:click="toggleShow">{{getActive}}</button>
  <div class="select-list__bar"></div>
  <div class="select-list__back" v-on:click="toggleShow"></div>
	<div class="select-list__list">
		<div v-for="(option, index) in options" class="select-list__option">
			<input 
				type="radio" 
				v-bind:name="name" 
				v-bind:value="option[k]" 
				v-bind:id="name + '_' + index"
				v-bind:data-key="index">
    	<label 
				v-bind:data-key="index" 
				v-on:click="select" 
				v-bind:for="name + '_' + index">{{option[v]}}
      </label>
		</div>
	</div>
</div>
</template>


<script>
	import $ from 'jquery';
	import findZindex from '../functions/find-zindex.js';
	
	export default {
		props: {
			options: Array,
			name: String,
			active: Number,
			k: String,
			v: String
		},
		created: function() {
			
		},
		methods: {
			toggleShow: function() {
				let $el = this.$el;
				let zIndex = findZindex('div');
				$($el).find('.select-list__back').toggleClass('select-list__back_active');
				$($el).find('.select-list__list').toggleClass('select-list__list_active').css({
					'z-index': zIndex + 1
				});
			},
			select: function(e) {
				let index = Number( $(e.target).attr('data-key') );
				let selected = this.options[index];
				this.toggleShow();

				this.$emit('onActive', index);
			}
		},
		computed: {
			getActive: function() {
				
				return this.options[this.active][this.v];
			}
		}
	}
</script>


<style lang="less">
	@import '../less/main.less';
	.select-list {
		.flex-block();
		.flex-direction(column);
		padding: 40px 0 0 0;
		box-sizing: border-box;
		position: relative;

		&__placeholder {
			border: none;
			.border-radius(0);
			border-bottom: 1px solid rgba(0, 0, 0, 0.2);
			background-color: transparent;
			box-sizing: border-box;
			font-size: @font-size-main;
			padding: 10px 10px 10px 5px;
			display: block;
			text-align: left;

			&:focus {
				outline: none;
			}

			&::after {
				background-image: ~"url(../assets/arrow-drop-down.svg)";
				width: 20px;
				height: 20px;
				content: '';
				display: block;
				position: absolute;
				bottom: 0;
				right: 0;
				.transform(translateY(-10px));
				opacity: 0.7;

			}


		}

		&__list {
			opacity: 0;
			pointer-events: none;
			transition: all .1s ease;
			background-color: @color-white;
			position: absolute;
			box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
			.transform-origin(top center);
			.transform(translateY(-20px));
			width: calc( 100% + 20px);
			margin: 0 -10px;
			padding: 10px 0;

			&_active {
				opacity: 1;
				box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
				pointer-events: all;
				transition: all .1s ease;
				.transform(translateY(-10px));
			}
		}

		&__option {

			& input[type="radio"] {
				display: none;

			}

			& label {
				font-size: @font-size-main;
				padding: 10px 10px 10px 15px;
				display: block;
				background-color: @color-white;
				transition: all .2s ease;

				&:hover {
					color: @color-active;
					background-color: lighten(@color-active, 40%);
					transition: all .2s ease;
				}
			}

		}

		&__back {
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			pointer-events: none;
			box-sizing: border-box;

			&_active {
				pointer-events: all;
			}
		}

		&__bar {
			.transform(translate(0, -2px));
			width: 100%;
			.flex-block();
			.align-items(center);
			.flex-direction(column);
			margin: 0 0 -2px 0;

			&::after {
				content: '';
				height: 2px;
				background: @color-active;
				width: 0%;
				transition: all .2s ease;
			}
		}

		&__placeholder:focus~&__bar::after {
			width: 100%;
			transition: all .2s ease;
		}
	}
</style>