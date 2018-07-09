<template>
	<div class="space-form">
		<div class="space-form__header">{{this.d('Spaces')}}</div>
		<div class="link-list">
			<div class="link-list__link link-list__link_active">Company 1</div>
			<div class="link-list__link">Company 2</div>
			<div class="link-list__link">Company 3</div>
		</div>
	</div>
</template>


<script>
	import $ from 'jquery';
	
	export default {
		props : {
			opt: Object
		},
		methods: {
			d: function(w){
				return this.opt.options.d[w.toLowerCase()][this.opt.options.app.lang];
			}
		}
	}
	
</script>


<style lang="less">
	@import './less/main.less';
	
	@left-side: 15px;
	
	.space-form {
		box-sizing: border-box;
		
		
		&__header {
			padding: 0 15px;
			text-align: left;
			.form-header();
		}
		
	}
	
	.link-list {
		width: 100%;
		box-sizing: border-box;
		
		&__link {
			padding: 10px 10px 10px @left-side;	
			.transition(all .2s ease);
		}
		
		&__link_active {
			font-weight: 600;
		}
		
		&__link:hover {
			color: @color-active;
			background-color: lighten(@color-active, 40%);
			.transition(all .2s ease);
		}
		
	}
	
</style>