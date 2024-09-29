let books = [

]

document.addEventListener('DOMContentLoaded', () => {
    const chatBarInput = document.querySelector('.dosai__chat-bar-input');
    const chatBarBtn = document.querySelector('.dosai__chat-bar-btn');
    const dosaiBox = document.querySelector('.dosai__box');
    const modal = document.getElementById("bookModal");
    const closeModal = document.querySelector('.closeBtn');
    const bookList = document.getElementById("bookList");

    const responses = [
        'Извините, я вас не понимаю. Не могли бы вы перефразировать?',
        'Это очень интересно! Расскажите подробнее.',
        'Хм, я об этом еще не думал...',
        'Я все еще учусь, но уже могу поддержать разговор!',
        'Спасибо за ваш вопрос!'
    ];

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
            sendPostRequest(userMessage);  // Отправляем сообщение пользователя на сервер
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

    function addSearchButton() {
        const buttonElement = document.createElement('button');
        buttonElement.className = 'search-button';
        buttonElement.textContent = 'Результаты поиска';

        buttonElement.onclick = openModal;  // Обработчик клика для кнопки

        const buttonContainer = document.createElement('div');
        buttonContainer.appendChild(buttonElement);

        dosaiBox.appendChild(buttonContainer);
        scrollToBottom();
    }

    function openModal() {
        displayBooks(); // Показываем книги
        modal.style.display = 'block'; // Открываем модальное окно
    }

    function displayBooks() {
        bookList.innerHTML = ''; // Очищаем список книг

        if (books.length === 0) {
            bookList.innerHTML = '<p>Книги не найдены.</p>';
            return;
        }

        books.forEach(book => {
            let bookInfo = '';
            for (const key in book) {
                if (key !== "cover_url") { // Проверяем на cover_url
                    bookInfo += `<p><strong>${key}:</strong> ${book[key]}</p>`;
                }
            }

            const bookElement = document.createElement('div');
            bookElement.className = 'book';
            bookElement.innerHTML = `
                <img src="http://irbis.pushkinlibrary.kz:8087/${book.cover_url}" alt="${book.title}">
                <div class="book-info">
                    ${bookInfo}
                </div>
            `;

            bookList.appendChild(bookElement); // Добавляем элемент книги в список
        });
    }


    closeModal.onclick = function () {
        modal.style.display = 'none'; // Закрываем модальное окно
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }

    function scrollToBottom() {
        dosaiBox.scrollTop = dosaiBox.scrollHeight;
    }

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    const csrftoken = getCookie('csrftoken');

    function sendPostRequest(userMessage) {
        fetch('http://127.0.0.1:8000/api/send-request/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken  // Добавляем токен CSRF в заголовок
            },
            body: JSON.stringify({ user_message: userMessage })  // Отправляем сообщение в формате JSON
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);  // Обработка ответа
                addDosaiMessage(getRandomResponse()); // Добавляем рандомный ответ

                // Проверяем intent и добавляем кнопку, если нужно
                if (checkIntent('books_search', data)) {
                    addSearchButton();

                    // Перебираем все элементы из data.books_search.books_result.recs
                    const recs = data[0][1].find(item => item[0] === "books_result")[1].recs;


                    // Сохраняем книги в переменную
                    books = recs.map(rec => ({
                        number: rec.number,
                        author: rec.author,
                        title: rec.title,
                        publish_info: rec.publish_info,
                        cover_url: rec.cover_url
                    }));

                    // Вызываем функцию для отображения книг
                    displayBooks();
                }
            })
            .catch(error => console.error('Ошибка при отправке запроса:', error));
    }


    function checkIntent(intent, apiResponse) {
        for (let i = 0; i < apiResponse.length; i++) {
            const [key, value] = apiResponse[i];
            if (key === intent) {
                return value !== null;  // Возвращаем true, если значение не null
            }
        }
        return false;
    }


    function getRandomResponse() {
        const randomIndex = Math.floor(Math.random() * responses.length);
        return responses[randomIndex];
    }
});