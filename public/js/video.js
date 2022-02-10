// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
homeContent=document.getElementById("homeContent");

content1="This is dummy content 1"

function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
        homeContent.innerHTML = ""; 
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

//var times=[0.5,0.10,0.16,0.23,0.38]

video.addEventListener("timeupdate",function () {
    if(this.currentTime>4 && this.currentTime<5)
    {
        this.pause();
        this.currentTime=5;
        btn.innerHTML = "Play";
        homeContent.innerHTML=content1;
    }
    else if(this.currentTime>9 && this.currentTime<10)
    {
        this.pause();
        this.currentTime=10;
        btn.innerHTML = "Play";
        homeContent.innerHTML=content1;
    }
    else if(this.currentTime>15 && this.currentTime<16)
    {
        this.pause();
        this.currentTime=16;
        btn.innerHTML = "Play";
        homeContent.innerHTML=content1;
    }
    else if(this.currentTime>22 && this.currentTime<23)
    {
        this.pause();
        this.currentTime=23;
        btn.innerHTML = "Play";
        homeContent.innerHTML=content1;
    }
})