
//Conditionals

const access = false;

if(access) {
    console.log(`Yes it's true!`)
} else {
    console.log(`No it's not dude..`)
};


function hasAccess() {
    const age = 110;

    if(age < 18) {
        alert(`Hey boy! You don't have any access to our site.`)
    } else if(age == 18) {
        alert(`Hey you're 18 but give yourself som etime to settle down first!`)
    } else if(age > 18 && age <= 90) {
        alert('Welcome boi. Enjoy!')
    } else {
        
        alert('Good bye, alien.')
    }
};

hasAccess();

