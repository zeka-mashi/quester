export default function home() {
    const page = document.createElement("div");
    page.classList.add("home", "flex-c")

    const headerWrapper = document.createElement("div");
    page.appendChild(headerWrapper);
    const header = document.createElement("h1");
    header.classList.add("home-header");
    header.textContent = "Welcome to";
    const headerName = document.createElement("h1");
    headerName.textContent = "Quester";
    headerName.classList.add("home-header-unique")
    headerWrapper.append(header, headerName);

    const bodyWrapper = document.createElement("div");
    bodyWrapper.classList.add("body-wrapper");
    page.appendChild(bodyWrapper);
    const description = document.createElement("p");
    description.innerHTML = `Quester is a fun web app to manage your to-do items
    in RPG-styled messaging. Create to-do's with <b>action elements</b>, start new 
    <b>adventuring boards</b>, and <b>defeat bosses</b>.<br><br>It looks like you don't have 
    any quests (todos) added yet. Try adding a new board and add your first quest!`;
    bodyWrapper.appendChild(description);

    return page;
}