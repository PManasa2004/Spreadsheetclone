document.addEventListener("DOMContentLoaded", () => {
    generateSpreadsheet();
    generateHeaders();
});

function generateSpreadsheet() {
    const spreadsheet = document.getElementById("spreadsheet");
    const numRows = 20;  // Set the number of rows
    const numCols = 10;  // Set the number of columns

    // Clear existing spreadsheet before generating new one
    spreadsheet.innerHTML = '';

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.setAttribute("contenteditable", "true");
            spreadsheet.appendChild(cell);
        }
    }

    // Adjust the spreadsheet grid layout dynamically
    spreadsheet.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`;
    spreadsheet.style.gridTemplateRows = `repeat(${numRows}, 40px)`;
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

function generateHeaders() {
    let columnHeader = document.querySelector(".column-header");
    const numCols = 10; // Number of columns (should match spreadsheet columns)

    // Clear existing headers before generating new ones
    columnHeader.innerHTML = '';

    for (let i = 1; i <= numCols; i++) {
        let colDiv = document.createElement("div");
        colDiv.classList.add("column");
        colDiv.textContent = String.fromCharCode(64 + i); // Converts 1 -> A, 2 -> B, etc.

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

document.addEventListener("DOMContentLoaded", () => {
    generateSpreadsheet();
    generateHeaders();
    generateRowNumbers();
});

function generateSpreadsheet() {
    const spreadsheet = document.getElementById("spreadsheet");
    const numRows = 20;  // Set the number of rows
    const numCols = 10;  // Set the number of columns

    // Clear existing spreadsheet before generating new one
    spreadsheet.innerHTML = '';

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.setAttribute("contenteditable", "true");
            spreadsheet.appendChild(cell);
        }
    }

    // Adjust the spreadsheet grid layout dynamically
    spreadsheet.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`;
    spreadsheet.style.gridTemplateRows = `repeat(${numRows}, 40px)`;
}

function generateHeaders() {
    const columnHeader = document.querySelector(".column-header");
    const numCols = 10; // Number of columns (should match spreadsheet columns)

    // Clear existing headers before generating new ones
    columnHeader.innerHTML = '';

    for (let i = 0; i < numCols; i++) {
        let colDiv = document.createElement("div");
        colDiv.classList.add("column");
        colDiv.textContent = String.fromCharCode(65 + i); // Converts 0 -> A, 1 -> B, etc.
        columnHeader.appendChild(colDiv);
    }
}

function generateRowNumbers() {
    const rowHeader = document.getElementById("rowHeader");
    const numRows = 20;  // Set the number of rows

    // Clear existing row numbers before generating new ones
    rowHeader.innerHTML = '';

    for (let i = 1; i <= numRows; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("row-number");
        rowDiv.textContent = i;  // Row numbers start from 1
        rowHeader.appendChild(rowDiv);
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
