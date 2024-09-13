
const navigationElems = Array.from(document.querySelectorAll(".specification_nav__material"));

let index = 0;

const tables = document.querySelectorAll(".tables__block");
const sliderLine = document.querySelector(".tables__slider_line");

let width;

function init() {
    width = document.querySelector(".tables__slider").offsetWidth;
    sliderLine.style.width = width * tables.length + "px";
    tables.forEach(table => {
        table.style.width = width + "px";
        table.style.height = "auto";
    })
    rollSlider();
}

navigationElems.forEach((elem) => {
    elem.addEventListener("click", (e) => {
        index = navigationElems.indexOf(e.target);
        rollSlider();

        navigationElems.forEach((elem) => {
            if (elem.classList.contains("active")) elem.classList.remove("active");
        });
        e.target.classList.add("active")
    })
})

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + index * width + 'px)';

}

window.addEventListener("resize", init);
init()




