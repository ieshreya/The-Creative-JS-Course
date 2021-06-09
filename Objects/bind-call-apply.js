const person = {
  fName: 'Shreya',
  lName: 'Purohit',
  getName() {
    console.log(this.fName + this.lName);
  }
};
// person.getName();


function registerUser(country, lang) {
  // console.log(this.lName);
  this.getName();
  console.log(`My name is ${person.fName} I live in ${country} and I speak ${lang}`);
}

// BIND
const register = registerUser.bind(person);
register('Albama', 'Hindi');


// CALL
registerUser.call(person, 'India', 'Hindi');

// APPLY
registerUser.apply(person, ['India', 'Hindi']);
