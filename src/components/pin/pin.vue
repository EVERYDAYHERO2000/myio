<template>
<div 
	class="pin" 
	v-bind:class="{ 'pin_pined' : state }">
	
	<svg 
		width="20px" 
		height="20px" 
		viewBox="0 0 20 20" 
		version="1.1" 
		xmlns="http://www.w3.org/2000/svg" 
		xmlns:xlink="http://www.w3.org/1999/xlink">

		<g class="pin__icon" transform="translate(9.545942, 10.545942) rotate(45.000000) translate(-9.545942, -10.545942) translate(5.045942, 1.545942)">
			<polygon points="7.3570226 1.47140452 8.09272486 1.47140452 8.09272486 0 0.73570226 0 0.73570226 1.47140452 1.47140452 1.47140452 1.47140452 7.3570226 0 8.82842712 0 10.2998316 3.82565175 10.2998316 3.79623034 17.7950338 4.97335396 17.7950338 5.00277537 10.2998316 8.82842712 10.2998316 8.82842712 8.82842712 7.3570226 7.3570226"></polygon>
		</g>

	</svg>

</div>
</template>


<script>
	export default {
		props: {
			state : {
				default : false,
				type : Boolean 
			}
		}
	}
</script>


<style lang="less">
	@import '../../less/main.less';
	.pin {
		width: 20px;
		height: 20px;
		pointer-events: all;
		&__icon {
			fill: rgba(0,0,0,1);
			stroke: none;
			opacity: 0.2;
			transition: all .2s;
		}
		&_pined &__icon {
			opacity: 1;
			fill: @color-active;
			transition: all .2s;
		}
	}
	
	.chat-list-item_active .pin {
		&__icon {
			fill: @color-white;
		}
	}
	
</style>