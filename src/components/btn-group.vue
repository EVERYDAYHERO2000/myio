<template>
	<div class="btn-group">
		<slot>
			
		</slot>
	</div>
</template>


<script>

	export default {
		
	}
	
</script>


<style lang="less">
	@import '../less/main.less';
	.btn-group {
		.flex-block();
		.justify-content(space-between);

		& .btn:first-child {
			margin-right: 20px;
		}
		
		&_shade {
			position: sticky;
			bottom: 0px;
			padding: 0 0 20px 0;
			background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 30%, rgba(255, 255, 255, 1) 100%);
		}
	}
</style>