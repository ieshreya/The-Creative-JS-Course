
// Objects:
const user2 = {
    name: "Shreya",
    age: 19,
    isCool: false,
    isNerd: true,
    greet: function() {
        console.log('Hi there, I am Shreya. It was nice meeting you!')
    }
};

console.log(user2);

console.log(user2.name);
console.log(user2.isNerd);

// Methods? - Mehthods are just functions that are inside an object. Like in above object 'user2', 'greet' function is a method.
user2.greet();

