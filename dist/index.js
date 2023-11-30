"use strict";
const btn = document.getElementById("btn");
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
function handleSubmit(e) {
    e.preventDefault();
    const AddTodo = {
        inputtext: input.value,
        completed: false,
    };
    createTodo(AddTodo);
    todo.push(AddTodo);
    localStorage.setItem("todo", JSON.stringify(todo));
    input.value = "";
}
function createTodo(todo) {
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLI.append(todo.inputtext);
    newLI.append(checkbox);
    list === null || list === void 0 ? void 0 : list.append(newLI);
}
form === null || form === void 0 ? void 0 : form.addEventListener("submit", handleSubmit);
// btn?.addEventListener("click", function(){
//     alert(input.value)
//     input.value
// })
