// Restricting screen rotation on mobile browser
function startAnimation(){
  $('.rotate').fadeIn(500).animate(
    { deg: "+=180" },
    {
      duration: 2000,
      step: function(now) {
        $(this).css({ transform: 'rotate(' + now + 'deg)' });
      },
      complete: function(){
        startAnimation();
        console.log("Animation Complete!");
      }
    }
  ).fadeOut(1000);
}
$(window).ready(function(){
    var ori = window.orientation;
    if(ori !== 0 && screen.width <= 768){
      $(".landscape").css({"visibility":"visible"});
      console.log("You need to go back to portrait mode!");
      startAnimation();
    }
    else{
      $(".landscape").css({"visibility":"hidden"});
    }
  })
  
$(window).on("orientationchange", function (event) {
  var ori = window.orientation;
  if(ori !== 0 && screen.width <= 768){
    $(".landscape").css({"visibility":"visible"});
    console.log("You need to go back to portrait mode!");
    startAnimation();
  }
  else{
    $(".landscape").css("visibility","hidden");
  }
});

// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
