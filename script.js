
let x = 0;
let playerPunkte = 0;
let computerPunkte = 0;
//click events / DOM
document.addEventListener("DOMContentLoaded", function () {
    const rng = function() {
        let x = Math.random()*3;
        if (x<1) return "rock";
        if (x>=1 && x<2) return "paper";
        if (x>=2) return "scissors";
    };
    
    const choseRock = function() {
        let computer = rng();
        // if (computer == "rock") alert(draw);
        if (computer == "paper") computerPunkte++;
        if (computer == "scissors") playerPunkte++;
        updateScore();
        // visual.firstChild.textContent = "You: " + "Rock";
        // visual.firstChild.nextSibling.textContent = " vs ";
        // visual.lastChild.textContent = "Computer: " + computer.charAt(0).toUpperCase() + computer.slice(1);
        visualize(1,computer);
        winner();
    }
    const chosePaper = function() {
        let computer = rng();
        if (computer == "rock") playerPunkte++;
        if (computer == "scissors") computerPunkte++;
        updateScore();
        // visual.firstChild.textContent = "You: " + "Paper";
        // visual.firstChild.nextSibling.textContent = " vs ";
        // visual.lastChild.textContent = "Computer: " + computer.charAt(0).toUpperCase() + computer.slice(1);
        visualize(2,computer);
        winner();
    }
    const choseScissors = function() {
        let computer = rng();
        if (computer == "rock") computerPunkte++;
        if (computer == "paper") playerPunkte++;
        updateScore();
        // visual.firstChild.textContent = "You: " + "Scissor";
        // visual.firstChild.nextSibling.textContent = " vs ";
        // visual.lastChild.textContent = "Computer: " + computer.charAt(0).toUpperCase() + computer.slice(1);
        visualize(3,computer);
        winner();
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
        // updateScore();
    }    

    let rock = document.querySelector('#rock');
    rock.addEventListener('click', choseRock);
    let paper = document.querySelector('#paper');
    paper.addEventListener('click', chosePaper);
    let scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', choseScissors);

    let playerscore = document.querySelector('#playerscore');
    let computerscore = document.querySelector('#computerscore');

    const updateScore = function() {
        playerscore.textContent = "Player: " + playerPunkte;
        computerscore.textContent = "Computer: " + computerPunkte;
    }

    let visual = document.querySelector('#visual');
   
    //td:
    //hover über button -> hell
    //button click -> auswahl anzeigen + punktestand in #visual

    const rockIMG = document.createElement('img'); 
    const paperIMG = document.createElement('img');
    const scissorsIMG = document.createElement('img');
    rockIMG.src = 'img/rock.png';
    paperIMG.src = 'img/paper.png';
    scissorsIMG.src = 'img/scissors.png';
    const rockIMG_2 = document.createElement('img'); 
    const paperIMG_2 = document.createElement('img');
    const scissorsIMG_2 = document.createElement('img');
    rockIMG_2.src = 'img/rock.png';
    paperIMG_2.src = 'img/paper.png';
    scissorsIMG_2.src = 'img/scissors.png';
    const vs = document.createTextNode('vs');



    const visualize = function(rps,computer) {
        let playerchoice = document.querySelector('#playerChoice');
        // let computerchoice = document.querySelector('computerChoice');
        playerchoice.innerHTML = '';
        if (rps==1) {
            playerchoice.appendChild(rockIMG);
        }
        if (rps==2) {
            playerchoice.appendChild(paperIMG);
        }
        if (rps==3) {
            playerchoice.appendChild(scissorsIMG);
        }
        playerchoice.appendChild(vs);
        if (computer == 'rock') {
            playerchoice.appendChild(rockIMG_2);
        }
        if (computer == 'paper') {
            playerchoice.appendChild(paperIMG_2);
        }
        if (computer == 'scissors') {
            playerchoice.appendChild(scissorsIMG_2);
        }
    }

    // rock.addEventListener('click', function() {
    //     visualize(1);
    // });
    // paper.addEventListener('click', function() {
    //     visualize(2);
    // });
    // scissors.addEventListener('click', function() {
    //     visualize(3);
    // });

});