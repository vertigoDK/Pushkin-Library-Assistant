!function () {
    "use strict";
    (function () {
        const e = document.querySelector(".header"), t = document.querySelector(".mobile-nav-btn"),
            o = document.querySelector(".mobile-nav"), n = document.querySelector(".nav-icon");
        t.onclick = function () {
            e.classList.toggle("header-active"), o.classList.toggle("mobile-nav--open"), n.classList.toggle("nav-icon--active"), document.body.classList.toggle("no-scroll"), a()
        };
        const s = document.querySelectorAll(".mobile-nav__item"), c = document.querySelectorAll(".mobile-nav__btn"),
            i = document.querySelector(".mobile-nav");

        function a() {
            s.forEach((e => {
                e.classList.remove("active"), e.classList.remove("none"), e.classList.add("shown")
            }))
        }

        c.forEach((e => {
            e.onclick = function () {
                const t = e.closest(".mobile-nav__item");
                var o;
                t.classList.contains("active") ? (t.classList.remove("active"), a()) : (t.classList.add("active"), o = t, s.forEach((e => {
                    o !== e && (e.classList.add("none"), e.classList.remove("shown"), e.classList.remove("active"))
                })))
            }
        })), i.addEventListener("click", (function (e) {
            const t = e.target;
            e.stopPropagation(), t.classList.contains("mobile-nav__btn") || t.classList.contains("mobile-nav__link") || a()
        }))
    })(), function () {
        const e = document.querySelector(".header-wrapper"), t = document.querySelector(".header"),
            o = document.querySelector(".hero"), n = document.querySelector(".news__picture"),
            s = document.querySelector(".dosai"), c = t.offsetHeight;
        let i;
        i = o || n || s, e && (e.style.height = `${c}px`), window.addEventListener("scroll", (() => {
            const e = window.pageYOffset < window.oldPageYOffset;
            window.oldPageYOffset = window.pageYOffset, e && window.pageYOffset > i.offsetHeight ? t.classList.add("fixed") : t.classList.remove("fixed")
        }))
    }();
    const e = document.querySelector(".dosai__box"),
        t = (document.querySelector(".dosai__chat-bar-btn"), document.querySelector(".dosai__chat-bar")),
        o = document.querySelector(".dosai__chat-bar-input");

    function n(e) {
        o.disabled = e
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
            const o = document.createElement("div");
            o.textContent = t, o.classList.add("dosai__user-msg"), setTimeout((function () {
                e.appendChild(o)
            }), 500)
        }(o.value), o.value = "", t.style.height = "49px", o.style.height = "18px", n(!0), e.scrollTop = e.scrollHeight
    }

    function c() {
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
        }(), function () {
            const t = document.createElement("div");
            t.textContent = "Привет я чат бот DosAI", t.classList.add("dosai__bot-msg"), setTimeout((function () {
                e.appendChild(t), e.scrollTop = e.scrollHeight
            }), 1500)
        }(), setTimeout((() => n(!1)), 1400), e.scrollTop = e.scrollHeight
    }

    n(!1), o.addEventListener("input", (function () {
        this.style.height = "auto", this.style.height = this.scrollHeight + "px", t.style.height = "auto", t.style.height = t.scrollHeight + "px"
    })), t.addEventListener("keypress", (function (e) {
        "Enter" === e.key && (e.preventDefault(), "" !== o.value && (s(), setTimeout(c, 600)))
    })), t.addEventListener("submit", (function (e) {
        e.preventDefault(), "" !== o.value && (s(), setTimeout(c, 600))
    }))
}();