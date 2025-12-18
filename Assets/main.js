function personalData(){
    let fullName = prompt("Enter Full Name:")


    if (fullName.length < 3){
        alert("Please input your Full-Name")
        return;
    }

    let emailAddress = prompt("Enter Valid Email Address:")
    if (!emailAddress.includes("@")) {
        alert("Invalid Email Address")
        return;
    }

    let passWord = prompt("Password")
    if (passWord.length <4 ){
        alert("Password is weak!")
        return;
    }

    let confirmPass = prompt("Confirm Password")
    if (confirmPass != passWord) {
        alert("Password does not match!")
        return;
    }

    let age = prompt("Enter your Age:")
    if (age < 18){
        alert("Access Denied coz you're underaged!")
        return;
    }
}

personalData()
alert("Registration Successful!")