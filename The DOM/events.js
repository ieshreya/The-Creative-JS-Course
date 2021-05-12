const button = document.querySelector('#submit');
const todoList = document.querySelector('#todo');
const items = todoList.children;
const numTodo = document.querySelector('.numTodo b');
const myTitle = document.querySelector('.myTitle');

// Click, Scroll and Resizing the browser
// Attach an event listener.

function addItem(){
    const newItem = document.createElement('li');
    newItem.classList.add('item');
    newItem.innerText = `Item ${items.length + 1}`;

    todoList.appendChild(newItem);
    numTodo.innerText = items.length;
}

button.addEventListener('click', addItem);


// Changing CSS Styles using JS :
// button.addEventListener('click', function(){
//     myTitle.style.color = 'red';
//     myTitle.style.fontSize = '80px';
// });