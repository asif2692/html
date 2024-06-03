import { auth ,db} from "./firbase.mjs";
import { createUserWithEmailAndPassword,sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { collection, addDoc  } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-Firestore.js";


var NewAccount= document.getElementById('createAccount')

NewAccount.addEventListener('click',()=>{


    var Email = document.getElementById('form3Example3c').value
    var password = document.getElementById('form3Example4c').value
    var name = document.getElementById('form3Example1c').value

    console.log(Email,password);

    let userData= {
      name:name,
      Email:Email,
      password:password
    }

    createUserWithEmailAndPassword(auth, userData.Email,userData.password)
  .then(async(userCredential) => {
    // Signed up 
    const user = userCredential.user;
           
    try {
      const docRef = await addDoc(collection(db, "users"), {
      ...userData,
      uid:user.uid
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
   

    sendEmailVerification(auth.currentUser)
    .then(() => {
      // Email verification sent!
      alert('Your account has been registered Chak Email and Verified..')
      // ...
    });

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
