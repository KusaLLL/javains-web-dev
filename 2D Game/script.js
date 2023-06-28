var background = document.getElementById("background");
var player = document.getElementById("player");
var runWorkerId = 0;
var jumpWorkerId = 0;
var playerMarginTop = 500;
var backgroundX = 0;
var backgrounWorkerId = 0;

function keycheck(event) {
    // Enter key
    if (event.which == 13) {
        if (runWorkerId == 0) { // Use comparison operator here (===)
            runWorkerId = setInterval(run, 100);
            backgrounWorkerId = setInterval(Movebackground,24);
        }
    }

    // Space key
    if (event.which == 32) {
        if(jumpWorkerId==0){
            clearInterval(runWorkerId);
            jumpWorkerId = setInterval(jump,100);
        }
    }
}   

// Run function
var runImageNumber = 1;

function run() {
    if (runImageNumber==8){
        runImageNumber=1;
    }
    runImageNumber++;
    player.src = "Run (" + runImageNumber + ").png";
}


// Jump function
var jumpImageNumber = 1;

function jump(){
    //Fly
    if (jumpImageNumber<=7){ //jump 2-7
        playerMarginTop = playerMarginTop - 40;
        player.style.marginTop = playerMarginTop+"px";
    }

    //land
    if (jumpImageNumber>=8){ //land8-12
        playerMarginTop = playerMarginTop + 56;
        player.style.marginTop = playerMarginTop+"px";
    }

    jumpImageNumber++;

    if(jumpImageNumber==13){
        jumpImageNumber=1;
        clearInterval(jumpWorkerId);
        runWorkerId = setInterval(run, 100);
        jumpWorkerId = 0;
    }
    player.src ="Jump ("+jumpImageNumber+").png";
}

function Movebackground(){
    backgroundX = backgroundX - 20;
    background.style.backgroundPositionX = backgroundX + "px";
}




