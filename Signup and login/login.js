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

        alert('well Come')
        window.location.href="https://asif2692.github.io/html/"
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorCode,errorMessage)

})

})
