import css from "./style.css";
import * as modalFunctions from "./modalFunctions.js"

console.log('index.js [ok]');

let categoryName

//functions
function selectList(e){
    categoryName = (e.target.textContent.toLowerCase());
    console.log(categoryName);

    switch (categoryName) {
        case 'today': 
            console.log('Load todo list for today');
            break;
        case 'upcoming': 
            console.log('Load todo list for upcoming');
            break;
        case 'someday': 
            console.log('Load todo list for someday');
            break;
        case 'anytime': 
            console.log('Load todo list for anytime');
            break;
        default:
            break;
    }
}

function addTodo() {
    modalFunctions.toggleModal();
}

/** Starts the db (localStorage) with an empty todo key*/
function startDb(){
    localStorage['todoList']='[]';
}

/** Add a new todo to the localStorage*/
function newTodo(data){
    console.log('create new todo:');
    console.log(data);
    let storedTodos = JSON.parse(localStorage.getItem('todoList'));
    storedTodos.push(data);
    localStorage.setItem('todoList',JSON.stringify(storedTodos));
}

/**Delete a todo by its index from the localStorage*/
function deleteTodo(index){
    let storedTodos = JSON.parse(localStorage.getItem('todoList'));
    storedTodos.splice(index,1);
    localStorage.setItem('todoList',JSON.stringify(storedTodos));
}

//start to listen to buttons click
//elements
const nav = document.querySelectorAll('.category');
const addTodoBtn = document.querySelector('.btnFloat');
const modalCloseBtn = document.querySelector('.closeBtn');
const modalConfirmBtn = document.querySelector('.confirm');
let form = document.querySelector('form');


//listeners
for(let element of nav){
    element.addEventListener('click',selectList);
}

addTodoBtn.addEventListener('click',addTodo);
modalCloseBtn.addEventListener('click',modalFunctions.toggleModal);
modalConfirmBtn.addEventListener('click',() => newTodo(modalFunctions.modalConfirm(form)));

startDb()//inicia db oom 0 todos.

// ===========================================
// ===========================================
// ONDE EU PAREI:
// função para editar todo