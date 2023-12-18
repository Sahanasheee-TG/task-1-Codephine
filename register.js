function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(localStorage.getItem(username)) {
        document.getElementById("usernameError").innerHTML = "Username already Exists...!";
        return false;
    } else {
        document.getElementById("usernameError").innerHTML = "";
    }
    localStorage.setItem(username, JSON.stringify({ username, email, password}));

    alert("Registration Successfull");
    return true;
    
}