console.log('load contents');

export function genTodoList(){
    let fullTodoList = JSON.parse(localStorage.getItem('todoList'));
    let todoBox = document.querySelector('.todoList>ul')
    let todoCard

    //reset todolist
    todoBox.innerHTML=''

    for (let todo of fullTodoList){
        todoCard=`<li><div class="card"><p class="cardTitle">${todo['todoTitle']}</p><p>${todo['description']}</p></div></li>`
            
        todoBox.innerHTML+=todoCard;
    }
}
