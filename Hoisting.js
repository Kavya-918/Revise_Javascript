var x =7;
function getName(){
    console.log("Namaste Javascript");
}
getName();
console.log(x);
//output as : 7 and namaste javascript




getName();
console.log(x);
var x =7;
function getName(){
    console.log("Namaste Javascript");
}
//output :  Namaste Javascript , undefined (because initial in memory code stack as defined as undefined



//Arrow Function or when try to assign to variable like you get error only
//it only works on normal function declaration
getName();
console.log(x);

var x =7;
var getName = () => {
    console.log("Namaste Javascript");
}
//output as 
//Uncaught TypeError: getName is not a function and undefined



