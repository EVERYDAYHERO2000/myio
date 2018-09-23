<template>
<div
	v-bind:class="{'toolbar_active' : spaceForm.isVisible || addForm.isVisible}"  
	class="toolbar">
  <div class="toolbar__tools">

    <toolbar-tool 
      v-if="state == 'chats'" 
      v-on:click.native="toggleToolbarAdd"
      v-bind:title="$d('Create new')">
      
      <icon
      	v-bind:name="'new'">
			</icon>
      
    </toolbar-tool>

    <div class="toolbar__sizer"></div>

		<toolbar-tool 
      v-on:click.native="toggleToolbarSpace"
      v-bind:title="$d('Work spaces')">
      
			<logo 
				v-bind:size="'s'">
			</logo>
			
    </toolbar-tool>

    <divider></divider>

    <toolbar-tool 
      v-bind:nextState="'chats'" 
      v-on:onChangeState="setState"
      v-on:click.native="closeToolbar"
      v-bind:title="$d('Chats')" 
      v-bind:currentState="state">
      
      <icon
      	v-bind:name="'chats'">
			</icon>
      
    </toolbar-tool>

    <toolbar-tool 
      v-bind:nextState="'calendar'" 
      v-on:onChangeState="setState"
      v-on:click.native="closeToolbar" 
      v-bind:currentState="state"
      v-bind:title="$d('Calendar')">
      
      <icon
      	v-bind:name="'calendar'">
			</icon>
      
    </toolbar-tool>

    <toolbar-tool 
      v-bind:nextState="'files'"
      v-on:onChangeState="setState" 
      v-on:click.native="closeToolbar"
      v-bind:currentState="state"
      v-bind:title="$d('Files')">
      
      <icon
      	v-bind:name="'files'">
			</icon>
      
    </toolbar-tool>

    <toolbar-tool 
      v-bind:nextState="'settings'" 
      v-on:onChangeState="setState"
      v-on:click.native="closeToolbar" 
      v-bind:currentState="state"
      v-bind:title="$d('Settings')">
      
      <icon
      	v-bind:name="'settings'">
			</icon>
      
    </toolbar-tool>
  </div>

  <div class="toolbar__form">
    <add-form 
    	v-if="addForm.isVisible"
    	v-on:success="toggleToolbarAdd"
    	v-bind:opt="opt">
    </add-form>
    <space-form 
    	v-if="spaceForm.isVisible"
    	v-bind:opt="opt">
    </space-form>
  </div>

	<div 
		v-if="addForm.isVisible" 
		class="toolbar__bar" 
		v-on:click="toggleToolbarAdd">
	</div>

</div>
</template>


<script>
	
	/**
 	* Секции 
 	*/
	import addForm 					from './add-form.vue';
	import spaceForm 				from './space-form.vue';
	
	/**
 	* Компоненты 
 	*/
	import toolbarTool 			from './components/toolbar-tool/toolbar-tool.vue';
	import divider 					from './components/divider/divider.vue';
	import logo 						from './components/logo/logo.vue';
	import icon 						from './components/icon/icon.vue';
	


	/**
 	* Панель инструментов рабочего экрана приложения
	* используется в App.vue
 	*/
	export default {
		props: {
			opt: Object,
			/**
 			* Состояние приложения 
 			*/
			state: {
				type : String
			}
		},
		components: {
			toolbarTool : toolbarTool,
			addForm : addForm,
			spaceForm : spaceForm,
			divider : divider,
			logo : logo,
			icon : icon 
		},
		methods: {
			toggleToolbarAdd: function() {
				if (!this.spaceForm.isVisible) {
					this.addForm.isVisible = !this.addForm.isVisible;
				} else {
					this.closeToolbar();
					
				}
			},
			toggleToolbarSpace: function() {
				if (!this.addForm.isVisible) {					
					this.spaceForm.isVisible = !this.spaceForm.isVisible;
				} else {
					this.closeToolbar();
					
				}
			},
			closeToolbar: function() {
				this.addForm.isVisible = false;
				this.spaceForm.isVisible = false;
			},
			setState: function(e){
				APP.$set(APP.app, 'state', e);
			}
		},
		data: function() {
			return {
				addForm: {
					isVisible: false
				},
				spaceForm: {
					isVisible: false
				}
			}
		}
	}
</script>


<style lang="less">
	@import './less/main.less';
	.toolbar {

		@width-toolbar_active: 320px;

		width: @width-toolbar;
		height: 100%;
		background-color: @color-white;
		box-sizing: border-box;
		.f-border(right);
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10000;
		box-shadow: 0px 0px 0px rgba(0, 0, 0, .2);
		.transition( ~'width .3s cubic-bezier(0.23, 1, 0.32, 1), box-shadow .6s' );
		.flex-block();
		.flex-direction(row);
		overflow: hidden;

		&_active {
			width: @width-toolbar_active;
			box-shadow: 0px 0px 30px rgba(0, 0, 0, .2);
			.transition( ~'width .6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 1s' );
		}

		&__sizer {
			flex-grow: 1;
		}

		&__tools {
			.flex-block();
			.flex-direction(column);
			position: fixed;
			height: 100vh;
			top: 0;
			left: 0;
		}

		&__form {
			flex-grow: 1;
			padding: 0 0 0 calc(@width-toolbar + 5px);
			.vertical-scroll();
		}

		&__bar {
			content: '';
			width: calc(100vw - @width-toolbar);
			height: 100vh;
			position: fixed;
			right: 0;
			top: 0;
			pointer-events: none;
		}

		&_active &__bar {
			width: calc(100vw - @width-toolbar_active);
			pointer-events: all;
		}

	}
</style>