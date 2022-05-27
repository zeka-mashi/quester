import { sidebarIcons } from "./icons.js";
import sidebarItem from "./sidebarItem.js";
import addQuest from "./addQuest.js";
import addQuestBoard from "./addQuestBoard.js";

export default function sidebar() {
    const side = document.createElement("div");
    side.classList.add("sidebar", "flex-c", "nos");

    const header = document.createElement("h1");
    header.textContent = "#Todo";

    const subheader = document.createElement("h5");
    subheader.textContent = '"I\'ll remember to do this... right?"';

    const headerWrapper = document.createElement("div");
    headerWrapper.classList.add("sidebar-header");
    headerWrapper.appendChild(header);
    headerWrapper.appendChild(subheader);
    side.appendChild(headerWrapper);

    const addWrapper = document.createElement("div");
    addWrapper.classList.add("add-function");

    const newQuest = document.createElement("div");
    newQuest.innerHTML = sidebarIcons.plus + "New Quest";
    newQuest.addEventListener("click", addQuest);
    newQuest.classList.add("new-func", "disabled");
    addWrapper.appendChild(newQuest);
    const newQuestBoard = document.createElement("div");
    newQuestBoard.innerHTML = sidebarIcons.plusBox + "New Board";
    newQuestBoard.addEventListener("click", addQuestBoard);
    newQuestBoard.classList.add("new-func");
    addWrapper.appendChild(newQuestBoard);
    side.appendChild(addWrapper);

    const sidebarWrapper = document.createElement("div");
    sidebarWrapper.classList.add("sidebar-wrapper", "flex-c");
    side.appendChild(sidebarWrapper);

    const sidebarCredit = document.createElement("div");
    sidebarCredit.classList.add("credit");
    sidebarCredit.innerHTML =
        sidebarIcons.copyright +
        "2022 zeka-mashi" +
        "<a href='https://github.com/zeka-mashi/quester'>" +
        sidebarIcons.github +
        "</a><a href='https://davidthe.dev/'>" +
        sidebarIcons.web +
        "</a>";
    side.appendChild(sidebarCredit);

    sidebarWrapper.appendChild(
        sidebarItem(sidebarIcons.home, "Home", "home", true)
    );

    var allBoards = JSON.parse(localStorage.getItem("boards")) || [];
    for (let i = 0; i < allBoards.length; i++) {
        sidebarWrapper.appendChild(
            sidebarItem(sidebarIcons.board, allBoards[i], `${allBoards[i]}`)
        );
    }

    return side;
}
