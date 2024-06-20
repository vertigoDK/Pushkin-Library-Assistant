!function () {
    const e = document.querySelector(".dosai__row"),
        t = (document.querySelector(".dosai__chat-bar-btn"), document.querySelector(".dosai__chat-bar")),
        n = document.querySelector(".dosai__chat-bar-input");

    function i() {
        !function (t) {
            const n = document.createElement("div");
            n.textContent = t, n.classList.add("dosai__user-msg"), e.appendChild(n)
        }(n.value), n.value = "", t.style.height = "49px", n.style.height = "18px"
    }

    n.addEventListener("input", (function () {
        this.style.height = "auto", this.style.height = this.scrollHeight + "px", t.style.height = "auto", t.style.height = t.scrollHeight + "px"
    })), t.addEventListener("keypress", (function (e) {
        "Enter" === e.key && (e.preventDefault(), "" !== n.value && i())
    })), t.addEventListener("submit", (function (e) {
        e.preventDefault(), "" !== n.value && i()
    }))
}();


document.addEventListener('DOMContentLoaded', function () {
    const chatForm = document.querySelector('.dosai__chat-bar');
    const chatInput = document.querySelector('.dosai__chat-bar-input');
    const messagesContainer = document.querySelector('.dosai__messages-container');

    chatForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const messageText = chatInput.value.trim();
        if (messageText !== '') {
            addMessage(messageText);
            chatInput.value = '';
            scrollToBottom();
        }
    });

    function addMessage(text) {
        const messageElement = document.createElement('div');
        messageElement.className = 'dosai__message';
        messageElement.textContent = text;
        messagesContainer.appendChild(messageElement);
    }

    function scrollToBottom() {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Initial scroll to bottom in case there are already messages
    scrollToBottom();
});
