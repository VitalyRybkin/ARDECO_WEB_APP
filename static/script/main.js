
const showModalMenuItem = document.getElementById("show_modal");
const showModalCertsItem = document.getElementById("show_modal_certs");
const modalWindow = document.getElementById("modal_menu");
const modalWindowCerts = document.getElementById("modal_menu_certs");
const modalElLinks = Array.from(modalWindow.querySelectorAll("a"));
const modalCertsElLink = Array.from(modalWindowCerts.querySelectorAll("a"));
const modalEl = Array.from(modalWindow.querySelectorAll("*"));

showModalMenuItem.addEventListener("click", () => {
    modalWindow.classList.remove("hidden");
    modalWindow.classList.add("shown");
    modalElLinks.forEach((link) => {
        link.addEventListener("click", closeModal)
    })
})

showModalCertsItem.addEventListener("click", () => {
    modalWindowCerts.classList.remove("hidden");
    modalWindowCerts.classList.add("shown");
    modalElLinks.forEach((link) => {
        link.addEventListener("click", closeModal)
    })
})

function closeModal() {
    if (modalWindow.classList.contains("shown")) {
        modalWindow.classList.add("hidden");
        modalWindow.classList.remove("shown");
    }
    if (modalWindowCerts.classList.contains("shown")) {
        modalWindowCerts.classList.add("hidden");
        modalWindowCerts.classList.remove("shown");
    }
}

window.addEventListener("click", (e) => {
    if (!modalEl.includes(e.target) && e.target !== showModalMenuItem) {
        modalWindow.classList.add("hidden");
        modalWindow.classList.remove("shown");
        modalElLinks.forEach((link) => link.removeEventListener("click", closeModal))
    }
    if (!modalEl.includes(e.target) && e.target !== showModalCertsItem) {
        modalWindowCerts.classList.add("hidden");
        modalWindowCerts.classList.remove("shown");
        modalCertsElLink.forEach((link) => link.removeEventListener("click", closeModal))
    }
})
