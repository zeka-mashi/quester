export default function datePicker() {
    const datePickerInput = document.createElement("input");
    datePickerInput.setAttribute("type", "date");
    datePickerInput.setAttribute("onkeydown", "return false");
    datePickerInput.required = true;

    //set min date
    const today = new Date();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    if (month < 10) {
        month = "0" + month.toString();
    }
    if (day < 10) {
        day = "0" + day.toString();
    }
    const minDate = today.getFullYear() + "-" + month + "-" + day;
    datePickerInput.setAttribute("min", minDate);

    return datePickerInput;
}
