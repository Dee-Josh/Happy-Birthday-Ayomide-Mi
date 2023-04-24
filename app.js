const countdownContainer = document.querySelector(".countdown-container");
const leftContainer = document.querySelector(".left-container");
const rightContainer = document.querySelector(".right-container");
const rightContent = document.querySelector(".right-content");
const changeDetails = document.querySelector(".change-details");
const changeDetails2 = document.querySelector(".change-details-2");
const memoryBtn = document.querySelector("#memories");
const specialAudio = document.querySelector(".special-audio");


const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const sec = document.getElementById("seconds");
const btn = document.querySelector("#play-song");

const dayP = document.querySelector("#day-p");
const hourP = document.querySelector("#hour-p");
const minuteP = document.querySelector("#minute-p");
const secondsP = document.querySelector("#seconds-p");


const wishContainer = document.querySelector(".birthday-wish");




const audio = new Audio;

const birthdaySongs = [
    "./sounds/1.mp3",
    "./sounds/2.mp3",
    "./sounds/3.mp3",
    "./sounds/4.mp3",
    "./sounds/5.mp3",
    "./sounds/6.mp3",
    "./sounds/7.mp3",
    "./sounds/8.mp3",
    "./sounds/10.mp3"
];

btn.addEventListener('click', ()=>{
    const audioSource = Math.trunc(Math.random()*10 + 1);
    audio.src = birthdaySongs[audioSource];


    if (!btn.classList.contains("playing")){
        audio.play();
        console.log("Playing Song");
        btn.textContent = "Stop Song";
        btn.classList.add("playing");
    }else  {
        btn.classList.remove("playing");
        btn.textContent = "Play Song"; 
        audio.pause();
        audio.currentTime = 0;
    }
})












// Set the date we're counting down toz
var countDownDate = new Date("April 27, 2023 00:00:00").getTime();
// var countDownDate = new Date("jan 1, 2023 00:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
    // day.innerHTML = days;


    if(day.textContent <= 1){
        dayP.textContent = "DAY";
    }else{
        dayP.textContent = "DAYS";
    }
    if(hour.textContent <= 1){
        hourP.textContent = "HOUR";
    }else{
        hourP.textContent = "HOURS";
    }
    if(minute.textContent <= 1){
        minuteP.textContent = "MINUTE";
    }else{
        minuteP.textContent = "MINUTES";
    }
    if(sec.textContent <= 1){
        secondsP.textContent = "SECOND";
    }else{
        secondsP.textContent = "SECONDS";
    }



    if(String(days).length < 2) {
        day.innerHTML = `0${days}`;
    }else{
        day.innerHTML = days;
    }

    if (String(hours).length < 2) {
        hour.textContent = `0${hours}`
    }else{
        hour.textContent = hours
    }

    if (String(minutes).length < 2) {
        minute.textContent = `0${minutes}`
    }else{
        minute.textContent = minutes
    }

    if (String(seconds).length < 2) {
        sec.textContent = `0${seconds}`
    }else{
        sec.textContent = seconds
    }

    if (audio.currentTime === 0){
        btn.textContent = "Play Song"; 
        console.log("HHHH");
    }

    

    

  // If the count down is finished, write some text
  if (distance < 1) {
    clearInterval(x);

    wishContainer.innerHTML = "Happy Birthday To the Best Sister in the Whole World 🎈🎈🎈. <br> May you live more year on this earth and eat the fruit of land in Jesus Name🎁🎁🎁. <br> Enjoy your day.";

    countdownContainer.style.display = "none";
    leftContainer.style.display = "none";
    rightContainer.style.width = "100vw";
    rightContainer.classList.add("after-date");
    rightContent.style.width = "100%";
    rightContainer.style.textAlign = "center";
    changeDetails.textContent = "Happy Birthday";
    changeDetails.style.fontSize = "35px";
    rightContent.style.textAlign = "center";
    memoryBtn.style.marginTop = "10%";
    changeDetails2.textContent = "To Hay Why.";
    specialAudio.style.display = "inline";
    
    
  }
}, 1000);

console.log(audio);

const newAudio = new Audio;

const specAudio = [
    "./sounds/audio1.mp3",
    "./sounds/audio2.mp3",
    "./sounds/audio3.mp3",
    "./sounds/audio4.mp3"
];
let myaudio = 1;
specialAudio.addEventListener("click", ()=>{
    newAudio.src = specAudio[myaudio];
    newAudio.play();
    if (myaudio == 0) {
        alert("This Audio is from your beloved wife. Click on special audio again to here from another beloved.")
    }else if (myaudio == 1){
        alert("This Audio is from your daughter. Click on special audio again to here from another beloved.")
    }else if (myaudio == 2){
        alert("This Audio is from your Son, Joshua. Click on special audio again to here from another beloved.")
    }else if (myaudio == 3){
        alert("This Audio is from your Son, Toluwa. Click on special audio again to play first audio.")
    }
    myaudio++;
    if (myaudio > 2) {
        myaudio = 1;
    }
})