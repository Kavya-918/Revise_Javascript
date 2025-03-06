const arr = [5,1,3,2,6,8,9];


// general approact without using - reduce

function findSum(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum = sum+arr[i];
    }
    return sum;
}
    console.log(findSum(arr));

// with using redice
    const output = arr.reduce(function(acc,curr){
        acc = acc+curr;
        return acc;
    }, 0);
    console.log(output);


//find max inside array --without reduce
function findMax(x){
    let max=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    } 
    return max;
}
console.log(findMax(arr));


//findmax using reduce

const output1 = arr.reduce(function(acc, curr){
 if(curr > acc){
    acc = curr;
 }
 return acc;
}, 0)
//initial value of array zero 
//Y zero- asuming that array is nonempty and having positive values
console.log(output1);














