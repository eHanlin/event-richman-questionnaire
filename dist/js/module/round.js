"use strict";define(function(require){var v_player=require("v_player"),v_questions=require("v_questions"),questionsContents=require("questionsContents"),answer=require("answer"),round={startMove:function(v_confirm,roundTarget){v_questions.comfirmQuestion()&&(roundTarget.changeRole(),this.addGrade(roundTarget),v_confirm.isMove=!0,v_confirm.endMove=roundTarget.endMove.bind(this,v_confirm))},addGrade:function(roundTarget){var point=answer[roundTarget.questionObject.num].point;setTimeout(function(){var v_playerDialog=require("v_playerDialog"),v_message=require("v_message"),total=parseInt(v_playerDialog.startGrade)+parseInt(point);v_playerDialog.endGrade=total,v_playerDialog.fadeInDialog(),v_playerDialog.showGrade(),v_playerDialog.startGrade=v_playerDialog.endGrade,v_message.popupHint(" + "+point+" 分",4e3)},100)},first:{step:3,direction:"leftDown",questionObject:questionsContents.Q1,changeRole:function(){setTimeout(function(){v_player.resetImage(),setTimeout(function(){v_player.entireImagePath=answer.roleImage},500)},500)},endMove:function(v_confirm){var secondRound=round.second;v_confirm.roundTarget=secondRound,v_confirm.step=secondRound.step,v_confirm.direction=secondRound.direction,v_player.girdFadeIn(),v_questions.popupQuestion(secondRound)}},second:{step:3,direction:"leftUp",questionObject:questionsContents.Q2,changeRole:function(){v_player.entireImagePath=answer.roleBackImage},endMove:function(v_confirm){var thirdRound=round.third,npcToast=require("v_npcRole").toast;v_confirm.roundTarget=thirdRound,v_confirm.step=thirdRound.step,v_confirm.direction=thirdRound.direction,v_player.entireImagePath=answer.roleImage,v_player.girdFadeIn(),npcToast.encounter(),npcToast.fadeInDialog(),setTimeout(v_questions.popupQuestion.bind("this",thirdRound),2e3)}},third:{step:4,direction:"leftDown",questionObject:questionsContents.Q3,changeRole:function(){v_player.entireImagePath=answer.roleImage},endMove:function(v_confirm){var fourthRound=round.fourth;v_confirm.roundTarget=fourthRound,v_confirm.step=fourthRound.step,v_confirm.direction=fourthRound.direction,v_player.entireImagePath=answer.roleBackImage,v_confirm.isMove=!0,v_confirm.endMove=fourthRound.endMove.bind(this,v_confirm)}},fourth:{step:2,direction:"leftUp",endMove:function(v_confirm){var fifthRound=round.fifth,npcIceCream=require("v_npcRole").iceCream;v_confirm.roundTarget=fifthRound,v_confirm.step=fifthRound.step,v_confirm.direction=fifthRound.direction,v_player.entireImagePath=answer.roleImage,v_player.girdFadeIn(),npcIceCream.encounter(),npcIceCream.fadeInDialog(),setTimeout(v_questions.popupQuestion.bind("this",fifthRound),2e3)}},fifth:{step:3,direction:"leftDown",questionObject:questionsContents.Q4,changeRole:function(){v_player.entireImagePath=answer.roleImage},endMove:function(v_confirm){var sixthRound=round.sixth;v_confirm.roundTarget=sixthRound,v_confirm.step=sixthRound.step,v_confirm.direction=sixthRound.direction,v_player.girdFadeIn(),v_questions.popupQuestion(sixthRound)}},sixth:{step:3,direction:"leftUp",questionObject:questionsContents.Q5,changeRole:function(){v_player.entireImagePath=answer.roleBackImage},endMove:function(confirmSeif){v_player.entireImagePath=answer.roleImage,v_result=require("v_result"),v_result.popupResult()}}};return round});