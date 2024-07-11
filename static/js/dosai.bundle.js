async function query(data) {
    try {
        const response = await fetch(
            "http://127.0.0.1:3000/api/v1/prediction/0e0dedea-a5b5-49fe-acd4-cc3d081c31de",
            {
                method: "POST",
                headers: {
                    Authorization: "Bearer 4F1WwTSF2iTEulGQRlb8vh-AXnivDyWkvLI8luxliu8",
                    "Content-Type": "application/json"
                },
                body: {
                    "question": data,
                }
            }
        );

        // Проверка статуса ответа

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
    }
}

query({"question": "Hey, how are you?"}).then((response) => {
    console.log(response);
}).catch(error => {
    console.error('Error in query function:', error);
});

!function () {
    const e = document.querySelector(".dosai__box"),
        t = (document.querySelector(".dosai__chat-bar-btn"), document.querySelector(".dosai__chat-bar")),
        n = document.querySelector(".dosai__chat-bar-input");

    function o(e) {
        n.disabled = e
    }

    function s() {
        !function () {
            const t = document.createElement("div");
            t.classList.add("load-user");
            for (let e = 0; e < 3; e++) {
                const e = document.createElement("div");
                e.classList.add("line"), t.appendChild(e)
            }
            e.appendChild(t)
        }(), function () {
            const e = document.querySelector(".load-user");
            setTimeout((function () {
                e.style.animation = "dissapearMssg 0.3s ease"
            }), 450), setTimeout((function () {
                e.remove()
            }), 500)
        }(), function (t) {
            const n = document.createElement("div");
            n.textContent = t, n.classList.add("dosai__user-msg"), setTimeout((function () {
                e.appendChild(n)
            }), 500)
        }(n.value), n.value = "", t.style.height = "49px", n.style.height = "18px", o(!0), e.scrollTop = e.scrollHeight
    }

    function i() {
        !function () {
            const t = document.createElement("div");
            t.classList.add("load-bot");
            for (let e = 0; e < 3; e++) {
                const e = document.createElement("div");
                e.classList.add("line"), t.appendChild(e)
            }
            e.appendChild(t)
        }(), function () {
            const e = document.querySelector(".load-bot");
            setTimeout((function () {
                e.style.animation = "dissapearMssg 0.3s ease"
            }), 1400), setTimeout((function () {
                e.remove()
            }), 1500)
        }(), async function () {
            const t = document.createElement("div");
            const b = await query("Привет я чат бот DosAI");
            t.textContent = b, t.classList.add("dosai__bot-msg"), setTimeout((function () {
                e.appendChild(t), e.scrollTop = e.scrollHeight
            }), 1500)
        }(), setTimeout((() => o(!1)), 1400), e.scrollTop = e.scrollHeight
    }

    o(!1), n.addEventListener("input", (function () {
        this.style.height = "auto", this.style.height = this.scrollHeight + "px", t.style.height = "auto", t.style.height = t.scrollHeight + "px"
    })), t.addEventListener("keypress", (function (e) {
        "Enter" === e.key && (e.preventDefault(), "" !== n.value && (s(), setTimeout(i, 600)))
    })), t.addEventListener("submit", (function (e) {
        e.preventDefault(), "" !== n.value && (s(), setTimeout(i, 600))
    }))
}();
