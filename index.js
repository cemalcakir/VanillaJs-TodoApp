const todos = [];
const completed = [];

window.addEventListener("load", () => {
    renderPage();
    this.document.getElementById("btn").addEventListener("click", addTodo);
    this.document.getElementById("list").addEventListener("change", renderPage);
});

const renderPage = () => {
    const todoList = document.getElementById("todos");
    loadTodos(todoList);
    addEventListeners();
};


const loadTodos = (todoList) => {
    const list = checkOption();
    todoList.innerHTML = "";
    let id = 0;
    for (const todo of list) {
        const child = document.createElement("li");
        child.classList.add("todo");

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.classList.add("checkbox", "btn");
        checkBox.id = id;
        if (list === completed) {
            checkBox.checked = true;
        }
        child.appendChild(checkBox);

        const h3 = document.createElement("h3");
        h3.innerText = todo;
        child.appendChild(h3);

        const deleteItem = document.createElement("button")
        child.appendChild(deleteItem);
        deleteItem.classList.add("btn", "deleteBtn");
        deleteItem.id = id;
        deleteItem.innerText = "X";
        todoList.appendChild(child);

        id++;
    };
};

const checkOption = () => {
    const option = document.getElementById("list").value;
    if (option === "todos") {
        return todos;
    }
    return completed;
};


const addTodo = (e) => {
    const addTodo = document.getElementById("addTodo");
    todos.push(addTodo.value);
    addTodo.value = "";
    renderPage();
};


const addEventListeners = () => {
    let deleteButtons = this.document.getElementsByClassName("deleteBtn");
    Array.from(deleteButtons).forEach(function(deleteButton) {
        deleteButton.addEventListener("click", deleteTodo);
    });

    let completedButtons = this.document.getElementsByClassName("checkbox");
    Array.from(completedButtons).forEach(function(completedButton) {
        completedButton.addEventListener("click", completeTask);
    });
}

const deleteTodo = (e) => {
    const option = document.getElementById("list").value;
    if (option === "todos") {
        todos.splice(e.target.id, 1);
        renderPage();
    } else {
        completed.splice(e.target.id, 1);
        renderPage();
    }
}

const completeTask = (e) => {
    const option = document.getElementById("list").value;
    if (option === "todos") {
        const item = todos.splice(e.target.id, 1);
        completed.push(item);
        renderPage();
    } else {
        const item = completed.splice(e.target.id, 1);
        todos.push(item);
        renderPage();
    }
}


