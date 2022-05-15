import { checkAddAbility } from "./util.js";

export default function sidebarItem(icon, name, dataset, isDefault) {
    const item = document.createElement("div");
    item.classList.add("sidebar-item");
    const itemIcon = document.createElement("span")
    itemIcon.innerHTML = icon;

    const itemName = document.createElement("span");
    itemName.innerHTML = `${name}`;

    if (isDefault) {
        item.setAttribute("data-item", dataset);
    } else {
        item.setAttribute("data-item", `${dataset}-board`);
    }

    item.appendChild(itemIcon);
    item.appendChild(itemName);

    item.addEventListener("click", function() {
        const main = document.getElementsByClassName("main")[0];
        main.setAttribute("data-board", item.getAttribute("data-item"));
        checkAddAbility();
    })

    return item;
}