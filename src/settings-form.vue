<template>
	<div class="settings-form">
		<div class="settings-form__setting-list">
			<div class="settings-form__header">Settings</div>
			<div class="link-list">
				<div v-for="settingListItem in settingList" 
						 v-bind:class="setStileForActive(settingListItem.name)"
						 v-on:click="setActiveTabName(settingListItem.name)"
						 class="link-list__link">{{settingListItem.title}}
				</div>
			</div>
		</div>	
		<div class="settings-form__form">
		
			<div v-for="settingListItem in settingList" 
					 v-show="activeTabName == settingListItem.name">
				<div class="settings-form__header">
					{{settingListItem.title}}
				</div>
				<super-component 
					v-for="elem in settingListItem.form"
					v-bind:com="elem">
				</super-component>
			</div>
			
			
			
		</div>
	</div>
</template>


<script>
	import $ from 'jquery';
	import superComponent from './components/super-component.vue';
	
	export default {
		props: {
			opt: Object
		},
		components: {
			superComponent: superComponent
		},
		methods: {
			setStileForActive: function(name){
				return (this.activeTabName == name) ? 'link-list__link_active' : '';
			},
			setActiveTabName: function(name){
				this.activeTabName = name;
			}
		},
		created: function(){
			
		}, 
		data: function(){
			return {
				activeTabName: 'profile',
				settingList: [
					{
						name: 'profile',
						title: 'Profile',
						form: [
							{
								component: 'textField',
								label: 'User Name'	
							}
						]
					},
					{
						name: 'general',
						title: 'General',
						form: [
							{
								component: 'selectList',
								name: 'lang',
								active: 0,
								options: [
									{
										id : 0,
										value : 'eng'
									},
									{
										id : 1,
										value : 'ru'
									}
								],
								k : 'id',
								v : 'value'
							}
						]
					},
					{
						name: 'spaces',
						title: 'Spaces'
					}
				]
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
			font-weight: 300;
		}
		
		&__header {
			font-size: 24px;
			font-weight: 500;
			text-align: left;
			line-height: 3;
		}
	}
	
	.link-list {
		width: 100%;
		box-sizing: border-box;
		
		&__link {
			padding: 10px 10px 10px @left-side;	
			transition: all .2s ease;
		}
		
		&__link_active {
			font-weight: 600;
		}
		
		&__link:hover {
			color: @color-active;
			background-color: lighten(@color-active, 40%);
			transition: all .2s ease;
		}
		
	}
	
</style>	