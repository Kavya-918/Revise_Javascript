//                                                                           ARRAYS -- operations


 // =>Adding elements in an existing array
//1. Push : it will add element on rear end(last)

var arr = [1,2,3,4,5]
console.log(arr)
document.write(arr+"<br>") //output: 1,2,3,4,5
arr.push(6)
console.log(arr)
document.write(arr+"<br>") //1,2,3,4,5,6
,6

//2. Unshift : add at start

arr.unshift(0)
console.log(arr)
document.write(arr +"<br>") //output: 0,1,2,3,4,5,6


//3. inbetween  use index : if you want to add any elemen if that index is already having values then it be override

console.log(arr);
document.write(arr +"<br>") //0,1,2,3,4,5,6
arr[2] = 10;
document.write(arr +"<br>") //0,1,10,3,4,5,6


/*4.Splice (to add inbetween) : place element exact index and the index value also not be delete it and it move to next 
parameters are importanat here
 2 Tasks it will do 
 1. Adding also it do    2. Deleting also it do
 arr.splice(index where you need to add element , how many element remove  if i put zero means dont remove anything, which element to be add)
*/
document.write(arr +"<br>") //0,1,10,3,4,5,6
arr.splice(2,0,2) // not remove anything added because middle we put "0"
document.write(arr +"<br>") //0,1,2,10,3,4,5,6
arr.splice(2,1,4);
document.write(arr +"<br>") //0,1,4,10,3,4,5,6 
arr.splice(2,2,4); 
document.write(arr +"<br>")//0,1,4,3,4,5,6


//=>Removing elements to an existing elements

//1.pop() -- remove element on rear end or last or back
document.write(arr +"<br>") //0,1,4,3,4,5,6
arr.pop()
document.write(arr +"<br>") //0,1,4,3,4,5


//2.shift()  -- used to remove the elements at begining
document.write(arr +"<br>") //0,1,4,3,4,5
arr.shift()
document.write(arr +"<br>") //1,4,3,4,5


//3.Inbetween -- delete based on index
document.write(arr +"<br>") //1,4,3,4,5
delete arr[2]
document.write(arr +"<br>") //1,4,,4,5
console.log(arr) //(5) [1, 4, empty, 4, 5] but space is still exists

//4.splice -- that empty space is also remove , syntax: arr.splice(which position, How many elements removed) --interview importanta
var arr1 = [10,20,30,40]
document.write(arr1 +"<br>") //10,20,30,40
arr1.splice(2,2); 
document.write(arr1 +"<br>") //10,20
console.log(arr1) //(2) [10, 20]

//5.concat -- add 
var arr2 = [10,9,8,7,6]
var arr3 = ["A", "B", "C", "D"]
var res = arr2.concat(arr3)
document.write(res +"<br>") //10,9,8,7,6,A,B,C,D
console.log(res) //(9) [10, 9, 8, 7, 6, 'A', 'B', 'C', 'D']


// 6. sort -- by default assign on ascending
 var sorting = [9,5,2,0,3]
    sorting.sort()
console.log(sorting); //(5) [0, 2, 3, 5, 9]


//7.Reverse -- used for reversing
document.write(arr2 +"<br>") //10,9,8,7,6
arr2.reverse();
document.write(arr2 +"<br>") //6,7,8,9,10


//8.at -- display particular position element
document.write(arr2 +"<br>") //6,7,8,9,10
var pos =arr2.at(3) // asign and call
document.write(pos +"<br>") //9


//9.tostring() -- if you want normal formate output use this method [] be removed in console
console.log(arr2)  //(5) [6, 7, 8, 9, 10]
var assign = arr2.toString(arr2) 
console.log(assign) //6,7,8,9,10


/* slice -- takes 2 or more parameter --interview
Taking one parameter -- from that index up to end it will give in output
Taking two parameter -- start and end index-1 up to value display */
//one parameter
var check1 = [50,60,70,80,90,100]
console.log(check1) // (6) [50, 60, 70, 80, 90, 100]
var final = check1.slice(2)
console.log(final) //(4) [70, 80, 90, 100]
//Two parameter
var final1 = check1.slice(2,4)
console.log(final1) //(2) [70, 80]





                                                                               //Advanced Methos -- Arrays
//1.indexof -- used to return the index of an element , incase duplicate values having it return the first occurances
var kavya = ["A", "B", "C","B"]
console.log(kavya.indexOf("B")) //1
//lastindex return --interview
console.log(kavya.lastIndexOf("B")) //3


//2.Include -- element is there it return true else return false
console.log(kavya.includes("B")) //true

//3.find -- return first highest element compare to that one function condition debug : 1>4 no , 10>4 yes output 10

var k = [1,10,5,6,14]
var output = k.find(greater)
console.log(output) //10
function greater(value){
    return value> 4
}


//filter : get all element greater than that particular element
var k = [1,10,5,6,14]
var output = k.filter(greater)
console.log(output) //(4) [10, 5, 6, 14]
function greater(value){
    return value> 4
}


//Map -- each element perform some manipulation 
var k = [1,10,5,6,14]
var output = k.map(greater)
console.log(output) //(5) [2, 20, 10, 12, 28]
function greater(value){
    return value * 2
}








