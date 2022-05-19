import home from "./home.js";

function runSidebarChecks(e) {
    const main = document.getElementsByClassName("main")[0];
    const data = main.getAttribute("data-board");
    const func = document.getElementsByClassName("new-func")[0];
    try {
        main.removeChild(main.firstElementChild);
    } catch {

    }
    const items = document.getElementsByClassName("sidebar-item");
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("active");
    }
    if (e) {
        if (e.target.tagName == "SPAN") {
            e.target.parentElement.classList.add("active");
        } else if (e.target.tagName == "svg") {
            e.target.parentElement.parentElement.classList.add("active");
        } else {
            e.target.classList.add("active");
        }
    } else {
        items[0].classList.add("active");
    }
    if (data == "home") {
        func.classList.add("disabled");
        main.appendChild(home());
    } else {
        func.classList.remove("disabled");
    }
}

export { runSidebarChecks };