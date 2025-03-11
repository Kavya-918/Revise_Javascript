index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM</title>
    <script src="dommm.js" defer></script>
</head>
<body>
    <span id="sp1" class="sp1">This is first span tag</span>
    <span id="sp2" class="sp2">This is second span tag</span>
    
</body>
</html>

----------------------------------------------------------------
dommm.js

var b=document.body
b.append("Hai from js page")

//creating element
var div = document.createElement("div")
b.append(div); 

//Passing content
div.innerText = "This is a div tag"


//To invoke
var msg =document.querySelector("#sp1");
var msg1= document.getElementById("#sp2");


//To Remove
msg.remove();

//Styline using JS
msg1.style.color="red";
