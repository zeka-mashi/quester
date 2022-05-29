import { getAllQuests } from "./util.js";
import { questIcons } from "./icons.js";
import { editEvent, closeEvent, minMaxEvent } from "./questEvents.js";

export default function refreshQuests() {
    const container = document.getElementsByClassName("main")[0];
    try {
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
    } catch {}
    const board = container.getAttribute("data-board");

    const questWrapper = document.createElement("div");
    questWrapper.classList.add("quest-wrapper");
    container.append(questWrapper);

    var thisBoard = getAllQuests(board);
    let curDate = new Date().toLocaleDateString("en-CA");

    for (let i = 0; i < thisBoard.length; i++) {
        const questContainer = document.createElement("div");
        questContainer.classList.add("quest-container");
        questContainer.setAttribute("data-quest", thisBoard[i]["quest-name"]);
        questContainer.setAttribute("data-board", thisBoard[i]["quest-board"]);
        const questName = document.createElement("h3");
        questName.textContent = thisBoard[i]["quest-name"];
        const headerActions = document.createElement("div");
        headerActions.classList.add("header-actions");
        const minMax = document.createElement("div");
        minMax.classList.add("minmax-box");
        minMax.innerHTML = questIcons.maximize;

        minMax.addEventListener("click", function (e) {
            minMaxEvent(e.currentTarget.parentElement.parentElement);
        });

        const close = document.createElement("div");
        close.classList.add("close-box");
        close.innerHTML = questIcons.close;

        close.addEventListener("click", function (e) {
            closeEvent(e.currentTarget.parentElement.parentElement);
        });

        headerActions.append(minMax, close);

        const sideColor = document.createElement("div");
        sideColor.classList.add("side-color");
        if (thisBoard[i]["quest-priority"] == "Low") {
            sideColor.classList.add("p-low");
            sideColor.setAttribute("data-priority", "Low");
        } else if (thisBoard[i]["quest-priority"] == "Medium") {
            sideColor.classList.add("p-med");
            sideColor.setAttribute("data-priority", "Medium");
        } else if (thisBoard[i]["quest-priority"] == "High") {
            sideColor.classList.add("p-high");
            sideColor.setAttribute("data-priority", "High");
        }

        const timeWrapper = document.createElement("div");
        timeWrapper.classList.add("inline-wrapper", "fg-5");
        const tIcon = document.createElement("span");
        const questDue = document.createElement("p");
        questDue.textContent = thisBoard[i]["date-picker"];
        questDue.classList.add("quest-due");
        if (questDue.textContent < curDate) {
            timeWrapper.classList.add("overdue");
            tIcon.innerHTML = questIcons.overdue;
        } else if (questDue.textContent > curDate) {
            tIcon.innerHTML = questIcons.future;
        } else {
            tIcon.innerHTML = questIcons.clock;
        }
        timeWrapper.append(tIcon, questDue);

        const questDescWrapper = document.createElement("div");
        questDescWrapper.classList.add("quest-desc-wrapper");
        const questDesc = document.createElement("p");
        questDesc.classList.add("quest-desc");
        questDesc.textContent = thisBoard[i]["quest-desc"];

        const boardAndEdit = document.createElement("div");
        boardAndEdit.classList.add("pb-wrapper");
        const questBoard = document.createElement("p");
        questBoard.textContent = thisBoard[i]["quest-board"];
        const editBar = document.createElement("div");
        editBar.classList.add("editbar", "flex-r", "ma-l", "fg-5");

        const edit = document.createElement("div");
        edit.innerHTML = questIcons.edit;
        edit.classList.add("quest-action", "edit-icon");

        edit.addEventListener("click", function (e) {
            editEvent(
                e.currentTarget.parentElement.parentElement.parentElement
                    .parentElement
            );
        });

        editBar.appendChild(edit);
        boardAndEdit.append(questBoard, editBar);
        questDescWrapper.append(questDesc, boardAndEdit);

        questContainer.append(
            headerActions,
            sideColor,
            questName,
            timeWrapper,
            questDescWrapper
        );
        questWrapper.appendChild(questContainer);
    }
}
