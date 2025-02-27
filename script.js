document.addEventListener("DOMContentLoaded", () => {
    generateSpreadsheet();
});

function generateSpreadsheet() {
    const spreadsheet = document.getElementById("spreadsheet");

    for (let i = 0; i < 200; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("contenteditable", "true");
        spreadsheet.appendChild(cell);
    }
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

function printSpreadsheet() {
    let printWindow = window.open("", "_blank");
    printWindow.document.write("<html><head><title>Spreadsheet</title></head><body>");
    printWindow.document.write(document.getElementById("spreadsheet").outerHTML);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
}
document.addEventListener("DOMContentLoaded", () => {
    generateHeaders();
});

function generateHeaders() {
    let columnHeader = document.querySelector(".column-header");

    for (let i = 1; i <= 10; i++) {
        let colDiv = document.createElement("div");
        colDiv.classList.add("column");
        colDiv.textContent = String.fromCharCode(64 + i);

        let resizer = document.createElement("div");
        resizer.classList.add("resizer");
        resizer.addEventListener("mousedown", startResizing);
        
        colDiv.appendChild(resizer);
        columnHeader.appendChild(colDiv);
    }
}

function startResizing(event) {
    let column = event.target.parentElement;
    let startX = event.clientX;
    let startWidth = column.offsetWidth;

    function resize(event) {
        let newWidth = startWidth + (event.clientX - startX);
        column.style.width = `${newWidth}px`;
    }

    function stopResizing() {
        document.removeEventListener("mousemove", resize);
        document.removeEventListener("mouseup", stopResizing);
    }

    document.addEventListener("mousemove", resize);
    document.addEventListener("mouseup", stopResizing);
}
