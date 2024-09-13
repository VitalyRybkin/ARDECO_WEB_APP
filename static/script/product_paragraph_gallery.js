const navItemsArr = Array.from(document.querySelectorAll(".product__nav_item"));
const productTextElArr = document.querySelectorAll(".product__nav_text");

navItemsArr.forEach((elem) => {
    elem.addEventListener("click", (e) => {
        navItemsArr.forEach((elem) => {
            if (elem.classList.contains("active")) {
                elem.classList.remove("active");
            }
        });
        e.target.classList.add("active");

        productTextElArr.forEach((elem) => {
            if (elem.classList.contains("displayed")) {
                elem.classList.remove("displayed");
            }
        });
        productTextElArr[navItemsArr.indexOf(e.target)].classList.add("displayed");

    })
})