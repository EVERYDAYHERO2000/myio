<template>
	<div
		v-bind:class="{	'header-title_light' : w == 'light', 
										'header-title_align-center' : align == 'center'}" 
		class="header-title">
		{{title}}
	</div>
</template>


<script>

export default {
	props : {
		title : {
			default : '',
			type : String
		},
		w : {
			default : 'normal',
			type : String  
		},
		align : {
			default : 'left',
			type : String
		}
	}	
}
	
</script>


<style lang="less">
	@import '../less/main.less';
	.header-title {
		font-size: 24px;
		font-weight: 500;
		line-height: 3;
		text-align: left;
		
		&_light {
			font-weight: 300;
		}
		
		&_align-center {
			text-align: center
		}
	}
</style>