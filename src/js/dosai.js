const dosaiField = document.querySelector('.dosai__box');
const sendBtn = document.querySelector('.dosai__chat-bar-btn');
const form = document.querySelector('.dosai__chat-bar');
const textarea = document.querySelector('.dosai__chat-bar-input');

textarea.addEventListener('input', function () {
	this.style.height = 'auto';
	this.style.height = this.scrollHeight + 'px';

	form.style.height = 'auto';
	form.style.height = form.scrollHeight + 'px';
});

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
	dosaiField.appendChild(newMessage);
}

function sendMessage() {
	createUserMessage(textarea.value);
	textarea.value = '';
	form.style.height = '49px';
	textarea.style.height = '18px';
}

form.addEventListener('keypress', function (e) {
	if (e.key === 'Enter') {
		e.preventDefault();

		if (textarea.value !== '') {
			sendMessage();
		}
	}
});
form.addEventListener('submit', function (e) {
	e.preventDefault();

	if (textarea.value !== '') {
		sendMessage();
	}
});
