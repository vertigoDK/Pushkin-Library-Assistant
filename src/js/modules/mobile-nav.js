function mobileNav() {
	// Mobile nav button
	const header = document.querySelector('.header');
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');

	navBtn.onclick = function () {
		header.classList.toggle('header-active');
		nav.classList.toggle('mobile-nav--open');
		menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('no-scroll');
		showOptions();
	};

	// Work isnide
	const items = document.querySelectorAll('.mobile-nav__item');
	const btns = document.querySelectorAll('.mobile-nav__btn');
	const navWrapper = document.querySelector('.mobile-nav');

	btns.forEach(btn => {
		btn.onclick = function () {
			const itemParrent = btn.closest('.mobile-nav__item');

			if (itemParrent.classList.contains('active')) {
				itemParrent.classList.remove('active');
				showOptions();
			} else {
				itemParrent.classList.add('active');
				hideOptions(itemParrent);
			}
		};
	});
	// CLICK ON THE SIDE
	navWrapper.addEventListener('click', function (e) {
		const clickedEl = e.target;
		e.stopPropagation();

		if (
			!clickedEl.classList.contains('mobile-nav__btn') &&
			!clickedEl.classList.contains('mobile-nav__link')
		) {
			showOptions();
		}
	});
	// CLICK ON THE SIDE

	function showOptions() {
		items.forEach(item => {
			item.classList.remove('active');
			item.classList.remove('none');
			item.classList.add('shown');
		});
	}
	function hideOptions(current) {
		items.forEach(item => {
			if (current !== item) {
				item.classList.add('none');
				item.classList.remove('shown');
				item.classList.remove('active');
			}
		});
	}
}

export default mobileNav;
