!function () {
    const e = document.querySelector(".dosai__box"),
        t = (document.querySelector(".dosai__chat-bar-btn"), document.querySelector(".dosai__chat-bar")),
        n = document.querySelector(".dosai__chat-bar-input");

    function i() {
        !function (t) {
            let n = t.split(""), i = 55, s = "";
            for (let e = 0; e < n.length; e++) s += n[e], e === i && (s += `\n${n[e]}`, i += 55);
            const o = document.createElement("div");
            o.textContent = s, o.classList.add("dosai__user-msg"), e.appendChild(o)
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