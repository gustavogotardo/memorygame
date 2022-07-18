const cards = [
    "ek9",
    "evo3",
    "fc3s",
    "fd3s",
    "gc8",
    "s13",
    "sileight"
],
    deck = [],
    board;
let numberOfCards,
    cardHTML;

function howManyCards() {
    do{
        numberOfCards = parseInt(prompt("How many cards you want to play with? (4 to 14)"));
    }
    while(numberOfCards < 4 || numberOfCards > 14 || !(numberOfCards%2 === 0) || isNaN(numberOfCards));
    
}

function deckGenerator() {
    for (let i=0; i<2; i++;) {
        for (let i=0; i<(numberOfCards/2); i++;) {
            deck.push(cards[i]);
        }
    }
    deck.sort(() => Math.random() - 0.5);
    boardGenerator();
}

function boardGenerator() {
    board = document.querySelector(".contentSpace");
    for (let i = 0; i<deck.length; i++){
        cardHTML = `
            <li class="card" onclick="turnCard(this)">
                <div class="backFace">
                    <img src="./assets/media/img/initialDLogo.png">
                </div>
                <div class="frontFace">
                    <img src="./assets/media/img/${deck[i]}.png">
                </div>
            </li>
        `
        board.innerHTML += cardHTML;
    }
}

function turnCard(){
    
}

function unturnCard (){

}

function reset (){

}

function endGameCheck(){

}

function timer(){

}

howManyCards();
deckGenerator();