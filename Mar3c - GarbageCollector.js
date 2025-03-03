function a(){
    var x =0;
    return function b(){
        console.log(x);
    }
}
 var y = a();
 y();
// x=0 after callling goes to garbage collector

function a(){
    var x =0 , z=20;
    return function b(){
        console.log(x);
    }
}
 var y = a();
 y();

// here z is not used then  garbage collector collects if i go to consloe and type it shows the error
