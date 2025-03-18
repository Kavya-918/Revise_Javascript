                                                                                                      //Loops in js
/*used to execute the same block of code again and again
5 types of loops 
1.while     2.do-while    3.for   4.for-in (only js)   5.for-of(only js)
*/

//1.while loop : specified condotion evaluate to true
var i=1
while(i <= 5){
    document.write(i+" ");
    i++;
}
//output: 1 2 3 4 5

//2.Do-While loop : atleast execute once
var k=1;
do{
    document.write(k+" ");
    k++
}
while(k >=5)
//output:  1



//3.for loop : it execute block of code as long as certain condition is meet

for(var i=1; i<=5; i++){
    document.write(i+" ");
}
//output :  1 2 3 4 5


//Note: Arrays can be iterable ->for of, Objecrs can be iterable -> for in

//4.for-in loop : special type of loop , iterate over the properties of an object

var person = {
    "name": "kavyadeveloper",
    "surname": "kumarkrish",
    "age": 22
};

for(var kav in person){
    document.write(kav+"="+" " +person[kav]+"<br>")
}

/**
 * output
 * ame= kavyadeveloper
surname= kumarkrish
age= 22
 */

document.write("Only keys display not values"+"<br>")
for(var kav in person){
    document.write(person[kav]+"<br>")
}

/**output
 * Only keys display not values
kavyadeveloper
kumarkrish
22
 */



//5.for of -iterate over array very easily(without key value pair)->not applicable for objects

let letters = ["a", "b", "c", "d"]
for(let kavya of letters){
    document.write(kavya+" <br>")
}

/**output
 * a
b
c
d
 */
