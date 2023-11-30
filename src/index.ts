interface Todo {
    inputtext:string,
    completed: boolean
}

const todo: Todo[] = readTodo()
todo.forEach(createTodo)

const btn = document.getElementById("btn") as HTMLButtonElement
const input = document.getElementById("todoinput") as HTMLInputElement
const form = document.querySelector("form")
const list = document.getElementById("todolist")

function readTodo(): Todo[]{
    const todoJSON = localStorage.getItem("todo")
    if(todoJSON === null) return []
    return JSON.parse(todoJSON)
}


function handleSubmit(e : SubmitEvent){
    e.preventDefault()
    const AddTodo: Todo = {
        inputtext:input.value,
        completed:false,
    }
    createTodo(AddTodo)
    todo.push(AddTodo)

    localStorage.setItem("todo", JSON.stringify(todo))

    input.value = ""
    
}

function createTodo(todo:Todo){
    const newLI = document.createElement("li")
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox" 
    newLI.append(todo.inputtext)
    newLI.append(checkbox)
    list?.append(newLI)

}

form?.addEventListener("submit", handleSubmit)


// btn?.addEventListener("click", function(){
//     alert(input.value)
//     input.value
// })