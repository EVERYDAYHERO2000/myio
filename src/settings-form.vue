<template>
	<div class="settings-form">
		<div class="settings-form__setting-list">
		
			<header-title 
				v-bind:title="$d('Settings')" 
				class="settings-form__header">
			</header-title>
			
			<div class="link-list">
				
				<menu-item
					v-for="settingListItem in settingList" 
					v-bind:isActive="settingListItem.name == activeTabName"
					v-bind:title="settingListItem.title"
					v-on:click.native="setActiveTabName(settingListItem.name)">
				</menu-item>
				
			</div>
		</div>	
		
		<div class="settings-form__form">
		
			<div 
				v-for="settingListItem in settingList" 
				v-show="activeTabName == settingListItem.name">
				
				<header-title
					v-bind:w="'light'" 
					v-bind:title="settingListItem.title">
				</header-title>
				
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
	import menuItem from './components/menu-item.vue';
	import headerTitle from './components/header-title.vue';

	export default {
		props: {
			opt: Object,
			app: Object
		},
		components: {
			superComponent : superComponent,
			menuItem : menuItem,
			headerTitle : headerTitle
		},
		methods: {
			setActiveTabName: function(name) {
				this.activeTabName = name;
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

		&__setting-list .header-title {
			padding: 0 @left-side;
		}

		&__form {
			flex-grow: 1;
			box-sizing: border-box;
			padding: 0 @left-side;
		}

	}

	.link-list {
		width: 100%;
		box-sizing: border-box;


	}
</style>