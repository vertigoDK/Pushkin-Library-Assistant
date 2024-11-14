export default class ChatUIHandler {
    constructor(document) {
        this.document = document;
        this.mainContent = document.getElementById('mainContent');
        this.chatContainer = document.querySelector('.chat-container');
        this.chatMessages = document.getElementById('chatMessages');
        this.isFirstMessage = true;
    }

    clearPageContent() {
        if (this.isFirstMessage) {
            // При первом сообщении скрываем главный контент и показываем чат
            if (this.mainContent) {
                this.mainContent.style.display = 'none';
            }
            if (this.chatContainer) {
                this.chatContainer.style.display = 'block';
            }
            if (this.chatMessages) {
                this.chatMessages.style.display = 'block';
            }
            this.isFirstMessage = false;
        }
    }

    // Метод для сброса состояния при перезагрузке
    reset() {
        if (this.mainContent) {
            this.mainContent.style.display = 'block';
        }
        if (this.chatContainer) {
            this.chatContainer.style.display = 'none';
        }
        if (this.chatMessages) {
            this.chatMessages.style.display = 'none';
        }
        this.isFirstMessage = true;
    }
}
