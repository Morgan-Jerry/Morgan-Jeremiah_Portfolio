console.log("Aviator Violinist Website Loaded");

// GREETING BASED ON TIME OF DAY
const hour = new Date().getHours();

let greet;

if(hour < 12){

greet="Good Morning ☀️";

}

else if(hour <18){

greet="Good Afternoon 🌤️";

}

else{

greet="Good Evening 🌙";

}

document.getElementById("helloText").innerHTML="Hello, "+greet;


// MONTHLY BANNER
const today = new Date();

const month = today.toLocaleString('default',{
month:'long'
});

const banner = document.getElementById("monthBanner");

const greeting = document.getElementById("monthGreeting");

banner.style.display="block";

greeting.innerHTML=`✈️🎻 Happy New Month! May this month bring you higher flights, beautiful melodies, and new opportunities. Welcome to my portfolio! ${month}.`;

document.querySelector(".closeBanner").onclick=function(){

banner.style.display="none";

}

// TO MAKE IT APPEAR ONCE A MONTH
// const month = new Date().getMonth();

// if(localStorage.getItem("month") != month){

// banner.style.display="block";

// localStorage.setItem("month", month);

// }


// FLOATING TIME DISPLAY
function updateClock(){

const now=new Date();

document.getElementById("clock").innerHTML=

now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();

// CONFETTI ANIMATION
confetti({

particleCount:250,

spread:150,

origin:{y:0.4}

});


// GALLERY
const images=document.querySelectorAll(".gallery img");

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightbox-img");

const caption=document.getElementById("caption");

const counter=document.getElementById("counter");

const loader=document.getElementById("loader");

const next=document.getElementById("next");

const prev=document.getElementById("prev");

const close=document.getElementById("close");

let current=0;

function showImage(index){

current=index;

loader.style.display="block";

lightboxImg.style.display="none";

lightbox.style.display="flex";

lightboxImg.src=images[current].src;

caption.innerHTML=images[current].dataset.caption;

counter.innerHTML=(current+1)+" / "+images.length;

}

lightboxImg.onload=function(){

loader.style.display="none";

lightboxImg.style.display="block";

}

images.forEach((img,index)=>{

img.onclick=()=>showImage(index);

});

next.onclick=()=>{

current=(current+1)%images.length;

showImage(current);

}

prev.onclick=()=>{

current=(current-1+images.length)%images.length;

showImage(current);

}

close.onclick=()=>{

lightbox.style.display="none";

}

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

}

document.addEventListener("keydown",(e)=>{

if(lightbox.style.display==="flex"){

if(e.key==="ArrowRight")next.click();

if(e.key==="ArrowLeft")prev.click();

if(e.key==="Escape")close.click();

}

});