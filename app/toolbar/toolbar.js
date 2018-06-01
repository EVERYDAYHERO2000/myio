"use strict";
/*
боковая панель состояний приложения
*/
Vue.component('toolbar', {
	props: ['opt'],
  template: 
`<div class="toolbar">
  <div class="toolbar__tools">

    <toolbar-tool 
      v-if="opt.options.app.state == 'chats'" 
      v-on:click.native="toggleToolbar" 
      v-bind:icon="'./res/icons/add.svg'">
    </toolbar-tool>

    <div class="toolbar__sizer"></div>

    <toolbar-tool 
      v-bind:data="'chats'" 
      v-on:click.native="closeToolbar" 
      v-bind:opt="opt" v-bind:icon="'./res/icons/forum.svg'">
    </toolbar-tool>

    <toolbar-tool 
      v-bind:data="'calendar'" 
      v-on:click.native="closeToolbar" 
      v-bind:opt="opt" 
      v-bind:icon="'./res/icons/event.svg'">
    </toolbar-tool>

    <toolbar-tool 
      v-bind:data="'files'" 
      v-on:click.native="closeToolbar"
      v-bind:opt="opt" 
      v-bind:icon="'./res/icons/cloud-queue.svg'">
    </toolbar-tool>

    <toolbar-tool 
      v-bind:data="'settings'" 
      v-on:click.native="closeToolbar" 
      v-bind:opt="opt" 
      v-bind:icon="'./res/icons/settings.svg'">
    </toolbar-tool>
  </div>

  <div class="toolbar__form">
    <add-form v-if="addForm.isVisible" v-bind:opt="opt"></add-form>
  </div>

	<div v-if="addForm.isVisible" class="toolbar__bar" v-on:click="toggleToolbar"></div>

</div>`,
	   methods: {
      toggleToolbar: function () {
        let el = this.$el;
        $(el).toggleClass('toolbar_active');
        this.addForm.isVisible = !this.addForm.isVisible;
      },
       closeToolbar: function () {
         let el = this.$el;
         $(el).removeClass('toolbar_active');
         this.addForm.isVisible = false;
       }
    },
    data : function(){
      return {
        addForm : {
          isVisible : false
        }
      }
    }
});