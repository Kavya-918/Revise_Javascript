console.log("start");

setTimeout(function cb(){
    console.log("callback");
}, 0);

console.log("End");


output
start
 End
callback
