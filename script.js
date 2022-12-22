'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
};


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    // In case the user doesn't pass a number
    if(!guess) {
        displayMessage('No number!');

    } else if (guess < 0 | guess > 20){
        displayMessage('You lost the game!');
    } else {
        
        // when player win the game
        if (guess === secretNumber) {
            console.log(guess);
            displayMessage('Correct Number!');
            document.querySelector('.number').textContent = secretNumber;

            // Changing the CCS style when player win
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            
            // setting new highscore
            if (highscore < score) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }

        // when guess is too high or too low
        } else {
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low');
            score--;
            document.querySelector('.score').textContent = score;
        }
    }
})

document.querySelector('.again').addEventListener('click', function(){
    /*Reset parameters to Start the game again
    Only leaves the Highscore
    */
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    // Changing the CCS style when player win
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})

document.querySelector('.reset-highscore').addEventListener('click', function (){
    highscore = 0;
    document.querySelector('.highscore').textContent = highscore;
})
