
Call back Function -- i will call back later -- ES6 introduced

A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished


function greet(name, callback){
    console.log("Hello" +name);
    callback(); // Calling the callback function
}

function greetAfter(){
    console.log("How are you");
}

//passing arguments as  a callback function
greet("kavya", greetAfter);


output as 
Hellokavya
How are you
