


   function test(){
    
    var hr = (function(){
             var employee ={
                nam: 'John',
                age:40,
                salary:6000,

                getAge:function(){return age},
                getSalary:function(){return salary},
                getName:function(){return nam},
                setAge:function(newAge){age = newAge;},
                setSalary: function(newSalary){salary = newSalary},
                setName: function(newName){nam = newName},
                increaseSalary:function(percentage){return salary += getSalary * percentage}, 
                incrementAge: function() {return  age + 10} 
             }

                return {
                         setName :  employee.setName,
                         setSalary: employee.setSalary,
                         setAge: employee.setAge,
                         increaseSalary: employee.increaseSalary,
                         incrementAge:employee.incrementAge


                }

    })();
        
      var obj = hr
      obj.setName("Amha");
      obj.setAge(33);
      obj.setSalary(6000);
      console.log(obj.increaseSalary(.5));
      console.log(obj.incrementAge());


       console.log(obj);
    // var d =60;
    // var add = (function () {
    //      var counter = 0; 
    //     d=9;
    //      return function () {
            
    //           return counter += 1; } 
    //         })();
    
    // var a =add;
    // var b = add();
    // console.log(a());
    // console.log(a());
   
    x = 1;
    var a = 5;
    var b = 10;
    var c = function(a, b, c) {
            var x ;
            document.write(x);
            document.write(a);
            var f = function(a, b, c) {
                b = a;
                document.write(b);
                b = c;
             //   var x = 5;
            }
            f(a,b,c);
                document.write(b);
           //= 10;
    }
    c(8,9,10);
    document.write(b);
    document.write(x);

    
    }

   
   

    




