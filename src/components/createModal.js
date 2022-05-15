import { modalIcons } from "./icons.js";

export default function createModal() {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    const closeBtn = document.createElement("div");
    closeBtn.innerHTML = modalIcons.close;
    closeBtn.classList.add("close-btn");
    closeBtn.addEventListener("click", function() {
        modal.remove();
    });
    modal.appendChild(closeBtn);

    return modal;
}