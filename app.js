// Items on page
const overlay = document.getElementById('overlay');
const screenTitle = overlay.querySelector('h2');
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const resetButton = document.querySelector('.btn__reset');
const scoreBoard = document.getElementById('scoreboard');

// Game resources
let missed = 0;
let correct = 0;
const phrases = [
    'why so serious',
    'hello newman',
    'show me the money',
    'hasta la vista',
    'suit up'
];

// Start game
resetButton.addEventListener('click', (e) => {
    if (e.target.textContent === 'Start Game') {
        overlay.classList.add('hidden');
    } else if (e.target.textContent === 'Play Again') {
        document.location.reload(true);
    }
});


function addPhraseToDisplay(arr){
    function getRandomPhraseAsArray(arr){
        const random = Math.floor(Math.random() * arr.length );
        const randomPhrase = arr[random];
        const phraseArray = randomPhrase.split('');
        return phraseArray;
    }; 
    const phraseArray = getRandomPhraseAsArray(phrases);
    // do stuff any arr that is passed in, and add to `#phrase ul`
    for (let i = 0; i < phraseArray.length; i++) {
        const li = document.createElement('li');
        const ul = phrase.querySelector('ul');
        li.textContent = phraseArray[i].toUpperCase();
        ul.appendChild(li);        
        let phraseCharacter = phraseArray[i];
        if ( phraseCharacter === ' ' ) {
            li.classList.add('space');
        } else {
            li.classList.add('letter');
        }
    }
}
addPhraseToDisplay(phrases);
const phraseLI = phrase.querySelectorAll('li.letter');

function removeHeart() {
    const liveHeart = scoreBoard.querySelectorAll('[src="images/liveHeart.png"]')[0];
    liveHeart.src = "images/lostHeart.png";
};

function loseScreen() {
    overlay.classList.remove('hidden');
    overlay.classList.replace('start', 'lose');
    screenTitle.textContent = 'You lose!';
    resetButton.textContent = 'Play Again';
}

function winScreen() {
    overlay.classList.remove('hidden');
    overlay.classList.replace('start', 'win');
    screenTitle.textContent = 'You win!';
    resetButton.textContent = 'Play Again';
}

function checkWin() {
    if (missed >= 5) {
        loseScreen();
    }
};

// Log the guesses
let negative = 0;
qwerty.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const guess = e.target.textContent;
        const guessUpper = guess.toUpperCase();
        e.target.disabled = true;
        negative = 0;
        for (let i = 0; i < phraseLI.length; i++) {
            if (guessUpper === phraseLI[i].textContent) {
                phraseLI[i].classList.add('show');
                correct += 1;
                if (correct === phraseLI.length) {
                    winScreen();
                }
            } else {
                negative += 1;
                if (negative === phraseLI.length) {
                    missed += 1;
                    removeHeart();
                    checkWin();
                }
            }
        }
    }
});






// Remember to store a wrong guess as = -1 because that is the value returned when
// the item is NOT indexed in the array


// // Count the missed guesses in the game
// function checkLetter(/* add parameter for the key clicked */){
    
// }






// Add event listener to the keyboard
// When player chooses a letter, add class 'chosen' to the selection and disable the button so that the letter cannot be chosen twice (disabled attribute to be found in MDN)
// Pass checkLetter function and store the letter in the variable letterFound


