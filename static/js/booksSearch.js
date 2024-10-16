

function displayBooks(books, modalId) {
    const bookList = document.getElementById(`bookList_${modalId}`);

    if (!bookList) {
        console.error(`Элемент с ID bookList_${modalId} не найден`);
        return;  // Останавливаем выполнение, если элемент не найден
    }

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

function checkIntent(intent, apiResponse) {
    for (let i = 0; i < apiResponse.length; i++) {
        const [key, value] = apiResponse[i];
        if (key === intent) {
            return value !== null;
        }
    }
    return false;
}


export function sendPostRequest(userMessage) {
    return fetch('http://127.0.0.1:8000/api/send-request/', {
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
            console.log('Ответ с сервера:', data);

            // Проверка, что "books_search" найден
            if (checkIntent('books_search', data.intents)) {
                modalCounter += 1;  // Генерация уникального ID для модального окна
                const modalId = `bookModal_${modalCounter}`;  // Присваиваем ID

                // Инициализируем author и title
                const author = data.intents[0][1].find(item => item[0] === 'author')[1] || "";
                const title = data.intents[0][1].find(item => item[0] === 'title')[1] || "";

                // Создаем модальное окно с уже инициализированными полями
                createModal(modalId, { author, title });

                // Добавляем кнопку для открытия модального окна
                addSearchButton(modalId);

                // Извлекаем книги из данных
                const recs = data.intents[0][1].find(item => item[0] === "books_result")[1].recs;

                // Отображаем книги в созданном модальном окне
                displayBooks(recs, modalId);
            } else {
                console.log('Намерение books_search не найдено');
            }
        })
        .catch(error => {
            console.error('Ошибка при отправке запроса:', error);
        });
}
