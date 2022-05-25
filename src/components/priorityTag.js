import { questIcons } from "./icons.js";

export default function priorityTag(lvl) {
    const priorityWrapper = document.createElement("div");
    priorityWrapper.classList.add("inline-wrapper");
    const pIcon = document.createElement("span");
    const questPriority = document.createElement("p");
    questPriority.textContent = lvl;
    if (lvl == "Low") {
        priorityWrapper.classList.add("p-low");
        pIcon.innerHTML = questIcons.low;
    } else if (lvl == "Medium") {
        priorityWrapper.classList.add("p-med");
        pIcon.innerHTML = questIcons.medium;
    } else {
        priorityWrapper.classList.add("p-high");
        pIcon.innerHTML = questIcons.high;
    }
    priorityWrapper.append(pIcon, questPriority);

    return priorityWrapper;
}
