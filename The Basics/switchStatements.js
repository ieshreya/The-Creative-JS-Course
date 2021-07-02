// Switch Statements:
const text = 'berries';

switch (text) {
    case 'banana':
        console.log('Hey one.');
        fruitNum = 1;
        break;
    case 'apple':
        console.log('Hey two.');
        fruitNum = 2;
        break;
    case 'berries':
        fruitNum = 3;
        console.log('Hey three.');
        break;
    default:
        console.log('Nothing happens.')
}


// An Example Game
let yourAns = prompt(`Hey whats'up! Tell me a fruit and I'll tell you a fact about that!`);
userInput = yourAns.toLowerCase();

switch (userInput) {
    case 'kiwi':
        console.log('It is a rare fruit');
        break;
    case 'apple':
        console.log('Doctors recommends it all the time.');
        break;
        case 'banana':
        console.log('I do not like bananas');
        break;
        default:
        console.log('Sorry, this fruit is unknown to me for now.')            
        break;
    }














