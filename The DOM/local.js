// To access these items in general, go to 'Application'->'Storage' section of 'Chrome Dev Tools' -> find the file!

// LOCAL STORAGE:
localStorage.setItem('todo', 'buy a bread'); // (We can only pass strings to local storage.)
localStorage.setItem('user', 'Stephy');
localStorage.setItem('user', 'Shreya');
// localStorage.clear();


// Session STORAGE:
sessionStorage.setItem('todo-list', 'go to supermarket');


// Getting our values back:
const logUser = localStorage.getItem('user');
console.log(logUser);
console.log(typeof logUser);


const todoList = ['shopping', 'go to store', 'buy some stickers', 'eat food'];
localStorage.setItem('todos', JSON.stringify(todoList));  //JSON converts it into a string.

const valueBack = JSON.parse(localStorage.getItem('todos'));  //JSON turns it back to an array.

console.log(valueBack);
