const e=document.querySelector("iframe"),o=new Vimeo.Player(e);o.on("play",(function(){console.log("played the video!")})),o.getVideoTitle().then((function(e){console.log("title:",e)}));o.on("play",(function(e){})),o.on("eventName",(function(e){}));
//# sourceMappingURL=02-video.12988938.js.map
