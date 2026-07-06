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


/*==================================================
  MONTHLY BANNER + BIRTHDAY (FINAL VERSION)
==================================================*/

const banner = document.getElementById("monthBanner");
const greeting = document.getElementById("monthGreeting");

const now = new Date();
const month = now.getMonth();   // January = 0
const day = now.getDate();

const monthlyMessages = [

"🎆 Happy New Year! Welcome to January. May this year bring fresh opportunities, success, happiness and unforgettable memories.",

"❤️ Happy February! Wishing you a month filled with love, peace, creativity and beautiful moments.",

"🌱 Happy March! Keep growing, learning and reaching greater heights every single day.",

"🌸 Happy April! Wishing you fresh beginnings, happiness and endless opportunities this month.",

"🌼 Happy May! Continue chasing your dreams and inspiring everyone around you.",

"☀️ Happy June! May this month bring success, safe flights, beautiful melodies and unforgettable achievements.",

"✈️🎻 Happy July! May this month bring higher flights, beautiful melodies and amazing opportunities. Welcome to my portfolio!",

"🌞 Happy August! Keep pushing boundaries and creating unforgettable moments. Success awaits you.",

"🍂 Happy September! A brand-new season to learn, grow and excel. Keep moving forward.",

"🎃 Happy October! Stay inspired, stay creative and continue reaching for the skies.",

"🍁 Happy November! Success comes through consistency. Keep believing in yourself and never stop.",

"🎄 Merry Christmas & Happy December! Wishing you joy, safe travels, beautiful music and a wonderful holiday season."

];

// =======================
// JUNE 7 BIRTHDAY
// =======================

if(month === 5 && day === 7){

greeting.innerHTML = `
🎉 <strong>Happy Birthday!</strong><br>
Today marks another amazing year for <strong>Aviator Violinist</strong>. 🎻✈️<br>
Thank you for visiting my portfolio and celebrating this special day with me.<br>
May this new chapter bring greater heights, beautiful melodies, safe flights and endless success. 🎂✨
`;

if(typeof confetti === "function"){

confetti({
particleCount:300,
spread:180,
origin:{y:.45}
});

setTimeout(()=>{
confetti({
particleCount:200,
spread:120,
origin:{x:0}
});
},800);

setTimeout(()=>{
confetti({
particleCount:200,
spread:120,
origin:{x:1}
});
},1200);

}

}else{

greeting.innerHTML = monthlyMessages[month];

}

// Show banner

banner.style.display="block";

// Close button

document.querySelector(".closeBanner").onclick=function(){

banner.style.display="none";

}

// Show once each month

const currentMonth = month;

if(localStorage.getItem("bannerMonth") != currentMonth){

banner.style.display="block";

localStorage.setItem("bannerMonth", currentMonth);

}


// CONFETTI ANIMATION
confetti({

particleCount:250,

spread:150,

origin:{y:0.4}

});

// FLOATING TIME DISPLAY
function updateClock(){

const now=new Date();

document.getElementById("clock").innerHTML=

now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();




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


/* ==========================================================
   PREMIUM FLIGHT PRELOADER
   Aviator Violinist
========================================================== */

window.addEventListener("load", function () {

    const loader = document.getElementById("flightLoader");
    const site = document.getElementById("siteContent");

    const progressBar = document.getElementById("loaderBar");
    const percent = document.getElementById("loaderPercent");
    const message = document.getElementById("loadingMessage");

    const messages = [

        "🛂 Connecting to Control Tower...",

        "🧳 Boarding Flight AV707...",

        "🛫 Preparing for Takeoff...",

        "☁️ Climbing to Cruising Altitude...",

        "🎻 Welcome Aboard!"

    ];

    let progress = 0;
    let stage = 0;

    const loading = setInterval(function(){

        progress++;

        progressBar.style.width = progress + "%";

        percent.innerHTML = progress + "%";

        if(progress === 20){

            message.innerHTML = messages[1];

        }

        if(progress === 45){

            message.innerHTML = messages[2];

        }

        if(progress === 70){

            message.innerHTML = messages[3];

        }

        if(progress === 92){

            message.innerHTML = messages[4];

        }

        if(progress >=100){

            clearInterval(loading);

            setTimeout(function(){

                loader.style.opacity="0";
                loader.style.transition="opacity .8s ease";

                setTimeout(function(){

                    loader.style.display="none";

                    site.style.display="block";

                    site.style.animation="fadeSite .8s ease";

                },800);

            },500);

        }

    },35);

});