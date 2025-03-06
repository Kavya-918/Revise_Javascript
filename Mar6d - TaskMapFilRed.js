const users = [
    {firstName: "kavya", lastName: "krish", age:22},
    {firstName: "K.Susumitha", lastName: "Gorila", age:19},
    {firstName: "K.Supriya", lastName: "Man", age:21},
    {firstName: "B.Chandhana", lastName: "Kothi", age:21},

];

//Task 1
//List of full name --task
//combine firstname and lastname
//output:(4) ['kavya krish', 'K.Susumitha Gorila', 'K.Supriya Man', 'B.Chandhana Kothi']
//we use Map here
const output = users.map (x => x.firstName +" "+ x.lastName);
console.log(output);




//Task 2
//find out how many user have same age / unique age
//output: {19: 1, 21: 2, 22: 1}
//we use reduce here

const output1 = users.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }
    else{
        acc[curr.age]=1;
    }
    return acc;
},{});
console.log(output1);




//Task 3
//Findout the firstname of all user age is greater than 20
//we use Filter
//output :['kavya', 'K.Supriya', 'B.Chandhana']

const output3 = users.filter(x=>x.age >20);
console.log(output3);
// you get object all as: (3) [{…}, {…}, {…}]0: {firstName: 'kavya', lastName: 'krish', age: 22}1: {firstName: 'K.Supriya', lastName: 'Man', age: 21}2: {firstName: 'B.Chandhana', lastName: 'Kothi', age: 21}length: 3[[Prototype]]: Array(0)


const output4 = users.filter((x) =>x.age > 20)
.map((x) => x.firstName);
console.log(output4); //output: ['kavya', 'K.Supriya', 'B.Chandhana']

