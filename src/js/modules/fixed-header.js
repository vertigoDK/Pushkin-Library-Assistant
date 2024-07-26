export default function fixedHeader() {
	const headerWrapper = document.querySelector('.header-wrapper');
	const header = document.querySelector('.header');
	const heroSection = document.querySelector('.hero');
	const newsPictureSection = document.querySelector('.news__picture');
	const dosaiSection = document.querySelector('.dosai');
	const headerHeight = header.offsetHeight;
	// Check on what page we are now
	// const section = heroSection ? heroSection : newsPictureSection;
	let section;
	if (heroSection) {
		section = heroSection;
	} else if (newsPictureSection) {
		section = newsPictureSection;
	} else {
		section = dosaiSection;
	}

	// Header Wrapper height equal to header height
	if (headerWrapper) {
		headerWrapper.style.height = `${headerHeight}px`;
	}

	window.addEventListener('scroll', () => {
		const isScrollingUp = window.pageYOffset < window.oldPageYOffset;
		window.oldPageYOffset = window.pageYOffset;

		if (isScrollingUp && window.pageYOffset > section.offsetHeight) {
			header.classList.add('fixed');
		} else {
			header.classList.remove('fixed');
		}
	});
}
