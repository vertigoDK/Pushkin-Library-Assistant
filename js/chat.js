import { addBotMessage, addBotTypingIndicator } from './chat/botMessageHandler.js';
import { addUserMessage } from './chat/userMessageHandler.js';
import ChatUIHandler from './chat/uiHandler.js';
import ApiClient from './api/ApiClient.js';
import BookHandlers from './intentHandlers/bookHandlers.js';
import OtherHandlers from './intentHandlers/otherHandlers.js';

const uiHandler = new ChatUIHandler(document);

// Функция для прокрутки чата вниз
const scrollToBottom = (container) => {
    container.scrollTop = container.scrollHeight;
};

// Обработчик события для отправки сообщения
const handleSubmit = async (event) => {
    event.preventDefault();

    const chatInput = document.getElementById('chatInput');
    const chatMessagesContainer = document.querySelector('#chatMessages .flex');

    const messageText = chatInput.value.trim();
    if (messageText === '') return;

    // Делаем инпут неактивным
    chatInput.disabled = true;
    chatInput.classList.add('input-disabled');

    uiHandler.clearPageContent();
    addUserMessage(messageText, chatMessagesContainer);
    scrollToBottom(chatMessagesContainer);
    chatInput.value = '';
    
    const typingIndicator = addBotTypingIndicator(chatMessagesContainer);
    scrollToBottom(chatMessagesContainer);
    
    try {
        const apiClient = new ApiClient('http://localhost:8000');
        const response = await apiClient.sendMessage(messageText);

        typingIndicator.remove();

        const intent_classification = response.intent_classification.intent_type;

        if (intent_classification === 'book'){
            const bookHandlers = new BookHandlers(response, chatMessagesContainer, messageText);
            bookHandlers.processBookIntent();
            scrollToBottom(chatMessagesContainer);
        } else {
            const otherHandlers = new OtherHandlers(response, chatMessagesContainer, messageText);
            otherHandlers.processOtherIntent();
            scrollToBottom(chatMessagesContainer);
        }
    } catch (error) {
        typingIndicator.remove();
        addBotMessage("Извините, произошла ошибка при обработке запроса", chatMessagesContainer);
        scrollToBottom(chatMessagesContainer);
    } finally {
        // Возвращаем инпут в активное состояние
        chatInput.disabled = false;
        chatInput.classList.remove('input-disabled');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chatForm');
    if (!chatForm) {
        console.error("Форма чата не найдена!");
        return;
    }

    // Сбрасываем состояние при загрузке страницы
    uiHandler.reset();

    chatForm.addEventListener('submit', handleSubmit);
});
