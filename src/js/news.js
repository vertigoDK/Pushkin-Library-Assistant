// Swiper
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const cardsText = document.querySelectorAll('.news__card-text');

cardsText.forEach(cardText => {
	if (cardText.textContent.length > 356) {
		const newText = cardText.textContent.slice(0, 356);
		cardText.textContent = `${newText}...`;
	}
});

// document.body.style.backgroundColor = 'black';

// Swiper for photo on each page

const swiper = new Swiper('.newsletter__swiper', {
	spaceBetween: 5,
	slidesPerView: 4,
	// freeMode: true,
	// watchSlidesProgress: true,
});
const swiper2 = new Swiper('.newsletter__swiper-2', {
	spaceBetween: 8,
	effect: 'fade',
	speed: 800,
	thumbs: {
		swiper: swiper,
	},
});
