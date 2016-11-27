var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var board = document.getElementById('game-board');

var createCards = function() {
	for (var i=0; i<cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
		board.appendChild(cardElement);
	}
}

var isTwoCards = function() {
	if ((this.getAttribute('data-card')) === "queen") {
		this.innerHTML = '<img src="queen.png" alt="Queen"/>';
	} else {
		this.innerHTML = '<img src="king.png" alt="King"/>';
	}
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		setTimeout(function() {
			isMatch(cardsInPlay);
		}, 500);
	}
}

var isMatch = function() {
	if (cardsInPlay[0]===cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
	cardsInPlay = [];
}

createCards();

var reset = function() {
	var resetCard = document.getElementsByClassName('card');
	resetCard.innerHTML = "";
};

var button = document.getElementById('btn');
button.addEventListener('click', reset);

