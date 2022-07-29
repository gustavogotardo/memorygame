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
let numberOfCards = 0,
    cardHTML,
    cardFace,
    pairs = 0,
    moves = 0,
    firstCard,
    secondCard,
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

    if (!(clickedCard.classList.contains("frozen")) & firstCard === undefined || secondCard === undefined){
        moves++;
        console.log(`${moves} moves`);
        document.getElementById("moves").innerHTML = `${moves}`;
        if (timerTensCount === 0 & timerSecondsCount === 0){
            timer = setInterval(startTimer, 10);
        }
        clickedCard.querySelector(".frontFace").classList.add("turnFrontFace");
        clickedCard.querySelector(".backFace").classList.add("turnBackFace");

        if (firstCard === undefined){
            firstCard = clickedCard;
        }
        else {
            secondCard = clickedCard;
            checkForPairs();
        }
    }
}

function checkForPairs(){
    if (firstCard.innerHTML === secondCard.innerHTML){
        pairs+=2;
        firstCard.classList.add("frozen");
        secondCard.classList.add("frozen");
        endGameCheck();
        firstCard = undefined;
        secondCard = undefined;
    }
    else {
        setTimeout(unturnCards, 1000);
    }
}

function unturnCards(){
    firstCard.querySelector(".frontFace").classList.remove("turnFrontFace");
    firstCard.querySelector(".backFace").classList.remove("turnBackFace");
    secondCard.querySelector(".frontFace").classList.remove("turnFrontFace");
    secondCard.querySelector(".backFace").classList.remove("turnBackFace");
    firstCard = undefined;
    secondCard = undefined;
}

function reset(){
    document.querySelectorAll("frozen").classList.remove("frozen");
    document.querySelectorAll("face").classList.remove("turnFrontFace");
    document.querySelectorAll("face").classList.remove("turnBackFace");
}

function endGameCheck(){
    console.log(`${pairs} pairs`);
    console.log(`${numberOfCards} cards`);
    if (pairs == numberOfCards) {
        stopTimer();
        alert(`Game Over! You finished in ${moves} moves! You spent ${timerSecondsCount}s and ${timerTensCount}tens!`);
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
    console.log(pairs);
    clearInterval(timer);
}