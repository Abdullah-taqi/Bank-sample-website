let btnLogin = document.getElementById("login");
let btnSignUp = document.getElementById("signup");

let signIn = document.querySelector(".signin");
let signUp = document.querySelector(".signup");

btnLogin.onclick = function(){
    signIn.classList.add("active");
    signUp.classList.add("inActive");
}

btnSignUp.onclick = function(){
   signIn.classList.remove("active");
   signUp.classList.remove("inActive");
}
var username
var email
var password
var si_email
var si_password

// document.getElementById("signup_btn").addEventListener("click", function(){
//     username = document.getElementById("username").value;
//     email = document.getElementById("email").value;
//     password = document.getElementById("password").value;
//     alert("Sign up successful");
// });

document.getElementById("create_account").addEventListener("click", function(){
    alert("sdfghj");
});

function validate(){
    si_email = document.getElementById("si_email").value;
    si_password = document.getElementById("si_password").value;

    if(si_email == "admin@gmail.com" && si_password == "123xyz"){
        window.location.href = "home.html";
    }else{
        alert("Incorrect Id or Password");
    }
}
function accNo(){
    var date = document.getElementById("date").value;
    var number = (Math.random()+' ').substring(2,10)+(Math.random()+' ').substring(2,10);
    //document.getElementById("acc_no").value = number;
    alert("Account created successfully on "+date+". Your account number is : "+ number);
   
}
function transaction_id(){
    var number = (Math.random()+' ').substring(8,10)+"-"+(Math.random()+' ').substring(7,10);
    //document.getElementById("acc_no").value = number;
    alert("Your transaction id is : A"+ number+"-BNK-XYZ");
    
}

function withdraw(){
    var accno_wd = document.getElementById("accno_wd").value;
    var pin_wd = document.getElementById("pin_wd").value;
    var amount = document.getElementById("amount").value;
    // var date = document.getElementById("date").value;
    var number = "TXN-"+(Math.random()+' ').substring(8,10)+"-"+(Math.random()+' ').substring(7,10)+"-"+amount;

    if(accno_wd == "1234567890123456" && pin_wd =="1234"){
        alert("Transaction successful of Rs. "+amount+" on "+curday('/')+ ", Transaction id is "+number);
    }else{
        alert("Incorrect Acc no. or pin")
    }

}

function curday(sp){
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //As January is 0.
    var yyyy = today.getFullYear();
    
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (mm+sp+dd+sp+yyyy);
    };
    
// document.getElementById("accNo").addEventListener("click", function(){
//     var number = (Math.random()+' ').substring(2,10)+(Math.random()+' ').substring(2,10);
//     alert(number);
//     //

// });