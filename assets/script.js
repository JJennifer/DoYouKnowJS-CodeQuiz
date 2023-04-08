var beginBtn = document.getElementById("start");
var timer = document.getElementById("countdown");
var rightAnswer = document.getElementById("optionb")
var tiktoc =90;
var theQuestions= []
   
beginBtn.addEventListener("click", startCount);

function startCount() {
console.log("This works");

    var timeInterval = setInterval(function () {
     tiktoc--;
     timer.textContent=" Time: "+tiktoc+" seconds";
  
     if(tiktoc===0) {
      clearInterval(timeInterval);
     }
    }, 1000);
  }
  
