import boardModal from "./boardModal.js";

export default function addQuestBoard() {
    const container = document.getElementsByClassName("container")[0];
    container.appendChild(boardModal());
}