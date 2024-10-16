let rows;
let columns;
let table = document.createElement("table")
const submit = document.getElementById("btn")
let container = document.getElementsByClassName("container")

submit.addEventListener("click", function(e){
    e.preventDefault();

    rows = document.getElementById("rows").value;
    
    columns = document.getElementById("column").value;
    
    for (let i = 1; i <= rows; i++) {
        let row = document.createElement("tr");
        for (let j = 1; j <= columns; j++) {
            let column = document.createElement("td")
            column.style.padding = "10px";
            column.style.border = "solid"
            column.innerHTML = "Explorin";
            row.append(column)
        }
        let br = document.createElement("br")
        table.append(row)
        
        
    }
    container[0].append(table);
})

let reset = document.getElementById("reset-btn")
reset.addEventListener("click",(e) => {
    table.remove()
    table.innerHTML="";
})


