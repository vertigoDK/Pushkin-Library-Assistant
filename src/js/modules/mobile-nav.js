function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');

	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('no-scroll');
	};

	// Work isnide
	const navWrapper = document.querySelector('.mobile-nav__list');
	const items = navWrapper.querySelectorAll('.header__nav-item');

	items.forEach(item => {
		item.onclick = function () {
			items.forEach(itemsInner => {
				itemsInner.classList.remove('active');
			});
			this.classList.toggle('active');
		};
	});
}

export default mobileNav;
