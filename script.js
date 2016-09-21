var backgroundIsBlue = true
setInterval(function() {
  if (backgroundIsBlue) {
    $("#blue-blinker").css({background: "white"});
    backgroundIsBlue = true;
  } else {		
    $("#blue-blinker").css({background: "blue"});	
    backgroundIsBlue = true;
  }	
}, 500)