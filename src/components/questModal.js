import createModal from "./createModal.js";

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
    descInput.required = true;

    descWrapper.append(inputDesc, descInput);

    const boardWrapper = document.createElement("div");
    formWrapper.appendChild(boardWrapper);
    boardWrapper.classList.add("input-wrapper", "flex-c");
    const inputDropdown = document.createElement("label");
    inputDropdown.textContent = "Adenture Board";
    inputDropdown.setAttribute("for", "quest-board");

    const dropdownInput = document.createElement("select");
    dropdownInput.setAttribute("id", "quest-board");
    dropdownInput.setAttribute("name", "quest-board");
    dropdownInput.required = true;

    // need to implement <options>

    boardWrapper.append(inputDropdown, dropdownInput);

    const errMsg = document.createElement("p");
    errMsg.classList.add("modal-errmsg", "hide");
    errMsg.textContent = "That's awkward... the quest already exists!";
    formWrapper.appendChild(errMsg);

    const btn = document.createElement("input");
    wrapper.appendChild(btn);
    btn.classList.add("modal-btn");
    btn.setAttribute("type", "submit");
    btn.setAttribute("form", "new-quest");
    btn.setAttribute("value", "Add Quest")
    formWrapper.addEventListener("submit", function(e) {
        var allBoards = JSON.parse(localStorage.getItem("boards")) || [];
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        const index = allBoards.indexOf(data["board-name"]);
        if (index < 0) {
            allBoards.push(data["board-name"]);
            localStorage.setItem("boards", JSON.stringify(allBoards));
            modal.remove();
        } else {
            errMsg.classList.remove("hide");
        }
    });


    return modal;
}