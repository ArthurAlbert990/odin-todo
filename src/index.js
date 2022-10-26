import css from "./style.css";

console.log('index.js [ok]');

let categoryName

//functions
function selectList(e){
    categoryName = (e.target.textContent.toLowerCase());
    console.log(categoryName)

    switch (categoryName) {
        case 'today': 
            console.log('Load todo list for today')
            break;
        case 'upcoming': 
            console.log('Load todo list for upcoming')
            break;
        case 'someday': 
            console.log('Load todo list for someday')
            break;
        case 'anytime': 
            console.log('Load todo list for anytime')
            break;
        default:
            break;
    }
}

//start to listen to buttons click
//elements
const nav = document.querySelectorAll('.category')

//listeners

for(let element of nav){
    element.addEventListener('click',selectList);
}