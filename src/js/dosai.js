const dosaiField = document.querySelector('.dosai__box');
const sendBtn = document.querySelector('.dosai__chat-bar-btn');
const form = document.querySelector('.dosai__chat-bar');
const textarea = document.querySelector('.dosai__chat-bar-input');
// Input Avaliability
function isInputDisabled(value) {
	textarea.disabled = value;
}
isInputDisabled(false);

textarea.addEventListener('input', function () {
	this.style.height = 'auto';
	this.style.height = this.scrollHeight + 'px';

	form.style.height = 'auto';
	form.style.height = form.scrollHeight + 'px';
});

// Отрисовка сообщения юзера
function createUserMessage(text) {
	let textArr = text.split('');
	let j = 55;
	let result = '';
	for (let i = 0; i < textArr.length; i++) {
		result += textArr[i];
		if (i === j) {
			result += `\n${textArr[i]}`;
			j += 55;
		}
	}
	const newMessage = document.createElement('div');
	newMessage.textContent = result;
	newMessage.classList.add('dosai__user-msg');
	setTimeout(appendMessage, 500);
	function appendMessage() {
		dosaiField.appendChild(newMessage);
	}
}

// Отрисовка загрузки юзера
function createUserMssgLoading() {
	const loadingEl = document.createElement('div');
	loadingEl.classList.add('load-user');
	for (let i = 0; i < 3; i++) {
		const lineEl = document.createElement('div');
		lineEl.classList.add('line');
		loadingEl.appendChild(lineEl);
	}

	dosaiField.appendChild(loadingEl);
}

// Удаление элемента загрузки юзера
function deleteUserMssgLoading() {
	const loadEl = document.querySelector('.load-user');
	function dissapearAnim() {
		loadEl.style.animation = 'dissapearMssg 0.3s ease';
	}
	function deleteEl() {
		loadEl.remove();
	}
	setTimeout(dissapearAnim, 450);
	setTimeout(deleteEl, 500);
}

// Отрисовка загрузки бота
function createBotMssgLoading() {
	const loadingEl = document.createElement('div');
	loadingEl.classList.add('load-bot');
	for (let i = 0; i < 3; i++) {
		const lineEl = document.createElement('div');
		lineEl.classList.add('line');
		loadingEl.appendChild(lineEl);
	}

	dosaiField.appendChild(loadingEl);
}

// Удаление элемента загрузки юзера
function deleteBotMssgLoading() {
	const loadEl = document.querySelector('.load-bot');
	function dissapearAnim() {
		loadEl.style.animation = 'dissapearMssg 0.3s ease';
	}
	function deleteEl() {
		loadEl.remove();
	}
	setTimeout(dissapearAnim, 1000);
	setTimeout(deleteEl, 1100);
}

// Отрисовка сообщения бота
function createBotMessage() {
	const newMessage = document.createElement('div');
	newMessage.textContent = 'Привет я чат бот DosAI';
	newMessage.classList.add('dosai__bot-msg');
	setTimeout(appendMessage, 1200);
	function appendMessage() {
		dosaiField.appendChild(newMessage);
	}
}

// Отпрака сообщения
function sendMessage() {
	createUserMssgLoading();
	deleteUserMssgLoading();
	createUserMessage(textarea.value);
	textarea.value = '';
	form.style.height = '49px';
	textarea.style.height = '18px';
	isInputDisabled(true);
}

// Имитирование ответа бота
function sendReply() {
	createBotMssgLoading();
	deleteBotMssgLoading();
	createBotMessage();
	isInputDisabled(false);
}

form.addEventListener('keypress', function (e) {
	if (e.key === 'Enter') {
		e.preventDefault();

		if (textarea.value !== '') {
			sendMessage();
			setTimeout(sendReply, 600);
		}
	}
});

form.addEventListener('submit', function (e) {
	e.preventDefault();

	if (textarea.value !== '') {
		sendMessage();
		sendReply();
	}
});
