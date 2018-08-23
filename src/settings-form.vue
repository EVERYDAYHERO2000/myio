<template>
	<div class="settings-form">
		<div class="settings-form__setting-list">
			<div class="settings-form__header">{{$d('Settings')}}</div>
			<div class="link-list">
				<div 
					v-for="settingListItem in settingList" 
					v-bind:class="setStileForActive(settingListItem.name)"
					v-on:click="setActiveTabName(settingListItem.name)"
					class="link-list__link">
					{{settingListItem.title}}
				</div>
			</div>
		</div>	
		<div class="settings-form__form">
		
			<div 
				v-for="settingListItem in settingList" 
				v-show="activeTabName == settingListItem.name">
				<div class="settings-form__header">
					{{settingListItem.title}}
				</div>
				<super-component 
					v-for="elem in settingListItem.form"
					v-on:onChange="elem.onChange"
					v-bind:com="elem">
				</super-component>
			</div>
			
			
			
		</div>
	</div>
</template>


<script>
	import $ from 'jquery';
	import lang from './functions/lang.js';
	import superComponent from './components/super-component.vue';

	export default {
		props: {
			opt: Object,
			app: Object
		},
		components: {
			superComponent: superComponent
		},
		methods: {
			setStileForActive: function(name) {
				return (this.activeTabName == name) ? 'link-list__link_active' : '';
			},
			setActiveTabName: function(name) {
				this.activeTabName = name;
			},
			d: function(w) {
				return this.app.d[w.toLowerCase()][this.app.lang];
			}
		},
		created: function() {

		},
		computed: {
			settingList: function() {
				return [{
						//profile settings
						name: 'profile',
						title: this.$d('Profile'),
						form: [{
								component: 'textField',
								label: 'User Name',
								onChange: function() {

								}
							},
							{
								component: 'checkbox',
								label: 'Auto login',
								onChange: function() {

								}
							}
						]
					},
					{
						//general settings
						name: 'general',
						title: this.$d('General'),
						form: [{
							component: 'selectList',
							active: (() => {
								let i;
								switch (lang.load()){
									case 'eng':
										i = 0;
										break;
									case 'ru':
										i = 1;
										break;
									case 'zh':
										i = 2;
										break;
								}
								return i;
							})(),
							options: [{
									id: 0,
									value: 'eng'
								},
								{
									id: 1,
									value: 'ru'
								},
								{
									id: 2,
									value: 'zh'
								}
							],
							k: 'id',
							v: 'value',
							onChange: (e) => {
								this.settingList[1].form[0].active = e.value;
								lang.setLang(this.settingList[1].form[0].options[e.value].value);
							}
						}]
					},
					{
						name: 'spaces',
						title: this.$d('Spaces')
					}
				]
			}
		},
		data: function() {
			return {
				activeTabName: 'profile'
			}
		}
	}
</script>

<style lang="less">
	@import './less/main.less';

	@left-side: 15px;

	.settings-form {
		width: 100%;
		height: 100%;
		background: @color-white;
		.flex-block();

		&__setting-list {
			width: 269px;
			height: 100%;
			.f-border(right);
			box-sizing: border-box;
		}

		&__setting-list &__header {
			padding: 0 @left-side;
		}

		&__form {
			flex-grow: 1;
			box-sizing: border-box;
			padding: 0 @left-side;
		}

		&__form &__header {
			.form-header(300);
		}

		&__header {
			.form-header();
			text-align: left;
		}
	}

	.link-list {
		width: 100%;
		box-sizing: border-box;

		&__link {
			padding: 10px 10px 10px @left-side;
			.transition(all .2s ease);
		}

		&__link_active {
			font-weight: 600;
		}

		&__link:hover {
			color: @color-active;
			background-color: lighten(@color-active, 40%);
			.transition(all .2s ease);
		}

	}
</style>