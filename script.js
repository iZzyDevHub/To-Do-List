const addButton = document.getElementById("add-task");
const taskinput = document.getElementById("task-adder");
const taskList = document.getElementById("task-list");


addButton.addEventListener("click", () => {
    let userInput = taskinput.value.trim();
    if (userInput === ""){
        alert("Input something :(")
    }else {
        list.textContent = userInput;
    }
})

