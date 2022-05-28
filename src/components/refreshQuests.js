import { getAllQuests } from "./util.js";
import { questIcons } from "./icons.js";
import datePicker from "./datePicker.js";
import priorityPicker from "./priorityPicker.js";
import priorityTag from "./priorityTag.js";

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
            let elm = e.currentTarget.parentElement.parentElement;
            let questDesc = elm.querySelector(".quest-desc-wrapper");
            if (questDesc && !minMax.classList.contains("edit-mode")) {
                questDesc.classList.toggle("shown");
                if (questDesc.classList.contains("shown")) {
                    questDesc.style.maxHeight = questDesc.scrollHeight + "px";
                } else {
                    questDesc.style.maxHeight = "0px";
                }
                minMax.classList.toggle("drop-active");
                if (minMax.classList.contains("drop-active")) {
                    minMax.innerHTML = questIcons.minimize;
                } else {
                    minMax.innerHTML = questIcons.maximize;
                }
            }
        });

        const close = document.createElement("div");
        close.classList.add("close-box");
        close.innerHTML = questIcons.close;

        close.addEventListener("click", function (e) {
            const elm = e.currentTarget.parentElement.parentElement;
            let board =
                JSON.parse(
                    localStorage.getItem(elm.getAttribute("data-board"))
                ) || [];
            let questName = elm.getAttribute("data-quest");
            let search = board.find(
                (quest) => quest["quest-name"] === questName
            );
            if (search) {
                if (confirm("Are you sure you want to delete this quest?")) {
                    const idx = board.indexOf(search);
                    board.splice(idx, 1);
                    localStorage.setItem(
                        elm.getAttribute("data-board"),
                        JSON.stringify(board)
                    );
                    elm.remove();
                }
            }
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
        tIcon.innerHTML = questIcons.clock;
        const questDue = document.createElement("p");
        questDue.textContent = thisBoard[i]["date-picker"];
        questDue.classList.add("quest-due");

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
            const elm =
                e.currentTarget.parentElement.parentElement.parentElement
                    .parentElement;
            let board =
                JSON.parse(
                    localStorage.getItem(elm.getAttribute("data-board"))
                ) || [];
            let questName = elm.getAttribute("data-quest");
            let search = board.find(
                (quest) => quest["quest-name"] === questName
            );
            let minMax = elm.querySelector(".drop-active");
            if (minMax) {
                minMax.innerHTML = questIcons.maximize;
            }
            let editIcon = elm.querySelector(".edit-icon");
            console.log(elm);
            if (e.currentTarget.classList.contains("check-icon")) {
                let titleInput = elm.querySelector(".title-edit");
                let descInput = elm.querySelector(".desc-edit");
                let dateInput = elm.querySelector(".quest-due");
                let priorityInput = elm.querySelector(".priority-edit");
                let undoBtn = elm.querySelector(".undo-icon");

                if (
                    titleInput.value.length > 2 &&
                    titleInput.value.length < 51 &&
                    descInput.value.length > 0 &&
                    descInput.value.length < 501 &&
                    dateInput.value.length > 0
                ) {
                    if (
                        confirm("Are you sure you want to save your changes?")
                    ) {
                        editIcon.innerHTML = questIcons.edit;
                        undoBtn.remove();
                        e.currentTarget.classList.remove("check-icon");

                        const newTitle = document.createElement("h3");
                        newTitle.textContent = titleInput.value;
                        const newDesc = document.createElement("p");
                        newDesc.classList.add("quest-desc");
                        newDesc.textContent = descInput.value;
                        const newDate = document.createElement("p");
                        newDate.textContent = dateInput.value;
                        newDate.classList.add("quest-due");
                        let priorityColor = elm.querySelector(".side-color");
                        priorityColor.className = "side-color";
                        if (priorityInput.value == "Low") {
                            priorityColor.classList.add("p-low");
                            priorityColor.setAttribute("data-priority", "Low");
                        } else if (priorityInput.value == "Medium") {
                            priorityColor.classList.add("p-med");
                            priorityColor.setAttribute(
                                "data-priority",
                                "Medium"
                            );
                        } else {
                            priorityColor.classList.add("p-high");
                            priorityColor.setAttribute("data-priority", "High");
                        }

                        titleInput.parentNode.replaceChild(
                            newTitle,
                            titleInput
                        );
                        descInput.parentNode.replaceChild(newDesc, descInput);
                        dateInput.parentNode.replaceChild(newDate, dateInput);
                        priorityInput.remove();

                        elm.setAttribute("data-quest", titleInput.value);

                        const idx = board.indexOf(search);
                        const updatedQuest = {
                            "date-picker": newDate.textContent,
                            "quest-board": elm.getAttribute("data-board"),
                            "quest-desc": newDesc.textContent,
                            "quest-name": newTitle.textContent,
                            "quest-priority":
                                priorityColor.getAttribute("data-priority"),
                        };
                        board.splice(idx, 1, updatedQuest);
                        localStorage.setItem(
                            elm.getAttribute("data-board"),
                            JSON.stringify(board)
                        );
                    }
                } else {
                    alert(
                        "Please make sure your quest entry is valid!\n\n- Title has 3 to 50 characters\n- Description has 1 to 500 characters"
                    );
                }
            } else {
                minMax.classList.add("edit-mode");
                editIcon.innerHTML = questIcons.check;
                e.currentTarget.classList.add("check-icon");
                const undo = document.createElement("div");
                undo.innerHTML = questIcons.undo;
                undo.classList.add("quest-action", "undo-icon");
                editIcon.parentNode.insertBefore(undo, editIcon);
                let title = elm.querySelector("h3");
                let desc = elm.querySelector("p.quest-desc");
                let date = elm.querySelector("p.quest-due");
                let priority = elm
                    .querySelector(".side-color")
                    .getAttribute("data-priority");
                let wrapper = elm.querySelector(".quest-desc-wrapper");
                const titleInput = document.createElement("input");
                titleInput.setAttribute("type", "text");
                titleInput.setAttribute("value", title.textContent);
                titleInput.setAttribute("minlength", "3");
                titleInput.setAttribute("maxlength", "50");
                titleInput.classList.add("title-edit");
                const descInput = document.createElement("textarea");
                descInput.classList.add("desc-edit");
                descInput.setAttribute("rows", "5");
                descInput.setAttribute("cols", "32");
                descInput.value = desc.textContent;
                const dateInput = datePicker();
                dateInput.classList.add("quest-due");
                dateInput.value = date.textContent;
                const pInput = priorityPicker();
                pInput.classList.add("priority-edit");
                let pr;
                if (priority == "Medium") {
                    pInput.querySelectorAll("option")[1].selected = true;
                } else if (priority == "High") {
                    pInput.querySelectorAll("option")[2].selected = true;
                }
                title.parentNode.replaceChild(titleInput, title);
                desc.parentNode.replaceChild(descInput, desc);
                date.parentNode.replaceChild(dateInput, date);
                descInput.parentNode.insertBefore(
                    pInput,
                    descInput.nextSibling
                );
                wrapper.style.maxHeight = "100%";
            }
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
