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

    // creates the task listed as a cookie
    createCookies();
    console.log(document.cookie);
});


function createCookies(){

    // list to store cookies
    const taskList = [];

    // selects list items, adds to taskList
    taskListNode.querySelectorAll("li").forEach((task) => {
        taskList.push(task.textContent);
    });

    // calls setCookie function to create the cookies using taskList
    setCookie("tasks", taskList, 7);
}


// function to set cookies 
function setCookie(name, value, days){
    let expires = "";

    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = `; expires ${date.toUTCString()}`

    }

    document.cookie = `${name}=${value}${expires}`;
}