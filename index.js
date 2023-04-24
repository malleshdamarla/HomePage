const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const togglePasswordButton = document.querySelector(".toggle-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePasswordButton.innerHTML = '<ion-icon name="eye"></ion-icon></i>';
    } else if (passwordInput.type === "text") {
        passwordInput.type = "password";
        togglePasswordButton.innerHTML = '<ion-icon name="eye-off"></ion-icon>';
    } else {
        passwordInput.type = "password";
        togglePasswordButton.innerHTML = '<ion-icon name="eye"></ion-icon>';
    }
}

function togglePasswordVisibility1() {
    const passwordInput1 = document.getElementById("password1");
    const togglePasswordButton1 = document.querySelector(".toggle-password1");

    if (passwordInput1.type === "password1") {
        passwordInput1.type = "text";
        togglePasswordButton1.innerHTML = '<ion-icon name="eye"></ion-icon></i>';
    } else if (passwordInput1.type === "text") {
        passwordInput1.type = "password1";
        togglePasswordButton1.innerHTML = '<ion-icon name="eye-off"></ion-icon>';
    } else {
        passwordInput1.type = "password1";
        togglePasswordButton1.innerHTML = '<ion-icon name="eye"></ion-icon>';
    }
}




function toggleLogin() {
    var x = document.getElementById('baby');
    var y = document.getElementsByClassName('btnn');

    if (y) {
        alert("hello")
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }

}

// function toggleLogin1() {
//     var x = document.getElementById('baby');
//     var y = document.getElementsByClassName('btnn');

//     if (y) {
//         alert("hello")
//         x.style.display = 'block';
//     } else {
//         x.style.display = 'none';
//     }

// }












