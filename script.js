
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(app);


document.getElementById("registrationForm").addEventListener("submit", (e) => {
  e.preventDefault();

  
  const data = {
    athleteName: `${document.getElementById("firstName").value} ${document.getElementById("lastName").value}`,
    birthDate: document.getElementById("birthDate").value,
    grade: document.getElementById("grade").value,
    gender: document.querySelector('input[name="gender"]:checked').value,
    address: {
      line1: document.getElementById("addressLine1").value,
      line2: document.getElementById("addressLine2").value,
      city: document.getElementById("city").value,
      region: document.getElementById("region").value,
      zip: document.getElementById("zipCode").value,
      country: document.getElementById("country").value
    },
    guardian: {
      name: `${document.getElementById("guardianFirstName").value} ${document.getElementById("guardianLastName").value}`,
      homePhone: document.getElementById("guardianHomePhone").value,
      mobilePhone: document.getElementById("guardianMobilePhone").value,
      email: document.getElementById("guardianEmail").value
    },
    emergencyContact: {
      name: `${document.getElementById("emergencyContactFirstName").value} ${document.getElementById("emergencyContactLastName").value}`,
      phone1: document.getElementById("emergencyPhone1").value,
      phone2: document.getElementById("emergencyPhone2").value,
    },
    medicalConditions: document.getElementById("medicalConditions").value
  };

  
});