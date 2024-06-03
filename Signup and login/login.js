import { auth } from "./firbase.mjs";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


var AccountLogin= document.getElementById('AccountLogin')

AccountLogin.addEventListener('click',()=>{


    var Email = document.getElementById('form3Example3c').value
    var password = document.getElementById('form3Example4c').value

    console.log(Email,password);

  
    signInWithEmailAndPassword(auth, Email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        
        console.log(user);
        if(user.emailVerified == true){
          alert('well Come')
          window.location.href='Dashbord.html'
          
        }
           else
        {
          alert('Please Email verifcation')
        }

     })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorCode,errorMessage)

})

})
