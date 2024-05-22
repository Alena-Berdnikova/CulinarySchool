document.addEventListener("DOMContentLoaded", function () {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const login = document.getElementById("login");

  email.addEventListener("blur", (e) => {
    isValidEmail(email);
  });
  password.addEventListener("blur", (e) => {
    isValidPassword(password);
  });
  login.addEventListener("click", (e) => {
    e.preventDefault();
    if (isValidEmail(email) && isValidPassword(password)) {
        document.getElementById("form").submit();
      }
  });

  const isValidEmail = (email) => {
    const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailValue = email.value.trim();
    let isEmailValid = true;

    if (emailValue === "") {
      isEmailValid = setError(email, "Email is required");
    } else if (!reg.test(String(emailValue).toLowerCase())) {
      isEmailValid = setError(email, "Provide a valid email address");
    } else {
      isEmailValid = setSuccess(email);
    }
    return isEmailValid;
  };

  const isValidPassword = (password) => {
    const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const passwordValue = password.value.trim();

    let isPasswordValid = true;

    if (passwordValue === "") {
      isPasswordValid = setError(password, "Password is required");
    } else if (!reg.test(passwordValue)) {
      isPasswordValid = setError(
        password,
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number."
      );
    } else {
      isPasswordValid = setSuccess(password);
    }
    return isPasswordValid;
  };

  const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");

    return false;
  };

  const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");

    return true;
  };
});
