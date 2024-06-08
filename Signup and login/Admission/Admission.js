import { db} from "./firbase.mjs";
import { collection, addDoc} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";




document.getElementById('Submit').addEventListener('click', async function() {
  if (validateForm()) {
    let Firstname = document.getElementById('Firstname').value;
    let Lastname = document.getElementById('Lastname').value;
    let Fathername = document.getElementById('Fathername').value;
    let MobileNumber = document.getElementById('MobileNumber').value;
    let cnic = document.getElementById('cnic').value;
    let age = document.getElementById('age').value;
    let Address = document.getElementById('Address').value;
    let Email = document.getElementById('Email').value;
    let Gender = document.getElementById('Gender').value;
    let country = document.getElementById('country').value;
    let city = document.getElementById('City').value;

    let courses = [];
    let courseCheckboxes = ['Frontend', 'Backend', 'Database', 'FSD'];
    courseCheckboxes.forEach(function(id) {
      let checkbox = document.getElementById(id);
      if (checkbox.checked) {
        courses.push(checkbox.value);
      }
    });

    let StudentDetails = {
      Firstname: Firstname,
      Lastname: Lastname,
      Fathername: Fathername,
      MobileNumber: MobileNumber,
      cnic: cnic,
      age: age,
      Address: Address,
      Email: Email,
      Gender: Gender,
      country: country,
      city: city,
      courses: courses
    };

    console.log(StudentDetails);
    try {
      const docRef = await addDoc(collection(db, "Admission"), {
        ...StudentDetails,
      });
      clearForm();

      Swal.fire({
        title: "Successfully!",
        text: "Form Submitted Successfully",
        icon: "success"
      });
      
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
   
    }
  }
});

let btnClear = document.getElementById("ResetAll");
btnClear.onclick = clearForm;

function clearForm() {
  document.getElementById('Firstname').value = '';
  document.getElementById('Lastname').value = '';
  document.getElementById('Fathername').value = '';
  document.getElementById('MobileNumber').value = '';
  document.getElementById('cnic').value = '';
  document.getElementById('age').value = '';
  document.getElementById('Address').value = '';
  document.getElementById('Email').value = '';
  document.getElementById('Gender').selectedIndex = 0;
  document.getElementById('country').selectedIndex = 0;
  document.getElementById('City').selectedIndex = 0;

  let courseCheckboxes = ['Frontend', 'Backend', 'Database', 'FSD'];
  courseCheckboxes.forEach(function(id) {
    document.getElementById(id).checked = false;
  });
}

function validateForm() {
  let Firstname = document.getElementById('Firstname').value.trim();
  let Lastname = document.getElementById('Lastname').value.trim();
  let Fathername = document.getElementById('Fathername').value.trim();
  let MobileNumber = document.getElementById('MobileNumber').value.trim();
  let cnic = document.getElementById('cnic').value.trim();
  let age = document.getElementById('age').value.trim();
  let Address = document.getElementById('Address').value.trim();
  let Email = document.getElementById('Email').value.trim();
  let Gender = document.getElementById('Gender').value;
  let country = document.getElementById('country').value;
  let city = document.getElementById('City').value;

  if (!Firstname) {


    Swal.fire({
      title: "First Name?",
      text: "First name is required.",
      icon: "warning"
    });

    document.getElementById('Firstname').focus();
    return false;
  }

  if (!Lastname) {

    Swal.fire({
      title: "Last Name?",
      text: "Last name is required.",
      icon: "warning"
    });
    document.getElementById('Lastname').focus();
    return false;
  }

  if (!Fathername) {
    alert('Father\'s name is required.');

    Swal.fire({
      title: "Father\'s Name?",
      text: "Father\'s name is required.",
      icon: "warning"
    });
    document.getElementById('Fathername').focus();
    return false;
  }

  if (!MobileNumber || MobileNumber.length !== 11) {
    Swal.fire({
      title: "Valid mobile number?",
      text: "mobile number is required (11 digits).",
      icon: "warning"
    });
    document.getElementById('MobileNumber').focus();
    return false;
  }

  if (!cnic || cnic.length !== 13) {
    Swal.fire({
      title: "Valid CNIC number?",
      text: "CNIC number is required (13 digits).",
      icon: "warning"
    });
    document.getElementById('cnic').focus();
    return false;
  }

  if (!age || age <= 10) {
    Swal.fire({
      title: "Valid age?",
      text: "age required minimum 10y.",
      icon: "warning"
    });
    document.getElementById('age').focus();
    return false;
  }

  if (!country) {
    Swal.fire({
      title: "Country?",
      text: "Country Name is required..",
      icon: "warning"
    });
    document.getElementById('country').focus();
    return false;
  }

  if (!city) {
    Swal.fire({
      title: "City Name?",
      text: "City Name is required..",
      icon: "warning"
    });
    document.getElementById('City').focus();
    return false;
  }

  if (!Address) {
    Swal.fire({
      title: "Address?",
      text: "Address is required..",
      icon: "warning"
    });
    document.getElementById('Address').focus();
    return false;
  }

  if (!Gender) {
    Swal.fire({
      title: "Gender?",
      text: "Gender is required..",
      icon: "warning"
    });
    document.getElementById('Gender').focus();
    return false;
  }

  if (!Email || !validateEmail(Email)) {
    Swal.fire({
      title: "Valid Email?",
      text: "Email is required .",
      icon: "warning"
    });
    document.getElementById('Email').focus();
    return false;
  }

  return true;
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
  return re.test(String(email).toLowerCase());
}
