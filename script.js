const addButton = document.getElementById("add-task-btn");
const taskinput = document.getElementById("taskInput");
const taskList = document.getElementById("task-list-output");


addButton.addEventListener("click", () => {
    if (taskinput.value.trim() === ""){
        alert("Input something :(");
        return;
    }

    const newLine = document.createElement('p');
    newLine.classList.add('todo-line'); 
    const bullet = document.createElement('input');
    bullet.type = 'checkbox';
    bullet.classList.add('circle-bullet');


    bullet.addEventListener('change', () => {
        newLine.classList.toggle("completed");
    });

    const textNode = document.createTextNode(taskinput.value);


    newLine.appendChild(bullet);
    newLine.appendChild(textNode);
    taskList.appendChild(newLine);
    localStorage.setItem("myTasks", taskList.innerHTML);
    taskinput.value = "";
})

