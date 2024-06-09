import { auth } from "./firbase.mjs";
import { signInWithEmailAndPassword,sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

var AccountLogin = document.getElementById('AccountLogin');

AccountLogin.addEventListener('click', () => {
    var Email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (!Email || !password) {
        Swal.fire('Please enter a valid Email ID and password');
        return;
    }

    console.log(Email, password);

    signInWithEmailAndPassword(auth, Email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            console.log(user);
            if (user.emailVerified == true) {
             
                window.location.href='Dashbord.html';
            } else {
                Swal.fire('Please verify your email');
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === 'auth/invalid-credential') {
                Swal.fire('Invalid Email or Password');
            } else {
                Swal.fire(`${errorCode}: ${errorMessage}`);
            }
        });
});


$(document).ready(function() {
  $("#password, #email").keyup(function(event) {
      if (event.which === 13) {
          $("#AccountLogin").click();
      }
  });
});



document.getElementById('forgotPasswordLink').addEventListener('click', () => {
  var Email = document.getElementById('email').value;

  if (!Email) {
    Swal.fire('Please enter your email to reset your password');
    return;
  }

  sendPasswordResetEmail(auth, Email)
    .then(() => {
     
      Swal.fire({
        title: "success send",
        text: "Password reset email sent!.",
        icon: "success"
      });

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Swal.fire(`${errorCode}: ${errorMessage}`);
    });
});