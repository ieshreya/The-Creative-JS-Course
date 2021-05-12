// Collections and nodeLists

// const collectionItems = document.getElementsByClassName('item');
// const nodeItems = document.querySelectorAll('.item'); 

// console.log(collectionItems);
// console.log(nodeItems);



// const nodeItems = document.querySelector('#todo'); 
// console.log(nodeItems.childNodes);     //access only child nodes //will show empty spaces, lines, any comments and all of the nodes.
// console.log(nodeItems.children);        //access only element nodes


/* ACCESSING VALUES THROUGH FOR LOOP IS POSSIBLE ONLY BY QUERY SELECTOR METHOD:

// Using for loop:
const nodeItems = document.querySelectorAll('.item'); 
for(item of nodeItems) {
    console.log(nodeItems);
}

// Using forEach loop:
nodeItems.forEach(function(item){
    console.log(item);
});
*/

/* ACCESSING VALUES THROUGH FOR LOOP IS NOT POSSIBLE BY getElement METHOD:

collectionItems.forEach(function(item){
    console.log(item);
});
// that doesn't works!

*/




// Adding elements in HTML Doc through JS:
const collectionItems = document.getElementsByClassName('item');
const todoList = document.getElementById('todo');
const numTodo = document.getElementsByTagName('h2')[0];

const newItem = document.createElement('li');
newItem.classList.add('item');
newItem.innerText = 'Item 3';

const anotherItem = document.createElement('li');
anotherItem.classList.add('item');
anotherItem.innerText = 'Item 4';

todoList.appendChild(newItem);
todoList.appendChild(anotherItem);

// Updating the no. of todos in the list automatically:
numTodo.innerText = collectionItems.length;

// !! 👆 This dynamically updation is not possible using querySelector methods..

