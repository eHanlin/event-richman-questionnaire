"use strict";require(["config"],function(config){require(["v_anchorList"]),require(["v_componentProgressButton"]),require(["v_componentKeepWalk"]),require(["v_confirm"]),require(["v_result"]),require(["velocity","v_player","v_message","v_questions","round"],function(velocity,v_player,v_message,v_questions,round){var mapLoading=document.getElementById("map-loading");!function(){document.querySelector(".container").style.height=.8*document.documentElement.clientHeight+"px",document.querySelector(".mask").style.height=document.documentElement.clientHeight+"px";var map=document.getElementById("map");Velocity(map,{right:"840px",top:"270px"},{duration:100,complete:function(){}})}(),mapLoading.style.display="",mapLoading.style.minHeight=.8*document.documentElement.clientHeight+"px",mapLoading.classList.add("ehanlin-loading-overlay"),setTimeout(function(){mapLoading.remove(),v_player.entireImagePath="student.png",v_message.initial(),setTimeout(function(){v_questions.popupQuestion(round.first),v_message.popupHint("點選最符合你的選項喔！")},3500)},1e4)})});