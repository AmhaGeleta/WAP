document.addEventListener("DOMContentLoaded",function(event){
    var txt = document.getElementById("txtarea");
    var check =  document.getElementById("bling");
    var btn1= document.getElementById("btn");
    var bodyel = document.getElementById("bdy");


    btn1.onclick = function(){
        setInterval(increment, 500);
    }
    
   function increment(){
      
    var computedFontSize =parseInt( window.getComputedStyle(txt,null).getPropertyValue("font-size"));


    var finalSize = computedFontSize + 2 ;
    txt.style.fontSize = finalSize +"px";

        
        
    }
  
   check.onchange = function(){
       
       if(check.checked ==true){
        txt.style.fontWeight = "bold";
        txt.style.color ="green";
        txt.style.textDecoration="underline";
        bodyel.style.backgroundImage ="url(decorator_files/hundred.jpg)";
       } else {
        txt.style.fontWeight = "normal";
        txt.style.textDecoration="none";
        txt.style.color ="black";
        bodyel.style.background ="none";
       }

    }
    igpy.onclick = function(){
        var output =" ";
        const str = txt.value.split(" ");
        for(let i=0; i<str.length;i++){
      
            var start = str[i].charAt(0);
            let temp = " ";
            switch(start){
                case 'a' :
                case 'e':
                case 'i' :
                case 'o':
                case 'u' :
                case 'A' :
                case 'E':
                case 'I' :
                case 'O':
                case 'U' :
                    temp = str[i] +"ay ";
                    output = output + temp;
                    temp =" ";
                break;
                default:
                    temp = str[i].substring(1);
                    temp = temp + start + "ay ";
                    output = output + temp;
                    temp =" ";
                break;

            }
           
        }
        txt.value = output;
    }
    malk.onclick = function(){
    
        var output2 =" ";
        const str2 = txt.value.split(" ");
        let temp =" ";
        for(let i=0; i<str2.length;i++){
            if(str2[i].length>=5){
                temp ="Malkovitch";
            }else {
                temp = str2[i];
            }
           output2 = output2+ temp +" ";
        }
        txt.value = output2;
    }
})