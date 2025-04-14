// Select the elements
const form = document.querySelector(".login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const togglePasswordBtn = document.getElementById("togglePassword");

// Form validation
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!password) {
    alert("Password cannot be empty.");
    return;
  }

  alert("Login successful! (This is a placeholder)");
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
