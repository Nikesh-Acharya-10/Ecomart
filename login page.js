document.getElementById("loginForm").addEventListener("submit", function (e) {// Handle form submission
    e.preventDefault();
    // Prevent default form submission behavior
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    emailError.textContent = "";
    passwordError.textContent = "";
    // Clear previous error messages
    let isValid = true;
    // Email validation
    if (email === "") {// Check if email is empty
        emailError.textContent = "Email is required.";
        isValid = false;
        alert("Email is placeholder is blank!");// Alert if email is not filled
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = "Enter a valid email address.";
        isValid = false;
    }// Validate email format

    // Password validation
    if (password === "") {// Check if password is empty
        passwordError.textContent = "Password is required.";
        isValid = false;
        alert("Password not filled");
    } else if (password.length < 6) {// Check password length
        passwordError.textContent = "Password must be at least 6 characters.";
        isValid = false;
    }
    // Validate password length
    if (isValid) {
        alert("Login Successful!");// Alert on successful validation

    }
});
