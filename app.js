// Items on page
const overlay = document.getElementById('overlay');
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const resetButton = document.querySelector('.btn__reset');

// Game resources
let missed = 0;
const phrases = [
    'Show me the money', 
    'Rock Lobster', 
    'Live Love Laugh', 
    'Dental plan', 
    'Exceeds Expectations'
];

// Start game
resetButton.addEventListener('click', () => {
    overlay.style.display = 'none';
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
            } else {
                negative += 1;
                if (negative === phraseLI.length) {
                    missed += 1;
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


function checkWin(){
    // check if you have won
};