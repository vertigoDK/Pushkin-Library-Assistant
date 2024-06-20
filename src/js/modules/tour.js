export default function tourLocationChanges() {
	const locations = document.querySelectorAll('.tour__location');
	const images = document.querySelectorAll('.tour__image-picture');

	locations.forEach(location => {
		location.addEventListener('click', function () {
			location.classList.add('active');

			for (let i = 0; i < images.length; i++) {
				images[i].src = `./img/tour/${this.id}-${i + 1}.jpg`;
			}

			// delete classes on other elements
			locations.forEach(locationInner => {
				if (locationInner !== this) {
					locationInner.classList.remove('active');
				}
			});
			// delete classes on other elements
		});
	});
}
