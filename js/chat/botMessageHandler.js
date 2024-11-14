export function addBotMessage(message, chatMessagesContainer) {
    const messageElement = document.createElement('div');
    messageElement.className = 'bot-message message-fade-in';
    messageElement.innerHTML = `<p>${message}</p>`;
    chatMessagesContainer.appendChild(messageElement);
}

export function addBotTypingIndicator(chatMessagesContainer) {
    const typingElement = document.createElement('div');
    typingElement.className = 'bot-message typing-indicator message-fade-in';
    typingElement.innerHTML = `
        <div class="typing-dots">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;
    chatMessagesContainer.appendChild(typingElement);
    return typingElement;
}
