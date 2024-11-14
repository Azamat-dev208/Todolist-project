const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
document.getElementById("addTodoBtn").onclick = function(){
    if (todoInput.value !== ""){
        const todoItem = document.createElement("li");
        todoItem.innerText = todoInput.value;
        todoList.appendChild(todoItem);
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Delete";
        todoItem.appendChild(removeBtn);
        removeBtn.onclick = ()=>{
            todoList.removeChild(todoItem);
        }
        todoInput.value = "";
    }
    else{
        alert("Write");
    }
}