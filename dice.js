document.addEventListener("DOMContentLoaded", diceGame)

const diceImage1 = document.querySelector(".img1");
const diceImage2 = document.querySelector(".img2");

function getDiceNumber() {
        return Math.floor(Math.random() * 6 + 1); // generates random number from 1 to 6
    }
function diceGame() {

    function setDiceImage1() { //function to change dice image depending on getDiceNumber()
        const randomNumber1 = getDiceNumber();
    
        if (randomNumber1 === 1) {
            diceImage1.setAttribute("src","./images/dice1.png");
            
        } 
        else if (randomNumber1 === 2) {
            diceImage1.setAttribute("src","./images/dice2.png");    
            
        }
        else if (randomNumber1 === 3) {
            diceImage1.setAttribute("src","./images/dice3.png");    
            
        }
        else if (randomNumber1 === 4) {
            diceImage1.setAttribute("src","./images/dice4.png");    
            
        }
        else if (randomNumber1 === 5) {
            diceImage1.setAttribute("src","./images/dice5.png");    
               
        }
        else if (randomNumber1 === 6) {
            diceImage1.setAttribute("src","./images/dice6.png");    
            
        }
    }
        
    function setDiceImage2() { //function to change dice image depending on getDiceNumber()
        const randomNumber1 = getDiceNumber();
    
        if (randomNumber1 === 1) {
            
            diceImage2.setAttribute("src","./images/dice1.png");
        } 
        else if (randomNumber1 === 2) {
            
            diceImage2.setAttribute("src","./images/dice2.png");    
        }
        else if (randomNumber1 === 3) {
             
            diceImage2.setAttribute("src","./images/dice3.png");    
        }
        else if (randomNumber1 === 4) {
              
            diceImage2.setAttribute("src","./images/dice4.png");    
        }
        else if (randomNumber1 === 5) {
              
            diceImage2.setAttribute("src","./images/dice5.png");    
        }
        else if (randomNumber1 === 6) {
            
            diceImage2.setAttribute("src","./images/dice6.png");    
        }
        
    }
    let value1 = Number(setDiceImage1());
    let value2 = Number(setDiceImage2());

    function displayWinnerDrawLoser() {
        const display = document.querySelector("h1");

        if(value1 > value2) {
            display.innerHTML = "PLAYER 1 WINS!";
        }
        else if(value1 < value2) {
            display.innerHTML = "PLAYER 2 WINS!";
        }
        else if (value1 === value2) {
            display.innerHTML = "DRAW";
        }
    }
    displayWinnerDrawLoser();
}

diceGame();
