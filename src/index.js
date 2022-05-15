import "./style.css";
import sidebar from "./components/sidebar.js";
import home from "./components/home.js";
import boardModal from "./components/boardModal.js";

export default function app() {
    const app = document.createElement("div");
    app.classList.add("container");

    app.appendChild(sidebar());


    const main = document.createElement("div");
    main.classList.add("main");
    app.appendChild(main);

    main.appendChild(home());

    return app;
}

document.getElementsByTagName("body")[0].appendChild(app());