let todo = [];
let completed = [];
let flagComplete = 0;
// function to add items in the todo list
function addItem() {
    const btn = document.getElementById("addbtn");
    btn.textContent = "Add";
    let todoItem = document.getElementById("new-task").value;
    if (flagComplete == 1) {
        completed.push(todoItem);
        displayCompleted();
        flagComplete = 0;
        console.log(completed);
    } else {
        todo.push(todoItem);
        displayTodo();
    }
}
// function to dispay the todo list
function displayTodo() {
    let str = "";
    let i = 0;
    todo.forEach(element => {
        str += "<li><input type='checkbox' id=" + i + " onclick='completedTask(this.id)'><label>" + element + "</label><input type='text'><button id='" + i + "' onclick='updateTodo(this.id)'>Edit</button><button id='delete" + i + "' onclick='deleteItem(this.id)'>Delete</button></li>";
        i++;
    });
    document.getElementById("incomplete-tasks").innerHTML = str;
}
// function to update the todo list
function updateTodo(id) {
    const btn = document.getElementById("addbtn");
    btn.textContent = "Update";
    document.getElementById("new-task").value = todo[id];
    deleteItem("delete" + id);
}
// function to update items in todo list
function deleteItem(id) {
    for (let i = 0, j = 0; i < todo.length; i++, j++) {
        if (("delete" + i) == id) {
            todo.splice(j, 1);
            j--;
        }
    }
    console.log(id);
    displayTodo();
}
// functions for completed tasks
function completedTask(id) {
    let index = 0;
    todo.forEach(element => {
        if (index == id) {
            completed.push(todo[id]);
            deleteItem("delete" + id);
        }
        index++;
    });
    let data = "";
    let i = 0;
    completed.forEach(element => {
        data += "<li><input type='checkbox' id=c" + i + " onclick='completedTaskRevert(this.id)' value=true><label>" + element + "</label><input type='text'><button id='" + i + "' onclick='updateTodoFromCompleted(this.id)'>Edit</button><button id='deletec" + i + "' onclick='deleteItemFromCompleted(this.id)'>Delete</button></li>";
        i++;
    });
    document.getElementById("completed-tasks").innerHTML = data;
}
// function to revert back the completed task to todo
function completedTaskRevert(id) {
    let delid = id.charAt(1);
    delid *= 1;
    todo.push(completed[delid]);
    deleteItemFromCompleted("deletec"+delid);
    displayTodo();
}
// function to delete item from completed tasks
function deleteItemFromCompleted(id) {
    for (let i = 0, j = 0; i < todo.length; i++, j++) {
        if (("deletec" + i) == id) {
            completed.splice(j, 1);
            j--;
        }
    }
    displayCompleted();
}
// function to update items in completed tasks
function updateTodoFromCompleted(id) {
    flagComplete = 1;
    const btn = document.getElementById("addbtn");
    btn.textContent = "Update";
    document.getElementById("new-task").value = completed[id];
    deleteItemFromCompleted("deletec" + id);
}
// function to display completed tasks
function displayCompleted() {
    let str = "";
    let i = 0;
    completed.forEach(element => {
        str += "<li><input type='checkbox' id=c" + i + " onclick='completedTaskRevert(this.id)'><label>" + element + "</label><input type='text'><button id='" + i + "' onclick='updateTodoFromCompleted(this.id)'>Edit</button><button id='deletec" + i + "' onclick='deleteItemFromCompleted(this.id)'>Delete</button></li>";
        i++;
    });
    document.getElementById("completed-tasks").innerHTML = str;
}



