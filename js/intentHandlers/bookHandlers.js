import { addBotMessage } from '../chat/botMessageHandler.js';

function createBookCard(book) {
    const coverUrl = book.cover_url ? 
        `http://irbis.pushkinlibrary.kz:8087/jirbis2/${book.cover_url}` : 
        'http://irbis.pushkinlibrary.kz:8087/jirbis2/components/com_irbis/images/no_cover.jpg';

    return `
        <div class="book-card">
            <div class="book-cover-wrapper">
                <div class="book-cover">
                    <img src="${coverUrl}" alt="${book.title}" onerror="this.src='http://irbis.pushkinlibrary.kz:8087/jirbis2/components/com_irbis/images/no_cover.jpg'">
                    <div class="book-shine"></div>
                </div>
                <div class="book-shadow"></div>
            </div>
            <div class="book-info">
                <h3 class="book-title" title="${book.title}">${book.title}</h3>
                <div class="book-details">
                    <p class="author">
                        <svg class="icon" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                        <span>${book.author || 'Автор не указан'}</span>
                    </p>
                    <p class="publish-info">
                        <svg class="icon" viewBox="0 0 24 24">
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                        </svg>
                        <span>${book.publish_info}</span>
                    </p>
                    <p class="pages">
                        <svg class="icon" viewBox="0 0 24 24">
                            <path d="M19 1l-5 5v11l5-4.5V1zM1 5v14l9.5-8.5L1 5z"/>
                        </svg>
                        <span>${book.pages} стр.</span>
                    </p>
                </div>
                <div class="book-actions">
                    <button class="action-btn check-btn">
                        <svg class="icon" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                        </svg>
                        <span>Проверить наличие</span>
                    </button>
                    <button class="action-btn location-btn">
                        <svg class="icon" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                        </svg>
                        <span>Где найти</span>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function createModal(books, userSearchParams) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Найденные книги</h2>
                <div class="header-actions">
                    <button class="toggle-search active">
                        <svg class="icon" viewBox="0 0 24 24">
                            <path d="M7 10l5 5 5-5z"/>
                        </svg>
                    </button>
                    <button class="close-modal">
                        <svg viewBox="0 0 24 24">
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="search-form">
                <form class="advanced-search">
                    <div class="search-grid">
                        <div class="search-field">
                            <input type="text" id="title" name="title" placeholder="Название книги" value="${userSearchParams.title || ''}">
                        </div>
                        <div class="search-field">
                            <input type="text" id="author" name="author" placeholder="Автор" value="${userSearchParams.author || ''}">
                        </div>
                        <div class="search-field">
                            <input type="text" id="keywords" name="keywords" placeholder="Ключевые слова" value="${userSearchParams.keywords || ''}">
                        </div>
                        <div class="years-inputs">
                            <input type="number" id="year1" name="year1" placeholder="Год от" value="${userSearchParams.year1 || ''}">
                            <input type="number" id="year2" name="year2" placeholder="Год до" value="${userSearchParams.year2 || ''}">
                        </div>
                        <button type="submit" class="search-button">
                            <svg class="icon" viewBox="0 0 24 24">
                                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
            <div class="modal-scroll">
                <div class="books-grid">
                    ${books.map(book => createBookCard(book)).join('')}
                </div>
            </div>
        </div>
    `;
    
    return modal;
}

function addModalButton(books, chatMessagesContainer, userSearchParams) {
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'modal-button-container';
    buttonContainer.innerHTML = `
        <button class="show-books-btn">
            Показать найденные книги
        </button>
    `;

    const showBooksBtn = buttonContainer.querySelector('.show-books-btn');
    showBooksBtn.addEventListener('click', () => {
        const modal = createModal(books, userSearchParams);
        document.body.appendChild(modal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });

        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.remove();
        });

        const toggleSearch = modal.querySelector('.toggle-search');
        const searchForm = modal.querySelector('.search-form');
        
        toggleSearch.addEventListener('click', () => {
            searchForm.classList.toggle('collapsed');
            toggleSearch.classList.toggle('active');
        });
    });

    chatMessagesContainer.appendChild(buttonContainer);
}

export default class BookHandlers {
    constructor(response, chatMessagesContainer, message) {
        this.response = response;
        this.chatMessagesContainer = chatMessagesContainer;
        this.message = message;
    }

    async processBookIntent() {
        const booksCount = this.response.search_results.total_records;
        const books = this.response.search_results.records;
        const userSearchParams = this.response.intent_classification.classification.book_search;

        if (booksCount > 0) {
            // Создаем красивый блок с информацией о результатах
            const resultsBlock = document.createElement('div');
            resultsBlock.className = 'books-result-block';
            
            // Добавляем иконку и анимацию
            resultsBlock.innerHTML = `
                <div class="result-header">
                    <div class="result-icon">
                        <svg class="books-icon" viewBox="0 0 24 24">
                            <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
                        </svg>
                    </div>
                    <div class="result-info">
                        <h3>Найдено ${booksCount} книг</h3>
                        ${userSearchParams.title ? `<p>По запросу: "${userSearchParams.title}"</p>` : ''}
                        ${userSearchParams.author ? `<p>Автор: ${userSearchParams.author}</p>` : ''}
                    </div>
                </div>
                <div class="result-preview">
                    ${books.slice(0, 3).map(book => `
                        <div class="mini-book-card">
                            <img src="${book.cover_url ? 
                                `http://irbis.pushkinlibrary.kz:8087/${book.cover_url}` : 
                                'http://irbis.pushkinlibrary.kz:8087/jirbis2/components/com_irbis/images/covers/16/3385/1633851923.jpg'
                            }" alt="${book.title}">
                        </div>
                    `).join('')}
                    ${booksCount > 3 ? `<div class="more-books">+${booksCount - 3}</div>` : ''}
                </div>
                <button class="show-books-btn pulse-animation">
                    <span>Показать все найденные книги</span>
                    <svg class="arrow-icon" viewBox="0 0 24 24">
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                </button>
            `;

            this.chatMessagesContainer.appendChild(resultsBlock);
            
            // Добавляем обработчик для кнопки
            const showBooksBtn = resultsBlock.querySelector('.show-books-btn');
            showBooksBtn.addEventListener('click', () => {
                const modal = createModal(books, userSearchParams);
                document.body.appendChild(modal);
                
                // Добавляем обработчики закрытия
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        modal.remove();
                    }
                });

                modal.querySelector('.close-modal').addEventListener('click', () => {
                    modal.remove();
                });

                const toggleSearch = modal.querySelector('.toggle-search');
                const searchForm = modal.querySelector('.search-form');
                
                toggleSearch.addEventListener('click', () => {
                    searchForm.classList.toggle('collapsed');
                    toggleSearch.classList.toggle('active');
                });
            });
        } else {
            addBotMessage(`
                <div class="no-books-found">
                    <svg class="sad-icon" viewBox="0 0 24 24">
                        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                    </svg>
                    <p>К сожалению, книги не найдены</p>
                    <a href="http://irbis.pushkinlibrary.kz:8087/jirbis2/index.php" target="_blank" class="catalog-link">
                        Перейти в каталог библиотеки
                    </a>
                </div>
            `, this.chatMessagesContainer);
        }
    }
}