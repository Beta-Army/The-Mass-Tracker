// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "xxxxx",
    authDomain: "themasstracker.firebaseapp.com",
    databaseURL: "https://themasstracker.firebaseio.com",
    projectId: "themasstracker",
    storageBucket: "themasstracker.appspot.com",
    messagingSenderId: "383038531913",
    appId: "1:383038531913:web:4361a9f73608f81ef25298"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let message = document.querySelector("#message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message
  });
}
