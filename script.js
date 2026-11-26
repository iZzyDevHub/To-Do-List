const addButton = document.getElementById("add-task-btn");
const taskinput = document.getElementById("taskInput");
const taskList = document.getElementById("task-list-output");

taskList.innerHTML = localStorage.getItem("myTasks") || "";

taskList.querySelectorAll(".circle-bullet").forEach(bullet => {
    bullet.addEventListener('change', () => {
        bullet.parentElement.classList.toggle("completed");
        bullet.toggleAttribute("checked");
        localStorage.setItem("myTasks", taskList.innerHTML);
    })
})

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
    const delebtn = document.createElement('button');
    delebtn.textContent = 'Delete';
    delebtn.classList.add('delete-btn');




    bullet.addEventListener('change', () => {
        newLine.classList.toggle("completed");
        bullet.toggleAttribute("checked");
        localStorage.setItem("myTasks", taskList.innerHTML);
    });

    const textNode = document.createTextNode(taskinput.value);


    newLine.appendChild(bullet);
    newLine.appendChild(textNode);
    newLine.appendChild(delebtn);
    taskList.appendChild(newLine);
    localStorage.setItem("myTasks", taskList.innerHTML);
    taskinput.value = "";
})

taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')){
        event.target.parentElement.remove();
        localStorage.setItem("myTasks", taskList.innerHTML);
    }
})

