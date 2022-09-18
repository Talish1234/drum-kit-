var lengthOfDrumButton = document.querySelectorAll(".drum").length;


function handleClick()
{
 var key = this.innerHTML;
 soundOutput(key);
}

function soundOutput(key)
{
 
 switch (key) {
   case 'w':
   var audio = new Audio("tom-1.mp3");
   audio.play();
   animation(key);
   break;
case 'a':
  var audio = new Audio("tom-2.mp3");
  audio.play();
  animation(key);
  break;
 
case 's':
var audio = new Audio("tom-3.mp3");
audio.play();
animation(key);
break;
case 'd':
var audio = new Audio("tom-4.mp3");
audio.play();
animation(key);
break;
  
case 'j':
var audio = new Audio("snare.mp3");
audio.play();
animation(key);
break;
 
case 'k':
var audio = new Audio("kick-bass.mp3");
audio.play();
animation(key);
 break;
case 'l':
var audio = new Audio("crash.mp3");
audio.play();
animation(key);
 break;
}
}

for(var i=0;i<lengthOfDrumButton;i++)
{
document.querySelectorAll("button")[i].addEventListener("click",handleClick);
}

document.addEventListener("keypress",function(event)
{
 soundOutput(event.key);
});

function animation(keypressed)
{
 document.querySelector("."+keypressed).classList.add("pressed");
 setTimeout(function ()
 {
document.querySelector("."+keypressed).classList.remove("pressed");
 },100);
 
}
