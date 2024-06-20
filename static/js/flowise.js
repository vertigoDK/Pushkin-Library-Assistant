import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"

Chatbot.init({
    chatflowid: "bca6d8e7-2894-417d-8527-a38b0a072cdf",
    apiHost: "http://127.0.0.1:3000",
    chatflowConfig: {
        // topK: 2
    },
    theme: {
        button: {
            backgroundColor: "#006400",
            right: 20,
            bottom: 20,
            size: "medium",
            iconColor: "black",
            customIconSrc: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
        },
        chatWindow: {
            welcomeMessage: "Привет, я Дос твой онлайн помощник в библиотеке Пушкина",
            backgroundColor: "#ffffff",
            height: 700,
            width: 400,
            fontSize: 16,
            poweredByTextColor: "#303235",
            botMessage: {
                backgroundColor: "#f7f8ff",
                textColor: "#303235",
                showAvatar: true,
                avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
            },
            userMessage: {
                backgroundColor: "#3B81F6",
                textColor: "#ffffff",
                showAvatar: true,
                avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
            },
            textInput: {
                placeholder: "Задайте свой вопрос здесь",
                backgroundColor: "#ffffff",
                textColor: "#303235",
                sendButtonColor: "#3B81F6",
            }
        }
    }
})