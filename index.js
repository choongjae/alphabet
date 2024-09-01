const alphabet = "abcdefghijklmnopqrstuvwxyz";
const bestTime = 1.513;

var firstClear = false;
var count = 0;
var startTime = null;
var done = false;

// function generate

function clearInput(input) {
  if (!firstClear) {
    input.value = "";
    firstClear = true;
  }
}

function checkInput(input) {
  let candCount = input.value.length - 1;
  if (candCount == 0) {
    startTime = Date.now();
    count = 0;
    done = false;
    document.getElementById("result").innerHTML = "";
    document.getElementById("vid").style.display = "none";
  }

  if (candCount == count && input.value.charAt(candCount) == alphabet.charAt(candCount)) {
    count++;
  } else if (candCount == 25 && input.value == alphabet) {
    document.getElementById("result").innerHTML = "Did you just try to copy-paste the whole alphabet in? Boo.";
  }

  if (count == 26 && !done) {
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
