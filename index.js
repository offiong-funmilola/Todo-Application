     function submitHandler(e) {
        e.preventDefault();
        let todoInputField = document.getElementById("todo-input");
        let todoValue = todoInputField.value;
        todoListItems(todoValue);
        todoInputField.value = '';
    }
    let form = document.getElementById("form");
    
    function todoListItems(todo) {
        let todoListWrapper = document.getElementById("todo-list-wrapper");
        let li = document.createElement("li");
        li.innerText = todo;
        todoListWrapper.appendChild(li);
    }
    form.addEventListener("submit", submitHandler);