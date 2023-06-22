var x = 100;

function test1 (){
    
    var d = document.getElementById("d1");
    
    x = x+10;

    d.style.marginLeft = x + "px" ;
    d.style.backgroundColor = "blue" ;
    d.innerHTML = "Hello" ;

}

function test2(){
    setInterval(test1,100); //this part will help the function (test1) work simultaneously
}



