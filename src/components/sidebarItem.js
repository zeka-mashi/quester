export default function sidebarItem(icon, name) {
    const item = document.createElement("div");
    item.classList.add("sidebar-item");
    const itemIcon = document.createElement("span")
    itemIcon.innerHTML = icon;

    const itemName = document.createElement("span");
    itemName.innerHTML = `${name}`;

    item.appendChild(itemIcon);
    item.appendChild(itemName);

    return item;
}