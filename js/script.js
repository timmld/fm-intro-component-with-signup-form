const claimBtn = document.querySelector(".l-form__submit");

const firstNameInput = document.querySelector(".l-form__input-first-name");
const lastNameInput = document.querySelector(".l-form__input-last-name");
const emailInput = document.querySelector(".l-form__input-email");
const passwordInput = document.querySelector(".l-form__input-password");

const firstNameError = document.querySelector(".l-form__error-first-name");
const lastNameError = document.querySelector(".l-form__error-last-name");
const emailError = document.querySelector(".l-form__error-email");
const passwordError = document.querySelector(".l-form__error-password");

function isValid(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    } else {
        return false;
    };
};

claimBtn.addEventListener('click', () => {
    // First Name
    if (firstNameInput.value === "") {
        firstNameInput.classList.add("l-form__input--error");
        firstNameError.textContent = "First Name cannot be empty";
    } else {
        firstNameInput.classList.remove("l-form__input--error");
        firstNameError.textContent = "";
    }

    // Last Name
    if (lastNameInput.value === "") {
        lastNameInput.classList.add("l-form__input--error");
        lastNameError.textContent = "Last Name cannot be empty";
    } else {
        lastNameInput.classList.remove("l-form__input--error");
        lastNameError.textContent = "";
    }

    // Email
    if (emailInput.value === "") {
        emailInput.classList.add("l-form__input--error");
        emailError.textContent = "Email Address cannot be empty";
    } else if (!isValid(emailInput.value)) {
        emailInput.classList.add("l-form__input--error");
        emailError.textContent = "Looks like this is not an email";
    } else {
        emailInput.classList.remove("l-form__input--error");
        emailError.textContent = "";
    }

    // Password
    if (passwordInput.value === "") {
        passwordInput.classList.add("l-form__input--error");
        passwordError.textContent = "Password cannot be empty";
    } else {
        passwordInput.classList.remove("l-form__input--error");
        passwordError.textContent = "";
    }
});