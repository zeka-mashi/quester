export default function home() {
    const page = document.createElement("div");
    page.classList.add("home", "flex-c");

    const headerWrapper = document.createElement("div");
    page.appendChild(headerWrapper);
    const header = document.createElement("h1");
    header.classList.add("home-header");
    header.textContent = "Welcome to";
    const headerName = document.createElement("h1");
    headerName.textContent = "#Todo";
    headerName.classList.add("home-header-unique");
    headerWrapper.append(header, headerName);

    const bodyWrapper = document.createElement("div");
    bodyWrapper.classList.add("body-wrapper");
    page.appendChild(bodyWrapper);
    const description = document.createElement("p");
    description.innerHTML = `#Todo is a web app to manage your todo items. 
    Create to-do's by different <b>boards</b>, change up todos 
    with extensive <b>editing</b> functionality, and see everything in a 
    <b>clean view</b>!<br><br>This is your Home. You can see all your todos 
    from all your active boards here.<br><br>It looks like you don't have 
    any todos added yet. Try adding a new board and add your first #todo!`;
    bodyWrapper.appendChild(description);

    return page;
}
