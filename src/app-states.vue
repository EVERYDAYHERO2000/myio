<template>
	<div class="app-states">

	<div 
		class="app-states__screen" 
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
		class="app-states__screen" 
		v-else-if="app.screen === 'registration'">
		<state-registration 
			v-bind:opt="opt"
			v-bind:app="app">
		</state-registration>
	</div>

	<div 
		class="app-states__screen" 
		v-else-if="app.screen === 'forgot'">
		<state-forgot 
			v-bind:opt="opt"
			v-bind:app="app">
		</state-forgot>
	</div>

	<div 
   class="app-states__screen" 
   v-else-if="app.screen === 'login'">
    <state-login 
    	v-bind:opt="opt"
    	v-bind:app="app">
    </state-login>
	</div>

</div>
</template>


<script>
	import loadingSpinner from './components/loading-spinner.vue';
	import toolbar from './toolbar.vue';
	import stateRegistration from './state-registration.vue';
	import stateForgot from './state-forgot.vue';
	import stateLogin from './state-login.vue';
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
			stateRegistration : stateRegistration,
			stateForgot : stateForgot,
			stateLogin : stateLogin
		}
	}
</script>


<style lang="less">
	@import './less/main.less';
	@import './less/animations.less';
	
	.app-states {
		width: 100vw;
		height: 100vh;
		position: absolute;
		overflow: hidden;
		top: 0;
		left: 0;
		box-sizing: border-box;
		background-color: @color-background;
		.transition(all .3s ease);
		
		&__screen {
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
	}
</style>