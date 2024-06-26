!function () {
    const e = document.querySelector(".dosai__box"),
        t = (document.querySelector(".dosai__chat-bar-btn"), document.querySelector(".dosai__chat-bar")),
        n = document.querySelector(".dosai__chat-bar-input");

    function generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    const sessionId = generateUUID();
    console.log('Generated sessionId:', sessionId);

    async function query(data) {
        try {
            const response = await fetch(
                "http://127.0.0.1:3000/api/v1/prediction/57b5d771-32b8-46d4-9005-cf8ffc3f8600",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }
            );
            const result = await response.json();
            console.log('API response:', result);
            return result;
        } catch (error) {
            console.error('Error during API request:', error);
        }
    }

    function displayUserMessage(message) {
        let n = message.split(""), i = 55, s = "";
        for (let e = 0; e < n.length; e++) s += n[e], e === i && (s += `\n${n[e]}`, i += 55);
        const o = document.createElement("div");
        o.textContent = s, o.classList.add("dosai__user-msg"), e.appendChild(o);
    }

    function displayBotMessage(message) {
        const o = document.createElement("div");
        o.textContent = message, o.classList.add("dosai__bot-msg"), e.appendChild(o);
    }

    function setLoadingState(isLoading) {
        if (isLoading) {
            t.classList.add('loading');
            n.disabled = true;
        } else {
            t.classList.remove('loading');
            n.disabled = false;
        }
    }

    function i() {
        const userMessage = n.value;
        displayUserMessage(userMessage);
        n.value = "", t.style.height = "49px", n.style.height = "18px";
        
        setLoadingState(true);
        
        query({
            "question": userMessage,
            "overrideConfig": {
                "sessionId": sessionId,
            }
        }).then((response) => {
            if (response && response.text) {
                displayBotMessage(response.text);
            } else {
                console.error('Invalid API response:', response);
            }
            setLoadingState(false);
        });
    }

    n.addEventListener("input", function () {
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";
        t.style.height = "auto";
        t.style.height = t.scrollHeight + "px";
    });

    t.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            if (n.value !== "") {
                i();
            }
        }
    });

    t.addEventListener("submit", function (e) {
        e.preventDefault();
        if (n.value !== "") {
            i();
        }
    });
}();
// Add this snippet to your existing JavaScript code

document.getElementById('clear-chat-btn').addEventListener('click', function () {
    localStorage.removeItem('messages');
    document.querySelector('.dosai__box').innerHTML = ''; // Очищаем контейнер сообщений
});
