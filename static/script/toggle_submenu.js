const submenuBtns = document.querySelectorAll(".toc__submenu");

function deactivateSubmenu(btn) {
    btn.classList.remove("toc__submenu_active")
    btn.querySelector("svg path").setAttribute("fill", "#73243C");
    btn.querySelector(".toc__submenu_list").classList.remove("toc__submenu_list_active");
    btn.querySelector("svg").setAttribute("transform", "rotate(0)");
}

submenuBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("toc__submenu_active")) {
            if (btn.classList.contains("toc__submenu_active")) deactivateSubmenu(btn);
        } else {
            submenuBtns.forEach(btn => {
                if (btn.classList.contains("toc__submenu_active")) deactivateSubmenu(btn);
            })
            btn.querySelector("svg path").setAttribute("fill", "#ffb917");
            btn.querySelector(".toc__submenu_list").classList.add("toc__submenu_list_active");
            btn.classList.add("toc__submenu_active");
        btn.querySelector("svg").setAttribute("transform", "rotate(180)");
        }
    })
})