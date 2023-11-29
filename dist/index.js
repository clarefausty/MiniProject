"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
function handleSubmit(e) {
    e.preventDefault();
    const newToDo = input.value;
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLI.append(newToDo);
    newLI.append(checkbox);
    list === null || list === void 0 ? void 0 : list.append(newLI);
    input.value = "";
}
form === null || form === void 0 ? void 0 : form.addEventListener("submit", handleSubmit);
// btn?.addEventListener("click", function(){
//     alert(input.value)
//     input.value
// })
