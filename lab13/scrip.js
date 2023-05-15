function createTask() {
    const taskValue = document.getElementById("textInput").value
    const task = new Task(taskValue, "ToDo")
    let list = localStorage.getItem("list")
    if (list === null) {
        list = [task]
        const listStr = JSON.stringify(list)
        localStorage.setItem("list", listStr)
    } else {
        let listJson = JSON.parse(list)
        let taskList = []
        for (let i = 0; i < listJson.length; i++) {
            const obj = listJson[i]
            const objTask = new Task(obj.desc, obj.status)
            taskList.push(objTask)
        }
        taskList.push(task)
        const listStr = JSON.stringify(taskList)
        localStorage.setItem("list", listStr)
        const inputElement = document.getElementById("textInput");
        inputElement.value = "";
    }
    renderAll()
}
function removeTask(task) {
    let list = localStorage.getItem("list");
    if (list !== null) {
    const listJson = JSON.parse(list);
    listJson.splice(task, 1);
    list = JSON.stringify(listJson);
    localStorage.setItem("list", list);
    renderAll();
    }
}
function renderAll() {
    const divTodo = document.getElementById("containerToDo")
    const divDoing = document.getElementById("containerDoing")
    const divDone = document.getElementById("containerDone")

    divTodo.innerHTML = ""
    divDoing.innerHTML = ""
    divDone.innerHTML = ""
    let list = localStorage.getItem("list")
    if (list !== null) {
        let listJson = JSON.parse(list)
        for (let i = 0; i < listJson.length; i++) {
            const obj = listJson[i]
            const objTask = new Task(obj.desc, obj.status)
            if (objTask.status === "ToDo") {
                divTodo.innerHTML += objTask.html(i)
            } else if (objTask.status === "DOING") {
                divDoing.innerHTML += objTask.html(i)
            } else {
                divDone.innerHTML += objTask.html(i)
            }
        }
    }
}
function updateTask(pos) {
    let list = localStorage.getItem("list")
    let listJson = JSON.parse(list)
    let task = listJson[pos]
    if (task.status === "ToDo") {
        task.status = "DOING"
    } else if (task.status === "DOING") {
        task.status = "DONE"
    }

    let taskList = []
    for (let i = 0; i < listJson.length; i++) {
        const obj = listJson[i]
        const objTask = new Task(obj.desc, obj.status)
        taskList.push(objTask)
    }
    const listStr = JSON.stringify(taskList)
    localStorage.setItem("list", listStr)
    renderAll()
}

function downTask(pos) {
    let list = localStorage.getItem("list")
    let listJson = JSON.parse(list)
    let task = listJson[pos]
    if (task.status === "DONE") {
        task.status = "DOING"
    } else if (task.status === "DOING") {
        task.status = "ToDo"
    }

    let taskList = []
    for (let i = 0; i < listJson.length; i++) {
        const obj = listJson[i]
        const objTask = new Task(obj.desc, obj.status)
        taskList.push(objTask)
    }
    const listStr = JSON.stringify(taskList)
    localStorage.setItem("list", listStr)
    renderAll()
}
renderAll()