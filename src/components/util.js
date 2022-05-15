function checkAddAbility() {
    const main = document.getElementsByClassName("main")[0];
    const data = main.getAttribute("data-board");
    const func = document.getElementsByClassName("new-func")[0];
    if (data == "home" || data == "all") {
        func.classList.add("disabled");
    } else {
        func.classList.remove("disabled");
    }
}

export { checkAddAbility };