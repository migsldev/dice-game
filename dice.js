function diceGame() {
    //Player 1 dice
    const randomNumber1 = Math.floor(Math.random() * 6 + 1); // creates a random number

    const randomImageSource1 = `./images/dice${randomNumber1}.png`

    document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

    //Player 2 dice

    const randomNumber2 = Math.floor(Math.random() * 6 + 1);

    const randomImageSource2 = `./images/dice${randomNumber2}.png`

    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

    //Changing Header(h1) to Winner, Draw

    function displayWinnerDraw() {
        const display = document.querySelector("h1");

        if(randomNumber1 > randomNumber2) {
            display.innerHTML = "PLAYER 1 WINS!";
        }
        else if(randomNumber1 < randomNumber2) {
            display.innerHTML = "PLAYER 2 WINS!";
        }
        else if (randomNumber1 === randomNumber2) {
            display.innerHTML = "DRAW";
        }
    }
    displayWinnerDraw();
}

document.getElementById("playButton").addEventListener("click", function() {
    location.reload();
});

diceGame();