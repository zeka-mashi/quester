import sidebarItem from "./sidebarItem.js";
import { sidebarIcons } from "./icons.js";

export default function refreshSidebar(boards) {
    const allBoards = boards || JSON.parse(localStorage.getItem("boards")) || [];

    const sidebarItems = document.getElementsByClassName("sidebar-item");
    for (let i = sidebarItems.length - 1; i >= 1; i--) {
        sidebarItems[i].remove();
    }

    const sidebarWrapper = document.getElementsByClassName("sidebar-wrapper")[0];
    for (let i = 0; i < allBoards.length; i++) {
        sidebarWrapper.appendChild(sidebarItem(sidebarIcons.board, allBoards[i], `${allBoards[i]}`));
    }
}