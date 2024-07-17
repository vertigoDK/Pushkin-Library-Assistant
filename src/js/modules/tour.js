'use strict';
export default function tourLocationChanges() {
	const locations = document.querySelectorAll('.tour__location');
	const images = document.querySelectorAll('.tour__image-picture');
	// Arrows
	const btnPrev = document.querySelector('.tour__list-arrow-prev');
	const btnNext = document.querySelector('.tour__list-arrow-next');

	let active = locations[0];

	function changeImages() {
		for (let i = 0; i < images.length; i++) {
			images[i].src = `./img/tour/${active.id}-${i + 1}.jpg`;
			images[i].style.animation = 'imageAppear .3s ease-in';
			setTimeout(removeAnim, 350);
			function removeAnim() {
				images[i].style.removeProperty('animation');
			}
		}
	}

	locations.forEach(location => {
		location.addEventListener('click', function () {
			active = location;
			active.classList.add('active');

			changeImages();

			// delete classes on other elements
			locations.forEach(locationInner => {
				if (locationInner !== active) {
					locationInner.classList.remove('active');
				}
			});
			// delete classes on other elements
		});
	});
	// PREV ARROW CLICKED
	btnPrev.addEventListener('click', function () {
		for (let i = 0; i < locations.length; i++) {
			if (i !== 0 && locations[i] === active) {
				// active.style.animation = 'slideOnTop 0.3s ease';
				active.classList.remove('active');
				active = locations[i - 1];
				active.classList.add('active');
			} else if (i === 0 && locations[i] === active) {
				active.classList.remove('active');
				active = locations[locations.length - 1];
				active.classList.add('active');
				break;
			}
		}
		changeImages();
	});
	// PREV ARROW CLICKED
	// NEXT ARROW CLICKED
	btnNext.addEventListener('click', function () {
		for (let i = 0; i < locations.length; i++) {
			if (i !== locations.length - 1 && locations[i] === active) {
				active.classList.remove('active');
				active = locations[i + 1];
				active.classList.add('active');
				break;
			} else if (i === locations.length - 1 && locations[i] === active) {
				active.classList.remove('active');
				active = locations[0];
				active.classList.add('active');
			}
		}
		changeImages();
	});
	// NEXT ARROW CLICKED
}
