<template>
	<div v-on:mousedown="click" v-on:mousemove="getCoordinate" class="btn">
		<button>
			<span>{{title}}</span>
		</button>
		<div class="btn__drop"></div>
	</div>
</template>


<script>
	import $ from 'jquery';
	export default {
		props: {
			title: String
		},
		methods: {
			getCoordinate: function(e) {
				let $el = this.$el;
				$($el).find('.btn__drop').css({
					top: e.layerY + 'px',
					left: e.layerX + 'px'
				});

			},
			makeDrop: function(e) {
				let $el = this.$el;
				$($el).find('.btn__drop').removeClass('btn__drop_down').delay(10).queue(function() {
					$(this).addClass('btn__drop_down').dequeue();
				});
			},
			click: function(e) {
				let $el = this.$el;
				let __this__ = this;
				this.makeDrop(e);

				$($el).delay(150).queue(function() {
					__this__.$emit('onClick', true);
				});
			}
		}
	}
</script>


<style lang="less">
	@import '../less/main.less';
	.btn {
		color: @color-white;
		font-size: @font-size-main;
		line-height: 42px;
		background-color: @color-active;
		.border-radius(5px);
		text-align: center;
		margin: 40px 0 0 0;
		box-sizing: border-box;
		width: max-content;
		overflow: hidden;
		position: relative;

		& button {
			background: none;
			padding: 0px 30px;
			line-height: 42px;
			color: @color-white;
			font-size: @font-size-main;
			border: none;
			box-sizing: border-box;
			.border-radius(5px);
			.flex-block();
			.align-items(center);
			.flex-direction(column);

			&:focus {
				outline: none;
			}

			&::after {
				content: '';
				height: 2px;
				background: @color-white;
				width: 0%;
				transition: all .2s ease;
				display: block;
			}
			&:focus::after {
				width: 100%;
				transition: all .2s ease;
			}
		}


		&__drop {
			.border-radius(50%);
			position: absolute;
			background-color: rgba(255, 255, 255, 0.3);
			width: 1px;
			height: 1px;
			top: 0;
			left: 0;
			.transform-origin(center);
			opacity: 1;
			pointer-events: none;

			&_down {
				opacity: 0;
				animation: btn-down 0.8s ease;
			}

			@keyframes btn-down {
				0% {
					.transform(scale(1));
					opacity: 1;
				}
				100% {
					.transform(scale(300));
					opacity: 0;
				}
			}

		}

		& span {
			pointer-events: none;
		}
	}

	.btn_link {
		background-color: @color-white;
		color: @color-active;
		font-weight: 300;


		& button {
			color: @color-active;
			font-weight: 500;

			&::after {
				background: @color-active;
			}

		}

		& .btn__drop {
			background-color: rgba(red(@color-active), green(@color-active), blue(@color-active), 0.1);
		}
	}
</style>