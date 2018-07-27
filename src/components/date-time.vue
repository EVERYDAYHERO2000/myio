<template>
	<div class="date-time">{{setDate()}}</div>
</template>


<script>

	import dateTitme from '../functions/date-time.js';
		
	export default {
		props: {
			date: String,
			format: String
		},
		methods: {
			setDate : function(){
				return dateTitme(this.date)[this.format];
			}
		}
	}
</script>


<style lang="less">
	@import '../less/main.less';
	
	.date-time {
		font-size: 12px;
		color: @color-gray-font;
		white-space: nowrap;
		font-weight: 500;
	}
</style>