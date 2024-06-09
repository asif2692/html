import { auth } from "./firbase.mjs";
import { createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Initialize Firestore
const db = getFirestore();

var NewAccount = document.getElementById('createAccount');

NewAccount.addEventListener('click', async () => {
  var email = document.getElementById('form3Example3c').value;
  var password = document.getElementById('Password').value;
  var confirmPassword = document.getElementById('ConfomPassword').value;
  var name = document.getElementById('form3Example1c').value;

  if (password !== confirmPassword) {
    Swal.fire('Error', 'Passwords do not match!', 'error');
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await sendEmailVerification(auth.currentUser);
    Swal.fire('Success', 'Your account has been registered. Check your email to verify.', 'success');

    // Save user data to Firestore
    await setDoc(doc(db, "users", user.uid), {
      name: name,
      email: email,
      uid: user.uid
    });

    window.location.href = './index.html';
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    Swal.fire('Error', errorMessage, 'error');
    console.log(errorCode);
  }
});
