function createAccount(){
    let pass = document.getElementById("password").value;

    console.log("You enter the email: " + email);
    console.log("You enter the password: " + pass);

    if (email==="ronrontrambulo15@gmail.com"){
        console.log("Your email is correct.");
   if (email === correctEmail && password === correctPassword) {
                messageElement.textContent = "Your email and password is correct!";
                messageElement.className = "message success";
            } else if (email === correctEmail && password !== correctPassword) {
                messageElement.textContent = "Your password is incorrect";
                messageElement.className = "message error";
            } else if (email !== correctEmail && password === correctPassword) {
                messageElement.textContent = "Your email is incorrect";
                messageElement.className = "message warning";
            } else {
                messageElement.textContent = "Your email and password is incorrect";
                messageElement.className = "message error";

        
        

    }   
    


}