//code to validate firstname and phonenumber field form validation

//form.html
  
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form validation</title>
    <!--bootstrap cdn link-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
    <script src="forms.js"></script>
</head>
<body>

    <form action =" " onsubmit="return validate()">
        <label for=fname">FirstName</label>
        <span style="color: red;">*</span>
        <input type="text" id="fname" class="form-control">
        <span id="fmsg" style="color: red;"></span>
        <br>

        <label for="flame">LastName</label>
        <span style="color: red;">*</span>
        <input type="text" id="flame" class="form-control">
        <br>  

        <label for="phone">PhoneNumber</label>
        <span style="color: red;">*</span>
        <input type="text" id="phone" class="form-control">
        <span id="pmsg" style="color: red;"></span>
        <br>  
        <input type="submit" class="btn btn-primary">
        
    </form>
    
</body>
</html>





 //form.js

/**function validate(){
    //documentgetelementby id used to collect value from html
    var fn = document.getElementById("fname").value;
   
    var fp =/^[A-Za-z]+$/
    if(fn == ""){
        document.getElementById("fmsg").innerText="FirstName should not be Empty";
        //to check for other condition also put return false
        return false;
    }
    //check for pattern
    if(fn.match(fp))
        true;
        else{
            Document.getElementById("fmsg").innerText="First name sould only contain characters";
            return false;
        }

    
}**/
function validate() {
    var fn = document.getElementById("fname").value;
    var pn = document.getElementById("phone").value;
    var fp = /^[A-Za-z]+$/;
    var pp = /^[6-9][0-9]{9}$/;  

    if (fn == "") {
        document.getElementById("fmsg").innerText = "First Name should not be empty";
        return false;
    } else if (!fn.match(fp)) {
        document.getElementById("fmsg").innerText = "First name should only contain characters";
        return false;
    } else if (fn.length < 3) {
        document.getElementById("fmsg").innerText = "First name should contain more than 3 characters";
        return false;
    } else if (fn.length > 8) {
        document.getElementById("fmsg").innerText = "First name should not be more than 8 characters";
        return false;
    } else {
        document.getElementById("fmsg").innerText = ""; // Clear error if no issues
    }

    if (pn == "") {
        document.getElementById("pmsg").innerText = "Phone number should not be empty";
        return false;
    } else if (!pn.match(pp)) {
        document.getElementById("pmsg").innerText = "Phone number must be exactly 10 digits and start with 6-9";
        return false;
    } else {
        document.getElementById("pmsg").innerText = ""; // Clear error if no issues
    }

    return true; // Only return true if all validations pass
}
