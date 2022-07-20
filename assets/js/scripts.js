const cards = [
    "ek9",
    "evo3",
    "fc3s",
    "fd3s",
    "gc8",
    "s13",
    "sileight"
],
    deck = [];
let numberOfCards,
    cardHTML,
    cardFace,
    firstCard,
    secondCard,
    rightPairs,
    moves;


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
                <div class="backFace">
                    <img src="./assets/media/img/initialDLogo.png">
                </div>
                <div class="frontFace">
                    <img src="./assets/media/img/${deck[i]}.png">
                </div>
            </li>
        `
    }
}

function turnCard(clickedCard){
    clickedCard.classList.toggle("turned");
    moves++;
    if (firstCard === undefined){
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
    secondCard.classList.remove("turned");
}

function reset(){

}

function endGameCheck(){

}

function timer(){

}
deckGenerator();