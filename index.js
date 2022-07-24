const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const error = document.querySelectorAll(".error");
const errorMessage = document.getElementById("errorMessage");
const form = document.getElementById("form");

error.forEach((e) => {
  e.classList.toggle("error", false);
});

form.addEventListener("submit", (e) => {
  if (password.value != confirmPassword.value) {
    errorMessage.textContent = "Password's do not match";
    error.forEach((e) => {
      e.classList.toggle("error", true);
    });
    e.preventDefault();
  } else if (password.value === confirmPassword.value) {
    errorMessage.textContent = "";
    error.forEach((e) => {
      e.classList.toggle("error", false);
    });
  }
});
