document.addEventListener("DOMContentLoaded", () =>

eventListeners()
);


function eventListeners() {
    const loginBut = document.querySelector(".login")
    const registerBut = document.querySelector(".register")

    loginBut.addEventListener("click", loginResponsive)
    registerBut.addEventListener("click", registerResponsive)
}
function loginResponsive() {
    console.log("hola")
    const login = document.querySelector(".login")
    login.classList.add("mostrar")
    const register = document.querySelector(".register")

    if(register.classList.contains("mostrar")) {
        register.classList.remove("mostrar")
        login.classList.add("mostrar")
    }
}

function registerResponsive() {
    const login = document.querySelector(".login")
    const register = document.querySelector(".register")

    if(login.classList.contains("mostrar")) {
        login.classList.remove("mostrar")
        register.classList.add("mostrar")
    }
}
