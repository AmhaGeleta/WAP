
document.addEventListener("DOMContentLoaded",function(event){
    var btn1= document.getElementById("butn");
    btn1.onclick = function(){
       
     //function declaration
             var passed =3;

             var addTo = function (){
                 var inner =2;
                 return passed + inner;
             };
        }
    alert(addTo);

});