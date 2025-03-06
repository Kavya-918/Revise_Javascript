// Map
//used for transform the whole array
//Transform to double, triple,binary


const arr = [5,1,3,2,6];

function double(x){
    return x*2;
}


function Tirple(x){
    return x*3;
}


function Binary(x){
    return x.toString(2);
}

const output = arr.map(double);
const output1 = arr.map(Tirple);
const output2 = arr.map(Binary);
console.log(output);
console.log(output1);
console.log(output2);


//we can also write like this

const anotherway = arr.map(function four(x){
    return x*4;
});
console.log(anotherway);

//we can also write like this also array function

const way2 = arr.map ((x) => x.toString(2));
console.log(way2);
