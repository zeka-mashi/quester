export default function priorityPicker() {
    const dropdownPriority = document.createElement("select");

    const priorityLow = document.createElement("option");
    priorityLow.setAttribute("value", "Low");
    priorityLow.selected = true;
    priorityLow.textContent = "Low";
    dropdownPriority.appendChild(priorityLow);

    const priorityMed = document.createElement("option");
    priorityMed.setAttribute("value", "Medium");
    priorityMed.textContent = "Medium";
    dropdownPriority.appendChild(priorityMed);

    const priorityHigh = document.createElement("option");
    priorityHigh.setAttribute("value", "High");
    priorityHigh.textContent = "High";
    dropdownPriority.appendChild(priorityHigh);

    return dropdownPriority;
}
