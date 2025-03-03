function outest(){
    var c = 20;
function outer(b){
    function inner(){
        console.log(a, b, c);
    }
    const a=10; //local
    return inner;
}
return outer;
}
const a=20; //global
var close = outest()("Hello World");
close();

output
10 'Hello World' 20
if i comment local then it take global 
20  'Hello World' 20
