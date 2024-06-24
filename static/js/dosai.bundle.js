document.addEventListener('DOMContentLoaded', function () {
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    // Генерация уникального идентификатора для пользователя
    function generateSessionId() {
        return 'xxxx-xxxx-xxxx-xxxx'.replace(/[x]/g, function () {
            const r = Math.random() * 16 | 0;
            return r.toString(16);
        });
    }

    // Получение sessionId из localStorage или генерация нового
    let sessionId = localStorage.getItem('sessionId');
    if (!sessionId) {
        sessionId = generateSessionId();
        localStorage.setItem('sessionId', sessionId);
    }

    // Загрузка сообщений из localStorage
    function loadMessages() {
        const savedMessages = localStorage.getItem('chatMessages');
        if (savedMessages) {
            const messages = JSON.parse(savedMessages);
            messages.forEach(msg => {
                addMessage(msg.sender, msg.text, false);
            });
            scrollToBottom();
        }
    }

    // Сохранение сообщений в localStorage
    function saveMessages() {
        const messages = [];
        document.querySelectorAll('#chat-messages > div').forEach(msg => {
            messages.push({
                sender: msg.classList.contains('dosai__user-msg') ? 'user' : 'bot',
                text: msg.textContent
            });
        });
        localStorage.setItem('chatMessages', JSON.stringify(messages));
        setTimeout(clearMessages, 1800000); // Очистка сообщений через 30 минут
    }

    // Очистка сообщений
    function clearMessages() {
        localStorage.removeItem('chatMessages');
        chatMessages.innerHTML = '';
    }

    // Добавление сообщений в чат
    function addMessage(sender, message, save = true) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('dosai__' + sender + '-msg');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        scrollToBottom();
        if (save) saveMessages();
    }

    // Прокрутка чата вниз
    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    chatForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const userMessage = chatInput.value.trim();
        if (userMessage) {
            addMessage('user', userMessage);
            chatInput.value = '';
            // Отправка запроса на сервер Flowise
            query({
                "question": userMessage,
                "overrideConfig": {
                    "sessionId": sessionId,
                }
            }).then((response) => {
                addMessage('bot', response.text);
            }).catch((error) => {
                console.error('Error:', error);
                addMessage('bot', 'Sorry, something went wrong.');
            });
        }
    });

    // Обработка нажатия Enter для отправки сообщения
    chatInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            chatForm.dispatchEvent(new Event('submit'));
        }
    });

    async function query(data) {
        try {
            const response = await fetch(
                "http://127.0.0.1:3000/api/v1/prediction/9cc42bb5-8781-46ee-95fc-d728b2b9de2d",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }
            );
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error during fetch:', error);
            throw error;
        }
    }

    // Загрузка сообщений при загрузке страницы
    loadMessages();

    // Очистка сообщений через 30 минут
    setTimeout(clearMessages, 1800000);
});
