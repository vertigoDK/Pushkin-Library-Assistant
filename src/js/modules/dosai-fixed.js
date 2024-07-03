export default function dosaiFixed() {
	const dosaiField = document.querySelector('.dosai-fixed__chat-box');
	const dosaiBox = document.querySelector('.dosai-fixed__chat');
	const form = document.querySelector('.dosai-fixed__chat-form');
	const textarea = document.querySelector('.dosai-fixed__chat-input');
	// Show hide chat
	const btn = document.querySelector('.dosai-fixed__btn');
	const image1 = document.querySelector('#dosai-fixed-img-1');
	const image2 = document.querySelector('#dosai-fixed-img-2');

	textarea.addEventListener('input', function () {
		dosaiBox.style.height = 'auto';
		form.style.height = 'auto';
		this.rows = 2;
	});

	function createUserMessage(text) {
		let textArr = text.split('');
		let j = 25;
		let result = '';
		for (let i = 0; i < textArr.length; i++) {
			result += textArr[i];
			if (i === j) {
				result += `\n${textArr[i]}`;
				j += 25;
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
		textarea.rows = 1;
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

	// Show hide chat
	btn.addEventListener('click', function () {
		dosaiBox.classList.toggle('chat-shown');
		image1.classList.toggle('chat-shown');
		image2.classList.toggle('chat-shown');
	});
}
