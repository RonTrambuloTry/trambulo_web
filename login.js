function createAccount(){
    let pass = document.getElementById("password").value;

    console.log("You enter the email: " + email);
    console.log("You enter the password: " + pass);

    if (email==="ronrontrambulo15@gmail.com"){
        console.log("Your email is correct.");
    }else{
        console.log("Your email is incorrect.");
        document.getElementById("error-msg").innerHTML = "Your email is incorrect.";

        
        

    }   
    


}