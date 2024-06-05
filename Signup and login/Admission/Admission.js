import { db} from "./firbase.mjs";
import { collection, addDoc} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


document.getElementById('Submit').addEventListener('click', async function() {
  let Firstname = document.getElementById('Firstname').value;
  let Lastname = document.getElementById('Lastname').value;
  let Fathername = document.getElementById('Fathername').value;
  let MobileNumber = document.getElementById('MobileNumber').value;
  let cnic = document.getElementById('cnic').value;
  let age = document.getElementById('age').value;
  let Address = document.getElementById('Address').value;
  let Email = document.getElementById('Email').value;

  let Gender = document.getElementsByName('Gender');
  let Gender_value;
  for (let i = 0; i < Gender.length; i++) {
    if (Gender[i].checked) {
      Gender_value = Gender[i].value;
      break; // Once the value is found, exit the loop
    }
  }

  // Check if Gender_value is undefined, if so, alert the user and return
  if (Gender_value === undefined) {
    alert('Please select a gender');
    return;
  }

  let country = document.getElementById('country');
  let selectedCountry = country.options[country.selectedIndex].value;

  let city = document.getElementById('City');
  let selectedCity = city.options[city.selectedIndex].value;

  // Get selected courses
  let courses = [];
  let courseCheckboxes = ['Frontend', 'Backend', 'Database', 'FSD'];
  courseCheckboxes.forEach(function(id) {
    let checkbox = document.getElementById(id);
    if (checkbox.checked) {
      courses.push(checkbox.value);
    }
  });

  let StudentDetaile = {
    Firstname: Firstname,
    Lastname: Lastname,
    Fathername: Fathername,
    MobileNumber: MobileNumber,
    cnic: cnic,
    age: age,
    Address: Address,
    Email: Email,
    Gender: Gender_value,
    country: selectedCountry,
    city: selectedCity,
    courses: courses
  };

  console.log(StudentDetaile);
  try {
    const docRef = await addDoc(collection(db, "Admission"), {
      ...StudentDetaile,
    });
    // Clear the form fields after successful submission
    clearForm();
    alert('Form Submitted Successfully');
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  } 
});


let btnClear = document.getElementById("ResetAll");
btnClear.onclick = clearForm;
// Function to clear form fields
function clearForm() {
  document.getElementById('Firstname').value = '';
  document.getElementById('Lastname').value = '';
  document.getElementById('Fathername').value = '';
  document.getElementById('MobileNumber').value = '';
  document.getElementById('cnic').value = '';
  document.getElementById('age').value = '';
  document.getElementById('Address').value = '';
  document.getElementById('Email').value = '';
  
  let Gender = document.getElementsByName('Gender');
  for (let i = 0; i < Gender.length; i++) {
    Gender[i].checked = false;
  }

  document.getElementById('country').selectedIndex = 0;
  document.getElementById('City').selectedIndex = 0;

  let courseCheckboxes = ['Frontend', 'Backend', 'Database', 'FSD'];
  courseCheckboxes.forEach(function(id) {
    document.getElementById(id).checked = false;
  });
}




