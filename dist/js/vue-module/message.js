"use strict";define(["vue"],function(Vue){return new Vue({el:"#message",data:{cssClass:"message-format",hint:"小提示",text:"",duration:2e3,isAlreadyHint:!1},methods:{initial:function(){messageSelf=this,messageSelf.text="歡迎來到學霸星球，想知道自己的學霸指數嗎？ Let's Go !!～",setTimeout(messageSelf.popupHint.bind(this,"",3e3),200)},popupHint:function(content,duration){messageSelf=this,messageSelf.isAlreadyHint||(messageSelf.text?messageSelf.text=messageSelf.text+(content||""):messageSelf.text=content,setTimeout(function(){messageSelf.cssClass=messageSelf.cssClass+" message-content-show",duration&&setTimeout(messageSelf.resetContent,duration)},100))},resetContent:function(){this.isAlreadyHint=!1,this.text="",this.cssClass="message-format"}}})});