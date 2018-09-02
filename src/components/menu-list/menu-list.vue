<template>
	<div class="menu-list">
		<menu-item
			v-for="(item, index) in list"
			v-bind:isActive="active == index"
			v-on:click.native="setActive(index, item[v])"
			v-bind:title="item[k]">
		</menu-item>
	</div>
	
</template>


<script>
	import menuItem from '../../components/menu-item/menu-item.vue';
	
	export default {
		props: {
			list : Array,
			active : {
				default: 0,
				type: Number
			},
			k: String,
			v: String
		},
		components: {
			menuItem: menuItem
		},
		methods : {
			setActive : function(index, value){
				this.$emit('onActive', {index: index, value: value});
			}	
		}
	}
</script>


<style lang="less">
	@import '../../less/main.less';
	.menu-list {
		width: 100%;
		box-sizing: border-box;
	}
</style>