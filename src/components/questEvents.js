import { questIcons } from "./icons.js";
import datePicker from "./datePicker.js";
import priorityPicker from "./priorityPicker.js";

function closeEvent(elm) {
    let board =
        JSON.parse(localStorage.getItem(elm.getAttribute("data-board"))) || [];
    const questName = elm.getAttribute("data-quest");
    const search = board.find((quest) => quest["quest-name"] === questName);
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
}

function minMaxEvent(elm) {
    const questDesc = elm.querySelector(".quest-desc-wrapper");
    const minMax = elm.querySelector(".minmax-box");
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
}

function editEvent(elm) {
    const board =
        JSON.parse(localStorage.getItem(elm.getAttribute("data-board"))) || [];
    const questName = elm.getAttribute("data-quest");
    const search = board.find((quest) => quest["quest-name"] === questName);
    const minMax = elm.querySelector(".minmax-box");
    const editIcon = elm.querySelector(".edit-icon");
    if (editIcon.classList.contains("check-icon")) {
        const titleInput = elm.querySelector(".title-edit");
        const descInput = elm.querySelector(".desc-edit");
        const dateInput = elm.querySelector(".quest-due");
        const priorityInput = elm.querySelector(".priority-edit");
        const undoBtn = elm.querySelector(".undo-icon");

        if (
            titleInput.value.length > 2 &&
            titleInput.value.length < 51 &&
            descInput.value.length > 0 &&
            descInput.value.length < 501 &&
            dateInput.value.length > 0
        ) {
            if (confirm("Are you sure you want to save your changes?")) {
                editIcon.innerHTML = questIcons.edit;
                undoBtn.remove();
                editIcon.classList.remove("check-icon");
                minMax.classList.remove("edit-mode");
                const newTitle = document.createElement("h3");
                newTitle.textContent = titleInput.value;
                const newDesc = document.createElement("p");
                newDesc.classList.add("quest-desc");
                newDesc.textContent = descInput.value;
                const newDate = document.createElement("p");
                newDate.textContent = dateInput.value;
                newDate.classList.add("quest-due");
                const priorityColor = elm.querySelector(".side-color");
                priorityColor.className = "side-color";
                if (priorityInput.value == "Low") {
                    priorityColor.classList.add("p-low");
                    priorityColor.setAttribute("data-priority", "Low");
                } else if (priorityInput.value == "Medium") {
                    priorityColor.classList.add("p-med");
                    priorityColor.setAttribute("data-priority", "Medium");
                } else {
                    priorityColor.classList.add("p-high");
                    priorityColor.setAttribute("data-priority", "High");
                }

                titleInput.parentNode.replaceChild(newTitle, titleInput);
                descInput.parentNode.replaceChild(newDesc, descInput);
                dateInput.parentNode.replaceChild(newDate, dateInput);
                if (
                    newDate.textContent < new Date().toISOString().split("T")[0]
                ) {
                    newDate.parentElement.classList.add("overdue");
                }
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
                const questDescWrapper = elm.querySelector(
                    ".quest-desc-wrapper"
                );
                questDescWrapper.style.maxHeight =
                    questDescWrapper.scrollHeight + "px";
            }
        } else {
            alert(
                "Please make sure your quest entry is valid!\n\n- Title has 3 to 50 characters\n- Description has 1 to 500 characters"
            );
        }
    } else {
        var copy = elm.cloneNode(true);
        minMax.classList.add("edit-mode");
        editIcon.innerHTML = questIcons.check;
        editIcon.classList.add("check-icon");
        const undo = document.createElement("div");
        undo.innerHTML = questIcons.undo;
        undo.classList.add("quest-action", "undo-icon");
        undo.addEventListener("click", function () {
            if (confirm("Undo all changes?")) {
                elm.parentNode.replaceChild(copy, elm);
                elm = null;
                const rMinMax = copy.querySelector(".minmax-box");
                rMinMax.addEventListener("click", function (e) {
                    minMaxEvent(e.currentTarget.parentElement.parentElement);
                });
                const rClose = copy.querySelector(".close-box");
                rClose.addEventListener("click", function (e) {
                    closeEvent(e.currentTarget.parentElement.parentElement);
                });
                const rEdit = copy.querySelector(".edit-icon");
                rEdit.addEventListener("click", function (e) {
                    editEvent(
                        e.currentTarget.parentElement.parentElement
                            .parentElement.parentElement
                    );
                });
            }
        });

        editIcon.parentNode.insertBefore(undo, editIcon);
        const title = elm.querySelector("h3");
        const desc = elm.querySelector("p.quest-desc");
        const date = elm.querySelector("p.quest-due");
        const priority = elm
            .querySelector(".side-color")
            .getAttribute("data-priority");
        const wrapper = elm.querySelector(".quest-desc-wrapper");
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
        if (priority == "Medium") {
            pInput.querySelectorAll("option")[1].selected = true;
        } else if (priority == "High") {
            pInput.querySelectorAll("option")[2].selected = true;
        }
        title.parentNode.replaceChild(titleInput, title);
        desc.parentNode.replaceChild(descInput, desc);
        date.parentNode.replaceChild(dateInput, date);
        descInput.parentNode.insertBefore(pInput, descInput.nextSibling);
        wrapper.style.maxHeight = "100%";
    }
}

export { editEvent, closeEvent, minMaxEvent };
