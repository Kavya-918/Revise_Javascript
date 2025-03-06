                                                                          //Filter

// Filter function is used to filter the values inside an array



const arr = [5,1,3,2,6,8,9];
//filter the values
function isEven(x){
    return x%2 ==0;
}

function Greaterthantwo(x){
    return x>2;
}

const output = arr.filter(isEven);
const output1 = arr.filter(Greaterthantwo);

console.log(output);
console.log(output1);

//also pass or right like this

const anotherway = arr.filter(function greaterthan6(x){
    return x>6;
});
console.log(anotherway);


//or use array function (1 line code so no need of return directly write)

const way = arr.filter((x) => x>5);
console.log(way);











