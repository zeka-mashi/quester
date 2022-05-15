import { sidebarIcons } from "./icons.js";
import sidebarItem from "./sidebarItem.js";
import addQuest from "./addQuest.js";
import addQuestBoard from "./addQuestBoard.js";

export default function sidebar() {
    const side = document.createElement("div");
    side.classList.add("sidebar", "flex-c");

    const header = document.createElement("h1");
    header.textContent = "Quester"

    const subheader = document.createElement("h5");
    subheader.textContent = "A to-do app with a touch of RPG elements"

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
    addWrapper.appendChild(newQuest);
    const newQuestBoard = document.createElement("div");
    newQuestBoard.innerHTML = sidebarIcons.plusBox + "New Board";
    newQuestBoard.addEventListener("click", addQuestBoard);
    addWrapper.appendChild(newQuestBoard);
    side.appendChild(addWrapper);

    const sidebarWrapper = document.createElement("div");
    sidebarWrapper.classList.add("sidebar-wrapper", "flex-c");
    side.appendChild(sidebarWrapper);

    const sidebarCredit = document.createElement("div");
    sidebarCredit.classList.add("credit");
    sidebarCredit.innerHTML = sidebarIcons.copyright + "2022 zeka-mashi" + "<a href='https://github.com/zeka-mashi/quester'>" + sidebarIcons.github + "</a><a href='https://davidthe.dev/'>" + sidebarIcons.web + "</a>";
    side.appendChild(sidebarCredit);

    sidebarWrapper.appendChild(sidebarItem(sidebarIcons.home, "Home", "home", true));
    sidebarWrapper.appendChild(sidebarItem(sidebarIcons.board, "All Quests", "all", true));

    // for future custom project/quest types
    //sidebarWrapper.appendChild(sidebarItem(sidebarIcons.scroll, "Custom"));

    return side;
}