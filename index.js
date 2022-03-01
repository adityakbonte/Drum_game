// 1st method
/*
document.querySelector("button").addEventListener("click",handle_Click);

function handle_Click(){
    alert("I got clicked!");
}
*/

// 2nd method
/*
document.querySelector("button").addEventListener("click",function (){
    alert("I got clicked!");
});
*/

// so now we have to add this for all buttons

var noOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
  //this.style.color = "white";   // it makes the color of w,A,s,d ..on the drum white after click on it

  // use of switch case for to play all different buttons
  
  var buttoninnerHTML = this.innerHTML;

  makesound(buttoninnerHTML);

  buttonAnimation(buttoninnerHTML);
});
}

document.addEventListener("keypress",function(event){

  makesound(event.key);

  buttonAnimation(event.key);
});

function makesound(key){

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
  

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break; 

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
     
    default: console.log(buttoninnerHTML);
  
  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

}