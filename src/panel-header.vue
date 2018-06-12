<template>
	<div class="panel-header">

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
				v-on:onActive="">
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

</div>
</template>


<script>
	import $ from 'jquery';
	import selectList from './components/select-list.vue';
	import textField from './components/text-field.vue';
	
	export default {
		props: {
			opt : Object,
			title : String,
			type : String
		},
		components: {
			selectList : selectList,
			textField : textField
		},
		methods: {
			toggleHeaderPanel: function() {
				var el = this.$el;
				$(el).toggleClass('panel-header_active');
				this.isShowed = !this.isShowed;
			}
		},
		data: function() {
			return {
				isShowed: false,
				active: 0,
				dataTaskState: [{
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
	}
</script>


<style lang="less">
	@import './less/variables.less';


	.panel-header {

		@animation-speed: 0.3s;

		position: absolute;
		top: 0;
		left: 0;
		width: 100%;

		max-height: @height-header;
		z-index: 1000;
		box-sizing: border-box;
		border-bottom: 1px solid @color-border;
		background-color: #fff;
		box-shadow: 0px 2px 20px rgba(0, 0, 0, .05);
		transition: max-height @animation-speed ease;
		color: @color-gray-font;
		overflow: hidden;


		&_active {

			max-height: calc(100vh - @height-header);
			transition: max-height @animation-speed ease;
			overflow: visible;
			animation: overflowed @animation-speed 1 ease;
		}

		@keyframes overflowed {
			0%,
			99% {
				overflow: hidden;
			}
			100% {
				overflow: visible;
			}
		}

		&__titlebar {
			padding: 10px 0px 10px 10px;
			line-height: 20px;

			&:after {
				display: block;
				content: '';
				height: @height-header;
				width: @height-header;
				background-image: ~'url(./assets/more-vert.svg)';
				background-size: 20px;
				background-position: center;
				background-repeat: no-repeat;
				position: absolute;
				top: 0;
				right: -8px;
				opacity: 0.8;

			}
		}

		&__form {
			padding: 0 10px 10px 10px;


			&>div:first-child {
				padding-top: 20px;
			}

		}

	}
</style>