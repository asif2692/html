import { auth } from "./firbase.mjs";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


var NewAccount= document.getElementById('createAccount')

NewAccount.addEventListener('click',()=>{


    var Email = document.getElementById('form3Example3c').value
    var password = document.getElementById('form3Example4c').value

    console.log(Email,password);

    createUserWithEmailAndPassword(auth, Email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("user Name ",user);

    alert("Your account has been registered")
   window.location.href= './index.html';
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
    // ..
  });

})
