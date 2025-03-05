console.log("start");

setTimeout(function cb(){
    console.log("callback");
}, 0);

console.log("End");


output
start
 End
callback
//js engine doesnot wait for anyone and it execute the end
//cb go to callback queue and come before only end execute 
//so callback execute last
