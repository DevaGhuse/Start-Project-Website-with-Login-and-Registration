document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".wrapper");
    const loginBtn = document.querySelector(".btnLogin-popup");
    const closeBtn = document.querySelector(".icon-close");
    const loginForm = document.querySelector(".form-box.login");
    const registerForm = document.querySelector(".form-box.register");
    const registerLink = document.querySelector(".register-link");
    const loginLink = document.querySelector(".login-link");

    loginBtn.addEventListener("click", () => {
        wrapper.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        wrapper.classList.remove("active");
    });

    registerLink.addEventListener("click", () => {
        loginForm.classList.remove("active");
        registerForm.classList.add("active");
    });

    loginLink.addEventListener("click", () => {
        registerForm.classList.remove("active");
        loginForm.classList.add("active");
    });
});
