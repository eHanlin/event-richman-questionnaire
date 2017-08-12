"use strict";

define(["vue"], function (Vue) {
  new Vue({
    el: "#anchor-list",
    data: {
      anchors: [{
        href: "",
        text: "再玩一次 "
      }, {
        href: "",
        text: "學霸課程 "
      }, {
        href: "",
        text: "輕鬆學習課程 "
      }, {
        image: "./image/facebook.png",
        href: ""
      }, {
        image: "./image/line.png",
        href: ""
      }]
    },
    components: {
      ehanlinLink: {
        template: "\n        <a v-if=\"link.text\" :href=\"link.href\">{{link.text}}</a>\n        <a v-else :href=\"link.href\">\n          <img :src=\"link.image\"></img>\n        </a>\n      ",
        props: ["link"]
      }
    }
  });
});