//key event

function keyCheck(event){

    //enter key

    if(event.which == 13){

        runWorkerId = setInterval(run,100);


    }

    //space key

    if(event.which == 12){


    }

    //boy run

    var boyId = document.getElementById("boy")
    var runImageNumber = 1;
    var runWorkerId = 0:

     function run (){
        runImageNumber++;

            if(runImageNumber==9){
                runImageNumber = 1;
            }
        
        boyId.src = "Run ("+runImageNumber+"}.png"
     }


     //score
     var scoreId = document.getElementById("score");
     var newScore = 0;
     var scoreWorkerId = 0;


     function updateScore (){
        newScore++;

        scoreId.innerHTML = newScore;
     }
}