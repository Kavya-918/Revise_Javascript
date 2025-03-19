//                                                          OBJECTS
/* JS is an object- based language and in js almost everything is an object or act as an object
    JS is object is just a collection of named(key value) values , this named values are usually refered as propertes of an object
    Object is similar to an array but we can define here the keys yourself such as name, age, gender */

    //Object creation ways
    //1. Normal way using key value pair
    var obj = {
                name: "Kavyakrish",
                age : 22,
                gender : "female"
    }

    console.log(obj) //{name: 'Kavyakrish', age: 22, gender: 'female'}

    //2.declaring then initilazing
    var obj ={} //declaring
    obj.contact = "1234566" //initiliazing
    console.log(obj) // {contact: '1234566'}


    //3. create object and assign
    var obj = new Object()
    obj.email = "kavyadeveloper918@gmail.com"
    console.log(obj) //{email: 'kavyadeveloper918@gmail.com'}


    
    //Accessing object properties -- we can use dot or square bracket notation 

    var book = {
        "name" : "secret",
        "author" : "Ronald",
        "year" : 2001
    };
    document.write(book.name +"<br>") //secret
    // or
    document.write(book["name"]+"<br>") //secret
    //looping through object properties
    for(var i in book){
        document.write(book[i]+"<br>") 
    } /**output
    secret
    Ronald
     2001 */
    

     //                                      Methods
     //1.Adding element -- in last
     console.log(book) 
     book.contact = 12345
     console.log(book) // {name: 'secret', author: 'Ronald', year: 2001, contact: 12345}


     //2.Delete -- an iteam 
     delete book.contact
     console.log(book) //{name: 'secret', author: 'Ronald', year: 2001}


     //3.Fetching 
     console.log(book.name) //   secret
     //anotherway
     console.log(book['name']) //   secret
    

     //Note: In object duplicates are not allowed, duplicate keys are not allowed

     var check = {
        name : "krish",
        age : 30,
        name : "krishanaveni"
     }
     console.log(check) //{name: 'krishanaveni', age: 30} 

     var check1 = {
        name : "krish",
        age : 30,
     }
     console.log(check1) //{name: 'krish', age: 30}
     check1.name = "kavya"
     console.log(check1) //{name: 'kavya', age: 30}
