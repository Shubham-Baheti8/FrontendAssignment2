// Select the elements
const form = document.querySelector(".login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const togglePasswordBtn = document.getElementById("togglePassword");
const emailErrorText = "Please enter a valid email address.";

// Form validation
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = emailInput.value?.trim(); // Safely access and trim the email value
  const password = passwordInput.value?.trim(); 

  const emailError = document.getElementById("email-error");
  if (!email || !validateEmail(email)) {
    emailError.textContent = emailErrorText;
    emailError.style.display = "block";
    return;
  } else {
    emailError.textContent = "";
    emailError.style.display = "none";
  }

  if (!password) {
    alert("Password cannot be empty.");
    return;
  }

  alert("Login successful!");
});

// Email format validation
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Toggle password visibility
togglePasswordBtn.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  togglePasswordBtn.textContent = type === "password" ? "👁️" : "🙈";
});
