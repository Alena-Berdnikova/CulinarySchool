document.addEventListener("DOMContentLoaded", function () {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const tel = document.getElementById("tel");
  const password = document.getElementById("password");
  const classes = document.getElementById("classes");
  const terms = document.getElementById("terms");
  const submitButton = document.getElementById("signup-btn");
  const form = document.getElementById("signupForm");

  name.addEventListener("blur", () => isValidName(name));
  email.addEventListener("blur", () => isValidEmail(email));
  tel.addEventListener("blur", () => isValidTel(tel));
  password.addEventListener("blur", () => isValidPassword(password));
  
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
      let inputs = new Array(name, email, tel, password);
      for(let input of inputs){
        if(input.value===null||input.value===""){
          setError(input, "Please fill in the information");
        }
      }
      if (
      isValidName(name) &&
      isValidEmail(email) &&
      isValidTel(tel) &&
      isValidPassword(password) &&
      isValidClass(classes) &&
      terms.checked
    ) {
      form.submit();
    } else {
      if (!terms.checked) {
        alert("Please agree to the terms and conditions.");
      }
    }
  });

  function isValidName(name) {
    const reg = /^[a-zA-Z ]+$/;
    const nameValue = name.value.trim();
    if (nameValue === "") {
      return setError(name, "Name is required");
    } else if (!reg.test(nameValue)) {
      return setError(name, "Provide a valid name");
    } else {
      return setSuccess(name);
    }
  }

  function isValidEmail(email) {
    const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailValue = email.value.trim();
    if (emailValue === "") {
      return setError(email, "Email is required");
    } else if (!reg.test(emailValue.toLowerCase())) {
      return setError(email, "Provide a valid email address");
    } else {
      return setSuccess(email);
    }
  }

  function isValidTel(tel) {
    const reg = /^\+?[1-9]\d{9,14}$/;
    const telValue = tel.value.trim();
    if (telValue === "") {
      return setError(tel, "Phone number is required");
    } else if (!reg.test(telValue)) {
      return setError(tel, "Provide a valid phone number");
    } else {
      return setSuccess(tel);
    }
  }

  function isValidPassword(password) {
    const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const passwordValue = password.value.trim();
    if (passwordValue === "") {
      return setError(password, "Password is required");
    } else if (!reg.test(passwordValue)) {
      return setError(password, "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.");
    } else {
      return setSuccess(password);
    }
  }

  function isValidClass(classes) {
    const classValue = classes.value;
    if (classValue === "") {
      return setError(classes, "Class selection is required");
    } else {
      return setSuccess(classes);
    }
  }

  function setError(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
    return false;
  }

  function setSuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
    return true;
  }
});
