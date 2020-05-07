

let tipsArray = [
  "Specificera ditt mål. Vad är det du strävar efter?",
  "Ta reda på varför. Varför vill du nå ditt mål?",
  "Sätt en deadline. Det är svårare att uppnå ett mål utan någon tidsgräns.",
  "Belöna dig själv. Ge dig själv en belöning för små saker som går bra.",
  "Ta hjälp av andra. Försök hitta någon som strävar efter samma mål som du."
];

let tipsForDay = "";

//Random jokes
function getRandomJokes() {
  let random = Math.floor(Math.random()*tipsArray.length);
  let randomElement = tipsArray[random];
  tipsForDay = randomElement;
}
getRandomJokes();



//Get time, from wc3School.
function startTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  m = checkTime(min);
  s = checkTime(sec);
  document.getElementById('time').innerHTML =
    hour + ":" + min;
  setTimeout(startTime, 500);


  // add zero in front of numbers < 10
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i
    };
    return i;
  }


  //change background on time
  function changeBgandGreet() {
    let today = new Date();
    let h = today.getHours();

    if (h < 12) {
      document.body.style.backgroundImage = "url('../img/morning.jpg')";
      document.getElementById("greeting").innerHTML = "God morgon";//Greeting.
      document.getElementById('name').innerHTML = "Jeppe";//What name you wanna display.
      document.getElementById('tips').innerHTML = tipsForDay;//Your focus for the day.
    }
    else if (h < 18) {
      document.body.style.backgroundImage = "url('../img/morning.jpg')";
      document.getElementById("greeting").innerHTML = "God eftermiddag";//Greeting.
      document.getElementById('name').innerHTML = "Jeppe";//What name you wanna display.
      document.getElementById('tips').innerHTML = tipsForDay;//Your focus for the day.
    }
    else {
      document.body.style.backgroundImage = "url('../img/morning.jpg')";
      document.getElementById("greeting").innerHTML = "God kväll";//Greeting.
      document.getElementById('name').innerHTML = "Jeppe";//What name you wanna display.
      document.getElementById('tips').innerHTML = tipsForDay;//Your focus for the day.
    }
  }
  changeBgandGreet();
}



