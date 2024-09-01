import fixedHeader from './modules/fixed-header.js';
fixedHeader();

const title = document.querySelector('.error__title').querySelector('h1'),
	icon = document.querySelector('.error__icon'),
	subtitle = document.querySelector('.error__subtitle');

// Mock status
let status = 403;

const statusText = new Map([
	['404', ['Страница не найдена.', 'notFound']],
	['403', ['Доступ к ресурсу запрещён.', 'forbidden']],
	['500', ['Внутренняя ошибка сервера.', 'InternalServerError']],
	['502', ['Неверный шлюз.', 'bad-gateway']],
	['503', ['Сервис недоступен.', 'unavailable']],
	['504', ['Время ожидания шлюза истекло.', 'gatewayTimeout']],
]);

title.textContent = status;
subtitle.textContent = statusText.get(`${status}`)[0];
icon.src = `./img/error_pages/${statusText.get(`${status}`)[1]}.svg`;
icon.alt = `${statusText.get(`${status}`)[1]}`;
