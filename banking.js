document.addEventListener("DOMContentLoaded",function(event){
    var name = document.getElementById("name");
    var deposit = document.getElementById("deposit");
    var btn = document.getElementById("btn");
    var text = document.getElementById("text");
    var accountInfoList =[];
    btn.onclick= function(){
    function createAccount(){
        var account ={};
        account.type =name.value;
        account.balance=deposit.value;
        account.print=function(){
            let txt = "Account Name: " + this.type + " Balance: " + this.balance +"\n";
            return txt;
        }
        //alert(account.print());
        return account;
        
    }

    var c = createAccount();
    accountInfoList.push(c);
    alert(c.print());
    let txt2 = "";
    for (let x in accountInfoList) {
        txt2 += " " + x.print;

    };
    
   text.value =txt2;
    }
})