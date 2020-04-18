function mail(){
    let email = document.getElementById("email").value;
    let regex1 = /^\w[\w\.-]+\w@[A-Za-z0-9][A-Za-z0-9-]+[A-Za-z0-9]\.[a-z]{2,3}(\.[a-z]{2,3})?$/;
    if (regex1.test(email)) {
        return phone();
    } else {
        alert("Enter valid email address");
        return false;
    }
}

function phone() {
    let phoneno = document.getElementById("phone").value;
    let regex2 = /^\d{10}$|^\d{3} \d{3} \d{4}$|^\d{3}-\d{3}-\d{4}$|^\d{3}\.\d{3}\.\d{4}$/;
    if (regex2.test(phoneno)) {
        return pwd();
    } else {
        alert("Enter valid phone number");
        return false;
    }
}

function pwd(){
    let pwd = document.getElementById("pwd").value;
    let cpwd = document.getElementById("cpwd").value;
    let regex3 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; 
    if (regex3.test(pwd)) {
        if (pwd == cpwd) {
            return true;
        } else {
            alert("Passwords do not match");
            return false;
        }
    } else {
        alert("Invalid password\n\nNote: Your password must contain atleast eight characters and include an uppercase letter, a lowercase letter and a number");
        // alert("Invalid password\n\nYour password must contain the following:\n1. atleast 8 characters\n2. an uppercase letter\n3. a lowercase letter\n4. a number");
        return false
    }
}