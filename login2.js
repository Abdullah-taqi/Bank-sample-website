function validate(){
    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;

    if(email == "admin@gmail.com" && password == "12345"){
        alert("Login successful");
        return false;
    }else{
        alert("Login failed");
    }
}