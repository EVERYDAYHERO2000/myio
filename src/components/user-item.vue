<template>
<div class="user-item" v-bind:data-index="index">

 	<contact-icon-chip 
		v-bind:title="opt.name" 
		v-bind:image="opt.avatar">
	</contact-icon-chip>

	<div class="user-item__content">
		<div class="user-item__user-name">{{opt.name}}</div>
	</div>	
	<div class="user-item__remove" v-on:click="onRemove"></div>

</div>
</template>


<script>
	import $ from 'jquery';
	
	import contactIconChip from '../components/contact-icon-chip.vue';
	
	export default {
		props: {
			opt: Object,
			index: Number
		},
		components : {
			contactIconChip : contactIconChip
		},
		methods: {
			onRemove: function() {
				let index = $(this.$el).data('index');
				this.$emit('onRemove', index);
			}
		},
		created: function() {

		}
	}
</script>


<style lang="less">
	@import '../less/main.less';
	
	.user-item {
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 10px 0 10px 0;

		&__content {
			flex-grow: 1;
			box-sizing: border-box;
			padding: 0px 0px 0 10px;
		}

		&__user-name {
			color: @color-active;
			font-size: @font-size-main;
			margin: 10px 0 0 0;
		}

		&__remove {
			width: 20px;
			height: 20px;
			min-width: 20px;
			min-height: 20px;
			background-image: ~'url(../assets/remove-circle-outline.svg)';
			background-size: 20px;
			background-position: center;
			background-repeat: no-repeat;
			opacity: .1;
			margin: 10px 0 0 0;
			transition: all .2s;
		}

		&:hover &__remove {
			opacity: .7;
			transition: all .2s;
		}


	}
</style>