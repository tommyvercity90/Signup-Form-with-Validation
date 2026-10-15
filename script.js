
const form = document.getElementById("signupForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

const submitBtn = document.getElementById("submitBtn");
const successMessage = document.getElementById("successMessage");

// Check whether the name is valid
function validateName() {
    const name = nameInput.value.trim();

    if (name.length < 2) {
        nameError.textContent =
            "Name must contain at least 2 characters.";
        return false;
    }

    if (!/^[\p{L}][\p{L}\s'-]*$/u.test(name)) {
        nameError.textContent =
            "Enter a valid name using letters only.";
        return false;
    }

    nameError.textContent = "";
    return true;
}

// Check whether the email is valid
function validateEmail() {
    const email = emailInput.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        emailError.textContent =
            "Please enter a valid email address.";
        return false;
    }

    emailError.textContent = "";
    return true;
}

// Check password requirements
function validatePassword() {
    const password = passwordInput.value;

    const hasLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[^A-Za-z0-9\s]/.test(password);

    const score = [
        hasLength,
        hasUppercase,
        hasLowercase,
        hasNumber,
        hasSymbol
    ].filter(Boolean).length;

    // Update password strength indicator
    const strengths = [
        { text: "Very weak", color: "#dc3545" },
        { text: "Weak", color: "#fd7e14" },
        { text: "Fair", color: "#e0a800" },
        { text: "Good", color: "#20a464" },
        { text: "Strong", color: "#198754" }
    ];

    if (password.length === 0) {
        strengthBar.style.width = "0";
        strengthBar.style.background = "#e5e5e5";
        strengthText.textContent = "Password strength: Not entered";
    } else {
        const strength = strengths[score - 1];

        strengthBar.style.width = (score * 20) + "%";
        strengthBar.style.background = strength.color;
        strengthText.textContent =
            "Password strength: " + strength.text;
    }

    if (password.length === 0) {
        passwordError.textContent =
            "Password is required.";
        return false;
    }

    if (!hasLength) {
        passwordError.textContent =
            "Password must contain at least 8 characters.";
        return false;
    }

    if (!hasUppercase || !hasLowercase ||
        !hasNumber || !hasSymbol) {
        passwordError.textContent =
            "Include uppercase, lowercase, a number, and a symbol.";
        return false;
    }

    passwordError.textContent = "";
    return true;
}

// Update button availability
function updateForm() {
    const nameValid = validateName();
    const emailValid = validateEmail();
    const passwordValid = validatePassword();

    submitBtn.disabled = !(
        nameValid && emailValid && passwordValid
    );
}

// Validate fields while the user types
nameInput.addEventListener("input", updateForm);
emailInput.addEventListener("input", updateForm);
passwordInput.addEventListener("input", updateForm);

// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();

    updateForm();

    if (submitBtn.disabled) {
        return;
    }

    successMessage.textContent =
        "Signup successful! Your form is valid.";

    form.reset();

    // Restore the initial password indicator
    strengthBar.style.width = "0";
    strengthBar.style.background = "#e5e5e5";
    strengthText.textContent =
        "Password strength: Not entered";

    submitBtn.disabled = true;
});
