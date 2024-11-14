const addTaskButtonNode = document.querySelector("#addTask");
const taskInputNode = document.querySelector("#taskInput");
const taskListNode = document.querySelector("#tasks");

// event listener for add task button
addTaskButtonNode.addEventListener("click", () => {
    // sets task to whatever text is inputted
    let task = taskInputNode.value;

    // creates a li
    let listItem = document.createElement("li");

    // sets text of list item to inputted value
    listItem.textContent = task;

    // appends li to ul
    taskListNode.appendChild(listItem);

    // clears tasks input box every time you add the task
    taskInputNode.value = "";
    createCookies();
    console.log(document.cookie);
});


function createCookies(){
    const taskList = [];
    taskListNode.querySelectorAll("li").forEach((task) => {
        taskList.push(task.textContent);
    });
    setCookie("task", taskList, 7);
}

function setCookie(name, value, days){
    let expires = "";

    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = `; expires ${date.toUTCString()}`

    }

    document.cookie = `${name}=${value}${expires}`;
}