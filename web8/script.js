var blockMarginLeft = 500;
var createBlockWorkerId = 0;
var blockId = 1;

function keyCheck(event) {
  // Enter key
  if (event.which == 13) {

    if(runWorkerId==0){


    createBlockWorkerId = setInterval(createBlock, 100);
    moveBlockWorkerId = setInterval(moveBlock, 100);
    runWorkerId = setInterval(run, 100);
    moveBackgroundWorkerId = setInterval(moveBackground, 100);
    }       
  }

  // Space key
  if (event.which == 32) {
    // Handle space key event
  }
}

function createBlock() {
  var block = document.createElement("div");
  block.className = "block";

  block.id = "block" + blockId;
  blockId++;

  block.style.marginLeft = blockMarginLeft + "px";
  blockMarginLeft += 500;

  var backgroundElement = document.getElementById("background");
  if (backgroundElement) {
    backgroundElement.appendChild(block);
  } else {
    console.error("Background element not found.");
  }
}

// Move block
var moveBlockWorkerId = 0;

function moveBlock() {
  for (var i = 1; i < blockId; i++) {
    var currentBlock = document.getElementById("block" + i);
    if (currentBlock) {
      var currentBlockMarginLeft = parseInt(currentBlock.style.marginLeft);
      var newMarginLeft = currentBlockMarginLeft - 20;
      currentBlock.style.marginLeft = newMarginLeft + "px";
    }
  }
}

// Boy run
var boyId = document.getElementById("boy");
var runImageNumber = 1;
var runWorkerId = 0;

function run() {
  runImageNumber++;
  if (runImageNumber == 9) {
    runImageNumber = 1;
  }

  boyId.src = "Run (" + runImageNumber + ").png";
}

// Move background
var backgroundId = document.getElementById("background");
var backgroundx = 0;
var moveBackgroundWorkerId = 0;

function moveBackground() {
  backgroundx = backgroundx - 20;
  backgroundId.style.backgroundPositionX = backgroundx + "px";
}
