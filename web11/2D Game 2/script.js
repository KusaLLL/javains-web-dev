document.getElementById("startScr").style.visibility = "visible";

var background = document.getElementById("background");
var backgroundX = 0;
var backgroundWorkerId = 0;

var player = document.getElementById("player");
var runWorkerId = 0;
var jumpWorkerId = 0;
var deadWorkerId = 0;
var playerMarginTop = 500;

var score = document.getElementById("score");
var newScore = 0;
var scoreWorkerId = 0;

var blockId = 1;
var blockWorkerId = 0;
var blockMarginLeft = 1500;
var gap = Math.random() * (1000 - 200) + 500;

//START
var runStart = 0;

//Audios
//Run audio
var runSound = new Audio("run.mp3");
runSound.loop = true;
//Jump audio
var jumpSound = new Audio("jump.mp3");
//Dead audio
var deadSound = new Audio("dead.mp3");
//BG Music
var bgMusic = new Audio("calm1.mp3");

function keycheck(event) {
  // Enter key
  if (event.which == 13) {
    
    document.getElementById("startScr").style.visibility = "hidden";
    if (runWorkerId === 0) {
      blockWorkerId = setInterval(createBlock, 2000);

      runWorkerId = setInterval(run, 100);
      runStart = 1;

      backgroundWorkerId = setInterval(moveBackground, 24);
      scoreWorkerId = setInterval(updateScore, 100);
      moveBlockWorkerId = setInterval(moveBlock, 30);
    }
  }

  // Space key
  if (event.which == 32) {
    if (runStart === 1) {
      if (jumpWorkerId === 0) {
        clearInterval(runWorkerId);
        jumpWorkerId = setInterval(jump, 100);
      }
    }
  }
}

// Run function
var runImageNumber = 1;

function run() {
  runSound.play();
  runImageNumber = (runImageNumber % 8) + 1;
  player.src = "Run (" + runImageNumber + ").png";
}

// Jump function
var jumpImageNumber = 1;

function jump() {
  // Fly
  if (jumpImageNumber <= 4) {
    runSound.pause();
    jumpSound.play();
    playerMarginTop -= 50;
    player.style.marginTop = playerMarginTop + "px";
  }

  // Land
  if (jumpImageNumber >= 5) {
    runSound.play();
    playerMarginTop += 34.4;
    player.style.marginTop = playerMarginTop + "px";
  }

  jumpImageNumber++;

  if (jumpImageNumber === 11) {
    jumpImageNumber = 1;
    clearInterval(jumpWorkerId);
    document.getElementById("player").style.marginTop = "540px";
    runWorkerId = setInterval(run, 100);
    jumpWorkerId = 0;
  }
  player.src = "Jump (" + jumpImageNumber + ").png";
}

// Background Move
function moveBackground() {
  backgroundX -= 12;
  background.style.backgroundPositionX = backgroundX + "px";
}

// Score Update
function updateScore() {
  newScore++;
  score.innerHTML = newScore;
}

// Create block
function createBlock() {
  var block = document.createElement("div");
  block.className = "block";

  block.id = "block" + blockId;
  blockId++;

  block.style.marginLeft = blockMarginLeft + "px";
  blockMarginLeft += gap;

  background.appendChild(block);
}

var moveBlockWorkerId = 0;

// Move Block
function moveBlock() {
  for (var i = 1; i < blockId; i++) {
    var currentBlock = document.getElementById("block" + i);
    var currentMarginLeft = currentBlock.style.marginLeft;
    var newMarginLeft = parseInt(currentMarginLeft) - 15;
    currentBlock.style.marginLeft = newMarginLeft + "px";

    if (newMarginLeft < 90 && newMarginLeft > 40) {
      if (playerMarginTop > 460) {
        runSound.pause();
        deadSound.play();
        clearInterval(runWorkerId);
        runWorkerId = -1;

        clearInterval(jumpWorkerId);
        jumpWorkerId = -1;

        clearInterval(backgroundWorkerId);
        clearInterval(blockWorkerId);
        clearInterval(scoreWorkerId);
        clearInterval(moveBlockWorkerId);
        deadWorkerId = setInterval(dead, 100);
      }
    }
  }
}

// Dead Function
var deadImageNumber = 1;
var deadWorkerId = 0;

function dead() {
  deadImageNumber++;
  if (deadImageNumber == 11) {
    deadImageNumber = 10;
    player.style.marginTop = "560px";
    document.getElementById("endScreen").style.visibility = "visible";
    document.getElementById("text2").innerHTML = newScore;
  }
  player.src = "Dead (" + deadImageNumber + ").png";
}

// Reload function
function reload() {
  location.reload();
}

// Tips
// Array of tips
var tips = [
  "You can jump by pressing SPACE",
  "Avoid the monsters to survive!!",
  "There could be a secret treasure waiting for you!"
];

// Function to generate a random tip
function getRandomTip() {
  var randomIndex = Math.floor(Math.random() * tips.length);
  return tips[randomIndex];
}

// Update the HTML content with a random tip
var randomTipElement = document.getElementById("randomTip");
if (randomTipElement) {
  randomTipElement.innerHTML = getRandomTip();
}

function music(){
  bgMusic.play();
}


var music = document.getElementById("backgroundMusic");
var toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", function() {
  if (music.paused) {
    music.play();
    toggleButton.textContent = "Pause Music";
  } else {
    music.pause();
    toggleButton.textContent = "Play Music";
  }
});

music.addEventListener("loadedmetadata", function() {
  music.currentTime = 49; // Seek to 49 seconds
});