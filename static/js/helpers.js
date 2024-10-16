function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function scrollToBottom() {
    const dosaiBox = document.querySelector('.dosai__box');
    dosaiBox.scrollTop = dosaiBox.scrollHeight;
}

function getRandomResponse() {
    const responses = [
        'Извините, я вас не понимаю. Не могли бы вы перефразировать?',
        'Это очень интересно! Расскажите подробнее.',
        'Хм, я об этом еще не думал...',
        'Я все еще учусь, но уже могу поддержать разговор!',
        'Спасибо за ваш вопрос!'
    ];

    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}
