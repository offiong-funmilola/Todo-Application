let deleteButtons;
let lastDeleteButton;
let editButtons;
let lastEditButton;
let edittedValue;
let updateButtons;
let lastUpdateButton;
let todoInputField;
let todoValue;

function submitHandler(e) {
    e.preventDefault();
    todoInputField = document.getElementById("todo-input");
    todoValue = todoInputField.value;
    todoListItems(todoValue);
    collectButtons();
    todoInputField.value = '';
}
let form = document.getElementById("form");

function todoListItems(todo) {
    let todoListWrapper = document.getElementById("todo-list-wrapper");
    let li = document.createElement("li");
    li.innerHTML = `
        <div class="todo-container">
            <input type="checkbox">
            <span class="text">${todo}</span>
            <div class="update-container hidden">
                <input type="text" value="${todo}" class="text">
                <button type="button" class="update-btn">Update</button>
            </div>
            <div class="btn-container">
                <button type="button" id="edit" class="action-btn edit-btn">Edit</button>
                <button type="button" id="delete" class="action-btn delete-btn">Delete</button>
            </div>
        </div>
    `
    todoListWrapper.appendChild(li);
    li.classList.add("todo-list");
    
}

form.addEventListener("submit", submitHandler);

function deleteTodo(e) {
    e.target.parentNode.parentNode.parentNode.remove();
}
function editTodo(e) {
    let editButton = e.target;
   e.target.parentNode.classList.add("hidden");
   e.target.parentNode.previousElementSibling.previousElementSibling.classList.add("hidden");
   e.target.parentNode.previousElementSibling.classList.remove('hidden');
    
}
function updateTodo(e) {
     let updateButton = e.target;
     e.target.parentNode.previousElementSibling.innerHTML = e.target.previousElementSibling.value;
     e.target.parentNode.previousElementSibling.classList.remove("hidden");
     e.target.parentNode.nextElementSibling.classList.remove("hidden");
     e.target.parentNode.classList.add("hidden")
}
function collectButtons() {
    deleteButtons = document.querySelectorAll(".delete-btn");
    lastDeleteButton = deleteButtons[deleteButtons.length - 1];
    //console.log(lastDeleteButton);
    lastDeleteButton.addEventListener("click", deleteTodo);
    editButtons = document.querySelectorAll(".edit-btn");
    //console.log(editButtons);
    lastEditButton = editButtons[editButtons.length - 1];
    lastEditButton.addEventListener("click", editTodo);
    //console.log(lastEditButton);
    updateButtons = document.querySelectorAll(".update-btn");
    lastUpdateButton = updateButtons[updateButtons.length - 1];
    lastUpdateButton.addEventListener("click", updateTodo);

}