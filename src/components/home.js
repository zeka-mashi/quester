export default function home() {
    const page = document.createElement("div");
    page.classList.add("home", "flex-c");

    const headerWrapper = document.createElement("div");
    page.appendChild(headerWrapper);
    const header = document.createElement("h1");
    header.classList.add("home-header");
    header.textContent = "Welcome to";
    const headerName = document.createElement("h1");
    headerName.textContent = "Quester";
    headerName.classList.add("home-header-unique");
    headerWrapper.append(header, headerName);

    const bodyWrapper = document.createElement("div");
    bodyWrapper.classList.add("body-wrapper");
    page.appendChild(bodyWrapper);
    const description = document.createElement("p");
    description.innerHTML = `Quester is a #todo web app to manage your todo items. 
    To put a small spin on it, they're called <b>quests</b> and are assigned to 
    <b>adventure boards</b>. Don't worry if you aren't familiar with RPG terms -- 
    it's simply to-dos grouped by categories.<br><br>Quester features some helpful 
    features that makes your questing easier: change up todos with full 
    <b>editing</b> functionality and see everything in <b>clean views</b>!<br><br>
    This is your Home. You can see all your quests from all your active boards here.
    <br><br>It looks like you don't have any quests added yet. Try adding a new board 
    and add your first one!`;
    bodyWrapper.appendChild(description);

    return page;
}
