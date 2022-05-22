import createModal from "./createModal.js";
import refreshSidebar from "./refreshSidebar.js";

export default function boardModal() {
    const modal = createModal();

    const wrapper = document.createElement("div");
    wrapper.classList.add("board-modal", "flex-c")
    modal.appendChild(wrapper);

    const header = document.createElement("h2");
    wrapper.appendChild(header);
    header.textContent = "New Adventure Board";
    header.classList.add("ctr", "mtb-10");

    const formWrapper = document.createElement("form");
    formWrapper.setAttribute("id", "new-board");
    wrapper.appendChild(formWrapper);

    const nameWrapper = document.createElement("div");
    formWrapper.appendChild(nameWrapper);
    nameWrapper.classList.add("input-wrapper", "flex-c");
    const inputName = document.createElement("label");
    inputName.textContent = "Board Name";
    inputName.setAttribute("for", "board-name");

    const inputField = document.createElement("input");
    inputField.setAttribute("type", "text");
    inputField.setAttribute("id", "board-name");
    inputField.setAttribute("name", "board-name");
    inputField.setAttribute("minlength", "1");
    inputField.setAttribute("maxlength", "20");
    inputField.required = true;

    nameWrapper.append(inputName, inputField);

    const errMsg = document.createElement("p");
    errMsg.classList.add("modal-errmsg", "hide");
    errMsg.textContent = "That's awkward... the board already exists!";
    formWrapper.appendChild(errMsg);

    const btn = document.createElement("input");
    wrapper.appendChild(btn);
    btn.classList.add("modal-btn");
    btn.setAttribute("type", "submit");
    btn.setAttribute("form", "new-board");
    btn.setAttribute("value", "Add Board")
    formWrapper.addEventListener("submit", function(e) {
        var allBoards = JSON.parse(localStorage.getItem("boards")) || [];
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        const index = allBoards.indexOf(data["board-name"]);
        if (index < 0) {
            allBoards.push(data["board-name"]);
            localStorage.setItem("boards", JSON.stringify(allBoards));
            modal.remove();

            refreshSidebar(allBoards);
        } else {
            errMsg.classList.remove("hide");
        }
    });


    return modal;
}