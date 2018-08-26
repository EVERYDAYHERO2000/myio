<template>
	<div class="menu">
		<menu-item
			v-for="(item, index) in menu"
			v-bind:isActive="active == index"
			v-on:click.native="setActive(index, item.value)"
			v-bind:title="item.title">
		</menu-item>
	</div>
	
</template>


<script>
	import menuItem from '../components/menu-item.vue';
	
	export default {
		props: {
			menu : Object,
			active : {
				default: 0,
				type: Number
			}
		},
		methods : {
			setActive : function(index, value){
				this.$emit('onActive', {index: index, value: value});
			}	
		}
	}
</script>


<style lang="less">
	@import '../less/main.less';
	.menu {
		width: 100%;
		box-sizing: border-box;
	}
</style>