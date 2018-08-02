<template>
	<div class="app-states">

	<div 
		class="app-states__loading" 
		v-if="app.screen === 'loading'">
		<loading-spinner>
		</loading-spinner>
	</div>

	<div 
		class="app-states__main" 
		v-else-if="app.screen === 'main'">
		<toolbar 
			v-bind:opt="opt" 
			v-bind:app="app">
		</toolbar>
		<work-states 
			v-bind:opt="opt"
			v-bind:app="app">
		</work-states>
	</div>

	<div 
		class="app-states__registration" 
		v-else-if="app.screen === 'registration'">
		<registration-form 
			v-bind:opt="opt"
			v-bind:app="app">
		</registration-form>
	</div>

	<div 
		class="app-states__registration" 
		v-else-if="app.screen === 'forgot'">
		<forgot-form 
			v-bind:opt="opt"
			v-bind:app="app">
		</forgot-form>
	</div>

	<div 
   class="app-states__login" 
   v-else-if="app.screen === 'login'">
    <login-form 
    	v-bind:opt="opt"
    	v-bind:app="app">
    </login-form>
	</div>

</div>
</template>


<script>
	import loadingSpinner from './components/loading-spinner.vue';
	import toolbar from './toolbar.vue';
	import registrationForm from './registration-form.vue';
	import forgotForm from './forgot-form.vue';
	import loginForm from './login-form.vue';
	import workStates from './work-states.vue';
	
	export default {
		props: {
			opt : Object,
			app : Object
		},
		components : {
			workStates : workStates,
			loadingSpinner : loadingSpinner,
			toolbar : toolbar,
			registrationForm : registrationForm,
			forgotForm : forgotForm,
			loginForm : loginForm
		}
	}
</script>


<style lang="less">
	@import './less/main.less'; 
	
	.app-states {
		width: 100vw;
		height: 100vh;
		position: absolute;
		overflow: hidden;
		top: 0;
		left: 0;
		box-sizing: border-box;
		background-color: @color-background;
		.filter(blur(0px));
		.transition(all .3s ease);
		

		&__loading {
			width: 100%;
			height: 100%;
			background-color: @color-white;
		}

		&__registration {
			width: 100%;
			height: 100%;
			background-color: @color-white;
			.animation(app-states_show .3s ease 1);
			.vertical-scroll();
		}

		&__login {
			width: 100%;
			height: 100%;
			background-color: @color-white;
			.animation(app-states_show .3s ease 1);
			.vertical-scroll();		
		}

		&__main {
			width: 100%;
			height: 100%;
		}

		&_blur {
			.filter(blur(3px));
			.transition(all .3s .2s ease);
		}

		@keyframes app-states_show {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}

	}
</style>