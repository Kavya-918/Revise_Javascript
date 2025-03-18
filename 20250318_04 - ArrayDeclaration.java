                                                                                                             //Arrays
/**used to store more than one value or a group of value under a singel variable name 
 Many ways to create an array in js 
 */
//1. Normal way
var arr = [1,3,4,6]
console.log(arr)
/**output
 * (4) [1, 3, 4, 6]0: 11: 32: 43: 6length: 4[[Prototype]]: Array(0)

 */
for(var kavya of arr){
    console.log(kavya+" ")
}
/** output
 * 1 
variables.js:13 3 
variables.js:13 4 
variables.js:13 6 
 */



//2.you can give also like this
var arr = [] // array creation
arr[0] = 1
arr[1] = 2
console.log(arr)
/** output
 * (2) [1, 2]0: 11: 2length: 2[[Prototype]]: Array(0)
 */



//3.Using New Keyword ---interview
var arr = new Array(1,2,3,4)
//technically this array is called as constructor we are giving opening and closing paranthesis
console.log(arr)
