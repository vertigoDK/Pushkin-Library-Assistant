import { addBotMessage } from '../chat/botMessageHandler.js';

export default class OtherHandlers {
    constructor(response, chatMessagesContainer, messageText) {
        this.response = response;
        this.chatMessagesContainer = chatMessagesContainer;
        this.messageText = messageText;
    }

    async createSourceCard(source) {
        const card = document.createElement('div');
        card.className = 'source-card';
        
        if (!source.metadata.title) {
            source.metadata.title = source.metadata.url;
        }
        
        card.innerHTML = `
            <div class="source-content">
                <div class="source-title">${source.metadata.title}</div>
                <a href="${source.metadata.url}" target="_blank" class="source-link">
                    Читать источник
                    <svg class="icon" viewBox="0 0 24 24">
                        <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                    </svg>
                </a>
            </div>
        `;
        
        return card.outerHTML;
    }

    processOtherIntent() {
        addBotMessage(this.response.llm_response, this.chatMessagesContainer);

        if (this.response.search_results?.documents?.length > 0) {
            const sourcesContainer = document.createElement('div');
            sourcesContainer.className = 'sources-container';

            // Разделяем документы на основные и рекомендуемые
            const mainDocs = this.response.search_results.documents.slice(0, 1);
            const recommendedDocs = this.response.search_results.documents.slice(1);

            // Создаем и добавляем контейнер сразу
            this.chatMessagesContainer.appendChild(sourcesContainer);

            // Асинхронно обрабатываем документы
            Promise.all([
                ...mainDocs.map(doc => this.createSourceCard(doc)),
                ...recommendedDocs.map(doc => this.createSourceCard(doc))
            ]).then(cards => {
                const [mainCards, ...recCards] = cards;
                
                sourcesContainer.innerHTML = `
                    ${mainDocs.length > 0 ? `
                        <div class="sources-header">
                            <svg class="icon" viewBox="0 0 24 24">
                                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
                            </svg>
                            По вашему запросу:
                        </div>
                        <div class="sources-grid">
                            ${mainCards}
                        </div>
                    ` : ''}
                    
                    ${recommendedDocs.length > 0 ? `
                        <div class="sources-header recommended">
                            <svg class="icon" viewBox="0 0 24 24">
                                <path d="M13.5 2l-7.5 7.5v11.5h15v-11.5l-7.5-7.5zm4.5 16h-9v-2h9v2zm0-4h-9v-2h9v2z"/>
                            </svg>
                            Похожие источники:
                        </div>
                        <div class="sources-grid">
                            ${recCards.join('')}
                        </div>
                    ` : ''}
                `;
            });
        }
    }
}
