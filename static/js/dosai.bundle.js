

const books = [
    {
        "Автор": "Лев Толстой",
        "Персоналия": "Лев Николаевич Толстой",
        "Заглавие": "Война и мир",
        "Ключевые слова": "Роман, История",
        "Предметная рубрика": "Художественная литература",
        "Год издания": "1869",
        "Издательство": "Издательство 1",
        "ISBN": "978-5-4327-1024-5",
        "Характер документа": "Текст",
        "Вид документа": "Книга",
        "Язык документа": "Русский",
        "cover": "https://avatars.mds.yandex.net/get-mpic/5236458/img_id5739883478692037103.jpeg/orig" 
    },
    {
        "Автор": "Федор Достоевский",
        "Персоналия": "Федор Михайлович Достоевский",
        "Заглавие": "Преступление и наказание",
        "Ключевые слова": "Роман, Психология",
        "Предметная рубрика": "Художественная литература",
        "Год издания": "1866",
        "Издательство": "Издательство 2",
        "ISBN": "978-5-1234-5678-1",
        "Характер документа": "Текст",
        "Вид документа": "Книга",
        "Язык документа": "Русский",
        "cover": "https://avatars.mds.yandex.net/get-mpic/5236458/img_id5739883478692037103.jpeg/orig" 
    },
    {
        "Автор": "Антон Чехов",
        "Персоналия": "Антон Павлович Чехов",
        "Заглавие": "Три сестры",
        "Ключевые слова": "Драма, Театр",
        "Предметная рубрика": "Драматургия",
        "Год издания": "1901",
        "Издательство": "Издательство 3",
        "ISBN": "978-5-8765-4321-0",
        "Характер документа": "Текст",
        "Вид документа": "Книга",
        "Язык документа": "Русский",
        "cover": "https://avatars.mds.yandex.net/get-mpic/5236458/img_id5739883478692037103.jpeg/orig" 
    },
    {
        "Автор": "Михаил Булгаков",
        "Персоналия": "Михаил Афанасьевич Булгаков",
        "Заглавие": "Мастер и Маргарита",
        "Ключевые слова": "Роман, Фантастика",
        "Предметная рубрика": "Художественная литература",
        "Год издания": "1967",
        "Издательство": "Издательство 4",
        "ISBN": "978-5-7754-3210-9",
        "Характер документа": "Текст",
        "Вид документа": "Книга",
        "Язык документа": "Русский",
        "cover": "https://avatars.mds.yandex.net/get-mpic/5236458/img_id5739883478692037103.jpeg/orig" 
    },
    {
        "Автор": "Борис Пастернак",
        "Персоналия": "Борис Леонидович Пастернак",
        "Заглавие": "Доктор Живаго",
        "Ключевые слова": "Роман, Любовь",
        "Предметная рубрика": "Художественная литература",
        "Год издания": "1957",
        "Издательство": "Издательство 5",
        "ISBN": "978-5-3456-7890-1",
        "Характер документа": "Текст",
        "Вид документа": "Книга",
        "Язык документа": "Русский",
        "cover": "https://avatars.mds.yandex.net/get-mpic/5236458/img_id5739883478692037103.jpeg/orig" 
    }
];

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
        books.forEach(book => {
            let bookInfo = '';
            for (const key in book) {
                if (key !== "cover") { 
                    bookInfo += `<p><strong>${key}:</strong> ${book[key]}</p>`;
                }
            }

            const bookElement = `
                <div class="book">
                    <img src="${book.cover}" alt="${book["Заглавие"]}">
                    <div class="book-info">
                        ${bookInfo}
                    </div>
                </div>
            `;
            
            bookList.innerHTML += bookElement; 
        });
    }

    closeModal.onclick = function() {
        modal.style.display = 'none'; // Закрываем модальное окно
    }

    window.onclick = function(event) {
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