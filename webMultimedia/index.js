const video = document.querySelector("#video");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");




btn1.addEventListener('click', ()=>{
    video.currentTime = 0;
    video.play();
});

btn2.addEventListener('click', ()=>{
    video.currentTime = 17;
    video.play();
});

btn3.addEventListener('click', ()=>{
    video.currentTime = 39;
    video.play();
});

btn4.addEventListener('click', ()=>{
    video.currentTime = 62;
    video.play();
});

 

   
    