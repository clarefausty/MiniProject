"use strict";
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
const todo = readTodo();
todo.forEach(createTodo);
function readTodo() {
    const todoJSON = localStorage.getItem("todo");
    if (todoJSON === null)
        return [];
    return JSON.parse(todoJSON);
}
function saveChecked() {
    localStorage.setItem("todo", JSON.stringify(todo));
}
function handleSubmit(e) {
    e.preventDefault();
    const addTodo = {
        inputtext: input.value,
        completed: false,
    };
    createTodo(addTodo);
    todo.push(addTodo);
    saveChecked();
    input.value = "";
}
function createTodo(todo) {
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    const clearButton = document.createElement("button");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveChecked();
    });
    clearButton.textContent = "Clear";
    clearButton.addEventListener("click", () => {
        removeTodoItem(newLI);
    });
    newLI.append(todo.inputtext);
    newLI.append(checkbox);
    newLI.append(clearButton);
    list === null || list === void 0 ? void 0 : list.append(newLI);
}
function removeTodoItem(todoItem) {
    const index = Array.from((list === null || list === void 0 ? void 0 : list.children) || []).indexOf(todoItem);
    if (index !== -1) {
        list === null || list === void 0 ? void 0 : list.removeChild(todoItem);
        todo.splice(index, 1);
        localStorage.setItem("todo", JSON.stringify(todo));
    }
}
form === null || form === void 0 ? void 0 : form.addEventListener("submit", handleSubmit);
