// For In While Loops

const user = {
    name : 'Shreya',
    age : 19,
    nationality : 'Indian',
    money : 'lol Zero',
    hobbies : ['coding', 'indie maker', 'reading', 'travel', 'exploring history', 'doing Math']

}

for (let x in user) {
    console.log(x);
}

// Method for accessing keys... method 1:
console.log(user.name);
console.log(user.hobbies);
console.log(user.name);
// Method 2:
console.log(user['age']);




