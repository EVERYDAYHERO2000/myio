<template>

	<div class="panel-messages">	
		
		<panel-header
			v-bind:opt="opt"
			v-bind:title="panelTitle">
			
			<user-list 
				v-on:onValue="setUserList"
				v-bind:name="'users_2'"
				v-bind:opt="opt">
			</user-list>
			
		</panel-header> 
		
		<div class="panel-messages__chat">
			<div class="panel-messages__list">
				<div class="panel-messages__list-inner">	
				<message>1</message>
				<message>2</message>
				<message>3</message>
				<message>4</message>
				<message>5</message>
				<message>6</message>
				<message>7</message>
				<message>8</message>
				<message>9</message>
				<message>10</message>
				<message>11</message>
				<message>12</message>
				<message>13</message>
				<message>14</message>
				<message>15</message>
				<message>16</message>
				<message>17</message>
				<message>18</message>
				<message>19</message>
				<message>20</message>
				<message>21</message>
				<message>22</message>
				<message>23</message>
				<message>24</message>


				</div>	
			</div>
			<div class="panel-messages__input">
				<chat-input v-bind:opt="opt">
				</chat-input>
			</div>
		</div>
	</div>
	
</template>


<script>
	import $ from 'jquery';
	
	import panelHeader from './components/panel-header.vue';
	import selectList from './components/select-list.vue';
	import textField from './components/text-field.vue';
	import userList from './components/user-list.vue';
	import chatInput from './chat-input.vue';
	import message from './components/message.vue';
	
	export default {
		props: {
			opt : Object,
			type: String,
			panelTitle: String
		},
		components : {
			panelHeader: panelHeader,
			selectList: selectList,
			textField: textField,
			chatInput: chatInput,
			userList: userList,
			message: message
		},
		methods: {
			setUserList: function(e) {
				this.userList = e;
			}
		},
		data : function(){
			return {
				userList: []
			}
		},
		created:function(){
			
		}
	}

</script>


<style lang="less">
	@import './less/main.less';
	
	.panel-messages {
		height: 100vh;
		width: 100%;
		
		&__chat {
			.flex-block();
			.flex-direction(column);
			height: calc(100vh - @height-header);
			.transform(translateY(@height-header));
			width: 100%;
		}
		
		&__list {
			width: 100%;
			.vertical-scroll();
			flex-grow: 1;
			position: relative;
			
		}
		
		&__list-inner {
			height: auto;
			width: 100%;
			position: absolute;
			bottom: 0;
			max-height: 100%;
		}
		
		&__input {
			
		}
		
	}
	
	
	
</style>