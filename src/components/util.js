import home from "./home.js";
import refreshQuests from "./refreshQuests.js";

function runSidebarChecks(e) {
    const main = document.getElementsByClassName("main")[0];
    const board = main.getAttribute("data-board");
    const func = document.getElementsByClassName("new-func")[0];
    try {
        while (main.firstChild) {
            main.removeChild(main.lastChild);
        }
    } catch {}
    const items = document.getElementsByClassName("sidebar-item");
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("active");
    }
    if (e) {
        e.currentTarget.classList.add("active");
    } else {
        items[0].classList.add("active");
    }
    if (board == "home") {
        func.classList.add("disabled");
        const arr = getAllQuests(board);
        if (arr.length < 1 || arr.every((item) => item === null)) {
            main.appendChild(home());
        } else {
            refreshQuests();
        }
    } else {
        func.classList.remove("disabled");
        refreshQuests();
    }
}

function getAllQuests(currentBoard) {
    var thisBoard = [];
    if (currentBoard == "home") {
        const boards = JSON.parse(localStorage.getItem("boards")) || [];
        for (let i = 0; i < boards.length; i++) {
            thisBoard = thisBoard.concat(
                JSON.parse(localStorage.getItem(boards[i]))
            );
        }
    } else {
        thisBoard = JSON.parse(localStorage.getItem(currentBoard)) || [];
    }
    return thisBoard;
}

export { runSidebarChecks, getAllQuests };
