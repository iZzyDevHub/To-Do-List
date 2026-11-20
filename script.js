const addButton = document.getElementById("add-task-btn");
const taskinput = document.getElementById("taskInput");
const taskList = document.getElementById("task-list-output");


addButton.addEventListener("click", () => {
    const newLine = document.createElement('p');
    if (taskinput.value.trim() === ""){
        alert("Input something :(")
    }else {
        newLine.textContent = taskinput.value;
        taskList.appendChild(newLine);
        taskinput.value = "";
    }
})

