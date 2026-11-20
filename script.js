const addButton = document.getElementById("add-task");
const taskinput = document.getElementById("task-adder");
const taskList = document.getElementById("task-list");


addButton.addEventListener("click", () => {
    const newLine = document.createElement('p');
    if (newLine === ""){
        alert("Input something :(")
    }else {
        list.textContent = newLine;
    }
})

