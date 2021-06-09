// PROTOTYPES IN JS: a way to clean the mess of adding a new object to the main function everytime. It stops duplication and saves new objects to itself. For example:
// EXAMPLE 1
function User(name, age) {
	this.name = name;
	this.age = age;
}

// prototype here:
User.prototype.getUserName = function() {
		console.log(this.name);
};

const one = new User('Shreya', 19);
console.log(one);

one.getUserName();


// EXAMPLE 2
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr);

arr.pop()
console.log(arr);

arr.shift();
console.log(arr);

arr.push(7, 8);
console.log(arr);
