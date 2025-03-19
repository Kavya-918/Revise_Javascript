   //                                                   FUNCTIONS
/**
 * Function is a group of statement that perform specific task 
 * Reusable code , Reduce the repetation of the code, ,make much easier to maintain,easy to eliminate the error  
 * 2 type of function 1.built in function and 2. user defined function
 * Build in function - alert(),confirm()-same as alert it has 2 opion ok cancel in alert 1 option ok,prompt()-used to take i/p from user,parseInt(),parseFloat(),sqrt()
 * User defined function : Function Declaration,Function expression,Anonymous function, Arrow function
 */
//Build -in Function
//1.alert() -- 1 option ok
var v1 = 1234
if(v1 > 0){
    alert("The condition is true")
}
else{
    alert("The condition is false")
}

//2.confirm -- 2 option ok cancel similar to alert
var v1 = 1234
if(v1 > 0){
    confirm("The condition is true")
}
else{
    confirm("The condition is false")
}
//Note: can i use alert and confirm together -- yes 


//3.prompt -- used to take input from user
var str1 = prompt("Enter First String:")
var str2 = prompt("Enter Second String:")
if(str1 == str2){
    confirm(str1)
}
else if(str1 != str2){
    confirm(str1+str2)
}

//4.parseInt

var str1 = parseInt(prompt("enter the first string:"))
var str2 = parseInt(prompt("enter the Second string:"))
if(str1 == str2){
    confirm(str1)
}
else if(str1 != str2){
    confirm(str1+str2)
}


//5.sqrt
var a = parseFloat(prompt("Enter the number"))
var res = Math.sqrt(a)
console.log(res)



//User defined function
//1.FUnction Declration
//zero parametraized
function display(){
    var str1 = parseInt(prompt("enter the first string:"))
    var str2 = parseInt(prompt("enter the Second string:"))
    if(str1 == str2){
        confirm(str1)
    }
    else if(str1 != str2){
        confirm(str1+str2)
    }    
}
display()
//parametarized
function display1(){
    console.log(a*b)
}
display1(5,5)


//2.function expression - assign function to variable
var display = function(a,b){
    return a*b
}
var res = display(5,5)
console.log(res)



/**
 * 3.Arrow Function - function keyword not tell
 * Open and close braces not there
 * return keywod also not required
 */

var display3 = (a,b) => a*b
var res = display(5,5)
console.log(res)

