var backgroundIsBlue = false
setInterval(function() {
  if (backgroundIsBlue) {
    $("#blue-blinker").css({background: "white"});
    backgroundIsBlue = true;
  } else {		
    $("#blue-blinker").css({background: "blue"});	
    backgroundIsBlue = false;
  }	
}, 500)

var borderIsBlue = false
setInterval(function() {
  if (backgroundIsBlue) {
    $("#blue-blinker").css({border: "white"});
    backgroundIsBlue = true;
  } else {		
    $("#blue-blinker").css({border: "blue"});	
    backgroundIsBlue = true;
  }	
}, 500)