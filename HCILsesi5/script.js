let form = document.getElementById('register');
form.addEventListener('submit', function(event) { 
    event.preventDefault(); 
    let username = document.getElementById("inputUsername");
    let password = document.getElementById("inputPassword");
    let confirmPassword = document.getElementById("inputConfirmPassword");
    let email = document.getElementById("inputEmail");
    let phone = document.getElementById("inputPhone");

    if (username.value == "" || password.value == "" || confirmPassword.value == "" || email.value == "" || phone.value == "") {
        alert("Please fill all fields!");
    }
    else if (password.value != confirmPassword.value) {
        alert("Passwords do not match!");
    }
    else if (!email.value.endsWith("@gmail.com")) {
        alert("Invalid email address!");
    }
    else if (!checkPhone(phone.value)) {
        alert("Invalid phone number!");
    }
    else {
        alert("Registration successful!");
    }
});

function checkPhone(phone){
    for (let i = 0; i < phone.length; i++){
        if (isNaN(phone[i])){
            return false;
        }
    }
    return true;
}