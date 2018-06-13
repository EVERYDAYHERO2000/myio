<template>
<div class="toolbar">
  <div class="toolbar__tools">

    <toolbar-tool 
      v-if="opt.options.app.state == 'chats'" 
      v-on:click.native="toggleToolbarAdd" 
      v-bind:icon="this.icons.icon_add">
    </toolbar-tool>

    <div class="toolbar__sizer"></div>

		<toolbar-tool 
      v-on:click.native="toggleToolbarSpace" 
      v-bind:opt="opt" v-bind:icon="this.icons.icon_space">
    </toolbar-tool>

		<div class="toolbar__divider"></div>

    <toolbar-tool 
      v-bind:data="'chats'" 
      v-on:click.native="closeToolbar" 
      v-bind:opt="opt" v-bind:icon="this.icons.icon_forum">
    </toolbar-tool>

    <toolbar-tool 
      v-bind:data="'calendar'" 
      v-on:click.native="closeToolbar" 
      v-bind:opt="opt" 
      v-bind:icon="this.icons.icon_event">
    </toolbar-tool>

    <toolbar-tool 
      v-bind:data="'files'" 
      v-on:click.native="closeToolbar"
      v-bind:opt="opt" 
      v-bind:icon="this.icons.icon_cloudQueue">
    </toolbar-tool>

    <toolbar-tool 
      v-bind:data="'settings'" 
      v-on:click.native="closeToolbar" 
      v-bind:opt="opt" 
      v-bind:icon="this.icons.icon_settings">
    </toolbar-tool>
  </div>

  <div class="toolbar__form">
    <add-form v-if="addForm.isVisible" v-bind:opt="opt"></add-form>
  </div>

	<div v-if="addForm.isVisible" class="toolbar__bar" v-on:click="toggleToolbarAdd"></div>

</div>
</template>


<script>
	import $ from 'jquery';
	
	import toolbarTool from './toolbar-tool.vue';
	import addForm from './add-form.vue';
	
	import icon_add from './assets/add.svg';
	import icon_space from './assets/space.svg';
	import icon_forum from './assets/forum.svg';
	import icon_event from './assets/event.svg';
	import icon_cloudQueue from './assets/cloud-queue.svg';
	import icon_settings from './assets/settings.svg';

	export default {
		props: {
			opt: Object
		},
		components: {
			toolbarTool : toolbarTool,
			addForm : addForm
		},
		methods: {
			toggleToolbarAdd: function() {
				if (!this.spaceForm.isVisible) {
					let el = this.$el;
					$(el).toggleClass('toolbar_active');
					this.addForm.isVisible = !this.addForm.isVisible;
				}
			},
			toggleToolbarSpace: function() {
				if (!this.addForm.isVisible) {
					let el = this.$el;
					$(el).toggleClass('toolbar_active');
					this.spaceForm.isVisible = !this.spaceForm.isVisible;
				}
			},
			closeToolbar: function() {
				let el = this.$el;
				$(el).removeClass('toolbar_active');
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
					icon_space : icon_space,
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
	@import './less/variables.less';
	.toolbar {

		@width-toolbar_active: 320px;

		width: @width-toolbar;
		height: 100vh;
		background: #fff;
		box-sizing: border-box;
		border-right: 1px solid @color-border;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10000;
		box-shadow: 0px 0px 0px rgba(0, 0, 0, .2);
		transition: width .3s cubic-bezier(0.23, 1, 0.32, 1), box-shadow .6s;
		display: flex;
		flex-direction: row;
		overflow: hidden;

		&_active {
			width: @width-toolbar_active;
			box-shadow: 0px 0px 30px rgba(0, 0, 0, .2);
			transition: width .6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 1s;
		}

		&__sizer {
			flex-grow: 1;
		}

		&__tools {
			display: flex;
			flex-direction: column;
			position: fixed;
			height: 100vh;
			top: 0;
			left: 0;
		}

		&__form {
			flex-grow: 1;
			padding: 0 0 0 calc(@width-toolbar + 5px);
			overflow: scroll;
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

		&__divider {
			border-bottom: solid 1px @color-border;
			margin: 10px 0;
		}

	}
</style>