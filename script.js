/* =========================================
   CAREERPATH - JAVASCRIPT
   ========================================= */


/* Login form */
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please enter your email and password.");
        return;
    }

    window.location.href="dashboard.html"

});


/* Show / hide password */
const showPassword = document.getElementById("showPassword");
const passwordInput = document.getElementById("password");

showPassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        showPassword.textContent = "◉";

    } else {

        passwordInput.type = "password";
        showPassword.textContent = "◉";

    }

});
/* Explore CareerPath */
const demoButton = document.getElementById("demoButton");

demoButton.addEventListener("click", function () {

    window.location.href = "dashboard.html";

});




/* Forgot password */
const forgotPassword = document.getElementById("forgotPassword");

forgotPassword.addEventListener("click", function (event) {

    event.preventDefault();

    alert("Password recovery will be available soon.");

});


/* Create account */
const createAccount = document.getElementById("createAccount");

createAccount.addEventListener("click", function (event) {

    event.preventDefault();

    alert("Account creation will be available soon.");

});