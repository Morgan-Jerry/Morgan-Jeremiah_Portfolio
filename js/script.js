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
