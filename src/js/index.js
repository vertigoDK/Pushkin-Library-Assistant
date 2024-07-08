// import mobileNav from './modules/mobile-nav.js';
// mobileNav();

// Swiper
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// Time
// import timeDate from './modules/time-date.js';
// timeDate();

// Actions
// import servicesActions from './modules/services-actions.js';
// servicesActions();

// Tour location changes
import tourLocationChanges from './modules/tour.js';
tourLocationChanges();

// Catalog
import symbolLimit from './modules/catalog.js';
symbolLimit();

// Dosai Fixed
import dosaiFixed from './modules/dosai-fixed.js';
dosaiFixed();

// Hero Swiper:
const swiperHero = new Swiper('.hero__swiper', {
	// Optional parameters
	slidesPerView: 1,
	loop: true,
	speed: 600,

	// Navigation arrows
	navigation: {
		prevEl: '.swiper-button-prev',
		nextEl: '.swiper-button-next',
	},
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},

	// And if we need scrollbar
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// },
});

// Services news Swiper:
const swiperNews = new Swiper('.services__news-swiper', {
	// Optional parameters
	slidesPerView: 1,
	loop: true,
	speed: 400,
	autoplay: {
		delay: 5000,
	},

	// Navigation arrows
	navigation: {
		prevEl: '.swiper-button-prev',
		nextEl: '.swiper-button-next',
	},
});

// Services news Swiper:
const swiperEvents = new Swiper('.services__events-swiper', {
	// Optional parameters
	slidesPerView: 1,
	loop: false,

	// Navigation arrows
	navigation: {
		prevEl: '.swiper-button-prev',
		nextEl: '.swiper-button-next',
	},
});

// Services news Swiper:
const swiperCourses = new Swiper('.services__courses-swiper', {
	// Optional parameters
	slidesPerView: 1,
	loop: true,
	speed: 400,
	autoplay: {
		delay: 6000,
	},

	// Navigation arrows
	navigation: {
		prevEl: '.swiper-button-prev',
		nextEl: '.swiper-button-next',
	},
});

// Tour Swiper:
const swiperTour = new Swiper('.tour__swiper', {
	// Optional parameters
	direction: 'vertical',
	slidesPerView: 7,
	spaceBetween: 0,
	loop: false,
	speed: 400,

	// Navigation arrows
	navigation: {
		prevEl: '.swiper-button-prev',
		nextEl: '.swiper-button-next',
	},
});

// Scroll Reveal ===================================
import ScrollReveal from 'scrollreveal';

ScrollReveal({
	distance: '60px',
	duration: 2000,
});

ScrollReveal().reveal(`.hero__title`, {
	origin: 'bottom',
	duration: 1200,
});

ScrollReveal().reveal(`.hero__social-1`, {
	origin: 'bottom',
	duration: 1000,
	distance: '20px',
});
ScrollReveal().reveal(`.hero__social-2`, {
	origin: 'bottom',
	duration: 1100,
	distance: '20px',
});
ScrollReveal().reveal(`.hero__social-3`, {
	origin: 'bottom',
	duration: 1200,
	distance: '20px',
});
ScrollReveal().reveal(`.hero__social-4`, {
	origin: 'bottom',
	duration: 1300,
	distance: '21px',
});
ScrollReveal().reveal(`.hero__social-5`, {
	origin: 'bottom',
	duration: 1400,
	distance: '22px',
});
ScrollReveal().reveal(`.hero__social-6`, {
	origin: 'bottom',
	duration: 1500,
	distance: '23px',
});
ScrollReveal().reveal(`.hero__social-7`, {
	origin: 'bottom',
	duration: 1600,
	distance: '24px',
});

ScrollReveal().reveal(`.hero__links`, {
	origin: 'top',
	duration: 1100,
	distance: '30px',
});

ScrollReveal().reveal(`.services__time`, {
	origin: 'left',
	duration: 800,
	distance: '30px',
});
ScrollReveal().reveal(`.services__news`, {
	origin: 'bottom',
	duration: 1100,
	distance: '40px',
});
ScrollReveal().reveal(`.services__ai-chat`, {
	origin: 'right',
	delay: 200,
	duration: 1100,
	distance: '30px',
});
ScrollReveal().reveal(`.services__actions`, {
	origin: 'bottom',
	delay: 100,
	duration: 1000,
	distance: '40px',
});
ScrollReveal().reveal(`.services__events`, {
	origin: 'right',
	delay: 200,
	duration: 1400,
	distance: '45px',
});
ScrollReveal().reveal(`.services__courses`, {
	origin: 'left',
	delay: 200,
	duration: 1000,
	distance: '30px',
});
