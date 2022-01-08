var workInSecs
var breakInSecs
var ticker;

//aduio files
var notification = new Audio("notification.mp3")
var notification2 = new Audio("breakend_notification.mp3")

function startTimer(ws) {
  timeInSecs = parseInt(ws);
  ticker = setInterval("tick()", 1000); 
}

function breakTimer(bs) {
  breakInSecs = parseInt(bs);
}
  
function tick( ) 
{
  var ws = timeInSecs;
  var bs = breakInSecs;
    if (ws > 0) {
      timeInSecs--; 
      }
    if(ws == 1)
      {
        notification2.play();      
      }

    if(ws == 0)
      {
        if(bs > 0)
        {
          breakInSecs--;
        }
      }

    if(ws == 0 && bs == 0){
      notification.play();
      clearInterval(ticker);
      startTimer(25*60);  //set work time for each tomato
      breakTimer(6*60);   //set break time for each tomato
    }

  var wm = Math.floor(ws/60);
  ws %= 60;
  var bm = Math.floor(bs/60);
  bs %= 60;
  var pretty = ((wm < 10) ? "0" : "" ) + wm + ":" + ( (ws < 10) ? "0" : "" ) + ws;
  var pretty2 = ((bm < 10) ? "0" : "" ) + bm + ":" + ( (bs < 10) ? "0" : "" ) + bs;

  document.getElementById("work").innerHTML = pretty;
  document.getElementById("break").innerHTML = pretty2;
}

startTimer(1*3);  //the 1st work clock countdown
breakTimer(1*3);  //the 1st break clock countdown


//Credits to Philip M from coding forum
//Edited to Pomodoro Clock by AndreaNagetive