import { db } from "./firbase.mjs";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

let dataButton = document.getElementById('data');
let tableBody = document.querySelector('#table-data tbody');

dataButton.addEventListener('click', async function () {
  const querySnapshot = await getDocs(collection(db, "Admission"));
  querySnapshot.forEach((doc) => {
    let dataGet = doc.data();
    console.log(dataGet);

    let newRow = `
      <tr>
        <td data-th="First name">${dataGet.Firstname}</td>
        <td data-th="Last name">${dataGet.Lastname}</td>
        <td data-th="Father's name">${dataGet.Fathername}</td>
        <td data-th="Mobile Number">${dataGet.MobileNumber}</td>
        <td data-th="Cnic">${dataGet.cnic}</td>
        <td data-th="Age">${dataGet.age}</td>
        <td data-th="Address">${dataGet.Address}</td>
        <td data-th="Gender">${dataGet.Gender}</td>
        <td data-th="Country">${dataGet.country}</td>
        <td data-th="City">${dataGet.city}</td>
        <td data-th="Course">${dataGet.courses}</td>
        <td data-th="Email ID">${dataGet.Email}</td>      
      </tr>`;

    tableBody.innerHTML += newRow;
  });
});
