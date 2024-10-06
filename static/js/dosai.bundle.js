let books = [

]

document.addEventListener('DOMContentLoaded', () => {
    const chatBarInput = document.querySelector('.dosai__chat-bar-input');
    const chatBarBtn = document.querySelector('.dosai__chat-bar-btn');
    const dosaiBox = document.querySelector('.dosai__box');
    let modalCounter = 0;  // Счетчик модальных окон для создания уникальных ID

    const responses = [
        'Извините, я вас не понимаю. Не могли бы вы перефразировать?',
        'Это очень интересно! Расскажите подробнее.',
        'Хм, я об этом еще не думал...',
        'Я все еще учусь, но уже могу поддержать разговор!',
        'Спасибо за ваш вопрос!'
    ];


    function searchBooks(modalId) {
        const author = document.getElementById(`author_${modalId}`).value;
        const title = document.getElementById(`title_${modalId}`).value;

        // Показываем индикатор загрузки
        const bookList = document.getElementById(`bookList_${modalId}`);
        bookList.innerHTML = '<p>Загрузка...</p>';

        // Имитация отправки запроса
        const params = {
            author: author || null,
            title: title || null,
            // Добавьте сюда другие параметры, если нужно
        };

        // Пример отправки нового запроса (замените URL на реальный)
        fetch('http://127.0.0.1:8000/api/send-request/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify(params)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);  // Проверяем новые данные
                const recs = data.intents[0][1].find(item => item[0] === "books_result")[1].recs;

                // Сохраняем новые книги
                const books = recs.map(rec => ({
                    number: rec.number,
                    author: rec.author,
                    title: rec.title,
                    publish_info: rec.publish_info,
                    cover_url: rec.cover_url
                }));

                // Обновляем книги в модальном окне
                displayBooks(books, modalId);
            })
            .catch(error => {
                console.error('Ошибка при отправке запроса:', error);
                bookList.innerHTML = '<p>Ошибка загрузки данных. Попробуйте снова.</p>';
            });
    }


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

    function addSearchButton(modalId) {
        const buttonElement = document.createElement('button');
        buttonElement.className = 'search-button';
        buttonElement.textContent = 'Результаты поиска';
        buttonElement.onclick = () => openModal(modalId);  // Привязываем кнопку к конкретному модальному окну
        const buttonContainer = document.createElement('div');
        buttonContainer.appendChild(buttonElement);
        dosaiBox.appendChild(buttonContainer);
        scrollToBottom();
    }

    function openModal(modalId) {
        const modal = document.getElementById(modalId);  // Открываем модальное окно по ID
        modal.style.display = 'block';
    }

    function createModal(modalId) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.id = modalId;

        modal.innerHTML = `
            <div class="modal-content">
                <span class="closeBtn" onclick="closeModal('${modalId}')">&times;</span>
                <h2>Поиск книг</h2>
                
                <!-- Панель поиска -->
                <div class="search-panel">
                    <input type="text" id="author_${modalId}" placeholder="Введите автора">
                    <input type="text" id="title_${modalId}" placeholder="Введите название книги">
                    <button onclick="searchBooks('${modalId}')">Поиск</button>
                </div>
                
                <div id="bookList_${modalId}" class="book-list"></div>
            </div>
        `;

        document.body.appendChild(modal);  // Добавляем модальное окно в DOM
    }
    window.onclick = function (event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    };

    function displayBooks(books, modalId) {
        const bookList = document.getElementById(`bookList_${modalId}`);
        bookList.innerHTML = ''; // Очищаем список книг

        if (books.length === 0) {
            bookList.innerHTML = '<p>Книги не найдены.</p>';
            return;
        }

        books.forEach(book => {
            let bookInfo = '';
            for (const key in book) {
                if (key !== "cover_url") {
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

    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = 'none';
    }

    function sendPostRequest(userMessage) {
        fetch('http://127.0.0.1:8000/api/send-request/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify({ user_message: userMessage })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);  // Проверяем полученные данные

                addDosaiMessage(getRandomResponse());  // Сообщение от бота

                if (checkIntent('books_search', data.intents)) {
                    modalCounter += 1;  // Увеличиваем счетчик для создания уникального модального окна
                    const modalId = `bookModal_${modalCounter}`;  // Уникальный ID для модального окна

                    createModal(modalId);  // Создаем новое модальное окно
                    addSearchButton(modalId);  // Добавляем кнопку для открытия модального окна

                    const recs = data.intents[0][1].find(item => item[0] === "books_result")[1].recs;

                    const books = recs.map(rec => ({
                        number: rec.number,
                        author: rec.author,
                        title: rec.title,
                        publish_info: rec.publish_info,
                        cover_url: rec.cover_url
                    }));

                    displayBooks(books, modalId);  // Отображаем книги в новом модальном окне
                }
            })
            .catch(error => console.error('Ошибка при отправке запроса:', error));
    }

    function checkIntent(intent, apiResponse) {
        for (let i = 0; i < apiResponse.length; i++) {
            const [key, value] = apiResponse[i];
            if (key === intent) {
                return value !== null;
            }
        }
        return false;
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
    function scrollToBottom() {
        const dosaiBox = document.querySelector('.dosai__box');
        dosaiBox.scrollTop = dosaiBox.scrollHeight;
    }
    function getRandomResponse() {
        const responses = [
            'Извините, я вас не понимаю. Не могли бы вы перефразировать?',
            'Это очень интересно! Расскажите подробнее.',
            'Хм, я об этом еще не думал...',
            'Я все еще учусь, но уже могу поддержать разговор!',
            'Спасибо за ваш вопрос!'
        ];

        const randomIndex = Math.floor(Math.random() * responses.length);
        return responses[randomIndex];
    }
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = 'none';
    }

});
