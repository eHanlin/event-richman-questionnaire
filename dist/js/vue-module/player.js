"use strict";define(["vue"],function(Vue){var rootPath=document.getElementById("rootPath").getAttribute("data-value");return new Vue({el:"#player",data:{imageFile:""},components:{"player-role":{template:'<img class="player" src="">',props:["image"]},"light-grid":{template:'<img class="light-grid" src="'+rootPath+'/image/light-grid.png">'}},computed:{entireImagePath:{get:function(){return rootPath+"/image/"+this.imageFile},set:function(imageFile){var student=this.$refs.student.$el;this.imageFile=imageFile,student.setAttribute("src",this.entireImagePath),setTimeout(function(){student.setAttribute("data-show",!0)},100)}}},methods:{resetImage:function(){document.querySelector("#player img.player").setAttribute("data-show",!1)},girdFadeIn:function(){this.$refs.lightGrid.$el.classList.add("light-grid-fadein")},girdFadeOut:function(){this.$refs.lightGrid.$el.classList.remove("light-grid-fadein")}}})});