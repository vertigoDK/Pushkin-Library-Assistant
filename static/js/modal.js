let modalCounter = 0;


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


function addSearchButton(modalId) {
    const buttonElement = document.createElement('button');
    buttonElement.className = 'search-button';
    buttonElement.textContent = 'Результаты поиска';
    buttonElement.onclick = () => openModal(modalId);  // Привязываем кнопку к конкретному модальному окну
    const buttonContainer = document.createElement('div');
    buttonContainer.appendChild(buttonElement);
    document.querySelector('.dosai__box').appendChild(buttonContainer);
    scrollToBottom();
}


function createModal(modalId, fields = {}) {
    const { author = "", title = "" } = fields;  // Инициализация значений по умолчанию

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = modalId;

    modal.innerHTML = `
        <div class="modal-content">
            <span class="closeBtn" onclick="closeModal('${modalId}')">&times;</span>
            <h2>Поиск книг</h2>
            
            <!-- Панель поиска с инициализацией значений полей -->
            <div class="search-panel">
                <input type="text" id="author_${modalId}" placeholder="Введите автора" value="${author}">
                <input type="text" id="title_${modalId}" placeholder="Введите название книги" value="${title}">
                <button onclick="searchBooks('${modalId}', 1)">Поиск</button>
            </div>
            
            <!-- Список книг -->
            <div id="bookList_${modalId}" class="book-list"></div>
        </div>
    `;

    document.body.appendChild(modal);  // Добавляем модальное окно в DOM
}


function searchBooks(modalId, firstNumber) {
    const author = document.getElementById(`author_${modalId}`).value;
    const title = document.getElementById(`title_${modalId}`).value;
    const bookList = document.getElementById(`bookList_${modalId}`);

    // Показываем индикатор загрузки
    bookList.innerHTML = '<p>Загрузка...</p>';

    const params = {
        author: author || "",
        title: title || "",
        first_number: firstNumber  // Передаем номер первой записи для текущей страницы
    };

    // Отправляем запрос на сервер
    fetch('http://127.0.0.1:8000/api/books-search/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')
        },
        body: JSON.stringify(params)
    })
        .then(response => response.json())
        .then(data => {
            const recs = data.recs;

            // Отображаем книги
            displayBooks(recs, modalId);

        })
        .catch(error => {
            console.error('Ошибка при отправке запроса:', error);
            bookList.innerHTML = '<p>Ошибка загрузки данных. Попробуйте снова.</p>';
        });
}



function openModal(modalId) {
    const modal = document.getElementById(modalId);  // Открываем модальное окно по ID
    modal.style.display = 'block';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

window.onclick = function (event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
};
