// import mobileNav from './modules/mobile-nav.js';
// mobileNav();

// Swiper
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// Time
import timeDate from './modules/time-date.js';
timeDate();

// Actions
import servicesActions from './modules/services-actions.js';
servicesActions();

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
