function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateSignUpInputCredentials() {
    var username = document.getElementById("name").value;
    var email = document.getElementById("email_address").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirm_password").value;

    var nameErr = emailErr = passwordErr = confirm_passwordErr = true;

    if (username === "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[A-Za-z]+$/;
        if (regex.test(username) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    if (email === "") {
        printError("emailErr", "Please enter your email address");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    if (password === "") {
        printError("passwordErr", "Please enter your password");
    } else {
        printError("passwordErr", "");
        passwordErr = false;
    }

    if (confirmpassword === "") {
        printError("confirm_passwordErr", "Please confirm your password"); // Corrected ID here
    } else {
        printError("confirm_passwordErr", ""); // Corrected ID here
        confirm_passwordErr = false;
    }

    if ((nameErr || emailErr || passwordErr || confirm_passwordErr) === true) {
        return false;
    } else {
        return true;
    }
}

function validateLoginInputCredentials(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let emailErr = passwordErr = true;

    if (email === "") {
        printError("emailErr", "Please enter your email address");
    } else {
        const regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    if (password === "") {
        printError("passwordErr", "Please enter your password");
    } else {
        printError("passwordErr", "");
        passwordErr = false;
    }

    if (emailErr || passwordErr) {
        return false;
    } else {
        return true;
    }
}
