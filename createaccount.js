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

let pass = document.getElementById('pwd');
pass.addEventListener('keyup',function(){
    checkPassword(pass.value);
})

function checkPassword(password){
    var prog = document.getElementById('prog');
    var strengthBar = document.getElementById('strength');
    var strength = 0;
  
    if(password.match(/[a-z]+/)){
        strength += 1;
    }
  
    if(password.match(/[A-Z]+/)){
        strength += 1;
    }

    if(password.match(/[0-9]+/)){
        strength += 1;
    }
   
    if(password.length>=8){
        strength += 1;
    }
  
    switch(strength){
        case 0: strengthBar.style.width='0%';
            document.getElementById('strength1').innerText="Enter password";
            document.getElementById('strength1').style.color='gray';          
            break;
  
        case 1: strengthBar.style.width='25%';
            strengthBar.style.backgroundColor='red';
            document.getElementById('strength1').innerText="Poor";
            document.getElementById('strength1').style.color='red';
            break;
  
        case 2: strengthBar.style.width='50%';
            strengthBar.style.backgroundColor='orange';
            document.getElementById('strength1').innerText="Medium";
            document.getElementById('strength1').style.color='orange';
            break;

        case 3: strengthBar.style.width='75%';
            strengthBar.style.backgroundColor='yellow';
            document.getElementById('strength1').innerText="Good";
            document.getElementById('strength1').style.color = 'yellow';
            break;
  
        case 4: strengthBar.style.width='100%';
            strengthBar.style.backgroundColor='green';
            document.getElementById('strength1').innerText="Strong!";
            document.getElementById('strength1').style.color='green';
            break;
  
    }
}