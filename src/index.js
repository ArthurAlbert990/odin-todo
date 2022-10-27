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
    console.log('addTodo, open modal');
}

//start to listen to buttons click
//elements
const nav = document.querySelectorAll('.category');
const addTodoBtn = document.querySelector('.btnFloat');
const modalCloseBtn = document.querySelector('.closeBtn');
const modalConfirmBtn = document.querySelector('.confirm');


//listeners
for(let element of nav){
    element.addEventListener('click',selectList);
}

addTodoBtn.addEventListener('click',addTodo);
modalCloseBtn.addEventListener('click',modalFunctions.modalClose);
modalConfirmBtn.addEventListener('click',modalFunctions.modalConfirm);
