const alphabet = "abcdefghijklmnopqrstuvwxyz";
const bestTime = "1.470";

var firstClear = false;
var startTime = null;
var done = false;

function clearInput(input) {
  if (!firstClear) {
    input.value = "";
    firstClear = true;
  }
}

function checkInput(input) {
  if (input.value.length == 1) {
    startTime = Date.now();
    done = false;
    document.getElementById("result").innerHTML = "";
    document.getElementById("vid").style.display = "none";
  } else if (input.value.length == 26 && input.value.toLowerCase() === alphabet && !done) {
    done = true;
    let finalTime = ((Date.now() - startTime) / 1000).toFixed(3);
    if (finalTime > bestTime) {
      document.getElementById("result").innerHTML = `Nice! Your time was <b>${finalTime}</b> seconds.<br/>My fastest time was <b>${bestTime}</b> seconds. Try beating that?`;
    } else if (finalTime == bestTime) {
      document.getElementById("result").innerHTML = `Wow. Your time was <b>${finalTime}</b> seconds.<br/>You tied my fastest time. I guess you should call it a day now.`;
    } else if (finalTime < bestTime) {
      document.getElementById("result").innerHTML = `Your time was <b>${finalTime}</b> seconds.<br/>You beat my fastest time. You're the new champion now. Here's a video to celebrate.`;
      document.getElementById("vid").style.display = "block";
    }
  }
}
