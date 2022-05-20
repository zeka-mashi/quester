import { getAllQuests } from "./util.js";

export default function refreshQuests() {
    const container = document.getElementsByClassName("main")[0];
    const board = container.getAttribute("data-board");

    const questWrapper = document.createElement("div");
    questWrapper.classList.add("quest-wrapper");
    container.append(questWrapper);

    var thisBoard = getAllQuests(board);
    console.log(thisBoard);

    for (let i = 0; i < thisBoard.length; i++) {
        const questContainer = document.createElement("div");
        questContainer.textContent = thisBoard[i]["quest-name"];
        questWrapper.appendChild(questContainer);
    }
}