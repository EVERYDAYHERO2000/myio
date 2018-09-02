<template>
<div
	v-bind:class="{'toolbar_active' : spaceForm.isVisible || addForm.isVisible}"  
	class="toolbar">
  <div class="toolbar__tools">

    <toolbar-tool 
      v-if="app.state == 'chats'" 
      v-on:click.native="toggleToolbarAdd"
      v-bind:title="$d('Create new')" 
      v-bind:state="app.state"
      v-bind:icon="icons.icon_add">
    </toolbar-tool>

    <div class="toolbar__sizer"></div>

		<toolbar-tool 
      v-on:click.native="toggleToolbarSpace"
      v-bind:title="$d('Work spaces')" 
      v-bind:state="app.state">
      
			<logo 
				v-bind:size="'s'">
			</logo>
			
    </toolbar-tool>

    <divider></divider>

    <toolbar-tool 
      v-bind:data="'chats'" 
      v-on:click.native="closeToolbar"
      v-bind:title="$d('Chats')" 
      v-bind:state="app.state" 
      v-bind:icon="icons.icon_forum">
    </toolbar-tool>

    <toolbar-tool 
      v-bind:data="'calendar'" 
      v-on:click.native="closeToolbar" 
      v-bind:state="app.state"
      v-bind:title="$d('Calendar')" 
      v-bind:icon="icons.icon_event">
    </toolbar-tool>

    <toolbar-tool 
      v-bind:data="'files'" 
      v-on:click.native="closeToolbar"
      v-bind:state="app.state"
      v-bind:title="$d('Files')" 
      v-bind:icon="icons.icon_cloudQueue">
    </toolbar-tool>

    <toolbar-tool 
      v-bind:data="'settings'" 
      v-on:click.native="closeToolbar" 
      v-bind:state="app.state"
      v-bind:title="$d('Settings')" 
      v-bind:icon="icons.icon_settings">
    </toolbar-tool>
  </div>

  <div class="toolbar__form">
    <add-form 
    	v-if="addForm.isVisible"
    	v-on:success="toggleToolbarAdd" 
    	v-bind:app="app"
    	v-bind:opt="opt">
    </add-form>
    <space-form 
    	v-if="spaceForm.isVisible"
    	v-bind:app="app" 
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
	
	import addForm 					from './add-form.vue';
	import spaceForm 				from './space-form.vue';
	
	import toolbarTool 			from './components/toolbar-tool/toolbar-tool.vue';
	import divider 					from './components/divider/divider.vue';
	import logo 						from './components/logo/logo.vue';
	
	import icon_add 				from './assets/add.svg';
	import icon_forum 			from './assets/forum.svg';
	import icon_event 			from './assets/event.svg';
	import icon_cloudQueue 	from './assets/cloud-queue.svg';
	import icon_settings 		from './assets/settings.svg';

	export default {
		props: {
			opt: Object,
			app: Object
		},
		components: {
			toolbarTool : toolbarTool,
			addForm : addForm,
			spaceForm : spaceForm,
			divider : divider,
			logo : logo
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
			}
		},
		data: function() {
			return {
				addForm: {
					isVisible: false
				},
				spaceForm: {
					isVisible: false
				},
				icons : {
					icon_add : icon_add,
					icon_forum : icon_forum,
					icon_event : icon_event,
					icon_cloudQueue : icon_cloudQueue,
					icon_settings : icon_settings
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
		height: 100vh;
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