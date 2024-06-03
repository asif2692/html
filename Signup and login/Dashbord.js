import { auth } from "./firbase.mjs";
import {onAuthStateChanged ,signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(uid);

      // ...
    } else {
      // User is signed out
      window.location.href='index.html';
      // ...
    }
  });

var btnlogout=document.getElementById('Sigout');

btnlogout.addEventListener('click',()=>{
    
    
    signOut(auth).then(() => {
        // Sign-out successful.

        window.location.href='index.html';
    }).catch((error) => {
        // An error happened.
    });
    
})