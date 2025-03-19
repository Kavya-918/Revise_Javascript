//                                              STRINGS
/*A string is a sequences of leter, numbers, special character and arithmetic values or combination of all
created with singel quote or double quote
Incase, if you want to come output with double quote use special character
eg: var s1 = "This \"is\" String"  */

//Ways to create string
//1st way
 var s1 = "This \"is\" String" 
 console.log(s1)//This "is" String
  //2nd way
 var s2 = 'kavya' 
 console.log(s1) //This "is" String
 //3rd way
 var s3 = `kavyakrish`
 console.log(s3) //kavyakrish
 //4th way
 var s4 = new String("Kavya_Jimin")
 console.log(s4)//String {'Kavya_Jimin'}

 //Note: creating string by using constructor always objects will be differently you get false only
 var s5 = new String("Jimin")
 var s6 = new String("Jimin")
 console.log(s5 == s6) //false
 //normal approach
  var s7 = "kav"
  var s8 = "kav"
  console.log(s7 ==s8) //true

  //                            Methods
  var s9 = "This is String javascript"
  console.log(s9.toLowerCase())//this is string javascript
  console.log(s9.toUpperCase())//THIS IS STRING JAVASCRIPT
  console.log(s9.includes("is"))//true
  console.log(s9.slice(2,7))//is is
  console.log(s9.charAt(2))//i
  console.log(s9.replace("is","IS"))//ThIS is String javascript
  console.log(s9.search("is"))//2
  console.log(s9.trim())//This is String javascript
  console.log(s9.repeat(2))//This is String javascriptThis is String javascript

  //note using strig $$ cannot change this nd all
  console.log(s9.replace("IS", "$$"))//This is String javascript
  //use regular expression and replace
  console.log(s9.replace(/IS/i,"$$")) //Th$ is String javascript
