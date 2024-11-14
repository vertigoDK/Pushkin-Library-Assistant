import ApiClient from '../api/ApiClient.js';

export default class ModalSearchHandler {
    constructor(modal, booksContainer) {
        this.modal = modal;
        this.booksContainer = booksContainer;
        this.apiClient = new ApiClient('http://localhost:8000');
        this.setupEventListeners();
    }

    setupEventListeners() {
        const form = this.modal.querySelector('.advanced-search');
        form.addEventListener('submit', (e) => this.handleSearch(e));
    }

    async handleSearch(e) {
        e.preventDefault();
        
        const formData = {
            title: this.modal.querySelector('#title').value,
            author: this.modal.querySelector('#author').value,
            keywords: this.modal.querySelector('#keywords').value,
            year1: this.modal.querySelector('#year1').value,
            year2: this.modal.querySelector('#year2').value,
            isbn: '',
            first_number: 1
        };

        try {
            const response = await this.apiClient.getBooks(formData);
            if (response.status === 'success') {
                this.updateBooksGrid(response.data.records);
            }
        } catch (error) {
            console.error('Error searching books:', error);
        }
    }

    updateBooksGrid(books) {
        const booksGrid = this.modal.querySelector('.books-grid');
        booksGrid.innerHTML = books.map(book => createBookCard(book)).join('');
    }
} 