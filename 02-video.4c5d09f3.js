!function(){var e=document.querySelector("iframe"),t=new Player(e);t.on("play",(function(){console.log("played the video!")})),t.getVideoTitle().then((function(e){localStorage.setItem("videoplayer-current-time",JSON.stringify(e.seconds))})),t.on("timeupdate",throttle(getCurrentPlayTime,1e3));localStorage.getItem("videoplayer-current-time")&&t.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time"))).then((function(e){console.log("Last time you stopped video on ".concat(second," seconds"))}))}();
//# sourceMappingURL=02-video.4c5d09f3.js.map
