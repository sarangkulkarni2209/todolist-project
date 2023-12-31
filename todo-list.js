const todoList = [];


function renderTodolist(){
    let todoListHTML = '';
    for(let i=0;i<todoList.length;i++){
        const todoObject = todoList[i];
        //const name = todoObject.name;
       // const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject
        const html = `
        <div>${name} </div>
        <div>${dueDate}</div>
        <button onclick="
            todoList.splice(${i},1);
            renderTodolist();
        " class="css-delete-button">Delete</button>
        
    `;
        todoListHTML += html;
    }

    document.querySelector('.js-list').innerHTML = todoListHTML;
}

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    todoList.push({
        name:name,
        dueDate: dueDate});
    console.log(todoList);
    inputElement.value = '';
    renderTodolist(); 
}



function handleCostKeyDowm(event){
if(event.key == 'Enter'){
    addTodo();
}
}