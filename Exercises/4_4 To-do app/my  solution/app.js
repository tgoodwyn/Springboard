
function remove_node(targetId) {
    delete todolist_obj[targetId]
    localStorage.setItem("saved_todos", JSON.stringify(todolist_obj))
}

function complete_node(targetId) {
    todolist_obj[targetId].taskcomplete = true
    localStorage.setItem("saved_todos", JSON.stringify(todolist_obj))
}

function publish_node(taskid, saved_todos) {
    const todolist_el = document.querySelector("#todolist")
    const tasktext = saved_todos[taskid].tasktext
    const taskcomplete = saved_todos[taskid].taskcomplete
    todo_el = document.createElement("li")
    todo_el.innerText = tasktext
    todo_el.dataset.id = taskid
    todo_el.id = "todo_item"
    todo_rm_btn = document.createElement("button")
    todo_rm_btn.innerText = " X "
    todo_rm_btn.id = "remove_button"
    todo_el.append(todo_rm_btn)
    if (taskcomplete) todo_el.style.textDecoration = "line-through"
    todolist_el.appendChild(todo_el)
}

function create_node(tasktext) {
    let new_id = Object.keys(todolist_obj).sort().reverse()[0] + 1
    todolist_obj[new_id] = {tasktext: tasktext, taskcomplete: false}
    localStorage.setItem("saved_todos", JSON.stringify(todolist_obj))
    publish_node(new_id, todolist_obj)
}


function load_todos() {
    let saved_todos = JSON.parse(localStorage.getItem("saved_todos"))
    if (!saved_todos) saved_todos = {}
    for (let taskid of Object.keys(saved_todos).sort()) {
        publish_node(taskid, saved_todos)
    }
    return saved_todos
}


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#addtask")
    const input = form.querySelector("#newitem")
    todolist_obj = load_todos()

    form.addEventListener("submit", function (e) {

        e.preventDefault()
        tasktext = input.value
        create_node(tasktext)
    })
    
    todolist.addEventListener("click", function (e) {
        e.preventDefault()
        if (e.target.id === "todo_item") {
            let taskId = e.target.dataset.id
            complete_node(taskId)
            e.target.style.textDecoration = "line-through"
        } else if (e.target.id === "remove_button") {
            console.log(e.target.parentNode)
            let taskId = e.target.parentNode.dataset.id
            remove_node(taskId)
            e.target.parentNode.remove()
        }
    })

})





