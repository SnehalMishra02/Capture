var fxlist = document.getElementById("fx-list");
var fxbut = document.getElementById("effects");
var cam = document.getElementById("camera");
var count = 0
function dispmenu(){
    if(count===0){
    fxlist.style.display="block";
    fxlist.style.height="7vh";
    fxbut.style.backgroundColor="rgb(37,37,37)";
    count =1;

    }
    else{    
    fxlist.style.display="hidden";
    fxlist.style.height="0";
    fxbut.style.backgroundColor="rgb(0,0,0)";
    count =0;

    }

}
