function validateForm(){
    let email = document.getElementById("email").value;
    let pwd = document.getElementById("pwd").value;
    let regex = /^\w[\w\.-]+\w@[A-Za-z0-9][A-Za-z0-9-]+[A-Za-z0-9]\.[a-z]{2,3}(\.[a-z]{2,3})?$/;
    if (regex.test(email)){
        return true;
    } else{
        alert("Email invalid");
        return false;
    }
}