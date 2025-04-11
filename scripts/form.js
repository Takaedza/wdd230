// Password checker to ensure it is the same as the one in the input field
// In form.js
const pwd1 = document.querySelector("#password");
const pwd2 = document.querySelector("#password2");
const pwdError = document.querySelector("#password-error");

function checkSame() {
    // Reset styles and messages
    pwdError.textContent = "";
    pwd2.classList.remove("password-input-error");
    
    if (pwd1.value !== pwd2.value) {
        pwdError.textContent = "❗Passwords do not match!";
        pwd2.classList.add("password-input-error");
        pwd2.value = "";
        pwd2.focus();
    }
}

// email validation
const emailInput = document.querySelector("#email");
const emailError = document.createElement("span");
emailError.className = "email-error";
emailInput.parentNode.appendChild(emailError);

emailInput.addEventListener("input", validateEmail);

function validateEmail() {
  const allowedDomain = "byui.edu";
  const email = emailInput.value.trim();
  const domain = email.split("@")[1] || "";

  emailError.textContent = "";
  emailInput.classList.remove("invalid-email");

  if (email && !domain.toLowerCase().endsWith(allowedDomain)) {
    emailError.textContent = "❗ Only @byui.edu emails are allowed";
    emailInput.classList.add("invalid-email");
  }
}

// Event listener remains the same
pwd2.addEventListener("focusout", checkSame);

//range field for the page rating
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rate");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}



