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

    // Creates a "remove" button that removes a task
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    // event listener for remove task
    removeButton.addEventListener("click", () => {
        listItem.remove(); // removes the task from the list
        createCookies(); // updates the cookies from the removed task
    });
    listItem.appendChild(removeButton) // appends the remove button on the list item
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

// function that deletes a cookie by setting the expiration date to a past date.
function deleteCookie(name) {
    document.cookie = `${name}=; expires=Mon, 01 Nov 1965 00:00:00 UTC; path=/;`;
}