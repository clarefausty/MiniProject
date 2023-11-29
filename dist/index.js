"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
function handleSubmit(e) {
    e.preventDefault();
    const newToDo = input.value;
    const newLI = document.createElement("li");
    newLI.append(newToDo);
    list === null || list === void 0 ? void 0 : list.append(newLI);
}
form === null || form === void 0 ? void 0 : form.addEventListener("submit", handleSubmit);
// btn?.addEventListener("click", function(){
//     alert(input.value)
//     input.value
// })
