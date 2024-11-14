export function addUserMessage(message, chatMessagesContainer) {
    const messageElement = document.createElement('div');
    messageElement.className = 'user-message message-fade-in';
    messageElement.innerHTML = `<p>${message}</p>`;
    chatMessagesContainer.appendChild(messageElement);
}
