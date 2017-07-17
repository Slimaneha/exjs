// Variables 


// var images = document.getElementsByClassName("slider");
// var tour = 0;
// // FUNCTION


var images = document.getElementsByClassName("slider");
var turn = 0;
// FUNCTION

function cacheimages (){
  for (i=0 ; i<images.length ;i++){
    images[i].style.display="none";
  } 
}

function selection (index){
 images[index].style.display="block";
}

function lecteur (){
  setInterval(function(){
    turn++;
    cacheimages();
    selection(turn);
    }
    ,1000);
}

// SCRIPT


cacheimages();

selection(turn);

lecteur();