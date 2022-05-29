import { runSidebarChecks } from "./util.js";
import { modalIcons } from "./icons.js";
import refreshSidebar from "./refreshSidebar.js";

export default function sidebarItem(icon, name, dataset, isDefault) {
    const item = document.createElement("div");
    item.classList.add("sidebar-item");
    const itemIcon = document.createElement("span");
    itemIcon.innerHTML = icon;

    const itemName = document.createElement("span");
    itemName.innerHTML = `${name}`;

    item.setAttribute("data-item", dataset);
    if (isDefault) {
        item.classList.add("active");
    }

    const clickHandler = function (e) {
        const main = document.getElementsByClassName("main")[0];
        main.setAttribute("data-board", item.getAttribute("data-item"));
        runSidebarChecks(e);
        e.currentTarget.parentElement.parentElement.classList.remove(
            "mobile-active"
        );
    };

    item.addEventListener("click", clickHandler);

    item.append(itemIcon, itemName);

    if (!isDefault) {
        const deleteItem = document.createElement("span");
        deleteItem.innerHTML = modalIcons.close;
        deleteItem.classList.add("item-del");
        deleteItem.addEventListener("click", function (e) {
            if (
                confirm(
                    "Deleting this board will also delete all associated quests.\n\nReally delete this board? This action cannot be undone!"
                )
            ) {
                let elm;
                if (e.target.tagName == "path") {
                    elm = e.target.parentElement.parentElement.parentElement;
                } else {
                    elm = e.target.parentElement.parentElement;
                }
                elm.removeEventListener("click", clickHandler);

                var allBoards =
                    JSON.parse(localStorage.getItem("boards")) || [];

                const index = allBoards.indexOf(elm.getAttribute("data-item"));
                if (index > -1) {
                    allBoards.splice(index, 1);
                }
                localStorage.setItem("boards", JSON.stringify(allBoards));
                const main = document.getElementsByClassName("main")[0];
                main.setAttribute("data-board", "home");
                runSidebarChecks();
                refreshSidebar(allBoards);
            }
        });
        item.appendChild(deleteItem);
    }

    return item;
}
