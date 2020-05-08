

//Get time, from wc3School.
function startTime() {

  //Name varible for display.
  let name = document.getElementById('name').innerHTML = "Jeppe";

  //Get time form time lib.
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  // add zero in front of numbers < 10
  hour = ( hour < 10 ? "0" : "" ) + hour;
  min = ( min < 10 ? "0" : "" ) + min;
  sec = ( sec < 10 ? "0" : "" ) + sec;

  //Display the time
  document.getElementById('time').innerHTML =
  hour + ":" + min;
  setTimeout(startTime, 500);


  //change background and text depending on time.
  function changeBgandGreet() {
    let today = new Date();
    let h = today.getHours();

    if (h < 12) {
      document.body.style.backgroundImage = "url('../img/morning.jpg')";
      document.getElementById("greeting").innerHTML = "God morgon";//Greeting.
      name;//What name you wanna display.
      document.getElementById('tips').innerHTML = tipsForDay;//Your focus for the day.
    }
    else if (h < 18) {
      document.body.style.backgroundImage = "url('../img/day2.jpg')";
      document.getElementById("greeting").innerHTML = "God eftermiddag";//Greeting.
      name;//What name you wanna display.
      document.getElementById('tips').innerHTML = tipsForDay;//Your focus for the day.
    }
    else {
      document.body.style.backgroundImage = "url('../img/night.jpeg')";
      document.getElementById("greeting").innerHTML = "God kväll";//Greeting.
      name;//What name you wanna display.
      document.getElementById('tips').innerHTML = tipsForDay;//Your focus for the day.
    }
  }
  changeBgandGreet();
}


//String array with motivation text.
let tipsArray = [
  "Specificera ditt mål. Vad är det du strävar efter?",
  "Ta reda på varför. Varför vill du nå ditt mål?",
  "Sätt en deadline. Det är svårare att uppnå ett mål utan någon tidsgräns.",
  "Belöna dig själv. Ge dig själv en belöning för små saker som går bra.",
  "Ta hjälp av andra. Försök hitta någon som strävar efter samma mål som du.",
  "”Ramla sju gånger, res dig åtta.” (Japanskt ordspråk)",
  "”Sitt inte och vänta på att saker ska komma till dig. Kämpa för det du vill ha, ta ansvar för dig själv.” (Michel Tanaus)",
  "”Om du inte kämpar för det du vill ha, gråt då inte för det du har förlorat.”",
  "”Finn inte fel, finn en kur.” (Henry Ford)"
];

let tipsForDay = "";

//Get random tips from the string array.
function getRandomTips() {
  let random = Math.floor(Math.random()*tipsArray.length);
  let randomElement = tipsArray[random];
  tipsForDay = randomElement;
}
getRandomTips();