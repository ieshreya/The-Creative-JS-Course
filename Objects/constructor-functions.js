// CONSTRUCTOR FUNCTIONS
function user(name, age) {
	this.name = name;
	this.age = age;
	this.getName = function() {
		console.log(this.name);
	}
}

const one = new user('Shreya', 19);
const two = new user('Samridh', 13);
console.log(one);
console.log(two);

one.getName();
two.getName();