// Items on page
const overlay = document.getElementById('overlay');
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const resetButton = document.querySelector('.btn__reset');

// Game resources
const missed = 0;
const phrases = [
    'Phrase one', 
    'Phrase two', 
    'Phrase three', 
    'Phrase four', 
    'Phrase five'
];

// Start game
resetButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});


function getRandomAsPhraseArray(arr){
    //do stuff to any arr that is passed in 
};
getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr){
    // do stuff any arr that is passed in, and add to `#phrase ul`
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhrasetoDisplay(phraseArray); 

// Count the missed guesses in the game
function checkLetter(/* add parameter for the key clicked */){
    
}

// Add event listener to the keyboard
// When player chooses a letter, add class 'chosen' to the selection and disable the button so that the letter cannot be chosen twice (disabled attribute to be found in MDN)
// Pass checkLetter function and store the letter in the variable letterFound


function checkWin(){
    // check if 
}