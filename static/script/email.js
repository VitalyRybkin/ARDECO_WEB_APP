
const contactFormElement = document.querySelector('#contact-form');
const formBtnElement = document.querySelector('#submit');

window.onload = function() {
    let params = (new URL(document.location)).searchParams;
    console.log(new URL(document.location));
    contactFormElement.addEventListener("submit", (e) =>
    {
        e.preventDefault();
        formBtnElement.setAttribute("disabled", "disabled");

        const templateParams = {
            from_name: document.getElementById("user_name").value,
            message: document.getElementById("message").value,
            subject: document.getElementById("subject").value,
            organization: document.getElementById("organization").value,
            user_email: document.getElementById("user_email").value,
            phone: document.getElementById("phone").value,
        };

        if (isEmailValid(emailInput.value)) {
            emailjs.send('service_7y9iy1r', 'template_0fg5wop', templateParams).then(
                (response) => {
                    // console.log('SUCCESS!', response.status, response.text);
                    showAlert({msg: "Ваше письмо отправлено! Спасибо за обращение!", btn: "Ок!"});
                    document.getElementById("contact-form").reset();
                },
                (error) => {
                    // console.log('FAILED...', error);
                    // alert("Извините, что-то пошло не так! Попробуйте отправить запрос позже!");
                    // contactFormElement.reset();
                    // formBtnElement.removeAttribute("disabled");
                    showAlert({msg: "Извините, что-то пошло не так! Попробуйте отправить запрос позже!", btn: "Ок!"});
                    document.getElementById("contact-form").reset();
                },
            );
        } else {
            showAlert({msg: "Неправильный формат электронной почты!", btn: "Исправлюсь!"});
        }
    });
}

function showAlert(options) {
    const alertWindowEl = document.querySelector(".alert");
    alertWindowEl.style.display = "flex";
    alertWindowEl.style.flexDirection = "column";
    alertWindowEl.style.alignItems = "center";
    alertWindowEl.style.left = ((window.innerWidth - alertWindowEl.offsetWidth) / 2) / window.innerWidth * 100 + "%";
    const closeAlertBtn = document.querySelector(".alert__close");
    closeAlertBtn.innerHTML = options.btn;
    closeAlertBtn.addEventListener("click", closeAlert);
    alertWindowEl.querySelector(".alert__title").textContent = options.msg;
    formBtnElement.removeAttribute("disabled");
}

function closeAlert() {
    document.getElementById("user_email").focus();
    document.querySelector(".alert").style.display = "none";
    document.querySelector(".alert__close").removeEventListener("click",closeAlert, true);
}

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const emailInput = document.getElementById('user_email');

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}

