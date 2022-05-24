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
        questContainer.setAttribute("data-quest", thisBoard[i]["quest-name"]);
        questContainer.setAttribute("data-board", thisBoard[i]["quest-board"]);
        const questName = document.createElement("h3");
        questName.textContent = thisBoard[i]["quest-name"];
        const timeWrapper = document.createElement("div");
        timeWrapper.classList.add("inline-wrapper");
        const tIcon = document.createElement("span");
        tIcon.innerHTML = questIcons.clock;
        const questDue = document.createElement("p");
        questDue.textContent = thisBoard[i]["date-picker"];
        const actions = document.createElement("div");
        const edit = document.createElement("div");
        edit.innerHTML = questIcons.edit;
        edit.classList.add("quest-action", "edit-icon");

        edit.addEventListener("click", function (e) {
            const elm =
                e.currentTarget.parentElement.parentElement.parentElement;
            let board =
                JSON.parse(
                    localStorage.getItem(elm.getAttribute("data-board"))
                ) || [];
            let questName = elm.getAttribute("data-quest");
            let search = board.find(
                (quest) => quest["quest-name"] === questName
            );
            let editIcon = elm.querySelector(".edit-icon");
            console.log(elm);
            if (e.currentTarget.classList.contains("check-icon")) {
                let titleInput = elm.querySelector(".title-edit");
                let descInput = elm.querySelector(".desc-edit");

                if (
                    titleInput.value.length > 2 &&
                    titleInput.value.length < 51 &&
                    descInput.value.length > 0 &&
                    descInput.value.length < 501
                ) {
                    if (
                        confirm("Are you sure you want to save your changes?")
                    ) {
                        editIcon.innerHTML = questIcons.edit;
                        e.currentTarget.classList.remove("check-icon");

                        const newTitle = document.createElement("h3");
                        newTitle.textContent = titleInput.value;
                        const newDesc = document.createElement("p");
                        newDesc.classList.add("quest-desc");
                        newDesc.textContent = descInput.value;
                        titleInput.parentNode.replaceChild(
                            newTitle,
                            titleInput
                        );
                        descInput.parentNode.replaceChild(newDesc, descInput);
                        elm.setAttribute("data-quest", titleInput.value);

                        /* const idx = board.indexOf(search);
                    board.splice(idx, 1);
                    localStorage.setItem(
                        elm.getAttribute("data-board"),
                        JSON.stringify(board)
                    ); */
                    }
                } else {
                    alert(
                        "Please make sure your quest entry is valid!\n\n- Title has 3 to 50 characters\n- Description has 1 to 500 characters"
                    );
                }
            } else {
                editIcon.innerHTML = questIcons.check;
                e.currentTarget.classList.add("check-icon");
                let title = elm.querySelector("h3");
                let desc = elm.querySelector("p.quest-desc");
                const titleInput = document.createElement("input");
                titleInput.setAttribute("type", "text");
                titleInput.setAttribute("value", title.textContent);
                titleInput.classList.add("title-edit");
                const descInput = document.createElement("textarea");
                descInput.classList.add("desc-edit");
                descInput.setAttribute("rows", "5");
                descInput.setAttribute("cols", "40");
                descInput.value = desc.textContent;
                title.parentNode.replaceChild(titleInput, title);
                desc.parentNode.replaceChild(descInput, desc);
            }
        });

        const trash = document.createElement("div");
        trash.innerHTML = questIcons.trash;
        trash.classList.add("quest-action", "trash-icon");

        trash.addEventListener("click", function (e) {
            const elm =
                e.currentTarget.parentElement.parentElement.parentElement;
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

        const dropdown = document.createElement("div");
        dropdown.innerHTML = questIcons.dropdown;
        dropdown.classList.add("quest-action", "drop-inactive");

        actions.append(edit, trash, dropdown);
        actions.classList.add("flex-r", "ma-l", "fg-5");
        timeWrapper.append(tIcon, questDue, actions);

        const questDesc = document.createElement("p");
        questDesc.classList.add("quest-desc");
        questDesc.textContent = thisBoard[i]["quest-desc"];

        dropdown.addEventListener("click", function (e) {
            let elm = e.currentTarget.parentElement.parentElement.parentElement;
            let questDesc = elm.querySelector(".quest-desc");
            if (questDesc) {
                questDesc.classList.toggle("shown");
                if (questDesc.classList.contains("shown")) {
                    questDesc.style.maxHeight = questDesc.scrollHeight + "px";
                } else {
                    questDesc.style.maxHeight = "0px";
                }
                dropdown.classList.toggle("drop-active");
                dropdown.classList.toggle("drop-inactive");
            }
        });

        const priorityAndBoard = document.createElement("div");
        priorityAndBoard.classList.add("pb-wrapper");
        const priorityWrapper = document.createElement("div");
        priorityWrapper.classList.add("inline-wrapper");
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
        questContainer.append(
            questName,
            timeWrapper,
            questDesc,
            priorityAndBoard
        );
        questWrapper.appendChild(questContainer);
    }
}
