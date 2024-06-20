export default function servicesActions() {
	const title = document.querySelector('.services__actions-title');
	const actions = document.querySelectorAll('.services__actions-icon');

	actions.forEach(action => {
		// On Hover Effect
		action.addEventListener('mouseover', function () {
			title.textContent = `${this.dataset.name}`;
		});
		// Out of hover effect
		action.addEventListener('mouseout', function () {
			title.textContent = `Услуги`;
		});
	});
}
