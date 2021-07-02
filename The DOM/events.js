const button = document.querySelector('#submit');
const todoList = document.querySelector('#todo');
const items = todoList.children;
const numTodo = document.querySelector('.numTodo b');
const myTitle = document.querySelector('.myTitle');
const nameInput = document.querySelector('.input');

// Click, Scroll and Resizing the browser
// Attach an event listener.

function addItem(e) {
  e.preventDefault(); //prevents some natural browsers defaults like refreshing on submit btn in this case.
  const newItem = document.createElement('li');
  newItem.classList.add('item');
  newItem.innerText = nameInput.value;   //`Item ${items.length + 1}`;

  todoList.appendChild(newItem);
  numTodo.innerText = items.length;
  nameInput.value = '';      // deletes the previous value from the input.
  newItem.addEventListener('click', deleteItem);
};

button.addEventListener('click', addItem);

// Deleting an item.

function deleteItem(e) {
  // e.stopPropagation();        //used for event bubbling.
  e.target.remove();
}

for (item of items) {
  item.addEventListener('click', deleteItem);
}









// Changing CSS Styles using JS :
// button.addEventListener('click', function(){
//     myTitle.style.color = 'red';
//     myTitle.style.fontSize = '80px';
// });
