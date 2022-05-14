import "./style.css";
import sidebar from "./components/sidebar.js";

export default function app() {
    const app = document.createElement("div");
    app.classList.add("container");

    app.appendChild(sidebar());


    const main = document.createElement("div");
    main.classList.add("main");
    app.appendChild(main);

    return app;
}

document.getElementsByTagName("body")[0].appendChild(app());