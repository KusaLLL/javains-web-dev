// key check
function keyCheck(event) {
    if (event.which == 13) {
      if (runWorkerId == 0) {
        runWorkerId = setInterval(run, 100);
      }
    }
    if (event.which == 32) {
      if (jumpWorkerId == 0) {
        clearInterval(runWorkerId);
        jumpWorkerId = setInterval(jump, 100);
      }
    }
  }
  
  // run
  var playerId = document.getElementById("player");
  var runImageNumber = 1;
  var runWorkerId = 0;
  
  function run() {
    runImageNumber++;
    if (runImageNumber == 9) {
      runImageNumber = 1;
    }
  
    playerId.src = "Run (" + runImageNumber + ").png";
  }
  
  // jump
  var jumpImageNumber = 1;
  var jumpWorkerId = 0;
  var boyMargiTop = 250;
  
  function jump() {
    jumpImageNumber++;
  
    if (jumpImageNumber <= 7) {
      boyMargiTop = boyMargiTop - 30;
      playerId.style.marginTop = boyMargiTop + "px";
    }
    if (jumpImageNumber >= 8) {
      boyMargiTop = boyMargiTop + 30;
      playerId.style.marginTop = boyMargiTop + "px";
    }
  
    if (jumpImageNumber == 13) {
      jumpImageNumber = 1;
      clearInterval(jumpWorkerId);
      jumpWorkerId = 0;
      runWorkerId = setInterval(run, 100);
    }
  
    playerId.src = "Jump (" + jumpImageNumber + ").png";
  }
  