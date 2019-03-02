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

// First test - get keys on keyboard to register to the console!
qwerty.addEventListener('click', (e) => {
    const keyLetter = e.target.textContent;
    if (e.target.tagName === 'BUTTON') {
        console.log(keyLetter);
    }
});

// Work out how to collect one of the array values at random
// Refer to random number game for this



// Work out a way to collect the characters and spaces from the array items
// and store them in their own divs (most likely using createElement and
// appendChild)


function getRandomPhraseAsArray(arr){
    const random = Math.floor(Math.random() * arr.length );
    const randomPhrase = arr[random];
    return randomPhrase.split('');
}; 
getRandomPhraseAsArray(phrases);


// Remember to store a wrong guess as = -1 because that is the value returned when
// the item is NOT indexed in the array

// function addPhraseToDisplay(arr){
//     // do stuff any arr that is passed in, and add to `#phrase ul`
    
// }

// const phraseArray = getRandomPhraseAsArray(phrases);
// addPhrasetoDisplay(phraseArray); 

// // Count the missed guesses in the game
// function checkLetter(/* add parameter for the key clicked */){
    
// }






// Add event listener to the keyboard
// When player chooses a letter, add class 'chosen' to the selection and disable the button so that the letter cannot be chosen twice (disabled attribute to be found in MDN)
// Pass checkLetter function and store the letter in the variable letterFound


function checkWin(){
    // check if you have won
};