<template>
	<div class="settings-form">
		<div class="settings-form__setting-list">
		
			<header-title 
				v-bind:title="$d('Settings')" 
				class="settings-form__header">
			</header-title>
			
			<menu-list
				v-bind:v="'name'"
				v-bind:k="'title'"
				v-bind:active="activeTab"
				v-on:onActive="setActiveTabName"
				v-bind:list="settingList">
			</menu-list>
			
		</div>	
		
		<div class="settings-form__form">
		
			<div 
				v-for="settingListItem in settingList" 
				v-show="activeTab == settingListItem.index">
				
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
	
	import menuList from './components/menu-list.vue';
	import superComponent from './components/super-component.vue';
	import headerTitle from './components/header-title.vue';

	export default {
		props: {
			opt: Object,
			app: Object
		},
		components: {
			superComponent : superComponent,
			menuList: menuList,
			headerTitle : headerTitle
		},
		methods: {
			setActiveTabName: function(e) {
				
				this.activeTab = e.index;
			}
		},
		created: function() {

		},
		computed: {
			settingList: function() {
				return [{
						//profile settings
						name: 'profile',
						index:0,
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
						index:1,
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
						index:2,
						title: this.$d('Spaces')
					}
				]
			}
		},
		data: function() {
			return {
				activeTab : 0
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


</style>