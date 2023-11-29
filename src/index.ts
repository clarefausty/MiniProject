interface Todo {
    name:string,
    completed: boolean
}

const todo: Todo[] = []

const btn = document.getElementById("btn") as HTMLButtonElement
const input = document.getElementById("todoinput") as HTMLInputElement
const form = document.querySelector("form")
const list = document.getElementById("todolist")

function handleSubmit(e : SubmitEvent){
    e.preventDefault()
    const AddTodo: Todo = {
        name:input.value,
        completed:false,
    }
    todo.push(AddTodo)
    const newToDo = input.value
    const newLI = document.createElement("li")
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox" 
    newLI.append(newToDo)
    newLI.append(checkbox)
    list?.append(newLI)

    input.value = ""
    
}


form?.addEventListener("submit", handleSubmit)


// btn?.addEventListener("click", function(){
//     alert(input.value)
//     input.value
// })