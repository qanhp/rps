//funktion computer wählt random r, p oder s
//funktion 1 runde spielen für jeden button
//funktion punkteverteilung aktualisieren
//funktion wenn jemand 5 punkte erreicht
let x = 0;
let playerPunkte = 0;
let computerPunkte = 0;
//click events / DOM
document.addEventListener("DOMContentLoaded", function () {


    
    const rng = function() {
        let x = Math.random()*3;
        if (x<1) return "rock";
        if (x>=1 && x<2) return "paper";
        if (x>=2) return "scissor";
    };
    
    const choseRock = function() {
        let computer = rng();
        // if (computer == "rock") alert(draw);
        if (computer == "paper") computerPunkte++;
        if (computer == "scissor") playerPunkte++;
        updateScore();
        visual.firstChild.textContent = "You: " + "Rock";
        visual.firstChild.nextSibling.textContent = " vs ";
        visual.lastChild.textContent = "Computer: " + computer.charAt(0).toUpperCase() + computer.slice(1);
        winner();
    }
    const chosePaper = function() {
        let computer = rng();
        if (computer == "rock") playerPunkte++;
        if (computer == "scissor") computerPunkte++;
        updateScore();
        visual.firstChild.textContent = "You: " + "Paper";
        visual.firstChild.nextSibling.textContent = " vs ";
        visual.lastChild.textContent = "Computer: " + computer.charAt(0).toUpperCase() + computer.slice(1);
    }
    const choseScissor = function() {
        let computer = rng();
        if (computer == "rock") computerPunkte++;
        if (computer == "paper") playerPunkte++;
        updateScore();
        visual.firstChild.textContent = "You: " + "Scissor";
        visual.firstChild.nextSibling.textContent = " vs ";
        visual.lastChild.textContent = "Computer: " + computer.charAt(0).toUpperCase() + computer.slice(1);
    }
    
    let win = "";
    const winner = function() {
        if (playerPunkte > 4 || computerPunkte > 4) {
            if (playerPunkte>4) {
                win = "You";
            } else {
                win = "Computer";
            }
            alert(win + " won");
            restart();
        } 
    }
    
    
    const restart = function() {
        playerPunkte = 0;
        computerPunkte = 0;
        updateScore();
    }    

    let rock = document.querySelector('#rock');
    rock.addEventListener('click', choseRock);
    let paper = document.querySelector('#paper');
    paper.addEventListener('click', chosePaper);
    let scissor = document.querySelector('#scissor');
    scissor.addEventListener('click', choseScissor);

    let playerscore = document.querySelector('#playerscore');
    let computerscore = document.querySelector('#computerscore');

    const updateScore = function() {
        playerscore.textContent = "Player: " + playerPunkte;
        computerscore.textContent = "Computer: " + computerPunkte;
    }

    let visual = document.querySelector('#visual');
   
});