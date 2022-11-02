import css from "./style.css";
import * as modalFunctions from "./modalFunctions.js"
import * as loadContents from "./loadContents.js"

console.log('index.js [ok]');

let categoryName
let todoToEditIndex

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
    modalConfirmBtn.style.display='flex';
    modalConfirmEditBtn.style.display='none';
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
    loadContents.genTodoList(); 
}

/**Delete a todo by its index from the localStorage*/
function deleteTodo(index){
    let storedTodos = JSON.parse(localStorage.getItem('todoList'));
    storedTodos.splice(index,1);
    localStorage.setItem('todoList',JSON.stringify(storedTodos));
}

function editTodo(e){
    let ulElement = e.target.parentElement.parentElement.parentElement;
    let indexLi = [...ulElement.children].indexOf(e.target.parentElement.parentElement);
    todoToEditIndex = indexLi;
    let fullTodoList = JSON.parse(localStorage.getItem('todoList'));
    modalFunctions.populateModal(fullTodoList[indexLi], form);
    modalConfirmBtn.style.display='none';
    modalConfirmEditBtn.style.display='flex';
}

function editTodoOnDb(){
    console.log('edit todo on db')
    let index = todoToEditIndex;
    let storedTodos = JSON.parse(localStorage.getItem('todoList'));
    let newData = modalFunctions.modalConfirm(form);
    storedTodos[index] = newData;
    localStorage.setItem('todoList',JSON.stringify(storedTodos));
    modalConfirmEditBtn.style.display='none';
    modalConfirmBtn.style.display='flex';
    loadContents.genTodoList();
}

//start to listen to buttons click
//elements
const nav = document.querySelectorAll('.category');
const addTodoBtn = document.querySelector('.btnFloat');
const modalCloseBtn = document.querySelector('.closeBtn');
const modalConfirmBtn = document.querySelector('.confirm');
const modalConfirmEditBtn = document.querySelector('.confirmEditBtn');
const form = document.querySelector('.stdForm');
const todoList = document.querySelector('.todoList>ul');


//listeners
for(let element of nav){
    element.addEventListener('click',selectList);
}

addTodoBtn.addEventListener('click',addTodo);
modalCloseBtn.addEventListener('click',modalFunctions.toggleModal);
modalConfirmBtn.addEventListener('click',() => newTodo(modalFunctions.modalConfirm(form)));
modalConfirmEditBtn.addEventListener('click', editTodoOnDb);
todoList.addEventListener('click',editTodo);

startDb()//inicia db oom 0 todos.


// ===========================================
// ===========================================
// ONDE EU PAREI:
// criar função parar gerar lista de todos no html de acordo com DB.