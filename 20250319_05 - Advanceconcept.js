//                                                                                                    Advance JS Concept
/**
 * 1.Strict Mode: -- interview
 * use strict mode to check everything very strictly 
 * only applicable to variable 
 */

//"use strict"
a=10
console.log(a) // a is not defined error we get

//without using strict mode
a=10
console.log(a) //10

//Note: Strict can aslo used in local if you didnot want as global
function display(){
    //"use strict"
    b=11
    console.log(b)
}
display()
/** output 
 * variables.js:19 
 Uncaught ReferenceError: b is not defined
    at display (variables.js:19:6)
    at variables.js:22:1
 */

/** use of strict 
 * It is indirectly provide security to your code
 * mistakes cannot happen
 */


//2.Hosiing - Taking function,variable providing theme a global sope
//Note: variable created with var only possible for hoistic
//case 1 ----variables
a=10
console.log(a) //10
var a 

//case 2
b=20
console.log(b) //Uncaught refernceerror
//let b

//case 3 
c=30
console.log(c) // syntatical error
//const c 


//Function - in js are hosited 
//Note: 2 things in js are hosited variables and functions

display()
function display(){
    console.log("Hello") //Hello
}

/**Note: Initilization are not declare as hositic in javascript
 * Initilization does not have a global scope
 * inilization are not taken as top priority in javascript
 * for example
 */
var a 
console.log(a) //undefined
a=20







