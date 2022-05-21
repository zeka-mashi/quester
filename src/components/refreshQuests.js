import { getAllQuests } from "./util.js";
import { questIcons } from "./icons.js";

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
        questContainer.classList.add("quest-container");
        const questName = document.createElement("h3");
        questName.textContent = thisBoard[i]["quest-name"];
        const questDue = document.createElement("p");
        questDue.textContent = thisBoard[i]["date-picker"];
        const questDesc = document.createElement("p");
        questDesc.textContent = thisBoard[i]["quest-desc"];

        const priorityAndBoard = document.createElement("div");
        priorityAndBoard.classList.add("pb-wrapper");
        const priorityWrapper = document.createElement("div");
        priorityWrapper.classList.add("p-wrapper");
        const pIcon = document.createElement("span");
        const questPriority = document.createElement("p");
        questPriority.textContent = thisBoard[i]["quest-priority"];
        if (thisBoard[i]["quest-priority"] == "Low") {
            priorityWrapper.classList.add("p-low");
            pIcon.innerHTML = questIcons.low;
        } else if (thisBoard[i]["quest-priority"] == "Medium") {
            priorityWrapper.classList.add("p-med");
            pIcon.innerHTML = questIcons.medium;
        } else {
            priorityWrapper.classList.add("p-high");
            pIcon.innerHTML = questIcons.high;
        }
        priorityWrapper.append(pIcon, questPriority);
        const questBoard = document.createElement("p");
        questBoard.textContent = thisBoard[i]["quest-board"];
        priorityAndBoard.append(priorityWrapper, questBoard);
        questContainer.append(questName, questDue, questDesc, priorityAndBoard);
        questWrapper.appendChild(questContainer);
    }
}