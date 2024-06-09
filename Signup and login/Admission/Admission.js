
import { db } from "./firbase.mjs";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


document.getElementById('Submit').addEventListener('click', async function() {
  if (validateForm()) {
    let Firstname = document.getElementById('Firstname').value;
    let Lastname = document.getElementById('Lastname').value;
    let Fathername = document.getElementById('Fathername').value;
    let MobileNumber = document.getElementById('MobileNumber').value;
    let age = document.getElementById('age').value;
    let Address = document.getElementById('Address').value;
    let Email = document.getElementById('Email').value;
    let Gender = document.getElementById('Gender').value;
    let country = document.getElementById('country').value;
    let city = document.getElementById('City').value;
    let cnicInput = document.getElementById('cnic');
    let cnic = cnicInput.value.trim();
    if (cnic && cnic.length === 13) {
      cnic = cnic.replace(/(\d{5})(\d{7})(\d{1})/, "$1-$2-$3");
      cnicInput.value = cnic;
    }

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

    Swal.fire({
      title: 'Confirm Your Details',
      html: `
        <p>Firstname: ${Firstname}</p>
        <p>Lastname: ${Lastname}</p>
        <p>Fathername: ${Fathername}</p>
        <p>MobileNumber: ${MobileNumber}</p>
        <p>CNIC: ${cnic}</p>
        <p>Age: ${age}</p>
        <p>Address: ${Address}</p>
        <p>Email: ${Email}</p>
        <p>Gender: ${Gender}</p>
        <p>Country: ${country}</p>
        <p>City: ${city}</p>
        <p>Courses: ${courses.join(', ')}</p>
      `,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Edit'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const docRef = await addDoc(collection(db, "Admission"), {
            ...StudentDetails,
          });
          clearForm();

          Swal.fire({
            title: "Success!",
            text: "Form Submitted Successfully.",
            icon: "success",
          });
window.location.href="Report.html"
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);

          Swal.fire({
            title: "Error!",
            text: "Form not Submitted",
            icon: "error"
          });
        }
      }
    });
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
    Swal.fire({
      title: "Father's Name?",
      text: "Father's name is required.",
      icon: "warning"
    });
    document.getElementById('Fathername').focus();
    return false;
  }

  if (!MobileNumber || MobileNumber.length !== 11) {
    Swal.fire({
      title: "Valid mobile number?",
      text: "Mobile number is required (11 digits).",
      icon: "warning"
    });
    document.getElementById('MobileNumber').focus();
    return false;
  }

  if (!cnic || cnic.replace(/-/g, '').length !== 13) {
    Swal.fire({
      title: "Valid CNIC number?",
      text: "CNIC number is required (13 digits with hyphens).",
      icon: "warning"
    });
    document.getElementById('cnic').focus();
    return false;
  }
  

  if (!age || age <= 10) {
    Swal.fire({
      title: "Valid age?",
      text: "Age required minimum 10 years.",
      icon: "warning"
    });
    document.getElementById('age').focus();
    return false;
  }

  if (!country) {
    Swal.fire({
      title: "Country?",
      text: "Country is required.",
      icon: "warning"
    });
    document.getElementById('country').focus();
    return false;
  }

  if (!city) {
    Swal.fire({
      title: "City?",
      text: "City is required.",
      icon: "warning"
    });
    document.getElementById('City').focus();
    return false;
  }

  if (!Address) {
    Swal.fire({
      title: "Address?",
      text: "Address is required.",
      icon: "warning"
    });
    document.getElementById('Address').focus();
    return false;
  }

  if (!Gender) {
    Swal.fire({
      title: "Gender?",
      text: "Gender is required.",
      icon: "warning"
    });
    document.getElementById('Gender').focus();
    return false;
  }

  if (!Email || !validateEmail(Email)) {
    Swal.fire({
      title: "Valid Email?",
      text: "Email is required.",
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
