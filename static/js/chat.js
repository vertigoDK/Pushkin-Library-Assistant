import { sendPostRequest } from './booksSearch.js';


document.addEventListener('DOMContentLoaded', () => {
    const chatBarInput = document.querySelector('.dosai__chat-bar-input');
    const chatBarBtn = document.querySelector('.dosai__chat-bar-btn');
    const dosaiBox = document.querySelector('.dosai__box');

    chatBarBtn.addEventListener('click', (event) => {
        event.preventDefault();
        sendMessage();
    });

    chatBarInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendMessage();
        }
    });

    function sendMessage() {
        const userMessage = chatBarInput.value.trim();
        if (userMessage !== '') {
            addUserMessage(userMessage);
            chatBarInput.value = '';
            console.log('Отправляем запрос с сообщением:', userMessage);

            sendPostRequest(userMessage)
                .then(response => {
                    console.log('Ответ сервера:', response);
                    addDosaiMessage("победа"); // Добавляем ответ бота в интерфейс
                })
                .catch(error => {
                    console.error('Ошибка при отправке запроса:', error);
                    addDosaiMessage('Произошла ошибка. Попробуйте снова.');
                });
        }
    }


    function addUserMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message user-message';
        messageElement.innerHTML = `<span>${message}</span>`;
        dosaiBox.appendChild(messageElement);
        scrollToBottom();
    }

    function addDosaiMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message dosai-message';
        messageElement.innerHTML = `<span>${message}</span>`;
        dosaiBox.appendChild(messageElement);
        scrollToBottom();
    }
});
