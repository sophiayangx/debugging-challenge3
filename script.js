var backgroundIsBlue = false
setInterval(function() {
  if (backgroundIsBlue) {
    $("#blue-blinker").css({background: "white"});
    backgroundIsBlue = false;
  } else {		
    $("#blue-blinker").css({background: "blue"});	
    backgroundIsBlue = true;
  }	
}, 500)

var borderIsBlue = false
setInterval(function() {
  if (backgroundIsBlue) {
$("#border-blinker").css({border: "3px solid black"});
    borderIsBlue = false;
  } else {		
$("#border-blinker").css({border: "none"})
    borderIsBlue = true;
  }	
}, 500)