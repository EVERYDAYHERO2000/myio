<template>
	<div class="date-time">{{setDate()}}</div>
</template>


<script>

	import getDateTitme from '../functions/date-time.js';
		
	export default {
		props: {
			date: {
				default: getDateTitme( new Date() ).formated,
				type: String
			},
			format: {
				default: 'formated', 
				type: String
			}
		},
		methods: {
			setDate : function(){
				return getDateTitme(this.date)[this.format];
			}
		}
	}
</script>


<style lang="less">
	@import '../less/main.less';
	
	.date-time {
		font-size: 12px;
		white-space: nowrap;
		font-weight: 500;
		opacity: 0.7;
	}
</style>