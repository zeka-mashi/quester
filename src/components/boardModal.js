export default function boardModal() {
    const modal = document.createElement("div");
    modal.classList.add("modal", "hide");
    const wrapper = document.createElement("div");
    wrapper.classList.add("board-modal")
    modal.appendChild(wrapper);

    const header = document.createElement("h2");
    wrapper.appendChild(header);
    header.textContent = "New Adventure Board";
    header.classList.add("ctr", "mtb-10");

    const nameWrapper = document.createElement("div");
    wrapper.appendChild(nameWrapper);
    nameWrapper.classList = "input-wrapper";
    const inputName = document.createElement("label");
    inputName.textContent = "Board Name";
    inputName.setAttribute("for", "board-name");

    const inputField = document.createElement("input");
    inputField.setAttribute("type", "text");
    inputField.setAttribute("id", "board-name");
    inputField.setAttribute("name", "board-name");

    nameWrapper.append(inputName, inputField);


    return modal;
}