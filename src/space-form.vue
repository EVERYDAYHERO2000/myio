<template>
	<div class="space-form">
		<div class="space-form__header">{{$d('Spaces')}}</div>
		<div class="link-list">
			
			<div 
				v-for="space in opt.spaces" 
				class="link-list__link link-list__link_active">
				{{ space.name }}
			</div>
		</div>
	</div>
</template>


<script>
	import $ from 'jquery';
	
	export default {
		props : {
			opt: Object,
			app: Object
		},
		methods: {
			d: function(w){
				return this.app.d[w.toLowerCase()][this.app.lang];
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