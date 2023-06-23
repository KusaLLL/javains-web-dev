function KeyCheck(event) {
  if (event.which == 13) {
    if (runWorkerId == 0);
    {
      runWorkerId = setInterval(run, 100);
    }
  }
}

var player = document.getElementById("player");
var runWorkerId = 0;
var runImageNumber = 1;

function run() {
  runImageNumber++;

  if (runImageNumber == 9) {
    runImageNumber = 1;
  }

  player.src = "Run (" + runImageNumber + ").png";
}
