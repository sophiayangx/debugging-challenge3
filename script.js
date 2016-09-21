var backgroundIsBlue = false
setInterval(function() {
  if (backgroundIsBlue) {
    $("#blue-blinker").css({background: "white"});
    backgroundIsBlue = true;
  } else {		
    $("#blue-blinker").css({background: "blue"});	
    backgroundIsBlue = true;
  }	
}, 500)

setInterval(function() {
  if (backgroundIsBlue) {
    $("#blue-blinker").css({border: "white"});
    backgroundIsBlue = true;
  } else {		
    $("#blue-blinker").css({border: "blue"});	
    backgroundIsBlue = false;
  }	
}, 500)