# 📝 Signup Form with Validation

A responsive signup form built using **HTML5, CSS3, and JavaScript**. This project validates user input, displays inline error messages, evaluates password strength, and prevents form submission until all fields are valid.

## ✨ Features

- 🧑 **Name Validation** — Checks that the name contains at least two characters and uses valid name characters.
- 📧 **Email Validation** — Uses a regular expression to validate the email format.
- 🔐 **Password Validation** — Requires at least 8 characters, an uppercase letter, a lowercase letter, a number, and a special symbol.
- 💪 **Password Strength Indicator** — Displays a visual indicator for password strength.
- ⚠️ **Inline Error Messages** — Shows helpful validation messages next to the relevant fields.
- ✅ **Form Submission Control** — Keeps the submit button disabled until all fields are valid.
- 📱 **Responsive Design** — Works on desktop and mobile screens.
- 🎨 **Modern UI** — Includes gradient backgrounds, smooth transitions, and interactive input styling.
- 🔄 **Real-Time Validation** — Updates validation feedback as the user types.

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Regular Expressions (Regex)

## 📂 Project Structure

```
signup-form-validation/
│
├── index.html       # Signup form structure
├── style.css        # Styling and responsive layout
├── script.js        # Validation and form logic
└── README.md        # Project documentation
```

## 🚀 Getting Started

### 1. Clone the Repository

```
git clone https://github.com/your-username/signup-form-validation.git
```

### 2. Navigate to the Project Folder

```
cd signup-form-validation
```

### 3. Run the Project

Open `index.html` in your browser.

Alternatively, open the project in Visual Studio Code and use the **Live Server** extension.

No additional libraries or installations are required.

## 📋 Form Validation Rules

### Name

- Must contain at least two characters.
- Must begin with a letter.
- Supports spaces, apostrophes, and hyphens.

### Email

- Must contain a valid email format.
- Must include an `@` symbol and a domain.
- Cannot contain spaces.

### Password

The password must satisfy all five requirements:

- At least 8 characters long.
- Contains at least one uppercase letter (`A–Z`).
- Contains at least one lowercase letter (`a–z`).
- Contains at least one number (`0–9`).
- Contains at least one special symbol (such as `!`, `@`, or `#`).

**Example of a password that meets these rules:** `Hello@123`

## 💪 Password Strength Indicator

The password strength indicator evaluates five password characteristics:

| Score | Strength  |
| ----- | --------- |
| 1/5   | Very Weak |
| 2/5   | Weak      |
| 3/5   | Fair      |
| 4/5   | Good      |
| 5/5   | Strong    |

The indicator updates dynamically as the user enters a password.

*Note: This is a basic educational strength indicator, not a comprehensive password security assessment.*

## 🧠 Concepts Practiced

This project helps practice the following JavaScript concepts:

- DOM selection and manipulation.
- Event listeners and event handling.
- Form validation and submission.
- Regular expressions.
- Conditional statements and Boolean logic.
- Dynamic CSS styling.
- Input events and real-time feedback.
- Enabling and disabling form controls.


To publish your project using GitHub Pages:

1. Push your project files to a GitHub repository.
2. Open the repository's **Settings**.
3. Navigate to **Pages**.
4. Select your deployment branch, usually `main`, and the root folder.
5. Save and wait for GitHub Pages to publish your website.

Replace the example URL above with your actual deployed URL.

## ⚠️ Important Note

This project demonstrates **client-side form validation only**. It does not create a real user account or store signup information.

For production use, implement a backend with server-side validation, secure password hashing, and appropriate account-management protections. Client-side validation alone is not sufficient for security.

## 🔮 Future Improvements

- Add a show/hide password button.
- Add a confirm password field.
- Add a password visibility toggle and accessible strength feedback.
- Integrate a backend authentication system.
- Display a dedicated success page after signup.
- Add automated validation tests.
- Improve accessibility with field-specific error associations.

## 📚 Learning Resources

- [MDN — Client-side Form Validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [MDN — Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)
- [MDN — HTML Forms](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms)

