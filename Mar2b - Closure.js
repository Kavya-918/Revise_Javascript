
function x(){
    var a = 10;
    function y(){
        console.log(a);
    }

    y();
}

x();
// output as 10
Function y binded with lexical scope of x
