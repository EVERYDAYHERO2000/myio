"use strict";
/*
панель с заголовком для списка чатов/тасков
*/
Vue.component('panel-header', {
	props: ['opt', 'title', 'type'],
	template: 
`<div class="panel-header">

	<template v-if="type == 'chats'">
		<div class="panel-header__titlebar" v-on:click="toggleHeaderPanel">{{title}}</div>
		<div class="panel-header__form">

			<text-field 
				v-bind:lable="''"
				v-bind:placeholder="'Search'"
				v-bind:type="'search'">
			</text-field>

		</div>
	</template>

	<template v-if="type == 'tasks'">
		<div class="panel-header__titlebar" v-on:click="toggleHeaderPanel">{{title}}</div>
		<div class="panel-header__form">

			<select-list 
				v-bind:name="'test'" 
				v-bind:options="this.dataTaskState" 
				v-bind:active="this.active"
				v-bind:k="'value'"
				v-bind:v="'name'"
				v-on:onActive="this.getActive">
			</select-list>

			<text-field 
				v-bind:lable="''" 
				v-bind:type="'search'">
			</text-field>

		</div>
	</template>

	<template v-if="type == 'messages'">
		<div class="panel-header__titlebar" v-on:click="toggleHeaderPanel">{{title}}</div>
	</template>

</div>`,
	methods: {
		toggleHeaderPanel: function () {
			var el = this.$el;
			$(el).toggleClass('panel-header_active');
			this.isShowed = !this.isShowed;
		}
	},
	data: function () {
		return {
			isShowed: false,
			active: 0,
			dataTaskState: [
				{
					value: '1',
					name: 'All tasks'
			},
				{
					value: '2',
					name: 'Created by me'
			},
				{
					value: '3',
					name: 'Assigned to me'
			}
		]
		}
	}

});
