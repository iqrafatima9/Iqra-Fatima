
const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');
const hoversign = document.querySelector(".hover-sign")

//sidebar elements//
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');

const videoList = [video1, video2, video3];

videoList.forEach(function(video) {
    video.addEventListener('mousemove', function() {
        video.play(); // ❗️ use play() not onplay
        hoversign.classList.add("active")
    });

    video.addEventListener('mouseout', function() {
        video.pause(); // ❗️ use pause() as a function
        hoversign.classList.remove("active")
    });
});




const outer = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', e => {
  outer.style.left = `${e.clientX}px`;
  outer.style.top = `${e.clientY}px`;
});


//sidebar elements//
menu.addEventListener("click", function(){
    sideBar.classList.add("open-sidebar");
})

close.addEventListener("click", function(){
    sideBar.classList.add("close-sidebar")
})