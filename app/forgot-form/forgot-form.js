"use strict";
/*
форма: напомнить пароль
*/
Vue.component('forgot-form', {
	props:['opt'],
  template: 
`<div class="forgot-form">
  <div class="login-form__logo"><logo></logo></div>
		<text-field v-bind:lable="'Email'" v-bind:type="'email'"></text-field>
		<div class="login-form__button-group">
		<btn v-bind:title="'Request Password'"></btn>
  </div>
</div>`
	
});