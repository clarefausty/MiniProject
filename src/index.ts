interface Todo {
    inputtext: string;
    completed: boolean;
}

const input = document.getElementById("todoinput") as HTMLInputElement;
const form = document.querySelector("form");
const list = document.getElementById("todolist");

const todo: Todo[] = readTodo();
todo.forEach(createTodo);

function readTodo(): Todo[] {
    const todoJSON = localStorage.getItem("todo");
    if (todoJSON === null) return [];
    return JSON.parse(todoJSON);
}

function saveChecked(){
    localStorage.setItem("todo", JSON.stringify(todo))
}

function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const addTodo: Todo = {
        inputtext: input.value,
        completed: false,
    };
    createTodo(addTodo);
    todo.push(addTodo);

    saveChecked();

    input.value = "";
}

function createTodo(todo: Todo) {
    const newLI = document.createElement("li");

    const checkbox = document.createElement("input");
    const clearButton = document.createElement("button");

    checkbox.type = "checkbox";
    checkbox.style.backgroundColor = "green"
    checkbox.checked= todo.completed
    checkbox.addEventListener("change", function(){
        todo.completed = checkbox.checked;
        saveChecked()
    })

    clearButton.textContent = "Clear";
    clearButton.addEventListener("click", () => {
        removeTodoItem(newLI);
    });

    newLI.append(todo.inputtext);
    newLI.append(checkbox);
    newLI.append(clearButton);
    list?.append(newLI);
}


function removeTodoItem(todoItem: HTMLLIElement) {
    const index = Array.from(list?.children || []).indexOf(todoItem);
    if (index !== -1) {
        list?.removeChild(todoItem);
        todo.splice(index, 1);
        localStorage.setItem("todo", JSON.stringify(todo));
    }
}

form?.addEventListener("submit", handleSubmit);
