"use strict";
/*
состояния приложения
*/
Vue.component('app-states', {
  props: ['opt'],
  template: 
`<div class="app-states">

	<div class="app-states__loading" v-if="opt.options.app.screen === 'loading'">
		<loading-spinner></loading-spinner>
	</div>

	<div class="app-states__main" v-else-if="opt.options.app.screen === 'main'">
		<toolbar v-bind:opt="opt"></toolbar>
		<work-states v-bind:opt="opt"></work-states>
	</div>

	<div class="app-states__registration" v-else-if="opt.options.app.screen === 'registration'">
		<registration-form v-bind:opt="opt"></registration-form>
	</div>

	<div class="app-states__registration" v-else-if="opt.options.app.screen === 'forgot'">
		<forgot-form v-bind:opt="opt"></forgot-form>
	</div>

	<div class="app-states__login" v-else-if="opt.options.app.screen === 'login'">
    <login-form v-bind:opt="opt"></login-form>
	</div>

</div>`
});