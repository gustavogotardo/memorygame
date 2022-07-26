const cards = [
    "ae86",
    "fd3s",
    "fc3s",
    "s13",
    "eg6",
    "gc8",
    "sileight",
    "ek9",
    "evo3"
],
    deck = [];
let numberOfCards,
    cardHTML,
    cardFace,
    firstCard,
    secondCard,
    rightPairs,
    moves,
    timerTensCount = 00,
    timerSecondsCount = 00,
    timer;


function gameStart() {
    numberOfCards = document.getElementById("numberOfCards").value;
    console.log(numberOfCards);
    deckGenerator();
}

function deckGenerator() {
    for (let i=0; i<2; i++) {
        for (let i=0; i<(numberOfCards/2); i++) {
            deck.push(cards[i]);
        }
    }
    deck.sort(() => Math.random() - 0.5);
    boardGenerator();
}

function boardGenerator() {
    const board = document.querySelector(".contentSpace");
    board.innerHTML = ``;
    for (let i = 0; i<deck.length; i++){
        board.innerHTML += `
            <li class="card" onclick="turnCard(this)">
                <div class="backFace face">
                    <img src="./assets/media/img/initialDLogo.png">
                </div>
                <div class="frontFace face">
                    <img src="./assets/media/img/${deck[i]}.png">
                </div>
            </li>
        `
    }
}

function turnCard(clickedCard){
    clickedCard.classList.toggle("turned");
    clickedCard.getElementsByClassName("frontFace").style.transform = "rotateY(0deg)";
    clickedCard.getElementsByClassName("backFace").style.transform = "rotateY(-180deg)";

    turnedFront.
    moves++;
    if (firstCard === undefined){
        if (timerTensCount === undefined){
            timer = setInterval(startTimer, 1000);
        }
        firstCard = clickedCard;
    }
    else {
        secondCard=clickedCard;
        if (firstCard.innerHTML === secondCard.innerHTML){
            rightPairs++;
            endGameCheck();
        }
        else {
            setTimeout(unturnCards, 1000);
        }
    }
}

function unturnCards(){
    firstCard.classList.remove("turned");
    firstCard.getElementsByClassName("frontFace").style.transform = "rotateY(180deg)";
    firstCard.getElementsByClassName("backFace").style.transform = "rotateY(0deg)";
    secondCard.classList.remove("turned");
    secondCard.getElementsByClassName("frontFace").style.transform = "rotateY(180deg)";
    secondCard.getElementsByClassName("backFace").style.transform = "rotateY(0deg)";
}

function reset(){
    const cardsToReset = document.querySelectorAll(".turned");
    cardsToReset.classList.remove("turned");
}

function endGameCheck(){
    if (rightPairs === (numberOfCards/2)) {
        stopTimer();
        alert(`Game Over! You needed ${moves} moves and ${timerTensCount} seconds`);
    }
}

function startTimer(){
    const tensHTML = document.getElementById("tens"),
          secondsHTML = document.getElementById("seconds");
    timerTensCount++;

    if (timerTensCount <= 9) {
        tensHTML.innerHTML = "0" + timerTensCount;
    }

    if (timerTensCount > 9) {
        tensHTML.innerHTML = timerTensCount;
    }

    if (timerTensCount > 99) {
        timerSecondsCount++;
        secondsHTML.innerHTML = "0" + timerSecondsCount;
        timerTensCount = 0;
        tensHTML.innerHTML = "0" + 0;
    }

    if (timerSecondsCount > 9) {
        secondsHTML.innerHTML = timerSecondsCount;
    }
}



function stopTimer(){
    clearInterval(timer);
}