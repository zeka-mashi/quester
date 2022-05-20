import "./style.css";
import sidebar from "./components/sidebar.js";
import home from "./components/home.js";
import { runSidebarChecks } from "./components/util";

export default function app() {
    const app = document.createElement("div");
    app.classList.add("container");

    app.appendChild(sidebar());


    const main = document.createElement("div");
    main.classList.add("main");
    main.setAttribute("data-board", "home");

    app.appendChild(main);

    main.appendChild(home());

    return app;
}

document.getElementsByTagName("body")[0].appendChild(app());
runSidebarChecks();