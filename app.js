

function digitalClock(){

let time= new Date();
let hours=time.getHours();
let minitus=time.getMinutes();
let seconds=time.getSeconds();
let session="AM"


// if(hours <10){

//     hours="0"+ hours;
// }

hours = (hours < 10) ? "0" + hours:hours;
minitus = (minitus < 10) ? "0" + minitus:minitus;
seconds = (seconds < 10) ? "0" + seconds:seconds;
session= (hours>12) ? "PM" : "AM";

document.getElementById("clock").innerText = hours + ":" + minitus + ":" + seconds + " " + session;



}

setInterval(digitalClock , 1000);








// some time alert function doesnot change the page directly so we should use confirm instead of alert

// function ar() {
//     alert("You will be redirected now!");
//     // window.location.href = "https://google.com"; 
//     window.open("_blank","https://google.com");
// }


function ar() {
    if (confirm("You will be redirected to a new tab!"));
        window.open("introduction.html", "_blank");
    }