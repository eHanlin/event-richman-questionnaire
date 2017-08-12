"use strict";define(["vue","v_playerDialog"],function(Vue,v_playerDialog){return new Vue({el:"#result",data:{finalImage:"",grade:"",finalContent:""},methods:{popupResult:function(){var url,resultSelf=this,root="https://s3-ap-northeast-1.amazonaws.com/ehanlin-web-resource/richman-questionnaire";document.getElementById("fb-share").addEventListener("click",function(){window.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(url),"facebook-share-dialog","width=626,height=436")}),function(){switch(answer["Q3."].id){case"Q3_1":resultSelf.grade=v_playerDialog.endGrade,resultSelf.finalImage="./image/aggressive.png",resultSelf.finalContent="\n          你的學習風格是「主動型」，喜歡在群體中相互學習相互成長，\n          和同學一起切磋是比較適合你的學習方式，\n          同時你也需要不斷練習題庫加強自己哦！\n          翰林雲端學院擁有全國最大的線上題庫，包準你在同儕中鶴立雞群！",url=root+"/fb-aggressive.html";break;case"Q3_2":resultSelf.grade=v_playerDialog.endGrade,resultSelf.finalImage="./image/hearing.png",resultSelf.finalContent="\n          你的學習風格是「聽覺型」，較容易從影音講解的方式學習，\n          試著在閱讀完後寫下摘要或聆聽他人解說，會更有效率的學習哦！\n          翰林雲端學院擁有名師線上影音教學，親自傳授獨門高分祕法，\n          絕對讓你輕鬆了解各科內容！",url=root+"/fb-hearing.html";break;case"Q3_3":resultSelf.grade=v_playerDialog.endGrade,resultSelf.finalImage="./image/meditation.png",resultSelf.finalContent="\n          你的學習風格是「反思型」，\n          你可以在學習過程中偶爾停下來複習之前讀過的內容或多做相關的題目融會貫通，\n          會讓學習更有成效哦！翰林雲端學院提供你資源最多的線上學習，\n          讓你有效且隨時鍛鍊自己的能力！",url=root+"/fb-meditation.html";break;case"Q3_4":resultSelf.grade=v_playerDialog.endGrade,resultSelf.finalImage="./image/sequence.png",resultSelf.finalContent="\n          你的學習風格是「循序型」，按部就班的跟著邏輯了解課程是很適合你的讀書方法，\n          試著花點時間將課程內容整理成最適合自己的摘要，\n          可以為你節省很多學習時間哦！\n          翰林雲端學院邀請名師為您整理了每一科目的重點，\n          並階段性的提供你簡單及進階的題目、試卷，讓你更輕鬆的學習！",url=root+"/fb-sequence.html"}}(),setTimeout(function(){document.getElementById("audioResult").play(),document.getElementById("abli").setAttribute("data-show",!0),resultSelf.$el.classList.add("final-visible")},500)}}})});