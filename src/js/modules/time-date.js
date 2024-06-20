export default function timeDate() {
	const WEEKS = [
		'Воскресенье',
		'Понедельник',
		'Вторник',
		'Среда',
		'Четверг',
		'Пятница',
		'Суббота',
	];
	const MONTH = [
		'января',
		'февраля',
		'марта',
		'апреля',
		'майя',
		'июня',
		'июля',
		'августа',
		'сентября',
		'октября',
		'ноября',
	];
	// Текущее время
	function updateTime() {
		const now = new Date();
		const clockElement = document.querySelector('#services-current-time');
		const hours = now.getHours().toString().padStart(2, '0');
		const minutes = now.getMinutes().toString().padStart(2, '0');
		clockElement.textContent = `${hours}:${minutes}`;
	}

	setInterval(updateTime, 1000);
	updateTime();

	// текущая дата
	function updateDate() {
		const now = new Date();
		const dateElement = document.querySelector('#services-current-date');
		const weekDays = WEEKS[now.getDay()];
		const dayMonth = now.getDate();
		const monthNum = MONTH[now.getMonth()];
		dateElement.textContent = `${weekDays} ${dayMonth} ${monthNum}`;
	}
	setInterval(updateDate, 11200000);
	updateDate();

	function CloseTime() {
		const now = new Date();
		const closeTimeEl = document.querySelector('#services-close-time');
		const closeOrOpenEl = document.querySelector('#services-open-close');
		const hours = now.getHours().toString().padStart(2, '0');
		const minutes = now.getMinutes().toString().padStart(2, '0');
		const seconds = now.getSeconds().toString().padStart(2, '0');

		let hoursLeft;
		if (+hours > 19) {
			hoursLeft = 8 + (24 - +hours);
		} else if (+hours < 8) {
			hoursLeft = 7 - +hours;
		} else {
			hoursLeft = 19 - +hours;
		}
		const minutesLeft = 60 - +minutes;
		const secondsLeft = 60 - +seconds;
		closeTimeEl.textContent = `${hoursLeft
			.toString()
			.padStart(2, '0')}:${minutesLeft
			.toString()
			.padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;
		if (+hours > 19 || +hours < 8) {
			closeOrOpenEl.textContent = 'открытия';
		} else {
			closeOrOpenEl.textContent = 'закрытия';
		}
	}
	setInterval(CloseTime, 1000);
	CloseTime();
}
