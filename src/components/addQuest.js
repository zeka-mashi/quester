import questModal from "./questModal.js";

export default function addQuest() {
    const container = document.getElementsByClassName("container")[0];
    container.appendChild(questModal());
}