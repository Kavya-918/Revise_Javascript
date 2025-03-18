

//var -- global inside scope also access and outside of the scope is also access
//var any variable you declare you can access from anywhere and you can chanable for anywhere
var a =10;
{
    document.write("Var Variable <br>")
    document.write("Variable var modify inside and ouside of the scope <br>")
    document.write("Variable var Access inside and ouside of the scope <br>")

    console.log(a);
    a=12;
    
}
console.log(a);


//let only accessable inside the scope not accessable ouside the scope
//using let you can modify it happens only inside the scope not outside the scope
//it is not accessable outside the scope
{
    document.write("Let Variable <br>")
    document.write("Modify inside the scope but cannot modify outside of the scope <br>")
    document.write("Access inside the scope and also access outside the scope <br>")
    let b=30;
    console.log(b);
    b="kavya";
    console.log(b);
}
/*console.log(b); error thrown as :variables.js:19 
Uncaught ReferenceError: b is not defined
   at variables.js:19:13
(anonymous)	@	variables.js:19
﻿*/


//const
//using const it is not accessable outside of the scope
//and it is not modified also

{
    document.write("Const Variable <br>")
    document.write("Modify inside & outside of  the scope but cannot modify <br>")
    document.write("Access inside the scope but cannot access outside the scope <br>")
    const c= "krish"
    console.log(c);
    c=12;
    console.log(c);//error uncaught ref
    
}
console.log(c);//error ucaught ref

