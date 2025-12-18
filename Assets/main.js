function personalData(){
    /*User inputs Full name of not less than 3 characters*/
    let fullName = prompt("Enter Full Name:")


    if (fullName.length < 3){
        alert("Please input your Full-Name")
        return;
    }

     /*User inputs valid Email address*/
    let emailAddress = prompt("Enter Valid Email Address:")
    if (!emailAddress.includes("@")) {
        alert("Invalid Email Address")
        return;
    }
 
    /*User inputs password not less than 4 characters*/
    let passWord = prompt("Password")
    if (passWord.length <4 ){
        alert("Password is weak!")
        return;
    }

    /*Confirm password and Pawword must match*/
    let confirmPass = prompt("Confirm Password")
    if (confirmPass != passWord) {
        alert("Password does not match!")
        return;
    }

    /*User inputs age */
    let age = prompt("Enter your Age:")
    if (age < 18){
        alert("Access Denied coz you're underaged!")
        return;
    }
}
/*Activating the function*/
personalData()

/*Alert message if Successful*/
alert("Registration Successful!")