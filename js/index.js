const myNumDice = document.getElementById("myNumDice");
const myDiceResult = document.getElementById("myDiceResult");
const myDiceImages = document.getElementById("myDiceImages");

function rollDice() {
   
    const numDice = parseInt(myNumDice.value, 10);
    const values = [];
    const images = [];

    if (numDice < 1 || numDice > 6) {
        myDiceResult.textContent = 'The Value Should Be Among 1 and 6';
    } else {

    for (let i = 0; i < numDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        console.log(value);
        
        values.push(value);
        images.push(`<img id="myDiceImage" src="dice_images/${value}.png" alt="Dice ${value}">`);
        myDiceResult.textContent = `Dice: ${values.join(', ')}`;
        myDiceImages.innerHTML = images.join('');
    }

    }
}

