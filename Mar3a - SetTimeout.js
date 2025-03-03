// output as Namaste Javscript and after 1 sec it print 1 as output
function x(){
    var i=1;
    setTimeout (function(){
        console.log(i);
    }, i*1000);

console.log("Namaste Javscript");
}
x();


// Output
// Namaste Javscript and print 6  6 times
function x(){
   for(var i=1; i<=5; i++){
    setTimeout (function(){
        console.log(i);
    }, i*1000);
}

console.log("Namaste Javscript");
}
x();



//output is instead of var put let
Namaste Javscript
Blockscope.js:5 1
Blockscope.js:5 2
Blockscope.js:5 3
Blockscope.js:5 4
Blockscope.js:5 5

function x(){
   for(let i=1; i<=5; i++){
    setTimeout (function(){
        console.log(i);
    }, i*1000);
}

console.log("Namaste Javscript");
}
x();


//Interviews they ask to print on var only --- most case 
//again use closure to slove this issue
//output
Namaste Javscript
Blockscope.js:6 1
Blockscope.js:6 2
Blockscope.js:6 3
Blockscope.js:6 4
Blockscope.js:6 5
function x(){
   for(var i=1; i<=5; i++){
    function close(x){
        setTimeout (function(){
            console.log(x);
        }, i*1000);
    }
    close(i);  
}

console.log("Namaste Javscript");
}
x();

