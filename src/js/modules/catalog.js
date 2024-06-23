export default function symbolLimit() {
	const bookcardTextEls = document.querySelectorAll('.catalog__bookcard-text');

	bookcardTextEls.forEach(text => {
		if (text.textContent.length > 197) {
			const newText = text.textContent.slice(0, 192);
			text.textContent = `${newText}...`;
		}
	});
}
