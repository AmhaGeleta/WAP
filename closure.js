window.onload = pageLoaded;

function pageLoaded(){
    document.getElementById("btnact").onclick = function(){
    var accountInfoList = [];
        
    var nametxt = document.getElementById("name").value;
    var deposittxt = document.getElementById("deposit").value;  
    var textAreatxt = document.getElementById("txtarea");

    var acc;
    (function () {
        function createAcount (name, deposit) {
            return {
                name,
                deposit
            }
        }
        acc = createAcount(nametxt, deposittxt);
      
    })();
     
    console.log(acc);
    accountInfoList.push(acc);
    for(let i=0; i<accountInfoList.length; i++){
        textAreatxt.value += "Name : "+ accountInfoList[i].name + "\n"+"Deposit : "+accountInfoList[i].deposit +"\n";
    }
    
    }
}


var  rudyTimer =  (function(){    
   
        return function(){
            setInterval(function(){
                alert("Rudy ---- reload to terminate this alert message and procede to the next exercise");
             }, 1000);
        }

        
    })();

    rudyTimer.extension = function(){
        alert("Hi There");
    }
    

var sayHello = function (name){
    var text = "Hello " + name;
    return function(){
        console.log(text);
    };
};
var tod = sayHello("Todd");
var amha = sayHello("Amha");
tod();
amha();


var add = (function(){
    var counter =0;
    
    return function(){
        console.log(counter);
        return counter +=1;
    }
})();

add();
add();
add();
