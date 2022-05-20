import createModal from "./createModal.js";
import refreshQuests from "./refreshQuests.js";

export default function questModal() {
    const modal = createModal();

    const wrapper = document.createElement("div");
    wrapper.classList.add("quest-modal", "flex-c")
    modal.appendChild(wrapper);

    const header = document.createElement("h2");
    wrapper.appendChild(header);
    header.textContent = "New Quest";
    header.classList.add("ctr", "mtb-10");

    const formWrapper = document.createElement("form");
    formWrapper.setAttribute("id", "new-quest");
    wrapper.appendChild(formWrapper);

    const nameWrapper = document.createElement("div");
    formWrapper.appendChild(nameWrapper);
    nameWrapper.classList.add("input-wrapper", "flex-c");
    const inputName = document.createElement("label");
    inputName.textContent = "Quest Name";
    inputName.setAttribute("for", "quest-name");

    const inputField = document.createElement("input");
    inputField.setAttribute("type", "text");
    inputField.setAttribute("id", "quest-name");
    inputField.setAttribute("name", "quest-name");
    inputField.setAttribute("minlength", "3");
    inputField.setAttribute("maxlength", "50");
    inputField.required = true;

    nameWrapper.append(inputName, inputField);

    const descWrapper = document.createElement("div");
    formWrapper.appendChild(descWrapper);
    descWrapper.classList.add("input-wrapper", "flex-c");
    const inputDesc = document.createElement("label");
    inputDesc.textContent = "Description";
    inputDesc.setAttribute("for", "quest-desc");

    const descInput = document.createElement("textarea");
    descInput.setAttribute("rows", "5");
    descInput.setAttribute("cols", "40");
    descInput.setAttribute("id", "quest-desc");
    descInput.setAttribute("name", "quest-desc");
    descInput.setAttribute("minlength", "1");
    descInput.setAttribute("maxlength", "500");
    descInput.required = true;

    descWrapper.append(inputDesc, descInput);

    const rowWrap = document.createElement("div");
    rowWrap.classList.add("flex-r", "fg-40");

    formWrapper.appendChild(rowWrap);

    const dateWrapper = document.createElement("div");
    rowWrap.appendChild(dateWrapper);
    dateWrapper.classList.add("input-wrapper", "flex-c");
    const datePicker = document.createElement("label");
    datePicker.textContent = "Due Date";
    datePicker.setAttribute("for", "date-picker");
    const datePickerInput = document.createElement("input");
    datePickerInput.setAttribute("type", "date");
    datePickerInput.setAttribute("id", "date-picker");
    datePickerInput.setAttribute("name", "date-picker");
    datePickerInput.required = true;

    //set min date
    const today = new Date();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    if (month < 10) {
        month = '0' + month.toString();
    }
    if (day < 10) {
        day = '0' + day.toString();
    }
    const minDate = today.getFullYear() + '-' + month + '-' + day;
    datePickerInput.setAttribute("min", minDate);

    dateWrapper.append(datePicker, datePickerInput);

    const priorityWrapper = document.createElement("div");
    rowWrap.appendChild(priorityWrapper);
    priorityWrapper.classList.add("input-wrapper", "flex-c");
    const inputPriority = document.createElement("label");
    inputPriority.textContent = "Priority Level";
    inputPriority.setAttribute("for", "quest-priority");

    const dropdownPriority = document.createElement("select");
    dropdownPriority.setAttribute("id", "quest-priority");
    dropdownPriority.setAttribute("name", "quest-priority");
    dropdownPriority.classList.add("ma-0");

    const priorityLow = document.createElement("option");
    priorityLow.setAttribute("value", "Low");
    priorityLow.selected = true;
    priorityLow.textContent = "Low";
    dropdownPriority.appendChild(priorityLow);

    const priorityMed = document.createElement("option");
    priorityMed.setAttribute("value", "Medium");
    priorityMed.textContent = "Medium";
    dropdownPriority.appendChild(priorityMed);

    const priorityHigh = document.createElement("option");
    priorityHigh.setAttribute("value", "High");
    priorityHigh.textContent = "High";
    dropdownPriority.appendChild(priorityHigh);

    priorityWrapper.append(inputPriority, dropdownPriority);

    const boardWrapper = document.createElement("div");
    formWrapper.appendChild(boardWrapper);
    boardWrapper.classList.add("input-wrapper", "flex-c");
    const inputDropdown = document.createElement("label");
    inputDropdown.textContent = "Adventure Board";
    inputDropdown.setAttribute("for", "quest-board");

    const dropdownInput = document.createElement("select");
    dropdownInput.setAttribute("id", "quest-board");
    dropdownInput.setAttribute("name", "quest-board");
    dropdownInput.disabled = true;

    //get current board
    const board = document.getElementsByClassName("main")[0].getAttribute("data-board");
    const dropdownOption = document.createElement("option");
    dropdownOption.setAttribute("value", board);
    dropdownOption.selected = true;
    dropdownOption.textContent = board;
    dropdownInput.appendChild(dropdownOption);

    boardWrapper.append(inputDropdown, dropdownInput);

    const btn = document.createElement("input");
    wrapper.appendChild(btn);
    btn.classList.add("modal-btn");
    btn.setAttribute("type", "submit");
    btn.setAttribute("form", "new-quest");
    btn.setAttribute("value", "Add Quest")
    formWrapper.addEventListener("submit", function(e) {
        var thisBoard = JSON.parse(localStorage.getItem(board)) || [];
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        console.log(data);
        thisBoard.push(data);
        localStorage.setItem(board, JSON.stringify(thisBoard));
        modal.remove();
        refreshQuests();
    });


    return modal;
}