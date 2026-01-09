let email = document.querySelector('#email');
let password = document.querySelector('#password');
let form = document.querySelector('#loginForm');
let resultMessage = document.querySelector('.resultmessage');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    document.querySelector('#emailError').textContent = "";
    document.querySelector('#passwordError').textContent = "";

    document.querySelector('#emailError').style.display = "none";
    document.querySelector('#passwordError').style.display = "none";
    resultMessage.style.display = "none";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let isValid = true;

    if (!emailRegex.test(email.value)) {
        document.querySelector('#emailError').textContent =
            "Please enter a valid email address.";
        document.querySelector('#emailError').style.display = "block";
        isValid = false;
    }

    if (!passwordRegex.test(password.value)) {
        document.querySelector('#passwordError').textContent =
            "Password must be at least 8 characters with uppercase, lowercase, number and symbol.";
        document.querySelector('#passwordError').style.display = "block";
        isValid = false;
    }

    if (isValid) {
        resultMessage.textContent = "Login Successful!";
        resultMessage.style.display = "block";
    }
});
