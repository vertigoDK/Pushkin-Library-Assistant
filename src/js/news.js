const cardsText = document.querySelectorAll('.news__card-text');

cardsText.forEach(cardText => {
	if (cardText.textContent.length > 356) {
		const newText = cardText.textContent.slice(0, 356);
		cardText.textContent = `${newText}...`;
	}
});
