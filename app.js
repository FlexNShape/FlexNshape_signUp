//Selecting elements
const signUpForm = document.getElementById("sign-up-form");
const loginForm = document.getElementById("login-form");
const signUpBtn = document.getElementById("signup-btn");
const loginBtn = document.getElementById("login-btn");
const btnsignup = document.getElementById("signup");
const usrname = document.getElementById("user-name");

// Show Sign Up Form
signUpBtn.addEventListener('click', function() {
    loginForm.style.display = "none";
    signUpForm.style.display = "flex";
});

// Show Login Form
loginBtn.addEventListener('click', function() {
    loginForm.style.display = "flex";
    signUpForm.style.display = "none";
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbz3FJea-dH9SoHUhUpMGnFZ0rhI0VALMbggRAiHIOkNncKlYUE6Nw3BoqLozpELImXkBg/exec'
const form = document.forms['submit-to-google-sheet'];

// Form submission handler
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from reloading the page

    const first_name = document.getElementById("firstName").value;
    const last_name = document.getElementById("lastName").value;

    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
    .then(response => {
        console.log('Success!', response);
        alert("Thank you! for signing up");
        usrname.style.display = "block";
        usrname.innerHTML = `${first_name} ${last_name}`;
        usrname.style.color = "#e0d7f0";
        btnsignup.style.display = "none";
        form.reset(); // Reset the form after submission
    })
    .catch(error => console.error('Error!', error.message));
});