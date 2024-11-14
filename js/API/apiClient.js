// api/ApiClient.js

export default class ApiClient {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    async sendMessage(message) {
        const response = await fetch(`${this.apiUrl}/api/v1/chat/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'SameSite': 'Strict'
            },
            credentials: 'same-origin',
            body: JSON.stringify({ 'query': message }),
        });
        

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
    }

    async getBooks(params) {
        const response = await fetch(`${this.apiUrl}/api/v1/book-search/search`, {
            method: 'POST',
            body: JSON.stringify(params),
        });

        return response.json();
    }
}