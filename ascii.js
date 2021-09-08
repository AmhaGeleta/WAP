
window.onload = pageLoad;

function pageLoad() {

  var str = document.getElementById("start");
  var stp = document.getElementById("stop");
  var anim = document.getElementById("animation");
  var siz = document.getElementById("size");
  var txt = document.getElementById("txtarea");
  var tur = document.getElementById("turbo");




var index=0;
var blan = BLANK.split("=====");
var jug = JUGGLER.split("====="); 
var exer = EXERCISE.split("====="); 
var bik = BIKE.split("====="); 
var div = DIVE.split("====="); 
var cus = CUSTOM.split("=====");


// console.log(blan);
// console.log(jug);
// console.log(exer);
// console.log(bik);
// console.log(div);
var ani;
var allOfThem ;
var speed =250;


  str.onclick = function(){
    stp.disabled = false;
    str.disabled = true;
    if(tur.checked){
     speed =150;
    }  
    
   ani = setInterval(anime, speed); 

  
    
  }


  stp.onclick = function(){
      stp.disabled = true;
      str.disabled = false;
      clearInterval(ani);
      txt.value = allOfThem[index];
  }

  function anime(){
    // console.log("Alert Me "  + j++ );
     var selected = anim.value;
     var mySize = siz.value;

     switch(selected){
       case "blank":
        allOfThem = blan;
       break;
       case "custom":
        allOfThem =cus;
       break;
       case "exercise":
        allOfThem =exer;
       break;
       case "juggler":
      allOfThem =jug;
       break;
       case "bike":
        allOfThem =bik;
       break;
       case "dive":
       allOfThem=div;
       break;

     }

     txt.value = allOfThem[index++];
     switch(mySize){
      case "tiny":
      txt.style.fontSize = "x-small";
      break;
      case "small":
      txt.style.fontSize ="small";
      break;
      case "medium":
      txt.style.fontSize ="medium";
      break;
      case "large":
        txt.style.fontSize ="large";
      break;
      case "xlarge":
      txt.style.fontSize ="x-large";
      break;

   }

     if(index==allOfThem.length){
         index=0;
     }
 }








}
