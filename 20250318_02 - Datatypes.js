                                                                                                    //DataTypes

/* Data type is not given, it assigned at run time
    we can see using typeof()
    -> 3 main type category
    1.primitive          : Number,String,Boolean
    2.non primitive      : Array, objects
    3.Special DT or Trival DT: undefined, null

    ->Primitive DT : can hold only one value at a time
    ->Non-Primitive : can hold collections of values 
*/

                                                                                                    //PRIMITIVE DATATYPES 
//Number: represent positive or negative numbers with or without decimal place or number using exponential notation

var v1=12
console.log(v1)
console.log(typeof(v1))

var v2=12222222222222
console.log(v2)
console.log(typeof(v2))

var v3=122.22222222222
console.log(v3)
console.log(typeof(v3))

var v4=1.25e+6; 
console.log(v4)
console.log(typeof(v4))

/* output:
 12
variables.js:19 number
variables.js:22 12222222222222
variables.js:23 number
variables.js:26 122.22222222222
variables.js:27 number
variables.js:30 1250000
variables.js:31 number    */



//String: used to represent textual daa /sequences of character
//Note:No difference b/w singel quote and double quote it treated as string only
var v1 ="k"
console.log(v1)
console.log(typeof(v1))

var v2 = 'krishnaveni'
console.log(v2)
console.log(typeof(v2))
/**output
 * 
  k
variables.js:48 string
variables.js:51 krishnaveni
variables.js:52 string
 */



//Boolean : Holds 2 value true or false
var isReading = true;
console.log(isReading)
//output: true

                                                                                                      //TRIVAL DT
//Undefined: can only have one value the special value is undefined
//if a variable has been declared and not assigned a value then the value is undefined

var k1 
console.log(k1)
console.log(typeof(k1))
//output
//undefined
//variables.js:75 undefined


//Null : no value , equal to empty string, simply nothing

var a = null;
console.log(a);
//output: null



                                                                                                    //COMPOSITE/NON-PRIMITIVE DT
//Arrays:used to store multiple values under single variable, index strat from zero

var colors = ["green" , "blue" , "yellow"]
console.log(colors)
/**
 * output
 * variables.js:93 
(3) ['green', 'blue', 'yellow']
0
: 
"green"
1
: 
"blue"
2
: 
"yellow"
length
: 
3
[[Prototype]]
: 
Array(0)
 */


//Object : complex data type that allow you to store collection of data
// we can use json format, json-key value pair
var obj ={
    firstname : "Kavya",
    lastname : "Krishnaveni",
    age      : '20'
}
console.log(obj)
console.log(typeof(obj))



//Function: callable object that execute a block of code

var greeting = function(){
    return "Hello my dear Krisheyyy";
}
console.log(typeof(greeting))
console.log(greeting());
/**
 * output
 * function
variables.js:134 Hello my dear Krisheyyy
 */

