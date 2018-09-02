<template>
	<div 
		v-on:click="toggleState" 
		class="toolbar-tool"
		v-bind:class="{ 'toolbar-tool_active' : state === data }"
		v-bind:style="(icon) ? 'background-image: url(' + icon + ');' : ''"
		v-bind:title="title">
		
		<slot>
		</slot>
		
		<drop-effect 
			v-bind:theme="'dark'">
		</drop-effect>
		
	</div>
</template>


<script>
	
	import dropEffect from '../../components/drop-effect/drop-effect.vue';

	export default {
		props: {
			state: {
				type : String
			},
			icon: String,
			data: {
				default: '',
				type: String
			},
			title: String
		},
		components : {
			dropEffect : dropEffect
		},
		methods: {
			toggleState: function() {
				if (this.data && this.state !== this.data) APP.$data.app.state = this.data;
			}
		}
	}
</script>


<style lang="less">
	@import '../../less/main.less';
	
	.toolbar-tool {
		width: @width-toolbar;
		height: calc(@width-toolbar - 10px);
		min-width: @width-toolbar;
		max-height: @width-toolbar;
		background-position: center;
		background-repeat: no-repeat;
		background-size: auto;
		opacity: 0.8;
		.transition( all .2s );
		position: relative;

		&:last-child {
			margin: 0 0 10px 0;
		}

		&_active {
			opacity: .2;
			.transition( all .2s );
			pointer-events: none;
		}
		
		&:hover {
			/*.f-recolor(@color-active);
			.transition(none);
			opacity: 1;*/
		}
		
		& * {
			pointer-events: none;
		}
	}
</style>