let form = document.getElementById('register');
form.addEventListener('submit', function(event) { 
    event.preventDefault();
    let 
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