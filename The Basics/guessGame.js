// GOLD TIP: Before starting any JS Project, write it down what are you gonna do, what will be the steps, etc in top comments.

//Generate a random number  DONE!
// Guess the number, by user
// If wrong guess, guess it again(hint)
// If right, they win!

function guessGame() {  
    let randomNr = Math.floor(Math.random() * 11);   //to get numbers upto 10
    let guess;

    do{ 
        guess = prompt('Hey there, guess one number from 1-10');
        console.log(guess, randomNr);
        if (guess < randomNr) {
            console.log('Low guess');
        } else if (guess > randomNr) {
            console.log('Too High guess')
        }
    } while (guess != randomNr);        // this do loop will go only if we are guessing wrong. When we guess it right, it stops there!
    console.log('YOU WON!')
}


guessGame();
