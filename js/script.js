let firstNameInput = document.querySelector('#first-name');
let lastNameInput = document.querySelector('#last-name');
let emailInput = document.querySelector('#email');
let passwordInput = document.querySelector('#password');
let submitBtn = document.querySelector('#submit-btn');
let atSignCheck = "@";

let form = document.querySelector('#form');

// Error icons
let firstNameErrorIcon = document.querySelector('#first-name-error-icon');
let lastNameErrorIcon = document.querySelector('#last-name-error-icon');
let emailErrorIcon = document.querySelector('#email-error-icon');
let passwordErrorIcon = document.querySelector('#password-error-icon');

// Error messages
let firstNameErrorMsg = document.querySelector('#first-name-error-msg');
let lastNameErrorMsg = document.querySelector('#last-name-error-msg');
let emailErrorMsg = document.querySelector('#email-error-msg');
let passwordErrorMsg = document.querySelector('#password-error-msg');

submitBtn.addEventListener("click", function (e) {
    // if ( || lastNameInput.value == "" || emailInput.value == "" || emailInput.value.includes(atSignCheck) == false || passwordInput.value == "") {
    //     console.log("Error!");
    // }

    if (firstNameInput.value == "") {
        firstNameInput.style.border = "2px solid hsl(0, 100%, 74%)";
        firstNameErrorIcon.style.display = "flex";
        firstNameErrorMsg.style.display = "block";
    } else {
        firstNameInput.style.border = "1px solid #ddd";
        firstNameErrorIcon.style.display = "none";
        firstNameErrorMsg.style.display = "none";
    }

    if (lastNameInput.value == "") {
        lastNameInput.style.border = "2px solid hsl(0, 100%, 74%)";
        lastNameErrorIcon.style.display = "flex";
        lastNameErrorMsg.style.display = "block";
    } else {
        lastNameInput.style.border = "1px solid #ddd";
        lastNameErrorIcon.style.display = "none";
        lastNameErrorMsg.style.display = "none";
    }

    if (emailInput.value == "" || emailInput.value.includes(atSignCheck) == false) {
        emailInput.style.border = "2px solid hsl(0, 100%, 74%)";
        emailErrorIcon.style.display = "flex";
        emailErrorMsg.style.display = "block";
    } else {
        emailInput.style.border = "1px solid #ddd";
        emailErrorIcon.style.display = "none";
        emailErrorMsg.style.display = "none";
    }

    if (passwordInput.value == "") {
        passwordInput.style.border = "2px solid hsl(0, 100%, 74%)";
        passwordErrorIcon.style.display = "flex";
        passwordErrorMsg.style.display = "block";
    } else {
        passwordInput.style.border = "1px solid #ddd";
        passwordErrorIcon.style.display = "none";
        passwordErrorMsg.style.display = "none";
    }

    // If all fields are properly filled out, send success message
    if (firstNameInput.value !== "" && lastNameInput.value !== "" && emailInput.value !== "" && emailInput.value.includes(atSignCheck) == true && passwordInput.value !== "") {
        submitBtn.innerHTML = "&#10003; Successfully Submitted";
        form.reset();
    }

    setTimeout(function () {
        submitBtn.innerHTML = "Claim your free trial";
    }, 2500)

    e.preventDefault();
});