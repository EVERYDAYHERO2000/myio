<template>
	<div class="screen" v-bind:class="{ 'screen_fullscreen' : fullscreen }">
		
		<div v-if="(logo)" class="screen__logo">
			<logo>
			</logo>
		</div>
		
		<div class="screen__header" v-if="header">
			{{header}}
		</div>
			
		<slot>
				
		</slot>
			
	</div>
</template>


<script>
	import $ from 'jquery'; 
	import logo from '../components/logo.vue';
	
	export default {
		props: {
			fullscreen : {
				default: true,
    		type: Boolean
			},
			logo : {
				default: false,
    		type: Boolean
			},
			incorrect : {
				default: false,
    		type: Boolean
			},
			header: {
				default: '',
    		type: String
			},
			param: {
				default: '',
				type: String
			}
		},
		components : {
			logo : logo
		},
		methods : {
			setIncorrect: function() {
				if (this.incorrect){
					let $el = this.$el;
					let __this = this;
					$($el).addClass('screen_incorrect').delay(500).queue(function() {
						$(this).removeClass('screen_incorrect');
						$(this).dequeue(); 
						__this.$emit('onIncorrect', true);
					});
				}
			},
			setClose : function() {
				if (this.param){
					let __this = this;
					let $el = this.$el;
					$($el).addClass('screen_hide').delay(300).queue(function() {
						__this.$emit('onClose', __this.param);
					});
				}
			}
		},
		updated : function(){
			this.setClose();
			this.setIncorrect();
		}
	}
</script>


<style lang="less">
	@import '../less/main.less';
	@import '../less/animations.less';
	
	.screen {
		opacity: 1;
		
		&__logo {
			.flex-block();
			.justify-content(center);
		}
		
		&__header {
			.form-header();
			text-align: center;
			padding: 0 5px;
		}
		
		&_fullscreen {
			.fullscreen-form();
		}
		
		&_hide {
			opacity: 0;
			.transition(all 0.3s ease);
		}
		
		&_incorrect {
			.animation(form-bounce .5s 1 ease);
			
			& * {
				pointer-events: none;
			}
		}
		
	}
</style>