define(["vue", "v_message", "v_player"], function(Vue, v_message, v_player) {
  var questions = new Vue({
    el: "#questions",
    data: {
      questionNum: "",
      content: "",
      options: ""
    },
    methods: {
      popupQuestion: function(roundTarget) {
        var questionSelf = this;
        setTimeout(function() {
          questionSelf.settingQuestion(roundTarget.questionObject);
          var popup = document.getElementById("popup");
          popup.style.display = "";
          popup.classList.add("popup-overlay");
          setTimeout(function() {
            popup.classList.add("popup-overlay-visible");
          }, 500);
        }, 500);
      },

      settingQuestion: function(questionObject) {
        this.questionNum = questionObject.num;
        this.content = questionObject.content;
        this.options = questionObject.options;
      },

      comfirmQuestion: function() {
        var questionslist, answerStar, pickId, popup;
        var isContinue = false,
          confirm = document.getElementById("confirm");
        answerStar = this.$el.querySelector(
          "li button.star[data-determine-click=true]"
        );

        // 讓確認按鈕隱藏，使用者點選答案後會再出現
        confirm.style.visibility = "hidden";
        popup = document.getElementById("popup");
        popup.classList.remove("popup-overlay-visible");
        answer[this.questionNum].id = answerStar.getAttribute("id");
        answer[this.questionNum].point = answerStar.getAttribute("data-point");

        // 第一題作答結束後，進行角色的轉職設定
        if (this.questionNum === "Q1.") {
          v_message.resetContent();
          answer.roleImage = answerStar.getAttribute("data-role-image");
          answer.roleBackImage = answerStar.getAttribute("data-back-image");
          v_message.text = answerStar.getAttribute("data-role-message");
        }

        // 方格淡出
        v_player.girdFadeOut();
        isContinue = true;

        return isContinue;
      }
    },

    components: {
      question: {
        template: `
        <h2>
          <span class="questions-num">{{questionNum}}</span>
          {{content}}
        </h2>
      `,
        props: ["content", "questionNum"]
      },

      pickOptions: {
        template: `
         <li>
          <button :id="pickId" class="star answer-star" data-determine-click="false"
            :data-point="pick.point" :data-role-message="pick.roleMessage"
            :data-role-image="pick.roleImage" :data-back-image="pick.roleBackImage"
            @mouseover="onStar(pickId)" @mouseout="offStar(pickId)" 
            @click="pickStar(pickId)">
          </button>
          <span 
            @mouseover="onStar(pickId)" @mouseout="offStar(pickId)" 
            @click="pickStar(pickId)">{{pick.text}}
          </span>
         </li>
      `,
        props: ["pick", "pickId"],
        methods: {
          onStar: function(pickId) {
            var starButton = document.getElementById(pickId);
            starButton.style.backgroundImage = `url("./image/star.png")`;
            starButton.style.outline = "none";
          },

          offStar: function(pickId) {
            var starButton, isClick;
            starButton = document.getElementById(pickId);
            starButton.style.backgroundImage = `url("./image/star-uncheck.png")`;
            isClick = starButton.getAttribute("data-determine-click");
            if (isClick === "true") {
              starButton.style.backgroundImage = `url("./image/star.png")`;
            }
          },

          pickStar: function(pickId) {
            var confirm = document.getElementById("confirm");
            confirm.style.visibility = "visible";

            document
              .querySelectorAll("#questions li button")
              .forEach(function(starButton) {
                var isClick = starButton.getAttribute("data-determine-click");
                var starButtonStyle = starButton.style;

                if (starButton.getAttribute("id") === pickId) {
                  starButtonStyle.backgroundImage = `url("./image/star.png")`;
                  starButtonStyle.outline = "none";
                  starButton.setAttribute("data-determine-click", true);
                } else {
                  if (
                    starButton.getAttribute("data-determine-click") === "true"
                  ) {
                    starButtonStyle.backgroundImage = `url("./image/star-uncheck.png")`;
                    starButton.setAttribute("data-determine-click", false);
                  }
                }
              });
          }
        }
      }
    }
  });

  return questions;
});
