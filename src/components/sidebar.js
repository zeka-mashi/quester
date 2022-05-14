import sidebarItem from "./sidebarItem.js";

const iconHome = `<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M2,13H4V15H6V13H8V15H10V13H12V15H14V10L17,7V1H19L23,3L19,5V7L22,10V22H11V19A2,2 0 0,0 9,17A2,2 0 0,0 7,19V22H2V13M18,10C17.45,10 17,10.54 17,11.2V13H19V11.2C19,10.54 18.55,10 18,10Z" />
</svg>`
const iconBoard = `<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M20 22H18V17H20M6 22H4V17H6M23 4V13A2 2 0 0 1 21 15H3A2 2 0 0 1 1 13V4A2 2 0 0 1 3 2H21A2 2 0 0 1 23 4M21 4H3V13H21M20 6H15V8H20M18 9H15V11H18M14 11H4L6.73 7.36L8.73 10.09L9.46 9.55L8.2 7.82L9.91 5.55Z" />
</svg>`
const iconScroll = `<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M17.8,20C17.4,21.2 16.3,22 15,22H5C3.3,22 2,20.7 2,19V18H5L14.2,18C14.6,19.2 15.7,20 17,20H17.8M19,2C20.7,2 22,3.3 22,5V6H20V5C20,4.4 19.6,4 19,4C18.4,4 18,4.4 18,5V18H17C16.4,18 16,17.6 16,17V16H5V5C5,3.3 6.3,2 8,2H19M8,6V8H15V6H8M8,10V12H14V10H8Z" />
</svg>`

export default function sidebar() {
    const side = document.createElement("div");
    side.classList.add("sidebar");

    const header = document.createElement("h1");
    header.textContent = "Quester"

    const subheader = document.createElement("h5");
    subheader.textContent = "A to-do app with a touch of RPG elements"

    const headerWrapper = document.createElement("div");
    headerWrapper.classList.add("sidebar-header");
    headerWrapper.appendChild(header);
    headerWrapper.appendChild(subheader);

    side.appendChild(headerWrapper);

    const sidebarWrapper = document.createElement("div");
    sidebarWrapper.classList.add("sidebar-wrapper");
    side.appendChild(sidebarWrapper);

    sidebarWrapper.appendChild(sidebarItem(iconHome, "Home"));
    sidebarWrapper.appendChild(sidebarItem(iconBoard, "All Quests"));

    // for future custom project/quest types
    //sidebarWrapper.appendChild(sidebarItem(iconScroll, "Custom"));

    return side;
}