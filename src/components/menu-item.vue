<template>
		<div
			v-bind:data-key="dataKey"
			v-bind:class="{ 'menu-item_active' : isActive }" 
			class="menu-item">
		
			<template v-if="type == 'div'">
				{{title}}
			</template>
			
			<label 
				v-bind:data-key="dataKey"
				v-bind:for="forId"
				v-if="type == 'label'">
				{{title}}
			</label>
			
			<drop-effect 
				v-bind:theme="'dark'">
			</drop-effect>
			
		</div>
</template>


<script>
	
	import dropEffect from '../components/drop-effect.vue';
	
	export default {
		props: {
			title : {
				default : '',
				type: String
			},
			type : {
				default: 'div', 
				type: String
			},
			isActive : {
				default: false,
				type: Boolean
			},
			forId : {
				default: '',
				type: String
			},
			dataKey : {
				default : 0,
				type : Number
			}
		},
		components: {
			dropEffect : dropEffect 
		}
	}
</script>


<style lang="less">
	@import '../less/main.less';
	
	.menu-item {
		font-size: @font-size-main;
		box-sizing: border-box;
		padding: 10px 10px 10px 15px;
		font-weight: 500;
		color: @color-black;
		.transition(all .2s ease);
		position: relative;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		
		&:hover {
			color: @color-active;
			background-color: lighten(@color-active, 40%);
			.transition(all .2s ease);
		}
		
		&_active {
			font-weight: 600;
		}
	}
</style>