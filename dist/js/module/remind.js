"use strict";define(function(){return function(){var determineOrientation=function(){var deviceOrientationStyle=document.getElementById("deviceOrientation").style;window.innerWidth<window.innerHeight?(deviceOrientationStyle.display="block",isInitial&&(isPortraitToLandscape=!0)):isPortraitToLandscape?location.reload():deviceOrientationStyle.display="none"},isDeplayBlock=!1,determineWindowSize=function(){var limitedSizeStyle=document.getElementById("limitedSize").style;window.innerWidth<700||window.innerHeigth<480?isDeplayBlock||(limitedSizeStyle.display="block",isDeplayBlock=!0):isDeplayBlock&&(limitedSizeStyle.display="none",isDeplayBlock=!1)},device=navigator.userAgent;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(device)){var isInitial=!0,isPortraitToLandscape=!1;determineOrientation(),isInitial=!1,window.addEventListener("resize",determineOrientation)}else determineWindowSize(),window.addEventListener("resize",determineWindowSize)}});