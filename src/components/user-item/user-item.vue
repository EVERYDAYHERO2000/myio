<template>
<div 
 	class="user-item">

 	<contact-icon-chip 
		v-bind:title="opt.email" 
		v-bind:size="'s'"
		v-bind:image="opt.avatar">
	</contact-icon-chip>

	<div class="user-item__content">
		<user-name v-bind:name="opt.email"></user-name>
	</div>
		
	<div 
		v-if="removeble"
		class="user-item__remove" 
		v-on:click="onRemove">
	</div>

</div>
</template>


<script>
	
	import contactIconChip 	from '../../components/contact-icon-chip/contact-icon-chip.vue';
	import userName 				from '../../components/user-name/user-name.vue';
	
	export default {
		props: {
			opt: Object,
			removeble : {
				default: true,
				type: Boolean
			},
			index: {
				default: 0,
				type: Number
			}
		},
		components : {
			contactIconChip : contactIconChip,
			userName: userName
		},
		methods: {
			onRemove: function() {
				this.$emit('onRemove', this.index);
			}
		}
	}
</script>


<style lang="less">
	@import '../../less/main.less';
	
	.user-item {
		
		@icon-size: 20px;
		
		.flex-block();
		.justify-content(space-between);
		box-sizing: border-box;
		padding: 10px 0 0 0;

		&__content {
			flex-grow: 1;
			box-sizing: border-box;
			padding: 10px 0px 0 10px;
		}

		&__remove {
			width: @icon-size;
			height: @icon-size;
			min-width: @icon-size;
			min-height: @icon-size;
			background-image: ~'url(../../assets/remove-circle-outline.svg)';
			background-size: @icon-size;
			background-position: center;
			background-repeat: no-repeat;
			opacity: .1;
			margin: 10px 0 0 0;
			.transition( all .2s );
			pointer-events: all;
		}

		&:hover &__remove {
			opacity: .7;
			.transition( all .2s );
		}


	}
</style>