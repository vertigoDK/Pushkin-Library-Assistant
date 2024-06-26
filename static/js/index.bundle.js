!function () {
    "use strict";
    var e = {
        541: function (e, t, s) {
            var i = s(81), r = s.n(i), a = s(645), n = s.n(a), o = s(667), l = s.n(o), d = new URL(s(954), s.b),
                p = n()(r()), c = l()(d);
            p.push([e.id, "/**\n * Swiper 11.1.4\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2024 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: May 30, 2024\n */\n\n/* FONT_START */\n@font-face {\n  font-family: 'swiper-icons';\n  src: url(" + c + ");\n  font-weight: 400;\n  font-style: normal;\n}\n/* FONT_END */\n:root {\n  --swiper-theme-color: #007aff;\n  /*\n  --swiper-preloader-color: var(--swiper-theme-color);\n  --swiper-wrapper-transition-timing-function: initial;\n  */\n}\n:host {\n  position: relative;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  z-index: 1;\n}\n.swiper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n  display: block;\n}\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);\n  box-sizing: content-box;\n}\n.swiper-android .swiper-slide,\n.swiper-ios .swiper-slide,\n.swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-horizontal {\n  touch-action: pan-y;\n}\n.swiper-vertical {\n  touch-action: pan-x;\n}\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n  display: block;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n/* Auto Height */\n.swiper-autoheight,\n.swiper-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n.swiper-backface-hidden .swiper-slide {\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n/* 3D Effects */\n.swiper-3d.swiper-css-mode .swiper-wrapper {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-wrapper {\n  transform-style: preserve-3d;\n}\n.swiper-3d {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-slide,\n.swiper-3d .swiper-cube-shadow {\n  transform-style: preserve-3d;\n}\n/* CSS Mode */\n.swiper-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  /* For Firefox */\n  -ms-overflow-style: none;\n  /* For Internet Explorer and Edge */\n}\n.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.swiper-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n.swiper-css-mode.swiper-horizontal > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n.swiper-css-mode.swiper-vertical > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n.swiper-css-mode.swiper-free-mode > .swiper-wrapper {\n  scroll-snap-type: none;\n}\n.swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: none;\n}\n.swiper-css-mode.swiper-centered > .swiper-wrapper::before {\n  content: '';\n  flex-shrink: 0;\n  order: 9999;\n}\n.swiper-css-mode.swiper-centered > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: center center;\n  scroll-snap-stop: always;\n}\n.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {\n  margin-inline-start: var(--swiper-centered-offset-before);\n}\n.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n  height: 100%;\n  min-height: 1px;\n  width: var(--swiper-centered-offset-after);\n}\n.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n  margin-block-start: var(--swiper-centered-offset-before);\n}\n.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper::before {\n  width: 100%;\n  min-width: 1px;\n  height: var(--swiper-centered-offset-after);\n}\n/* Slide styles start */\n/* 3D Shadows */\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom,\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-3d .swiper-slide-shadow {\n  background: rgba(0, 0, 0, 0.15);\n}\n.swiper-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  transform-origin: 50%;\n  box-sizing: border-box;\n  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));\n  border-radius: 50%;\n  border-top-color: transparent;\n}\n.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,\n.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader {\n  animation: swiper-preloader-spin 1s infinite linear;\n}\n.swiper-lazy-preloader-white {\n  --swiper-preloader-color: #fff;\n}\n.swiper-lazy-preloader-black {\n  --swiper-preloader-color: #000;\n}\n@keyframes swiper-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/* Slide styles end */\n.swiper-virtual .swiper-slide {\n  -webkit-backface-visibility: hidden;\n  transform: translateZ(0);\n}\n.swiper-virtual.swiper-css-mode .swiper-wrapper::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n}\n.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after {\n  height: 1px;\n  width: var(--swiper-virtual-size);\n}\n.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after {\n  width: 1px;\n  height: var(--swiper-virtual-size);\n}\n:root {\n  --swiper-navigation-size: 44px;\n  /*\n  --swiper-navigation-top-offset: 50%;\n  --swiper-navigation-sides-offset: 10px;\n  --swiper-navigation-color: var(--swiper-theme-color);\n  */\n}\n.swiper-button-prev,\n.swiper-button-next {\n  position: absolute;\n  top: var(--swiper-navigation-top-offset, 50%);\n  width: calc(var(--swiper-navigation-size) / 44 * 27);\n  height: var(--swiper-navigation-size);\n  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));\n  z-index: 10;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--swiper-navigation-color, var(--swiper-theme-color));\n}\n.swiper-button-prev.swiper-button-disabled,\n.swiper-button-next.swiper-button-disabled {\n  opacity: 0.35;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-button-prev.swiper-button-hidden,\n.swiper-button-next.swiper-button-hidden {\n  opacity: 0;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-navigation-disabled .swiper-button-prev,\n.swiper-navigation-disabled .swiper-button-next {\n  display: none !important;\n}\n.swiper-button-prev svg,\n.swiper-button-next svg {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  transform-origin: center;\n}\n.swiper-rtl .swiper-button-prev svg,\n.swiper-rtl .swiper-button-next svg {\n  transform: rotate(180deg);\n}\n.swiper-button-prev,\n.swiper-rtl .swiper-button-next {\n  left: var(--swiper-navigation-sides-offset, 10px);\n  right: auto;\n}\n.swiper-button-next,\n.swiper-rtl .swiper-button-prev {\n  right: var(--swiper-navigation-sides-offset, 10px);\n  left: auto;\n}\n.swiper-button-lock {\n  display: none;\n}\n/* Navigation font start */\n.swiper-button-prev:after,\n.swiper-button-next:after {\n  font-family: swiper-icons;\n  font-size: var(--swiper-navigation-size);\n  text-transform: none !important;\n  letter-spacing: 0;\n  font-variant: initial;\n  line-height: 1;\n}\n.swiper-button-prev:after,\n.swiper-rtl .swiper-button-next:after {\n  content: 'prev';\n}\n.swiper-button-next,\n.swiper-rtl .swiper-button-prev {\n  right: var(--swiper-navigation-sides-offset, 10px);\n  left: auto;\n}\n.swiper-button-next:after,\n.swiper-rtl .swiper-button-prev:after {\n  content: 'next';\n}\n/* Navigation font end */\n:root {\n  /*\n  --swiper-pagination-color: var(--swiper-theme-color);\n  --swiper-pagination-left: auto;\n  --swiper-pagination-right: 8px;\n  --swiper-pagination-bottom: 8px;\n  --swiper-pagination-top: auto;\n  --swiper-pagination-fraction-color: inherit;\n  --swiper-pagination-progressbar-bg-color: rgba(0,0,0,0.25);\n  --swiper-pagination-progressbar-size: 4px;\n  --swiper-pagination-bullet-size: 8px;\n  --swiper-pagination-bullet-width: 8px;\n  --swiper-pagination-bullet-height: 8px;\n  --swiper-pagination-bullet-border-radius: 50%;\n  --swiper-pagination-bullet-inactive-color: #000;\n  --swiper-pagination-bullet-inactive-opacity: 0.2;\n  --swiper-pagination-bullet-opacity: 1;\n  --swiper-pagination-bullet-horizontal-gap: 4px;\n  --swiper-pagination-bullet-vertical-gap: 6px;\n  */\n}\n.swiper-pagination {\n  position: absolute;\n  text-align: center;\n  transition: 300ms opacity;\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n.swiper-pagination.swiper-pagination-hidden {\n  opacity: 0;\n}\n.swiper-pagination-disabled > .swiper-pagination,\n.swiper-pagination.swiper-pagination-disabled {\n  display: none !important;\n}\n/* Common Styles */\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-horizontal > .swiper-pagination-bullets,\n.swiper-pagination-bullets.swiper-pagination-horizontal {\n  bottom: var(--swiper-pagination-bottom, 8px);\n  top: var(--swiper-pagination-top, auto);\n  left: 0;\n  width: 100%;\n}\n/* Bullets */\n.swiper-pagination-bullets-dynamic {\n  overflow: hidden;\n  font-size: 0;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transform: scale(0.33);\n  position: relative;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullet {\n  width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));\n  height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));\n  display: inline-block;\n  border-radius: var(--swiper-pagination-bullet-border-radius, 50%);\n  background: var(--swiper-pagination-bullet-inactive-color, #000);\n  opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);\n}\nbutton.swiper-pagination-bullet {\n  border: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  -webkit-appearance: none;\n          appearance: none;\n}\n.swiper-pagination-clickable .swiper-pagination-bullet {\n  cursor: pointer;\n}\n.swiper-pagination-bullet:only-child {\n  display: none !important;\n}\n.swiper-pagination-bullet-active {\n  opacity: var(--swiper-pagination-bullet-opacity, 1);\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n}\n.swiper-vertical > .swiper-pagination-bullets,\n.swiper-pagination-vertical.swiper-pagination-bullets {\n  right: var(--swiper-pagination-right, 8px);\n  left: var(--swiper-pagination-left, auto);\n  top: 50%;\n  transform: translate3d(0px, -50%, 0);\n}\n.swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet,\n.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;\n  display: block;\n}\n.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n}\n.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  display: inline-block;\n  transition: 200ms transform,\n        200ms top;\n}\n.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,\n.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);\n}\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,\n.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,\n.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform,\n        200ms left;\n}\n.swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform,\n    200ms right;\n}\n/* Fraction */\n.swiper-pagination-fraction {\n  color: var(--swiper-pagination-fraction-color, inherit);\n}\n/* Progress */\n.swiper-pagination-progressbar {\n  background: var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, 0.25));\n  position: absolute;\n}\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  transform-origin: left top;\n}\n.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  transform-origin: right top;\n}\n.swiper-horizontal > .swiper-pagination-progressbar,\n.swiper-pagination-progressbar.swiper-pagination-horizontal,\n.swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite {\n  width: 100%;\n  height: var(--swiper-pagination-progressbar-size, 4px);\n  left: 0;\n  top: 0;\n}\n.swiper-vertical > .swiper-pagination-progressbar,\n.swiper-pagination-progressbar.swiper-pagination-vertical,\n.swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite {\n  width: var(--swiper-pagination-progressbar-size, 4px);\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.swiper-pagination-lock {\n  display: none;\n}\n:root {\n  /*\n  --swiper-scrollbar-border-radius: 10px;\n  --swiper-scrollbar-top: auto;\n  --swiper-scrollbar-bottom: 4px;\n  --swiper-scrollbar-left: auto;\n  --swiper-scrollbar-right: 4px;\n  --swiper-scrollbar-sides-offset: 1%;\n  --swiper-scrollbar-bg-color: rgba(0, 0, 0, 0.1);\n  --swiper-scrollbar-drag-bg-color: rgba(0, 0, 0, 0.5);\n  --swiper-scrollbar-size: 4px;\n  */\n}\n.swiper-scrollbar {\n  border-radius: var(--swiper-scrollbar-border-radius, 10px);\n  position: relative;\n  touch-action: none;\n  background: var(--swiper-scrollbar-bg-color, rgba(0, 0, 0, 0.1));\n}\n.swiper-scrollbar-disabled > .swiper-scrollbar,\n.swiper-scrollbar.swiper-scrollbar-disabled {\n  display: none !important;\n}\n.swiper-horizontal > .swiper-scrollbar,\n.swiper-scrollbar.swiper-scrollbar-horizontal {\n  position: absolute;\n  left: var(--swiper-scrollbar-sides-offset, 1%);\n  bottom: var(--swiper-scrollbar-bottom, 4px);\n  top: var(--swiper-scrollbar-top, auto);\n  z-index: 50;\n  height: var(--swiper-scrollbar-size, 4px);\n  width: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));\n}\n.swiper-vertical > .swiper-scrollbar,\n.swiper-scrollbar.swiper-scrollbar-vertical {\n  position: absolute;\n  left: var(--swiper-scrollbar-left, auto);\n  right: var(--swiper-scrollbar-right, 4px);\n  top: var(--swiper-scrollbar-sides-offset, 1%);\n  z-index: 50;\n  width: var(--swiper-scrollbar-size, 4px);\n  height: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));\n}\n.swiper-scrollbar-drag {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  background: var(--swiper-scrollbar-drag-bg-color, rgba(0, 0, 0, 0.5));\n  border-radius: var(--swiper-scrollbar-border-radius, 10px);\n  left: 0;\n  top: 0;\n}\n.swiper-scrollbar-cursor-drag {\n  cursor: move;\n}\n.swiper-scrollbar-lock {\n  display: none;\n}\n/* Zoom container styles start */\n.swiper-zoom-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.swiper-zoom-container > img,\n.swiper-zoom-container > svg,\n.swiper-zoom-container > canvas {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n/* Zoom container styles end */\n.swiper-slide-zoomed {\n  cursor: move;\n  touch-action: none;\n}\n/* a11y */\n.swiper .swiper-notification {\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  opacity: 0;\n  z-index: -1000;\n}\n.swiper-free-mode > .swiper-wrapper {\n  transition-timing-function: ease-out;\n  margin: 0 auto;\n}\n.swiper-grid > .swiper-wrapper {\n  flex-wrap: wrap;\n}\n.swiper-grid-column > .swiper-wrapper {\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n.swiper-fade.swiper-free-mode .swiper-slide {\n  transition-timing-function: ease-out;\n}\n.swiper-fade .swiper-slide {\n  pointer-events: none;\n  transition-property: opacity;\n}\n.swiper-fade .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-fade .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-fade .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-cube {\n  overflow: visible;\n}\n.swiper-cube .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  z-index: 1;\n  visibility: hidden;\n  transform-origin: 0 0;\n  width: 100%;\n  height: 100%;\n}\n.swiper-cube .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-cube.swiper-rtl .swiper-slide {\n  transform-origin: 100% 0;\n}\n.swiper-cube .swiper-slide-active,\n.swiper-cube .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-cube .swiper-slide-active,\n.swiper-cube .swiper-slide-next,\n.swiper-cube .swiper-slide-prev {\n  pointer-events: auto;\n  visibility: visible;\n}\n.swiper-cube .swiper-cube-shadow {\n  position: absolute;\n  left: 0;\n  bottom: 0px;\n  width: 100%;\n  height: 100%;\n  opacity: 0.6;\n  z-index: 0;\n}\n.swiper-cube .swiper-cube-shadow:before {\n  content: '';\n  background: #000;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  filter: blur(50px);\n}\n.swiper-cube .swiper-slide-next + .swiper-slide {\n  pointer-events: auto;\n  visibility: visible;\n}\n/* Cube slide shadows start */\n.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-top,\n.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-bottom,\n.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-left,\n.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n/* Cube slide shadows end */\n.swiper-flip {\n  overflow: visible;\n}\n.swiper-flip .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  z-index: 1;\n}\n.swiper-flip .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-flip .swiper-slide-active,\n.swiper-flip .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n/* Flip slide shadows start */\n.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-top,\n.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-bottom,\n.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-left,\n.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n/* Flip slide shadows end */\n.swiper-creative .swiper-slide {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  overflow: hidden;\n  transition-property: transform, opacity, height;\n}\n.swiper-cards {\n  overflow: visible;\n}\n.swiper-cards .swiper-slide {\n  transform-origin: center bottom;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  overflow: hidden;\n}\n", ""]), t.Z = p
        }, 645: function (e) {
            e.exports = function (e) {
                var t = [];
                return t.toString = function () {
                    return this.map((function (t) {
                        var s = "", i = void 0 !== t[5];
                        return t[4] && (s += "@supports (".concat(t[4], ") {")), t[2] && (s += "@media ".concat(t[2], " {")), i && (s += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), s += e(t), i && (s += "}"), t[2] && (s += "}"), t[4] && (s += "}"), s
                    })).join("")
                }, t.i = function (e, s, i, r, a) {
                    "string" == typeof e && (e = [[null, e, void 0]]);
                    var n = {};
                    if (i) for (var o = 0; o < this.length; o++) {
                        var l = this[o][0];
                        null != l && (n[l] = !0)
                    }
                    for (var d = 0; d < e.length; d++) {
                        var p = [].concat(e[d]);
                        i && n[p[0]] || (void 0 !== a && (void 0 === p[5] || (p[1] = "@layer".concat(p[5].length > 0 ? " ".concat(p[5]) : "", " {").concat(p[1], "}")), p[5] = a), s && (p[2] ? (p[1] = "@media ".concat(p[2], " {").concat(p[1], "}"), p[2] = s) : p[2] = s), r && (p[4] ? (p[1] = "@supports (".concat(p[4], ") {").concat(p[1], "}"), p[4] = r) : p[4] = "".concat(r)), t.push(p))
                    }
                }, t
            }
        }, 667: function (e) {
            e.exports = function (e, t) {
                return t || (t = {}), e ? (e = String(e.__esModule ? e.default : e), /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), t.hash && (e += t.hash), /["'() \t\n]|(%20)/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e) : e
            }
        }, 81: function (e) {
            e.exports = function (e) {
                return e[1]
            }
        }, 379: function (e) {
            var t = [];

            function s(e) {
                for (var s = -1, i = 0; i < t.length; i++) if (t[i].identifier === e) {
                    s = i;
                    break
                }
                return s
            }

            function i(e, i) {
                for (var a = {}, n = [], o = 0; o < e.length; o++) {
                    var l = e[o], d = i.base ? l[0] + i.base : l[0], p = a[d] || 0, c = "".concat(d, " ").concat(p);
                    a[d] = p + 1;
                    var u = s(c), m = {css: l[1], media: l[2], sourceMap: l[3], supports: l[4], layer: l[5]};
                    if (-1 !== u) t[u].references++, t[u].updater(m); else {
                        var h = r(m, i);
                        i.byIndex = o, t.splice(o, 0, {identifier: c, updater: h, references: 1})
                    }
                    n.push(c)
                }
                return n
            }

            function r(e, t) {
                var s = t.domAPI(t);
                return s.update(e), function (t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
                        s.update(e = t)
                    } else s.remove()
                }
            }

            e.exports = function (e, r) {
                var a = i(e = e || [], r = r || {});
                return function (e) {
                    e = e || [];
                    for (var n = 0; n < a.length; n++) {
                        var o = s(a[n]);
                        t[o].references--
                    }
                    for (var l = i(e, r), d = 0; d < a.length; d++) {
                        var p = s(a[d]);
                        0 === t[p].references && (t[p].updater(), t.splice(p, 1))
                    }
                    a = l
                }
            }
        }, 569: function (e) {
            var t = {};
            e.exports = function (e, s) {
                var i = function (e) {
                    if (void 0 === t[e]) {
                        var s = document.querySelector(e);
                        if (window.HTMLIFrameElement && s instanceof window.HTMLIFrameElement) try {
                            s = s.contentDocument.head
                        } catch (e) {
                            s = null
                        }
                        t[e] = s
                    }
                    return t[e]
                }(e);
                if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                i.appendChild(s)
            }
        }, 216: function (e) {
            e.exports = function (e) {
                var t = document.createElement("style");
                return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
            }
        }, 565: function (e, t, s) {
            e.exports = function (e) {
                var t = s.nc;
                t && e.setAttribute("nonce", t)
            }
        }, 795: function (e) {
            e.exports = function (e) {
                if ("undefined" == typeof document) return {
                    update: function () {
                    }, remove: function () {
                    }
                };
                var t = e.insertStyleElement(e);
                return {
                    update: function (s) {
                        !function (e, t, s) {
                            var i = "";
                            s.supports && (i += "@supports (".concat(s.supports, ") {")), s.media && (i += "@media ".concat(s.media, " {"));
                            var r = void 0 !== s.layer;
                            r && (i += "@layer".concat(s.layer.length > 0 ? " ".concat(s.layer) : "", " {")), i += s.css, r && (i += "}"), s.media && (i += "}"), s.supports && (i += "}");
                            var a = s.sourceMap;
                            a && "undefined" != typeof btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), t.styleTagTransform(i, e, t.options)
                        }(t, e, s)
                    }, remove: function () {
                        !function (e) {
                            if (null === e.parentNode) return !1;
                            e.parentNode.removeChild(e)
                        }(t)
                    }
                }
            }
        }, 589: function (e) {
            e.exports = function (e, t) {
                if (t.styleSheet) t.styleSheet.cssText = e; else {
                    for (; t.firstChild;) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(e))
                }
            }
        }, 954: function (e) {
            e.exports = "data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA"
        }
    }, t = {};

    function s(i) {
        var r = t[i];
        if (void 0 !== r) return r.exports;
        var a = t[i] = {id: i, exports: {}};
        return e[i](a, a.exports, s), a.exports
    }

    s.m = e, s.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return s.d(t, {a: t}), t
    }, s.d = function (e, t) {
        for (var i in t) s.o(t, i) && !s.o(e, i) && Object.defineProperty(e, i, {enumerable: !0, get: t[i]})
    }, s.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.b = document.baseURI || self.location.href, s.nc = void 0, function () {
        function e(e) {
            return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
        }

        function t(s, i) {
            void 0 === s && (s = {}), void 0 === i && (i = {}), Object.keys(i).forEach((r => {
                void 0 === s[r] ? s[r] = i[r] : e(i[r]) && e(s[r]) && Object.keys(i[r]).length > 0 && t(s[r], i[r])
            }))
        }

        const i = {
            body: {},
            addEventListener() {
            },
            removeEventListener() {
            },
            activeElement: {
                blur() {
                }, nodeName: ""
            },
            querySelector() {
                return null
            },
            querySelectorAll() {
                return []
            },
            getElementById() {
                return null
            },
            createEvent() {
                return {
                    initEvent() {
                    }
                }
            },
            createElement() {
                return {
                    children: [], childNodes: [], style: {}, setAttribute() {
                    }, getElementsByTagName() {
                        return []
                    }
                }
            },
            createElementNS() {
                return {}
            },
            importNode() {
                return null
            },
            location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""}
        };

        function r() {
            const e = "undefined" != typeof document ? document : {};
            return t(e, i), e
        }

        const a = {
            document: i,
            navigator: {userAgent: ""},
            location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""},
            history: {
                replaceState() {
                }, pushState() {
                }, go() {
                }, back() {
                }
            },
            CustomEvent: function () {
                return this
            },
            addEventListener() {
            },
            removeEventListener() {
            },
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return ""
                    }
                }
            },
            Image() {
            },
            Date() {
            },
            screen: {},
            setTimeout() {
            },
            clearTimeout() {
            },
            matchMedia() {
                return {}
            },
            requestAnimationFrame(e) {
                return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0)
            },
            cancelAnimationFrame(e) {
                "undefined" != typeof setTimeout && clearTimeout(e)
            }
        };

        function n() {
            const e = "undefined" != typeof window ? window : {};
            return t(e, a), e
        }

        function o(e) {
            return void 0 === e && (e = ""), e.trim().split(" ").filter((e => !!e.trim()))
        }

        function l(e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t)
        }

        function d() {
            return Date.now()
        }

        function p(e, t) {
            void 0 === t && (t = "x");
            const s = n();
            let i, r, a;
            const o = function (e) {
                const t = n();
                let s;
                return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
            }(e);
            return s.WebKitCSSMatrix ? (r = o.transform || o.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map((e => e.replace(",", "."))).join(", ")), a = new s.WebKitCSSMatrix("none" === r ? "" : r)) : (a = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = a.toString().split(",")), "x" === t && (r = s.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (r = s.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), r || 0
        }

        function c(e) {
            return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
        }

        function u() {
            const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                t = ["__proto__", "constructor", "prototype"];
            for (let i = 1; i < arguments.length; i += 1) {
                const r = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (null != r && (s = r, !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
                    const s = Object.keys(Object(r)).filter((e => t.indexOf(e) < 0));
                    for (let t = 0, i = s.length; t < i; t += 1) {
                        const i = s[t], a = Object.getOwnPropertyDescriptor(r, i);
                        void 0 !== a && a.enumerable && (c(e[i]) && c(r[i]) ? r[i].__swiper__ ? e[i] = r[i] : u(e[i], r[i]) : !c(e[i]) && c(r[i]) ? (e[i] = {}, r[i].__swiper__ ? e[i] = r[i] : u(e[i], r[i])) : e[i] = r[i])
                    }
                }
            }
            var s;
            return e
        }

        function m(e, t, s) {
            e.style.setProperty(t, s)
        }

        function h(e) {
            let {swiper: t, targetPosition: s, side: i} = e;
            const r = n(), a = -t.translate;
            let o, l = null;
            const d = t.params.speed;
            t.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(t.cssModeFrameID);
            const p = s > a ? "next" : "prev", c = (e, t) => "next" === p && e >= t || "prev" === p && e <= t,
                u = () => {
                    o = (new Date).getTime(), null === l && (l = o);
                    const e = Math.max(Math.min((o - l) / d, 1), 0), n = .5 - Math.cos(e * Math.PI) / 2;
                    let p = a + n * (s - a);
                    if (c(p, s) && (p = s), t.wrapperEl.scrollTo({[i]: p}), c(p, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                        t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({[i]: p})
                    })), void r.cancelAnimationFrame(t.cssModeFrameID);
                    t.cssModeFrameID = r.requestAnimationFrame(u)
                };
            u()
        }

        function f(e) {
            return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e
        }

        function g(e, t) {
            return void 0 === t && (t = ""), [...e.children].filter((e => e.matches(t)))
        }

        function v(e) {
            try {
                return void console.warn(e)
            } catch (e) {
            }
        }

        function w(e, t) {
            void 0 === t && (t = []);
            const s = document.createElement(e);
            return s.classList.add(...Array.isArray(t) ? t : o(t)), s
        }

        function b(e) {
            const t = n(), s = r(), i = e.getBoundingClientRect(), a = s.body, o = e.clientTop || a.clientTop || 0,
                l = e.clientLeft || a.clientLeft || 0, d = e === t ? t.scrollY : e.scrollTop,
                p = e === t ? t.scrollX : e.scrollLeft;
            return {top: i.top + d - o, left: i.left + p - l}
        }

        function y(e, t) {
            return n().getComputedStyle(e, null).getPropertyValue(t)
        }

        function x(e) {
            let t, s = e;
            if (s) {
                for (t = 0; null !== (s = s.previousSibling);) 1 === s.nodeType && (t += 1);
                return t
            }
        }

        function E(e, t) {
            const s = [];
            let i = e.parentElement;
            for (; i;) t ? i.matches(t) && s.push(i) : s.push(i), i = i.parentElement;
            return s
        }

        function S(e, t) {
            t && e.addEventListener("transitionend", (function s(i) {
                i.target === e && (t.call(e, i), e.removeEventListener("transitionend", s))
            }))
        }

        function T(e, t, s) {
            const i = n();
            return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
        }

        function A(e) {
            return (Array.isArray(e) ? e : [e]).filter((e => !!e))
        }

        let M, C, P;

        function L() {
            return M || (M = function () {
                const e = n(), t = r();
                return {
                    smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                    touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                }
            }()), M
        }

        function z(e) {
            return void 0 === e && (e = {}), C || (C = function (e) {
                let {userAgent: t} = void 0 === e ? {} : e;
                const s = L(), i = n(), r = i.navigator.platform, a = t || i.navigator.userAgent,
                    o = {ios: !1, android: !1}, l = i.screen.width, d = i.screen.height,
                    p = a.match(/(Android);?[\s\/]+([\d.]+)?/);
                let c = a.match(/(iPad).*OS\s([\d_]+)/);
                const u = a.match(/(iPod)(.*OS\s([\d_]+))?/), m = !c && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                    h = "Win32" === r;
                let f = "MacIntel" === r;
                return !c && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${d}`) >= 0 && (c = a.match(/(Version)\/([\d.]+)/), c || (c = [0, 1, "13_0_0"]), f = !1), p && !h && (o.os = "android", o.android = !0), (c || m || u) && (o.os = "ios", o.ios = !0), o
            }(e)), C
        }

        var k = {
            on(e, t, s) {
                const i = this;
                if (!i.eventsListeners || i.destroyed) return i;
                if ("function" != typeof t) return i;
                const r = s ? "unshift" : "push";
                return e.split(" ").forEach((e => {
                    i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t)
                })), i
            }, once(e, t, s) {
                const i = this;
                if (!i.eventsListeners || i.destroyed) return i;
                if ("function" != typeof t) return i;

                function r() {
                    i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
                    for (var s = arguments.length, a = new Array(s), n = 0; n < s; n++) a[n] = arguments[n];
                    t.apply(i, a)
                }

                return r.__emitterProxy = t, i.on(e, r, s)
            }, onAny(e, t) {
                const s = this;
                if (!s.eventsListeners || s.destroyed) return s;
                if ("function" != typeof e) return s;
                const i = t ? "unshift" : "push";
                return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
            }, offAny(e) {
                const t = this;
                if (!t.eventsListeners || t.destroyed) return t;
                if (!t.eventsAnyListeners) return t;
                const s = t.eventsAnyListeners.indexOf(e);
                return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
            }, off(e, t) {
                const s = this;
                return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
                    void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((i, r) => {
                        (i === t || i.__emitterProxy && i.__emitterProxy === t) && s.eventsListeners[e].splice(r, 1)
                    }))
                })), s) : s
            }, emit() {
                const e = this;
                if (!e.eventsListeners || e.destroyed) return e;
                if (!e.eventsListeners) return e;
                let t, s, i;
                for (var r = arguments.length, a = new Array(r), n = 0; n < r; n++) a[n] = arguments[n];
                return "string" == typeof a[0] || Array.isArray(a[0]) ? (t = a[0], s = a.slice(1, a.length), i = e) : (t = a[0].events, s = a[0].data, i = a[0].context || e), s.unshift(i), (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                    e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                        e.apply(i, [t, ...s])
                    })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                        e.apply(i, s)
                    }))
                })), e
            }
        };
        const I = (e, t, s) => {
            t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s)
        }, $ = (e, t, s) => {
            t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s)
        }, D = (e, t) => {
            if (!e || e.destroyed || !e.params) return;
            const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
            if (s) {
                let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
                !t && e.isElement && (s.shadowRoot ? t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame((() => {
                    s.shadowRoot && (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove())
                }))), t && t.remove()
            }
        }, O = (e, t) => {
            if (!e.slides[t]) return;
            const s = e.slides[t].querySelector('[loading="lazy"]');
            s && s.removeAttribute("loading")
        }, B = e => {
            if (!e || e.destroyed || !e.params) return;
            let t = e.params.lazyPreloadPrevNext;
            const s = e.slides.length;
            if (!s || !t || t < 0) return;
            t = Math.min(t, s);
            const i = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                r = e.activeIndex;
            if (e.params.grid && e.params.grid.rows > 1) {
                const s = r, a = [s - t];
                return a.push(...Array.from({length: t}).map(((e, t) => s + i + t))), void e.slides.forEach(((t, s) => {
                    a.includes(t.column) && O(e, s)
                }))
            }
            const a = r + i - 1;
            if (e.params.rewind || e.params.loop) for (let i = r - t; i <= a + t; i += 1) {
                const t = (i % s + s) % s;
                (t < r || t > a) && O(e, t)
            } else for (let i = Math.max(r - t, 0); i <= Math.min(a + t, s - 1); i += 1) i !== r && (i > a || i < r) && O(e, i)
        };
        var G = {
            updateSize: function () {
                const e = this;
                let t, s;
                const i = e.el;
                t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i.clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i.clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(y(i, "padding-left") || 0, 10) - parseInt(y(i, "padding-right") || 0, 10), s = s - parseInt(y(i, "padding-top") || 0, 10) - parseInt(y(i, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
                    width: t,
                    height: s,
                    size: e.isHorizontal() ? t : s
                }))
            }, updateSlides: function () {
                const e = this;

                function t(t, s) {
                    return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0)
                }

                const s = e.params, {wrapperEl: i, slidesEl: r, size: a, rtlTranslate: n, wrongRTL: o} = e,
                    l = e.virtual && s.virtual.enabled, d = l ? e.virtual.slides.length : e.slides.length,
                    p = g(r, `.${e.params.slideClass}, swiper-slide`), c = l ? e.virtual.slides.length : p.length;
                let u = [];
                const h = [], f = [];
                let v = s.slidesOffsetBefore;
                "function" == typeof v && (v = s.slidesOffsetBefore.call(e));
                let w = s.slidesOffsetAfter;
                "function" == typeof w && (w = s.slidesOffsetAfter.call(e));
                const b = e.snapGrid.length, x = e.slidesGrid.length;
                let E = s.spaceBetween, S = -v, A = 0, M = 0;
                if (void 0 === a) return;
                "string" == typeof E && E.indexOf("%") >= 0 ? E = parseFloat(E.replace("%", "")) / 100 * a : "string" == typeof E && (E = parseFloat(E)), e.virtualSize = -E, p.forEach((e => {
                    n ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                })), s.centeredSlides && s.cssMode && (m(i, "--swiper-centered-offset-before", ""), m(i, "--swiper-centered-offset-after", ""));
                const C = s.grid && s.grid.rows > 1 && e.grid;
                let P;
                C ? e.grid.initSlides(p) : e.grid && e.grid.unsetSlides();
                const L = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e => void 0 !== s.breakpoints[e].slidesPerView)).length > 0;
                for (let i = 0; i < c; i += 1) {
                    let r;
                    if (P = 0, p[i] && (r = p[i]), C && e.grid.updateSlide(i, r, p), !p[i] || "none" !== y(r, "display")) {
                        if ("auto" === s.slidesPerView) {
                            L && (p[i].style[e.getDirectionLabel("width")] = "");
                            const a = getComputedStyle(r), n = r.style.transform, o = r.style.webkitTransform;
                            if (n && (r.style.transform = "none"), o && (r.style.webkitTransform = "none"), s.roundLengths) P = e.isHorizontal() ? T(r, "width", !0) : T(r, "height", !0); else {
                                const e = t(a, "width"), s = t(a, "padding-left"), i = t(a, "padding-right"),
                                    n = t(a, "margin-left"), o = t(a, "margin-right"),
                                    l = a.getPropertyValue("box-sizing");
                                if (l && "border-box" === l) P = e + n + o; else {
                                    const {clientWidth: t, offsetWidth: a} = r;
                                    P = e + s + i + n + o + (a - t)
                                }
                            }
                            n && (r.style.transform = n), o && (r.style.webkitTransform = o), s.roundLengths && (P = Math.floor(P))
                        } else P = (a - (s.slidesPerView - 1) * E) / s.slidesPerView, s.roundLengths && (P = Math.floor(P)), p[i] && (p[i].style[e.getDirectionLabel("width")] = `${P}px`);
                        p[i] && (p[i].swiperSlideSize = P), f.push(P), s.centeredSlides ? (S = S + P / 2 + A / 2 + E, 0 === A && 0 !== i && (S = S - a / 2 - E), 0 === i && (S = S - a / 2 - E), Math.abs(S) < .001 && (S = 0), s.roundLengths && (S = Math.floor(S)), M % s.slidesPerGroup == 0 && u.push(S), h.push(S)) : (s.roundLengths && (S = Math.floor(S)), (M - Math.min(e.params.slidesPerGroupSkip, M)) % e.params.slidesPerGroup == 0 && u.push(S), h.push(S), S = S + P + E), e.virtualSize += P + E, A = P, M += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, a) + w, n && o && ("slide" === s.effect || "coverflow" === s.effect) && (i.style.width = `${e.virtualSize + E}px`), s.setWrapperSize && (i.style[e.getDirectionLabel("width")] = `${e.virtualSize + E}px`), C && e.grid.updateWrapperSize(P, u), !s.centeredSlides) {
                    const t = [];
                    for (let i = 0; i < u.length; i += 1) {
                        let r = u[i];
                        s.roundLengths && (r = Math.floor(r)), u[i] <= e.virtualSize - a && t.push(r)
                    }
                    u = t, Math.floor(e.virtualSize - a) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - a)
                }
                if (l && s.loop) {
                    const t = f[0] + E;
                    if (s.slidesPerGroup > 1) {
                        const i = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup),
                            r = t * s.slidesPerGroup;
                        for (let e = 0; e < i; e += 1) u.push(u[u.length - 1] + r)
                    }
                    for (let i = 0; i < e.virtual.slidesBefore + e.virtual.slidesAfter; i += 1) 1 === s.slidesPerGroup && u.push(u[u.length - 1] + t), h.push(h[h.length - 1] + t), e.virtualSize += t
                }
                if (0 === u.length && (u = [0]), 0 !== E) {
                    const t = e.isHorizontal() && n ? "marginLeft" : e.getDirectionLabel("marginRight");
                    p.filter(((e, t) => !(s.cssMode && !s.loop) || t !== p.length - 1)).forEach((e => {
                        e.style[t] = `${E}px`
                    }))
                }
                if (s.centeredSlides && s.centeredSlidesBounds) {
                    let e = 0;
                    f.forEach((t => {
                        e += t + (E || 0)
                    })), e -= E;
                    const t = e - a;
                    u = u.map((e => e <= 0 ? -v : e > t ? t + w : e))
                }
                if (s.centerInsufficientSlides) {
                    let e = 0;
                    f.forEach((t => {
                        e += t + (E || 0)
                    })), e -= E;
                    const t = (s.slidesOffsetBefore || 0) + (s.slidesOffsetAfter || 0);
                    if (e + t < a) {
                        const s = (a - e - t) / 2;
                        u.forEach(((e, t) => {
                            u[t] = e - s
                        })), h.forEach(((e, t) => {
                            h[t] = e + s
                        }))
                    }
                }
                if (Object.assign(e, {
                    slides: p,
                    snapGrid: u,
                    slidesGrid: h,
                    slidesSizesGrid: f
                }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
                    m(i, "--swiper-centered-offset-before", -u[0] + "px"), m(i, "--swiper-centered-offset-after", e.size / 2 - f[f.length - 1] / 2 + "px");
                    const t = -e.snapGrid[0], s = -e.slidesGrid[0];
                    e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
                }
                if (c !== d && e.emit("slidesLengthChange"), u.length !== b && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== x && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(l || s.cssMode || "slide" !== s.effect && "fade" !== s.effect)) {
                    const t = `${s.containerModifierClass}backface-hidden`, i = e.el.classList.contains(t);
                    c <= s.maxBackfaceHiddenSlides ? i || e.el.classList.add(t) : i && e.el.classList.remove(t)
                }
            }, updateAutoHeight: function (e) {
                const t = this, s = [], i = t.virtual && t.params.virtual.enabled;
                let r, a = 0;
                "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                const n = e => i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
                if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) if (t.params.centeredSlides) (t.visibleSlides || []).forEach((e => {
                    s.push(e)
                })); else for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
                    const e = t.activeIndex + r;
                    if (e > t.slides.length && !i) break;
                    s.push(n(e))
                } else s.push(n(t.activeIndex));
                for (r = 0; r < s.length; r += 1) if (void 0 !== s[r]) {
                    const e = s[r].offsetHeight;
                    a = e > a ? e : a
                }
                (a || 0 === a) && (t.wrapperEl.style.height = `${a}px`)
            }, updateSlidesOffset: function () {
                const e = this, t = e.slides,
                    s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
                for (let i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - s - e.cssOverflowAdjustment()
            }, updateSlidesProgress: function (e) {
                void 0 === e && (e = this && this.translate || 0);
                const t = this, s = t.params, {slides: i, rtlTranslate: r, snapGrid: a} = t;
                if (0 === i.length) return;
                void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                let n = -e;
                r && (n = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                let o = s.spaceBetween;
                "string" == typeof o && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * t.size : "string" == typeof o && (o = parseFloat(o));
                for (let e = 0; e < i.length; e += 1) {
                    const l = i[e];
                    let d = l.swiperSlideOffset;
                    s.cssMode && s.centeredSlides && (d -= i[0].swiperSlideOffset);
                    const p = (n + (s.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
                        c = (n - a[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
                        u = -(n - d), m = u + t.slidesSizesGrid[e], h = u >= 0 && u <= t.size - t.slidesSizesGrid[e],
                        f = u >= 0 && u < t.size - 1 || m > 1 && m <= t.size || u <= 0 && m >= t.size;
                    f && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e)), I(l, f, s.slideVisibleClass), I(l, h, s.slideFullyVisibleClass), l.progress = r ? -p : p, l.originalProgress = r ? -c : c
                }
            }, updateProgress: function (e) {
                const t = this;
                if (void 0 === e) {
                    const s = t.rtlTranslate ? -1 : 1;
                    e = t && t.translate && t.translate * s || 0
                }
                const s = t.params, i = t.maxTranslate() - t.minTranslate();
                let {progress: r, isBeginning: a, isEnd: n, progressLoop: o} = t;
                const l = a, d = n;
                if (0 === i) r = 0, a = !0, n = !0; else {
                    r = (e - t.minTranslate()) / i;
                    const s = Math.abs(e - t.minTranslate()) < 1, o = Math.abs(e - t.maxTranslate()) < 1;
                    a = s || r <= 0, n = o || r >= 1, s && (r = 0), o && (r = 1)
                }
                if (s.loop) {
                    const s = t.getSlideIndexByData(0), i = t.getSlideIndexByData(t.slides.length - 1),
                        r = t.slidesGrid[s], a = t.slidesGrid[i], n = t.slidesGrid[t.slidesGrid.length - 1],
                        l = Math.abs(e);
                    o = l >= r ? (l - r) / n : (l + n - a) / n, o > 1 && (o -= 1)
                }
                Object.assign(t, {
                    progress: r,
                    progressLoop: o,
                    isBeginning: a,
                    isEnd: n
                }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), a && !l && t.emit("reachBeginning toEdge"), n && !d && t.emit("reachEnd toEdge"), (l && !a || d && !n) && t.emit("fromEdge"), t.emit("progress", r)
            }, updateSlidesClasses: function () {
                const e = this, {slides: t, params: s, slidesEl: i, activeIndex: r} = e,
                    a = e.virtual && s.virtual.enabled, n = e.grid && s.grid && s.grid.rows > 1,
                    o = e => g(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
                let l, d, p;
                if (a) if (s.loop) {
                    let t = r - e.virtual.slidesBefore;
                    t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), l = o(`[data-swiper-slide-index="${t}"]`)
                } else l = o(`[data-swiper-slide-index="${r}"]`); else n ? (l = t.filter((e => e.column === r))[0], p = t.filter((e => e.column === r + 1))[0], d = t.filter((e => e.column === r - 1))[0]) : l = t[r];
                l && (n || (p = function (e, t) {
                    const s = [];
                    for (; e.nextElementSibling;) {
                        const i = e.nextElementSibling;
                        t ? i.matches(t) && s.push(i) : s.push(i), e = i
                    }
                    return s
                }(l, `.${s.slideClass}, swiper-slide`)[0], s.loop && !p && (p = t[0]), d = function (e, t) {
                    const s = [];
                    for (; e.previousElementSibling;) {
                        const i = e.previousElementSibling;
                        t ? i.matches(t) && s.push(i) : s.push(i), e = i
                    }
                    return s
                }(l, `.${s.slideClass}, swiper-slide`)[0], s.loop && 0 === !d && (d = t[t.length - 1]))), t.forEach((e => {
                    $(e, e === l, s.slideActiveClass), $(e, e === p, s.slideNextClass), $(e, e === d, s.slidePrevClass)
                })), e.emitSlidesClasses()
            }, updateActiveIndex: function (e) {
                const t = this, s = t.rtlTranslate ? t.translate : -t.translate, {
                    snapGrid: i,
                    params: r,
                    activeIndex: a,
                    realIndex: n,
                    snapIndex: o
                } = t;
                let l, d = e;
                const p = e => {
                    let s = e - t.virtual.slidesBefore;
                    return s < 0 && (s = t.virtual.slides.length + s), s >= t.virtual.slides.length && (s -= t.virtual.slides.length), s
                };
                if (void 0 === d && (d = function (e) {
                    const {slidesGrid: t, params: s} = e, i = e.rtlTranslate ? e.translate : -e.translate;
                    let r;
                    for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2 ? r = e : i >= t[e] && i < t[e + 1] && (r = e + 1) : i >= t[e] && (r = e);
                    return s.normalizeSlideIndex && (r < 0 || void 0 === r) && (r = 0), r
                }(t)), i.indexOf(s) >= 0) l = i.indexOf(s); else {
                    const e = Math.min(r.slidesPerGroupSkip, d);
                    l = e + Math.floor((d - e) / r.slidesPerGroup)
                }
                if (l >= i.length && (l = i.length - 1), d === a && !t.params.loop) return void (l !== o && (t.snapIndex = l, t.emit("snapIndexChange")));
                if (d === a && t.params.loop && t.virtual && t.params.virtual.enabled) return void (t.realIndex = p(d));
                const c = t.grid && r.grid && r.grid.rows > 1;
                let u;
                if (t.virtual && r.virtual.enabled && r.loop) u = p(d); else if (c) {
                    const e = t.slides.filter((e => e.column === d))[0];
                    let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                    Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)), u = Math.floor(s / r.grid.rows)
                } else if (t.slides[d]) {
                    const e = t.slides[d].getAttribute("data-swiper-slide-index");
                    u = e ? parseInt(e, 10) : d
                } else u = d;
                Object.assign(t, {
                    previousSnapIndex: o,
                    snapIndex: l,
                    previousRealIndex: n,
                    realIndex: u,
                    previousIndex: a,
                    activeIndex: d
                }), t.initialized && B(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (n !== u && t.emit("realIndexChange"), t.emit("slideChange"))
            }, updateClickedSlide: function (e, t) {
                const s = this, i = s.params;
                let r = e.closest(`.${i.slideClass}, swiper-slide`);
                !r && s.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {
                    !r && e.matches && e.matches(`.${i.slideClass}, swiper-slide`) && (r = e)
                }));
                let a, n = !1;
                if (r) for (let e = 0; e < s.slides.length; e += 1) if (s.slides[e] === r) {
                    n = !0, a = e;
                    break
                }
                if (!r || !n) return s.clickedSlide = void 0, void (s.clickedIndex = void 0);
                s.clickedSlide = r, s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = a, i.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide()
            }
        };

        function Y(e) {
            let {swiper: t, runCallbacks: s, direction: i, step: r} = e;
            const {activeIndex: a, previousIndex: n} = t;
            let o = i;
            if (o || (o = a > n ? "next" : a < n ? "prev" : "reset"), t.emit(`transition${r}`), s && a !== n) {
                if ("reset" === o) return void t.emit(`slideResetTransition${r}`);
                t.emit(`slideChangeTransition${r}`), "next" === o ? t.emit(`slideNextTransition${r}`) : t.emit(`slidePrevTransition${r}`)
            }
        }

        var N = {
            slideTo: function (e, t, s, i, r) {
                void 0 === e && (e = 0), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
                const a = this;
                let n = e;
                n < 0 && (n = 0);
                const {
                    params: o,
                    snapGrid: l,
                    slidesGrid: d,
                    previousIndex: p,
                    activeIndex: c,
                    rtlTranslate: u,
                    wrapperEl: m,
                    enabled: f
                } = a;
                if (!f && !i && !r || a.destroyed || a.animating && o.preventInteractionOnTransition) return !1;
                void 0 === t && (t = a.params.speed);
                const g = Math.min(a.params.slidesPerGroupSkip, n);
                let v = g + Math.floor((n - g) / a.params.slidesPerGroup);
                v >= l.length && (v = l.length - 1);
                const w = -l[v];
                if (o.normalizeSlideIndex) for (let e = 0; e < d.length; e += 1) {
                    const t = -Math.floor(100 * w), s = Math.floor(100 * d[e]), i = Math.floor(100 * d[e + 1]);
                    void 0 !== d[e + 1] ? t >= s && t < i - (i - s) / 2 ? n = e : t >= s && t < i && (n = e + 1) : t >= s && (n = e)
                }
                if (a.initialized && n !== c) {
                    if (!a.allowSlideNext && (u ? w > a.translate && w > a.minTranslate() : w < a.translate && w < a.minTranslate())) return !1;
                    if (!a.allowSlidePrev && w > a.translate && w > a.maxTranslate() && (c || 0) !== n) return !1
                }
                let b;
                if (n !== (p || 0) && s && a.emit("beforeSlideChangeStart"), a.updateProgress(w), b = n > c ? "next" : n < c ? "prev" : "reset", u && -w === a.translate || !u && w === a.translate) return a.updateActiveIndex(n), o.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== o.effect && a.setTranslate(w), "reset" !== b && (a.transitionStart(s, b), a.transitionEnd(s, b)), !1;
                if (o.cssMode) {
                    const e = a.isHorizontal(), s = u ? w : -w;
                    if (0 === t) {
                        const t = a.virtual && a.params.virtual.enabled;
                        t && (a.wrapperEl.style.scrollSnapType = "none", a._immediateVirtual = !0), t && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0 ? (a._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                            m[e ? "scrollLeft" : "scrollTop"] = s
                        }))) : m[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame((() => {
                            a.wrapperEl.style.scrollSnapType = "", a._immediateVirtual = !1
                        }))
                    } else {
                        if (!a.support.smoothScroll) return h({
                            swiper: a,
                            targetPosition: s,
                            side: e ? "left" : "top"
                        }), !0;
                        m.scrollTo({[e ? "left" : "top"]: s, behavior: "smooth"})
                    }
                    return !0
                }
                return a.setTransition(t), a.setTranslate(w), a.updateActiveIndex(n), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, i), a.transitionStart(s, b), 0 === t ? a.transitionEnd(s, b) : a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function (e) {
                    a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(s, b))
                }), a.wrapperEl.addEventListener("transitionend", a.onSlideToWrapperTransitionEnd)), !0
            }, slideToLoop: function (e, t, s, i) {
                void 0 === e && (e = 0), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
                const r = this;
                if (r.destroyed) return;
                void 0 === t && (t = r.params.speed);
                const a = r.grid && r.params.grid && r.params.grid.rows > 1;
                let n = e;
                if (r.params.loop) if (r.virtual && r.params.virtual.enabled) n += r.virtual.slidesBefore; else {
                    let e;
                    if (a) {
                        const t = n * r.params.grid.rows;
                        e = r.slides.filter((e => 1 * e.getAttribute("data-swiper-slide-index") === t))[0].column
                    } else e = r.getSlideIndexByData(n);
                    const t = a ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length, {centeredSlides: s} = r.params;
                    let o = r.params.slidesPerView;
                    "auto" === o ? o = r.slidesPerViewDynamic() : (o = Math.ceil(parseFloat(r.params.slidesPerView, 10)), s && o % 2 == 0 && (o += 1));
                    let l = t - e < o;
                    if (s && (l = l || e < Math.ceil(o / 2)), i && s && "auto" !== r.params.slidesPerView && !a && (l = !1), l) {
                        const i = s ? e < r.activeIndex ? "prev" : "next" : e - r.activeIndex - 1 < r.params.slidesPerView ? "next" : "prev";
                        r.loopFix({
                            direction: i,
                            slideTo: !0,
                            activeSlideIndex: "next" === i ? e + 1 : e - t + 1,
                            slideRealIndex: "next" === i ? r.realIndex : void 0
                        })
                    }
                    if (a) {
                        const e = n * r.params.grid.rows;
                        n = r.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0].column
                    } else n = r.getSlideIndexByData(n)
                }
                return requestAnimationFrame((() => {
                    r.slideTo(n, t, s, i)
                })), r
            }, slideNext: function (e, t, s) {
                void 0 === t && (t = !0);
                const i = this, {enabled: r, params: a, animating: n} = i;
                if (!r || i.destroyed) return i;
                void 0 === e && (e = i.params.speed);
                let o = a.slidesPerGroup;
                "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
                const l = i.activeIndex < a.slidesPerGroupSkip ? 1 : o, d = i.virtual && a.virtual.enabled;
                if (a.loop) {
                    if (n && !d && a.loopPreventsSliding) return !1;
                    if (i.loopFix({direction: "next"}), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && a.cssMode) return requestAnimationFrame((() => {
                        i.slideTo(i.activeIndex + l, e, t, s)
                    })), !0
                }
                return a.rewind && i.isEnd ? i.slideTo(0, e, t, s) : i.slideTo(i.activeIndex + l, e, t, s)
            }, slidePrev: function (e, t, s) {
                void 0 === t && (t = !0);
                const i = this, {params: r, snapGrid: a, slidesGrid: n, rtlTranslate: o, enabled: l, animating: d} = i;
                if (!l || i.destroyed) return i;
                void 0 === e && (e = i.params.speed);
                const p = i.virtual && r.virtual.enabled;
                if (r.loop) {
                    if (d && !p && r.loopPreventsSliding) return !1;
                    i.loopFix({direction: "prev"}), i._clientLeft = i.wrapperEl.clientLeft
                }

                function c(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }

                const u = c(o ? i.translate : -i.translate), m = a.map((e => c(e)));
                let h = a[m.indexOf(u) - 1];
                if (void 0 === h && r.cssMode) {
                    let e;
                    a.forEach(((t, s) => {
                        u >= t && (e = s)
                    })), void 0 !== e && (h = a[e > 0 ? e - 1 : e])
                }
                let f = 0;
                if (void 0 !== h && (f = n.indexOf(h), f < 0 && (f = i.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (f = f - i.slidesPerViewDynamic("previous", !0) + 1, f = Math.max(f, 0))), r.rewind && i.isBeginning) {
                    const r = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
                    return i.slideTo(r, e, t, s)
                }
                return r.loop && 0 === i.activeIndex && r.cssMode ? (requestAnimationFrame((() => {
                    i.slideTo(f, e, t, s)
                })), !0) : i.slideTo(f, e, t, s)
            }, slideReset: function (e, t, s) {
                void 0 === t && (t = !0);
                const i = this;
                if (!i.destroyed) return void 0 === e && (e = i.params.speed), i.slideTo(i.activeIndex, e, t, s)
            }, slideToClosest: function (e, t, s, i) {
                void 0 === t && (t = !0), void 0 === i && (i = .5);
                const r = this;
                if (r.destroyed) return;
                void 0 === e && (e = r.params.speed);
                let a = r.activeIndex;
                const n = Math.min(r.params.slidesPerGroupSkip, a),
                    o = n + Math.floor((a - n) / r.params.slidesPerGroup),
                    l = r.rtlTranslate ? r.translate : -r.translate;
                if (l >= r.snapGrid[o]) {
                    const e = r.snapGrid[o];
                    l - e > (r.snapGrid[o + 1] - e) * i && (a += r.params.slidesPerGroup)
                } else {
                    const e = r.snapGrid[o - 1];
                    l - e <= (r.snapGrid[o] - e) * i && (a -= r.params.slidesPerGroup)
                }
                return a = Math.max(a, 0), a = Math.min(a, r.slidesGrid.length - 1), r.slideTo(a, e, t, s)
            }, slideToClickedSlide: function () {
                const e = this;
                if (e.destroyed) return;
                const {params: t, slidesEl: s} = e,
                    i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                let r, a = e.clickedIndex;
                const n = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
                if (t.loop) {
                    if (e.animating) return;
                    r = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? a < e.loopedSlides - i / 2 || a > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), a = e.getSlideIndex(g(s, `${n}[data-swiper-slide-index="${r}"]`)[0]), l((() => {
                        e.slideTo(a)
                    }))) : e.slideTo(a) : a > e.slides.length - i ? (e.loopFix(), a = e.getSlideIndex(g(s, `${n}[data-swiper-slide-index="${r}"]`)[0]), l((() => {
                        e.slideTo(a)
                    }))) : e.slideTo(a)
                } else e.slideTo(a)
            }
        }, F = {
            loopCreate: function (e) {
                const t = this, {params: s, slidesEl: i} = t;
                if (!s.loop || t.virtual && t.params.virtual.enabled) return;
                const r = () => {
                        g(i, `.${s.slideClass}, swiper-slide`).forEach(((e, t) => {
                            e.setAttribute("data-swiper-slide-index", t)
                        }))
                    }, a = t.grid && s.grid && s.grid.rows > 1, n = s.slidesPerGroup * (a ? s.grid.rows : 1),
                    o = t.slides.length % n != 0, l = a && t.slides.length % s.grid.rows != 0, d = e => {
                        for (let i = 0; i < e; i += 1) {
                            const e = t.isElement ? w("swiper-slide", [s.slideBlankClass]) : w("div", [s.slideClass, s.slideBlankClass]);
                            t.slidesEl.append(e)
                        }
                    };
                o ? (s.loopAddBlankSlides ? (d(n - t.slides.length % n), t.recalcSlides(), t.updateSlides()) : v("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), r()) : l ? (s.loopAddBlankSlides ? (d(s.grid.rows - t.slides.length % s.grid.rows), t.recalcSlides(), t.updateSlides()) : v("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), r()) : r(), t.loopFix({
                    slideRealIndex: e,
                    direction: s.centeredSlides ? void 0 : "next"
                })
            }, loopFix: function (e) {
                let {
                    slideRealIndex: t,
                    slideTo: s = !0,
                    direction: i,
                    setTranslate: r,
                    activeSlideIndex: a,
                    byController: n,
                    byMousewheel: o
                } = void 0 === e ? {} : e;
                const l = this;
                if (!l.params.loop) return;
                l.emit("beforeLoopFix");
                const {
                    slides: d,
                    allowSlidePrev: p,
                    allowSlideNext: c,
                    slidesEl: u,
                    params: m
                } = l, {centeredSlides: h} = m;
                if (l.allowSlidePrev = !0, l.allowSlideNext = !0, l.virtual && m.virtual.enabled) return s && (m.centeredSlides || 0 !== l.snapIndex ? m.centeredSlides && l.snapIndex < m.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0) : l.slideTo(l.virtual.slides.length, 0, !1, !0)), l.allowSlidePrev = p, l.allowSlideNext = c, void l.emit("loopFix");
                let f = m.slidesPerView;
                "auto" === f ? f = l.slidesPerViewDynamic() : (f = Math.ceil(parseFloat(m.slidesPerView, 10)), h && f % 2 == 0 && (f += 1));
                const g = m.slidesPerGroupAuto ? f : m.slidesPerGroup;
                let w = g;
                w % g != 0 && (w += g - w % g), w += m.loopAdditionalSlides, l.loopedSlides = w;
                const b = l.grid && m.grid && m.grid.rows > 1;
                d.length < f + w ? v("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === m.grid.fill && v("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
                const y = [], x = [];
                let E = l.activeIndex;
                void 0 === a ? a = l.getSlideIndex(d.filter((e => e.classList.contains(m.slideActiveClass)))[0]) : E = a;
                const S = "next" === i || !i, T = "prev" === i || !i;
                let A = 0, M = 0;
                const C = b ? Math.ceil(d.length / m.grid.rows) : d.length,
                    P = (b ? d[a].column : a) + (h && void 0 === r ? -f / 2 + .5 : 0);
                if (P < w) {
                    A = Math.max(w - P, g);
                    for (let e = 0; e < w - P; e += 1) {
                        const t = e - Math.floor(e / C) * C;
                        if (b) {
                            const e = C - t - 1;
                            for (let t = d.length - 1; t >= 0; t -= 1) d[t].column === e && y.push(t)
                        } else y.push(C - t - 1)
                    }
                } else if (P + f > C - w) {
                    M = Math.max(P - (C - 2 * w), g);
                    for (let e = 0; e < M; e += 1) {
                        const t = e - Math.floor(e / C) * C;
                        b ? d.forEach(((e, s) => {
                            e.column === t && x.push(s)
                        })) : x.push(t)
                    }
                }
                if (l.__preventObserver__ = !0, requestAnimationFrame((() => {
                    l.__preventObserver__ = !1
                })), T && y.forEach((e => {
                    d[e].swiperLoopMoveDOM = !0, u.prepend(d[e]), d[e].swiperLoopMoveDOM = !1
                })), S && x.forEach((e => {
                    d[e].swiperLoopMoveDOM = !0, u.append(d[e]), d[e].swiperLoopMoveDOM = !1
                })), l.recalcSlides(), "auto" === m.slidesPerView ? l.updateSlides() : b && (y.length > 0 && T || x.length > 0 && S) && l.slides.forEach(((e, t) => {
                    l.grid.updateSlide(t, e, l.slides)
                })), m.watchSlidesProgress && l.updateSlidesOffset(), s) if (y.length > 0 && T) {
                    if (void 0 === t) {
                        const e = l.slidesGrid[E], t = l.slidesGrid[E + A] - e;
                        o ? l.setTranslate(l.translate - t) : (l.slideTo(E + Math.ceil(A), 0, !1, !0), r && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - t, l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - t))
                    } else if (r) {
                        const e = b ? y.length / m.grid.rows : y.length;
                        l.slideTo(l.activeIndex + e, 0, !1, !0), l.touchEventsData.currentTranslate = l.translate
                    }
                } else if (x.length > 0 && S) if (void 0 === t) {
                    const e = l.slidesGrid[E], t = l.slidesGrid[E - M] - e;
                    o ? l.setTranslate(l.translate - t) : (l.slideTo(E - M, 0, !1, !0), r && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - t, l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - t))
                } else {
                    const e = b ? x.length / m.grid.rows : x.length;
                    l.slideTo(l.activeIndex - e, 0, !1, !0)
                }
                if (l.allowSlidePrev = p, l.allowSlideNext = c, l.controller && l.controller.control && !n) {
                    const e = {slideRealIndex: t, direction: i, setTranslate: r, activeSlideIndex: a, byController: !0};
                    Array.isArray(l.controller.control) ? l.controller.control.forEach((t => {
                        !t.destroyed && t.params.loop && t.loopFix({
                            ...e,
                            slideTo: t.params.slidesPerView === m.slidesPerView && s
                        })
                    })) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix({
                        ...e,
                        slideTo: l.controller.control.params.slidesPerView === m.slidesPerView && s
                    })
                }
                l.emit("loopFix")
            }, loopDestroy: function () {
                const e = this, {params: t, slidesEl: s} = e;
                if (!t.loop || e.virtual && e.params.virtual.enabled) return;
                e.recalcSlides();
                const i = [];
                e.slides.forEach((e => {
                    const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                    i[t] = e
                })), e.slides.forEach((e => {
                    e.removeAttribute("data-swiper-slide-index")
                })), i.forEach((e => {
                    s.append(e)
                })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
            }
        };

        function H(e, t, s) {
            const i = n(), {params: r} = e, a = r.edgeSwipeDetection, o = r.edgeSwipeThreshold;
            return !a || !(s <= o || s >= i.innerWidth - o) || "prevent" === a && (t.preventDefault(), !0)
        }

        function R(e) {
            const t = this, s = r();
            let i = e;
            i.originalEvent && (i = i.originalEvent);
            const a = t.touchEventsData;
            if ("pointerdown" === i.type) {
                if (null !== a.pointerId && a.pointerId !== i.pointerId) return;
                a.pointerId = i.pointerId
            } else "touchstart" === i.type && 1 === i.targetTouches.length && (a.touchId = i.targetTouches[0].identifier);
            if ("touchstart" === i.type) return void H(t, i, i.targetTouches[0].pageX);
            const {params: o, touches: l, enabled: p} = t;
            if (!p) return;
            if (!o.simulateTouch && "mouse" === i.pointerType) return;
            if (t.animating && o.preventInteractionOnTransition) return;
            !t.animating && o.cssMode && o.loop && t.loopFix();
            let c = i.target;
            if ("wrapper" === o.touchEventsTarget && !t.wrapperEl.contains(c)) return;
            if ("which" in i && 3 === i.which) return;
            if ("button" in i && i.button > 0) return;
            if (a.isTouched && a.isMoved) return;
            const u = !!o.noSwipingClass && "" !== o.noSwipingClass, m = i.composedPath ? i.composedPath() : i.path;
            u && i.target && i.target.shadowRoot && m && (c = m[0]);
            const h = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
                f = !(!i.target || !i.target.shadowRoot);
            if (o.noSwiping && (f ? function (e, t) {
                return void 0 === t && (t = this), function t(s) {
                    if (!s || s === r() || s === n()) return null;
                    s.assignedSlot && (s = s.assignedSlot);
                    const i = s.closest(e);
                    return i || s.getRootNode ? i || t(s.getRootNode().host) : null
                }(t)
            }(h, c) : c.closest(h))) return void (t.allowClick = !0);
            if (o.swipeHandler && !c.closest(o.swipeHandler)) return;
            l.currentX = i.pageX, l.currentY = i.pageY;
            const g = l.currentX, v = l.currentY;
            if (!H(t, i, g)) return;
            Object.assign(a, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }), l.startX = g, l.startY = v, a.touchStartTime = d(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, o.threshold > 0 && (a.allowThresholdMove = !1);
            let w = !0;
            c.matches(a.focusableElements) && (w = !1, "SELECT" === c.nodeName && (a.isTouched = !1)), s.activeElement && s.activeElement.matches(a.focusableElements) && s.activeElement !== c && s.activeElement.blur();
            const b = w && t.allowTouchMove && o.touchStartPreventDefault;
            !o.touchStartForcePreventDefault && !b || c.isContentEditable || i.preventDefault(), o.freeMode && o.freeMode.enabled && t.freeMode && t.animating && !o.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", i)
        }

        function X(e) {
            const t = r(), s = this, i = s.touchEventsData, {params: a, touches: n, rtlTranslate: o, enabled: l} = s;
            if (!l) return;
            if (!a.simulateTouch && "mouse" === e.pointerType) return;
            let p, c = e;
            if (c.originalEvent && (c = c.originalEvent), "pointermove" === c.type) {
                if (null !== i.touchId) return;
                if (c.pointerId !== i.pointerId) return
            }
            if ("touchmove" === c.type) {
                if (p = [...c.changedTouches].filter((e => e.identifier === i.touchId))[0], !p || p.identifier !== i.touchId) return
            } else p = c;
            if (!i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
            const u = p.pageX, m = p.pageY;
            if (c.preventedByNestedSwiper) return n.startX = u, void (n.startY = m);
            if (!s.allowTouchMove) return c.target.matches(i.focusableElements) || (s.allowClick = !1), void (i.isTouched && (Object.assign(n, {
                startX: u,
                startY: m,
                currentX: u,
                currentY: m
            }), i.touchStartTime = d()));
            if (a.touchReleaseOnEdges && !a.loop) if (s.isVertical()) {
                if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1)
            } else if (u < n.startX && s.translate <= s.maxTranslate() || u > n.startX && s.translate >= s.minTranslate()) return;
            if (t.activeElement && c.target === t.activeElement && c.target.matches(i.focusableElements)) return i.isMoved = !0, void (s.allowClick = !1);
            i.allowTouchCallbacks && s.emit("touchMove", c), n.previousX = n.currentX, n.previousY = n.currentY, n.currentX = u, n.currentY = m;
            const h = n.currentX - n.startX, f = n.currentY - n.startY;
            if (s.params.threshold && Math.sqrt(h ** 2 + f ** 2) < s.params.threshold) return;
            if (void 0 === i.isScrolling) {
                let e;
                s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : h * h + f * f >= 25 && (e = 180 * Math.atan2(Math.abs(f), Math.abs(h)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle)
            }
            if (i.isScrolling && s.emit("touchMoveOpposite", c), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling || "touchmove" === c.type && i.preventTouchMoveFromPointerMove) return void (i.isTouched = !1);
            if (!i.startMoving) return;
            s.allowClick = !1, !a.cssMode && c.cancelable && c.preventDefault(), a.touchMoveStopPropagation && !a.nested && c.stopPropagation();
            let g = s.isHorizontal() ? h : f,
                v = s.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
            a.oneWayMovement && (g = Math.abs(g) * (o ? 1 : -1), v = Math.abs(v) * (o ? 1 : -1)), n.diff = g, g *= a.touchRatio, o && (g = -g, v = -v);
            const w = s.touchesDirection;
            s.swipeDirection = g > 0 ? "prev" : "next", s.touchesDirection = v > 0 ? "prev" : "next";
            const b = s.params.loop && !a.cssMode,
                y = "next" === s.touchesDirection && s.allowSlideNext || "prev" === s.touchesDirection && s.allowSlidePrev;
            if (!i.isMoved) {
                if (b && y && s.loopFix({direction: s.swipeDirection}), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
                    const e = new window.CustomEvent("transitionend", {
                        bubbles: !0,
                        cancelable: !0,
                        detail: {bySwiperTouchMove: !0}
                    });
                    s.wrapperEl.dispatchEvent(e)
                }
                i.allowMomentumBounce = !1, !a.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", c)
            }
            if ((new Date).getTime(), i.isMoved && i.allowThresholdMove && w !== s.touchesDirection && b && y && Math.abs(g) >= 1) return Object.assign(n, {
                startX: u,
                startY: m,
                currentX: u,
                currentY: m,
                startTranslate: i.currentTranslate
            }), i.loopSwapReset = !0, void (i.startTranslate = i.currentTranslate);
            s.emit("sliderMove", c), i.isMoved = !0, i.currentTranslate = g + i.startTranslate;
            let x = !0, E = a.resistanceRatio;
            if (a.touchReleaseOnEdges && (E = 0), g > 0 ? (b && y && i.allowThresholdMove && i.currentTranslate > (a.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] : s.minTranslate()) && s.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0
            }), i.currentTranslate > s.minTranslate() && (x = !1, a.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + g) ** E))) : g < 0 && (b && y && i.allowThresholdMove && i.currentTranslate < (a.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] : s.maxTranslate()) && s.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex: s.slides.length - ("auto" === a.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
            }), i.currentTranslate < s.maxTranslate() && (x = !1, a.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - g) ** E))), x && (c.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), a.threshold > 0) {
                if (!(Math.abs(g) > a.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
            }
            a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && s.freeMode || a.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), a.freeMode && a.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate))
        }

        function q(e) {
            const t = this, s = t.touchEventsData;
            let i, r = e;
            if (r.originalEvent && (r = r.originalEvent), "touchend" === r.type || "touchcancel" === r.type) {
                if (i = [...r.changedTouches].filter((e => e.identifier === s.touchId))[0], !i || i.identifier !== s.touchId) return
            } else {
                if (null !== s.touchId) return;
                if (r.pointerId !== s.pointerId) return;
                i = r
            }
            if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(r.type) && (!["pointercancel", "contextmenu"].includes(r.type) || !t.browser.isSafari && !t.browser.isWebView)) return;
            s.pointerId = null, s.touchId = null;
            const {params: a, touches: n, rtlTranslate: o, slidesGrid: p, enabled: c} = t;
            if (!c) return;
            if (!a.simulateTouch && "mouse" === r.pointerType) return;
            if (s.allowTouchCallbacks && t.emit("touchEnd", r), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && a.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
            a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            const u = d(), m = u - s.touchStartTime;
            if (t.allowClick) {
                const e = r.path || r.composedPath && r.composedPath();
                t.updateClickedSlide(e && e[0] || r.target, e), t.emit("tap click", r), m < 300 && u - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", r)
            }
            if (s.lastClickTime = d(), l((() => {
                t.destroyed || (t.allowClick = !0)
            })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === n.diff && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
            let h;
            if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = a.followFinger ? o ? t.translate : -t.translate : -s.currentTranslate, a.cssMode) return;
            if (a.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({currentPos: h});
            const f = h >= -t.maxTranslate() && !t.params.loop;
            let g = 0, v = t.slidesSizesGrid[0];
            for (let e = 0; e < p.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
                const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
                void 0 !== p[e + t] ? (f || h >= p[e] && h < p[e + t]) && (g = e, v = p[e + t] - p[e]) : (f || h >= p[e]) && (g = e, v = p[p.length - 1] - p[p.length - 2])
            }
            let w = null, b = null;
            a.rewind && (t.isBeginning ? b = a.virtual && a.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (w = 0));
            const y = (h - p[g]) / v, x = g < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
            if (m > a.longSwipesMs) {
                if (!a.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (y >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? w : g + x) : t.slideTo(g)), "prev" === t.swipeDirection && (y > 1 - a.longSwipesRatio ? t.slideTo(g + x) : null !== b && y < 0 && Math.abs(y) > a.longSwipesRatio ? t.slideTo(b) : t.slideTo(g))
            } else {
                if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
                !t.navigation || r.target !== t.navigation.nextEl && r.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== w ? w : g + x), "prev" === t.swipeDirection && t.slideTo(null !== b ? b : g)) : r.target === t.navigation.nextEl ? t.slideTo(g + x) : t.slideTo(g)
            }
        }

        function _() {
            const e = this, {params: t, el: s} = e;
            if (s && 0 === s.offsetWidth) return;
            t.breakpoints && e.setBreakpoint();
            const {allowSlideNext: i, allowSlidePrev: r, snapGrid: a} = e, n = e.virtual && e.params.virtual.enabled;
            e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
            const o = n && t.loop;
            !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !n ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
                e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
            }), 500)), e.allowSlidePrev = r, e.allowSlideNext = i, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
        }

        function V(e) {
            const t = this;
            t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
        }

        function j() {
            const e = this, {wrapperEl: t, rtlTranslate: s, enabled: i} = e;
            if (!i) return;
            let r;
            e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
            const a = e.maxTranslate() - e.minTranslate();
            r = 0 === a ? 0 : (e.translate - e.minTranslate()) / a, r !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
        }

        function W(e) {
            const t = this;
            D(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
        }

        function U() {
            const e = this;
            e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
        }

        const Z = (e, t) => {
            const s = r(), {params: i, el: a, wrapperEl: n, device: o} = e, l = !!i.nested,
                d = "on" === t ? "addEventListener" : "removeEventListener", p = t;
            a && "string" != typeof a && (s[d]("touchstart", e.onDocumentTouchStart, {
                passive: !1,
                capture: l
            }), a[d]("touchstart", e.onTouchStart, {passive: !1}), a[d]("pointerdown", e.onTouchStart, {passive: !1}), s[d]("touchmove", e.onTouchMove, {
                passive: !1,
                capture: l
            }), s[d]("pointermove", e.onTouchMove, {
                passive: !1,
                capture: l
            }), s[d]("touchend", e.onTouchEnd, {passive: !0}), s[d]("pointerup", e.onTouchEnd, {passive: !0}), s[d]("pointercancel", e.onTouchEnd, {passive: !0}), s[d]("touchcancel", e.onTouchEnd, {passive: !0}), s[d]("pointerout", e.onTouchEnd, {passive: !0}), s[d]("pointerleave", e.onTouchEnd, {passive: !0}), s[d]("contextmenu", e.onTouchEnd, {passive: !0}), (i.preventClicks || i.preventClicksPropagation) && a[d]("click", e.onClick, !0), i.cssMode && n[d]("scroll", e.onScroll), i.updateOnWindowResize ? e[p](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", _, !0) : e[p]("observerUpdate", _, !0), a[d]("load", e.onLoad, {capture: !0}))
        }, Q = (e, t) => e.grid && t.grid && t.grid.rows > 1;
        var K = {
            init: !0,
            direction: "horizontal",
            oneWayMovement: !1,
            swiperElementNodeName: "SWIPER-CONTAINER",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !0,
            nested: !1,
            createElements: !1,
            eventsPrefix: "swiper",
            enabled: !0,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: !1,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 5,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            loop: !1,
            loopAddBlankSlides: !0,
            loopAdditionalSlides: 0,
            loopPreventsSliding: !0,
            rewind: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-blank",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideFullyVisibleClass: "swiper-slide-fully-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: !0,
            _emitClasses: !1
        };

        function J(e, t) {
            return function (s) {
                void 0 === s && (s = {});
                const i = Object.keys(s)[0], r = s[i];
                "object" == typeof r && null !== r ? (!0 === e[i] && (e[i] = {enabled: !0}), "navigation" === i && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0), ["pagination", "scrollbar"].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0), i in e && "enabled" in r ? ("object" != typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {enabled: !1}), u(t, s)) : u(t, s)) : u(t, s)
            }
        }

        const ee = {
            eventsEmitter: k, update: G, translate: {
                getTranslate: function (e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    const {params: t, rtlTranslate: s, translate: i, wrapperEl: r} = this;
                    if (t.virtualTranslate) return s ? -i : i;
                    if (t.cssMode) return i;
                    let a = p(r, e);
                    return a += this.cssOverflowAdjustment(), s && (a = -a), a || 0
                }, setTranslate: function (e, t) {
                    const s = this, {rtlTranslate: i, params: r, wrapperEl: a, progress: n} = s;
                    let o, l = 0, d = 0;
                    s.isHorizontal() ? l = i ? -e : e : d = e, r.roundLengths && (l = Math.floor(l), d = Math.floor(d)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? l : d, r.cssMode ? a[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -l : -d : r.virtualTranslate || (s.isHorizontal() ? l -= s.cssOverflowAdjustment() : d -= s.cssOverflowAdjustment(), a.style.transform = `translate3d(${l}px, ${d}px, 0px)`);
                    const p = s.maxTranslate() - s.minTranslate();
                    o = 0 === p ? 0 : (e - s.minTranslate()) / p, o !== n && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
                }, minTranslate: function () {
                    return -this.snapGrid[0]
                }, maxTranslate: function () {
                    return -this.snapGrid[this.snapGrid.length - 1]
                }, translateTo: function (e, t, s, i, r) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === i && (i = !0);
                    const a = this, {params: n, wrapperEl: o} = a;
                    if (a.animating && n.preventInteractionOnTransition) return !1;
                    const l = a.minTranslate(), d = a.maxTranslate();
                    let p;
                    if (p = i && e > l ? l : i && e < d ? d : e, a.updateProgress(p), n.cssMode) {
                        const e = a.isHorizontal();
                        if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -p; else {
                            if (!a.support.smoothScroll) return h({
                                swiper: a,
                                targetPosition: -p,
                                side: e ? "left" : "top"
                            }), !0;
                            o.scrollTo({[e ? "left" : "top"]: -p, behavior: "smooth"})
                        }
                        return !0
                    }
                    return 0 === t ? (a.setTransition(0), a.setTranslate(p), s && (a.emit("beforeTransitionStart", t, r), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(p), s && (a.emit("beforeTransitionStart", t, r), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function (e) {
                        a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, a.animating = !1, s && a.emit("transitionEnd"))
                    }), a.wrapperEl.addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd))), !0
                }
            }, transition: {
                setTransition: function (e, t) {
                    const s = this;
                    s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`, s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), s.emit("setTransition", e, t)
                }, transitionStart: function (e, t) {
                    void 0 === e && (e = !0);
                    const s = this, {params: i} = s;
                    i.cssMode || (i.autoHeight && s.updateAutoHeight(), Y({
                        swiper: s,
                        runCallbacks: e,
                        direction: t,
                        step: "Start"
                    }))
                }, transitionEnd: function (e, t) {
                    void 0 === e && (e = !0);
                    const s = this, {params: i} = s;
                    s.animating = !1, i.cssMode || (s.setTransition(0), Y({
                        swiper: s,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }))
                }
            }, slide: N, loop: F, grabCursor: {
                setGrabCursor: function (e) {
                    const t = this;
                    if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                    const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                    t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
                        t.__preventObserver__ = !1
                    }))
                }, unsetGrabCursor: function () {
                    const e = this;
                    e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame((() => {
                        e.__preventObserver__ = !1
                    })))
                }
            }, events: {
                attachEvents: function () {
                    const e = this, {params: t} = e;
                    e.onTouchStart = R.bind(e), e.onTouchMove = X.bind(e), e.onTouchEnd = q.bind(e), e.onDocumentTouchStart = U.bind(e), t.cssMode && (e.onScroll = j.bind(e)), e.onClick = V.bind(e), e.onLoad = W.bind(e), Z(e, "on")
                }, detachEvents: function () {
                    Z(this, "off")
                }
            }, breakpoints: {
                setBreakpoint: function () {
                    const e = this, {realIndex: t, initialized: s, params: i, el: r} = e, a = i.breakpoints;
                    if (!a || a && 0 === Object.keys(a).length) return;
                    const n = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
                    if (!n || e.currentBreakpoint === n) return;
                    const o = (n in a ? a[n] : void 0) || e.originalParams, l = Q(e, i), d = Q(e, o),
                        p = e.params.grabCursor, c = o.grabCursor, m = i.enabled;
                    l && !d ? (r.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !l && d && (r.classList.add(`${i.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.classList.add(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), p && !c ? e.unsetGrabCursor() : !p && c && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((t => {
                        if (void 0 === o[t]) return;
                        const s = i[t] && i[t].enabled, r = o[t] && o[t].enabled;
                        s && !r && e[t].disable(), !s && r && e[t].enable()
                    }));
                    const h = o.direction && o.direction !== i.direction,
                        f = i.loop && (o.slidesPerView !== i.slidesPerView || h), g = i.loop;
                    h && s && e.changeDirection(), u(e.params, o);
                    const v = e.params.enabled, w = e.params.loop;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), m && !v ? e.disable() : !m && v && e.enable(), e.currentBreakpoint = n, e.emit("_beforeBreakpoint", o), s && (f ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !g && w ? (e.loopCreate(t), e.updateSlides()) : g && !w && e.loopDestroy()), e.emit("breakpoint", o)
                }, getBreakpoint: function (e, t, s) {
                    if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
                    let i = !1;
                    const r = n(), a = "window" === t ? r.innerHeight : s.clientHeight, o = Object.keys(e).map((e => {
                        if ("string" == typeof e && 0 === e.indexOf("@")) {
                            const t = parseFloat(e.substr(1));
                            return {value: a * t, point: e}
                        }
                        return {value: e, point: e}
                    }));
                    o.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                    for (let e = 0; e < o.length; e += 1) {
                        const {point: a, value: n} = o[e];
                        "window" === t ? r.matchMedia(`(min-width: ${n}px)`).matches && (i = a) : n <= s.clientWidth && (i = a)
                    }
                    return i || "max"
                }
            }, checkOverflow: {
                checkOverflow: function () {
                    const e = this, {isLocked: t, params: s} = e, {slidesOffsetBefore: i} = s;
                    if (i) {
                        const t = e.slides.length - 1, s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                        e.isLocked = e.size > s
                    } else e.isLocked = 1 === e.snapGrid.length;
                    !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                }
            }, classes: {
                addClasses: function () {
                    const e = this, {classNames: t, params: s, rtl: i, el: r, device: a} = e, n = function (e, t) {
                        const s = [];
                        return e.forEach((e => {
                            "object" == typeof e ? Object.keys(e).forEach((i => {
                                e[i] && s.push(t + i)
                            })) : "string" == typeof e && s.push(t + e)
                        })), s
                    }(["initialized", s.direction, {"free-mode": e.params.freeMode && s.freeMode.enabled}, {autoheight: s.autoHeight}, {rtl: i}, {grid: s.grid && s.grid.rows > 1}, {"grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill}, {android: a.android}, {ios: a.ios}, {"css-mode": s.cssMode}, {centered: s.cssMode && s.centeredSlides}, {"watch-progress": s.watchSlidesProgress}], s.containerModifierClass);
                    t.push(...n), r.classList.add(...t), e.emitContainerClasses()
                }, removeClasses: function () {
                    const {el: e, classNames: t} = this;
                    e && "string" != typeof e && (e.classList.remove(...t), this.emitContainerClasses())
                }
            }
        }, te = {};

        class se {
            constructor() {
                let e, t;
                for (var s = arguments.length, i = new Array(s), a = 0; a < s; a++) i[a] = arguments[a];
                1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = u({}, t), e && !t.el && (t.el = e);
                const o = r();
                if (t.el && "string" == typeof t.el && o.querySelectorAll(t.el).length > 1) {
                    const e = [];
                    return o.querySelectorAll(t.el).forEach((s => {
                        const i = u({}, t, {el: s});
                        e.push(new se(i))
                    })), e
                }
                const l = this;
                l.__swiper__ = !0, l.support = L(), l.device = z({userAgent: t.userAgent}), l.browser = (P || (P = function () {
                    const e = n(), t = z();
                    let s = !1;

                    function i() {
                        const t = e.navigator.userAgent.toLowerCase();
                        return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                    }

                    if (i()) {
                        const t = String(e.navigator.userAgent);
                        if (t.includes("Version/")) {
                            const [e, i] = t.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                            s = e < 16 || 16 === e && i < 2
                        }
                    }
                    const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent), a = i();
                    return {isSafari: s || a, needPerspectiveFix: s, need3dFix: a || r && t.ios, isWebView: r}
                }()), P), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
                const d = {};
                l.modules.forEach((e => {
                    e({
                        params: t,
                        swiper: l,
                        extendParams: J(t, d),
                        on: l.on.bind(l),
                        once: l.once.bind(l),
                        off: l.off.bind(l),
                        emit: l.emit.bind(l)
                    })
                }));
                const p = u({}, K, d);
                return l.params = u({}, p, te, t), l.originalParams = u({}, l.params), l.passedParams = u({}, t), l.params && l.params.on && Object.keys(l.params.on).forEach((e => {
                    l.on(e, l.params.on[e])
                })), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
                    enabled: l.params.enabled,
                    el: e,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return "horizontal" === l.params.direction
                    },
                    isVertical() {
                        return "vertical" === l.params.direction
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    cssOverflowAdjustment() {
                        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
                    },
                    allowSlideNext: l.params.allowSlideNext,
                    allowSlidePrev: l.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: l.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        pointerId: null,
                        touchId: null
                    },
                    allowClick: !0,
                    allowTouchMove: l.params.allowTouchMove,
                    touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                    imagesToLoad: [],
                    imagesLoaded: 0
                }), l.emit("_swiper"), l.params.init && l.init(), l
            }

            getDirectionLabel(e) {
                return this.isHorizontal() ? e : {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[e]
            }

            getSlideIndex(e) {
                const {slidesEl: t, params: s} = this, i = x(g(t, `.${s.slideClass}, swiper-slide`)[0]);
                return x(e) - i
            }

            getSlideIndexByData(e) {
                return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0])
            }

            recalcSlides() {
                const {slidesEl: e, params: t} = this;
                this.slides = g(e, `.${t.slideClass}, swiper-slide`)
            }

            enable() {
                const e = this;
                e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
            }

            disable() {
                const e = this;
                e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
            }

            setProgress(e, t) {
                const s = this;
                e = Math.min(Math.max(e, 0), 1);
                const i = s.minTranslate(), r = (s.maxTranslate() - i) * e + i;
                s.translateTo(r, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
            }

            emitContainerClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el) return;
                const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
                e.emit("_containerClasses", t.join(" "))
            }

            getSlideClasses(e) {
                const t = this;
                return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
            }

            emitSlidesClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el) return;
                const t = [];
                e.slides.forEach((s => {
                    const i = e.getSlideClasses(s);
                    t.push({slideEl: s, classNames: i}), e.emit("_slideClass", s, i)
                })), e.emit("_slideClasses", t)
            }

            slidesPerViewDynamic(e, t) {
                void 0 === e && (e = "current"), void 0 === t && (t = !1);
                const {params: s, slides: i, slidesGrid: r, slidesSizesGrid: a, size: n, activeIndex: o} = this;
                let l = 1;
                if ("number" == typeof s.slidesPerView) return s.slidesPerView;
                if (s.centeredSlides) {
                    let e, t = i[o] ? Math.ceil(i[o].swiperSlideSize) : 0;
                    for (let s = o + 1; s < i.length; s += 1) i[s] && !e && (t += Math.ceil(i[s].swiperSlideSize), l += 1, t > n && (e = !0));
                    for (let s = o - 1; s >= 0; s -= 1) i[s] && !e && (t += i[s].swiperSlideSize, l += 1, t > n && (e = !0))
                } else if ("current" === e) for (let e = o + 1; e < i.length; e += 1) (t ? r[e] + a[e] - r[o] < n : r[e] - r[o] < n) && (l += 1); else for (let e = o - 1; e >= 0; e -= 1) r[o] - r[e] < n && (l += 1);
                return l
            }

            update() {
                const e = this;
                if (!e || e.destroyed) return;
                const {snapGrid: t, params: s} = e;

                function i() {
                    const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
                }

                let r;
                if (s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
                    t.complete && D(e, t)
                })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) i(), s.autoHeight && e.updateAutoHeight(); else {
                    if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
                        const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
                        r = e.slideTo(t.length - 1, 0, !1, !0)
                    } else r = e.slideTo(e.activeIndex, 0, !1, !0);
                    r || i()
                }
                s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
            }

            changeDirection(e, t) {
                void 0 === t && (t = !0);
                const s = this, i = s.params.direction;
                return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove(`${s.params.containerModifierClass}${i}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach((t => {
                    "vertical" === e ? t.style.width = "" : t.style.height = ""
                })), s.emit("changeDirection"), t && s.update()), s
            }

            changeLanguageDirection(e) {
                const t = this;
                t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
            }

            mount(e) {
                const t = this;
                if (t.mounted) return !0;
                let s = e || t.params.el;
                if ("string" == typeof s && (s = document.querySelector(s)), !s) return !1;
                s.swiper = t, s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
                const i = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
                let r = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(i()) : g(s, i())[0];
                return !r && t.params.createElements && (r = w("div", t.params.wrapperClass), s.append(r), g(s, `.${t.params.slideClass}`).forEach((e => {
                    r.append(e)
                }))), Object.assign(t, {
                    el: s,
                    wrapperEl: r,
                    slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : r,
                    hostEl: t.isElement ? s.parentNode.host : s,
                    mounted: !0,
                    rtl: "rtl" === s.dir.toLowerCase() || "rtl" === y(s, "direction"),
                    rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === y(s, "direction")),
                    wrongRTL: "-webkit-box" === y(r, "display")
                }), !0
            }

            init(e) {
                const t = this;
                if (t.initialized) return t;
                if (!1 === t.mount(e)) return t;
                t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
                const s = [...t.el.querySelectorAll('[loading="lazy"]')];
                return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach((e => {
                    e.complete ? D(t, e) : e.addEventListener("load", (e => {
                        D(t, e.target)
                    }))
                })), B(t), t.initialized = !0, B(t), t.emit("init"), t.emit("afterInit"), t
            }

            destroy(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                const s = this, {params: i, el: r, wrapperEl: a, slides: n} = s;
                return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), i.loop && s.loopDestroy(), t && (s.removeClasses(), r && "string" != typeof r && r.removeAttribute("style"), a && a.removeAttribute("style"), n && n.length && n.forEach((e => {
                    e.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
                }))), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
                    s.off(e)
                })), !1 !== e && (s.el && "string" != typeof s.el && (s.el.swiper = null), function (e) {
                    const t = e;
                    Object.keys(t).forEach((e => {
                        try {
                            t[e] = null
                        } catch (e) {
                        }
                        try {
                            delete t[e]
                        } catch (e) {
                        }
                    }))
                }(s)), s.destroyed = !0), null
            }

            static extendDefaults(e) {
                u(te, e)
            }

            static get extendedDefaults() {
                return te
            }

            static get defaults() {
                return K
            }

            static installModule(e) {
                se.prototype.__modules__ || (se.prototype.__modules__ = []);
                const t = se.prototype.__modules__;
                "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
            }

            static use(e) {
                return Array.isArray(e) ? (e.forEach((e => se.installModule(e))), se) : (se.installModule(e), se)
            }
        }

        function ie(e, t, s, i) {
            return e.params.createElements && Object.keys(i).forEach((r => {
                if (!s[r] && !0 === s.auto) {
                    let a = g(e.el, `.${i[r]}`)[0];
                    a || (a = w("div", i[r]), a.className = i[r], e.el.append(a)), s[r] = a, t[r] = a
                }
            })), s
        }

        function re(e) {
            return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`
        }

        function ae(e) {
            const t = this, {params: s, slidesEl: i} = t;
            s.loop && t.loopDestroy();
            const r = e => {
                if ("string" == typeof e) {
                    const t = document.createElement("div");
                    t.innerHTML = e, i.append(t.children[0]), t.innerHTML = ""
                } else i.append(e)
            };
            if ("object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && r(e[t]); else r(e);
            t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update()
        }

        function ne(e) {
            const t = this, {params: s, activeIndex: i, slidesEl: r} = t;
            s.loop && t.loopDestroy();
            let a = i + 1;
            const n = e => {
                if ("string" == typeof e) {
                    const t = document.createElement("div");
                    t.innerHTML = e, r.prepend(t.children[0]), t.innerHTML = ""
                } else r.prepend(e)
            };
            if ("object" == typeof e && "length" in e) {
                for (let t = 0; t < e.length; t += 1) e[t] && n(e[t]);
                a = i + e.length
            } else n(e);
            t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update(), t.slideTo(a, 0, !1)
        }

        function oe(e, t) {
            const s = this, {params: i, activeIndex: r, slidesEl: a} = s;
            let n = r;
            i.loop && (n -= s.loopedSlides, s.loopDestroy(), s.recalcSlides());
            const o = s.slides.length;
            if (e <= 0) return void s.prependSlide(t);
            if (e >= o) return void s.appendSlide(t);
            let l = n > e ? n + 1 : n;
            const d = [];
            for (let t = o - 1; t >= e; t -= 1) {
                const e = s.slides[t];
                e.remove(), d.unshift(e)
            }
            if ("object" == typeof t && "length" in t) {
                for (let e = 0; e < t.length; e += 1) t[e] && a.append(t[e]);
                l = n > e ? n + t.length : n
            } else a.append(t);
            for (let e = 0; e < d.length; e += 1) a.append(d[e]);
            s.recalcSlides(), i.loop && s.loopCreate(), i.observer && !s.isElement || s.update(), i.loop ? s.slideTo(l + s.loopedSlides, 0, !1) : s.slideTo(l, 0, !1)
        }

        function le(e) {
            const t = this, {params: s, activeIndex: i} = t;
            let r = i;
            s.loop && (r -= t.loopedSlides, t.loopDestroy());
            let a, n = r;
            if ("object" == typeof e && "length" in e) {
                for (let s = 0; s < e.length; s += 1) a = e[s], t.slides[a] && t.slides[a].remove(), a < n && (n -= 1);
                n = Math.max(n, 0)
            } else a = e, t.slides[a] && t.slides[a].remove(), a < n && (n -= 1), n = Math.max(n, 0);
            t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update(), s.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
        }

        function de() {
            const e = this, t = [];
            for (let s = 0; s < e.slides.length; s += 1) t.push(s);
            e.removeSlide(t)
        }

        function pe(e) {
            const {
                effect: t,
                swiper: s,
                on: i,
                setTranslate: r,
                setTransition: a,
                overwriteParams: n,
                perspective: o,
                recreateShadows: l,
                getEffectParams: d
            } = e;
            let p;
            i("beforeInit", (() => {
                if (s.params.effect !== t) return;
                s.classNames.push(`${s.params.containerModifierClass}${t}`), o && o() && s.classNames.push(`${s.params.containerModifierClass}3d`);
                const e = n ? n() : {};
                Object.assign(s.params, e), Object.assign(s.originalParams, e)
            })), i("setTranslate", (() => {
                s.params.effect === t && r()
            })), i("setTransition", ((e, i) => {
                s.params.effect === t && a(i)
            })), i("transitionEnd", (() => {
                if (s.params.effect === t && l) {
                    if (!d || !d().slideShadows) return;
                    s.slides.forEach((e => {
                        e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e => e.remove()))
                    })), l()
                }
            })), i("virtualUpdate", (() => {
                s.params.effect === t && (s.slides.length || (p = !0), requestAnimationFrame((() => {
                    p && s.slides && s.slides.length && (r(), p = !1)
                })))
            }))
        }

        function ce(e, t) {
            const s = f(t);
            return s !== t && (s.style.backfaceVisibility = "hidden", s.style["-webkit-backface-visibility"] = "hidden"), s
        }

        function ue(e) {
            let {swiper: t, duration: s, transformElements: i, allSlides: r} = e;
            const {activeIndex: a} = t;
            if (t.params.virtualTranslate && 0 !== s) {
                let e, s = !1;
                e = r ? i : i.filter((e => {
                    const s = e.classList.contains("swiper-slide-transform") ? (e => e.parentElement ? e.parentElement : t.slides.filter((t => t.shadowRoot && t.shadowRoot === e.parentNode))[0])(e) : e;
                    return t.getSlideIndex(s) === a
                })), e.forEach((e => {
                    S(e, (() => {
                        if (s) return;
                        if (!t || t.destroyed) return;
                        s = !0, t.animating = !1;
                        const e = new window.CustomEvent("transitionend", {bubbles: !0, cancelable: !0});
                        t.wrapperEl.dispatchEvent(e)
                    }))
                }))
            }
        }

        function me(e, t, s) {
            const i = `swiper-slide-shadow${s ? `-${s}` : ""}${e ? ` swiper-slide-shadow-${e}` : ""}`, r = f(t);
            let a = r.querySelector(`.${i.split(" ").join(".")}`);
            return a || (a = w("div", i.split(" ")), r.append(a)), a
        }

        Object.keys(ee).forEach((e => {
            Object.keys(ee[e]).forEach((t => {
                se.prototype[t] = ee[e][t]
            }))
        })), se.use([function (e) {
            let {swiper: t, on: s, emit: i} = e;
            const r = n();
            let a = null, o = null;
            const l = () => {
                t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"))
            }, d = () => {
                t && !t.destroyed && t.initialized && i("orientationchange")
            };
            s("init", (() => {
                t.params.resizeObserver && void 0 !== r.ResizeObserver ? t && !t.destroyed && t.initialized && (a = new ResizeObserver((e => {
                    o = r.requestAnimationFrame((() => {
                        const {width: s, height: i} = t;
                        let r = s, a = i;
                        e.forEach((e => {
                            let {contentBoxSize: s, contentRect: i, target: n} = e;
                            n && n !== t.el || (r = i ? i.width : (s[0] || s).inlineSize, a = i ? i.height : (s[0] || s).blockSize)
                        })), r === s && a === i || l()
                    }))
                })), a.observe(t.el)) : (r.addEventListener("resize", l), r.addEventListener("orientationchange", d))
            })), s("destroy", (() => {
                o && r.cancelAnimationFrame(o), a && a.unobserve && t.el && (a.unobserve(t.el), a = null), r.removeEventListener("resize", l), r.removeEventListener("orientationchange", d)
            }))
        }, function (e) {
            let {swiper: t, extendParams: s, on: i, emit: r} = e;
            const a = [], o = n(), l = function (e, s) {
                void 0 === s && (s = {});
                const i = new (o.MutationObserver || o.WebkitMutationObserver)((e => {
                    if (t.__preventObserver__) return;
                    if (1 === e.length) return void r("observerUpdate", e[0]);
                    const s = function () {
                        r("observerUpdate", e[0])
                    };
                    o.requestAnimationFrame ? o.requestAnimationFrame(s) : o.setTimeout(s, 0)
                }));
                i.observe(e, {
                    attributes: void 0 === s.attributes || s.attributes,
                    childList: void 0 === s.childList || s.childList,
                    characterData: void 0 === s.characterData || s.characterData
                }), a.push(i)
            };
            s({observer: !1, observeParents: !1, observeSlideChildren: !1}), i("init", (() => {
                if (t.params.observer) {
                    if (t.params.observeParents) {
                        const e = E(t.hostEl);
                        for (let t = 0; t < e.length; t += 1) l(e[t])
                    }
                    l(t.hostEl, {childList: t.params.observeSlideChildren}), l(t.wrapperEl, {attributes: !1})
                }
            })), i("destroy", (() => {
                a.forEach((e => {
                    e.disconnect()
                })), a.splice(0, a.length)
            }))
        }]);
        const he = [function (e) {
            let t, {swiper: s, extendParams: i, on: a, emit: n} = e;
            i({
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    renderExternalUpdate: !0,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            });
            const o = r();
            s.virtual = {cache: {}, from: void 0, to: void 0, slides: [], offset: 0, slidesGrid: []};
            const l = o.createElement("div");

            function d(e, t) {
                const i = s.params.virtual;
                if (i.cache && s.virtual.cache[t]) return s.virtual.cache[t];
                let r;
                return i.renderSlide ? (r = i.renderSlide.call(s, e, t), "string" == typeof r && (l.innerHTML = r, r = l.children[0])) : r = s.isElement ? w("swiper-slide") : w("div", s.params.slideClass), r.setAttribute("data-swiper-slide-index", t), i.renderSlide || (r.innerHTML = e), i.cache && (s.virtual.cache[t] = r), r
            }

            function p(e, t) {
                const {slidesPerView: i, slidesPerGroup: r, centeredSlides: a, loop: o, initialSlide: l} = s.params;
                if (t && !o && l > 0) return;
                const {addSlidesBefore: p, addSlidesAfter: c} = s.params.virtual, {
                    from: u,
                    to: m,
                    slides: h,
                    slidesGrid: f,
                    offset: v
                } = s.virtual;
                s.params.cssMode || s.updateActiveIndex();
                const w = s.activeIndex || 0;
                let b, y, x;
                b = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top", a ? (y = Math.floor(i / 2) + r + c, x = Math.floor(i / 2) + r + p) : (y = i + (r - 1) + c, x = (o ? i : r) + p);
                let E = w - x, S = w + y;
                o || (E = Math.max(E, 0), S = Math.min(S, h.length - 1));
                let T = (s.slidesGrid[E] || 0) - (s.slidesGrid[0] || 0);

                function A() {
                    s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), n("virtualUpdate")
                }

                if (o && w >= x ? (E -= x, a || (T += s.slidesGrid[0])) : o && w < x && (E = -x, a && (T += s.slidesGrid[0])), Object.assign(s.virtual, {
                    from: E,
                    to: S,
                    offset: T,
                    slidesGrid: s.slidesGrid,
                    slidesBefore: x,
                    slidesAfter: y
                }), u === E && m === S && !e) return s.slidesGrid !== f && T !== v && s.slides.forEach((e => {
                    e.style[b] = T - Math.abs(s.cssOverflowAdjustment()) + "px"
                })), s.updateProgress(), void n("virtualUpdate");
                if (s.params.virtual.renderExternal) return s.params.virtual.renderExternal.call(s, {
                    offset: T,
                    from: E,
                    to: S,
                    slides: function () {
                        const e = [];
                        for (let t = E; t <= S; t += 1) e.push(h[t]);
                        return e
                    }()
                }), void (s.params.virtual.renderExternalUpdate ? A() : n("virtualUpdate"));
                const M = [], C = [], P = e => {
                    let t = e;
                    return e < 0 ? t = h.length + e : t >= h.length && (t -= h.length), t
                };
                if (e) s.slides.filter((e => e.matches(`.${s.params.slideClass}, swiper-slide`))).forEach((e => {
                    e.remove()
                })); else for (let e = u; e <= m; e += 1) if (e < E || e > S) {
                    const t = P(e);
                    s.slides.filter((e => e.matches(`.${s.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`))).forEach((e => {
                        e.remove()
                    }))
                }
                const L = o ? -h.length : 0, z = o ? 2 * h.length : h.length;
                for (let t = L; t < z; t += 1) if (t >= E && t <= S) {
                    const s = P(t);
                    void 0 === m || e ? C.push(s) : (t > m && C.push(s), t < u && M.push(s))
                }
                if (C.forEach((e => {
                    s.slidesEl.append(d(h[e], e))
                })), o) for (let e = M.length - 1; e >= 0; e -= 1) {
                    const t = M[e];
                    s.slidesEl.prepend(d(h[t], t))
                } else M.sort(((e, t) => t - e)), M.forEach((e => {
                    s.slidesEl.prepend(d(h[e], e))
                }));
                g(s.slidesEl, ".swiper-slide, swiper-slide").forEach((e => {
                    e.style[b] = T - Math.abs(s.cssOverflowAdjustment()) + "px"
                })), A()
            }

            a("beforeInit", (() => {
                if (!s.params.virtual.enabled) return;
                let e;
                if (void 0 === s.passedParams.virtual.slides) {
                    const t = [...s.slidesEl.children].filter((e => e.matches(`.${s.params.slideClass}, swiper-slide`)));
                    t && t.length && (s.virtual.slides = [...t], e = !0, t.forEach(((e, t) => {
                        e.setAttribute("data-swiper-slide-index", t), s.virtual.cache[t] = e, e.remove()
                    })))
                }
                e || (s.virtual.slides = s.params.virtual.slides), s.classNames.push(`${s.params.containerModifierClass}virtual`), s.params.watchSlidesProgress = !0, s.originalParams.watchSlidesProgress = !0, p(!1, !0)
            })), a("setTranslate", (() => {
                s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t), t = setTimeout((() => {
                    p()
                }), 100)) : p())
            })), a("init update resize", (() => {
                s.params.virtual.enabled && s.params.cssMode && m(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`)
            })), Object.assign(s.virtual, {
                appendSlide: function (e) {
                    if ("object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.push(e[t]); else s.virtual.slides.push(e);
                    p(!0)
                }, prependSlide: function (e) {
                    const t = s.activeIndex;
                    let i = t + 1, r = 1;
                    if (Array.isArray(e)) {
                        for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.unshift(e[t]);
                        i = t + e.length, r = e.length
                    } else s.virtual.slides.unshift(e);
                    if (s.params.virtual.cache) {
                        const e = s.virtual.cache, t = {};
                        Object.keys(e).forEach((s => {
                            const i = e[s], a = i.getAttribute("data-swiper-slide-index");
                            a && i.setAttribute("data-swiper-slide-index", parseInt(a, 10) + r), t[parseInt(s, 10) + r] = i
                        })), s.virtual.cache = t
                    }
                    p(!0), s.slideTo(i, 0)
                }, removeSlide: function (e) {
                    if (null == e) return;
                    let t = s.activeIndex;
                    if (Array.isArray(e)) for (let i = e.length - 1; i >= 0; i -= 1) s.params.virtual.cache && (delete s.virtual.cache[e[i]], Object.keys(s.virtual.cache).forEach((t => {
                        t > e && (s.virtual.cache[t - 1] = s.virtual.cache[t], s.virtual.cache[t - 1].setAttribute("data-swiper-slide-index", t - 1), delete s.virtual.cache[t])
                    }))), s.virtual.slides.splice(e[i], 1), e[i] < t && (t -= 1), t = Math.max(t, 0); else s.params.virtual.cache && (delete s.virtual.cache[e], Object.keys(s.virtual.cache).forEach((t => {
                        t > e && (s.virtual.cache[t - 1] = s.virtual.cache[t], s.virtual.cache[t - 1].setAttribute("data-swiper-slide-index", t - 1), delete s.virtual.cache[t])
                    }))), s.virtual.slides.splice(e, 1), e < t && (t -= 1), t = Math.max(t, 0);
                    p(!0), s.slideTo(t, 0)
                }, removeAllSlides: function () {
                    s.virtual.slides = [], s.params.virtual.cache && (s.virtual.cache = {}), p(!0), s.slideTo(0, 0)
                }, update: p
            })
        }, function (e) {
            let {swiper: t, extendParams: s, on: i, emit: a} = e;
            const o = r(), l = n();

            function d(e) {
                if (!t.enabled) return;
                const {rtlTranslate: s} = t;
                let i = e;
                i.originalEvent && (i = i.originalEvent);
                const r = i.keyCode || i.charCode, n = t.params.keyboard.pageUpDown, d = n && 33 === r,
                    p = n && 34 === r, c = 37 === r, u = 39 === r, m = 38 === r, h = 40 === r;
                if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && h || p)) return !1;
                if (!t.allowSlidePrev && (t.isHorizontal() && c || t.isVertical() && m || d)) return !1;
                if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || o.activeElement && o.activeElement.nodeName && ("input" === o.activeElement.nodeName.toLowerCase() || "textarea" === o.activeElement.nodeName.toLowerCase()))) {
                    if (t.params.keyboard.onlyInViewport && (d || p || c || u || m || h)) {
                        let e = !1;
                        if (E(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 && 0 === E(t.el, `.${t.params.slideActiveClass}`).length) return;
                        const i = t.el, r = i.clientWidth, a = i.clientHeight, n = l.innerWidth, o = l.innerHeight,
                            d = b(i);
                        s && (d.left -= i.scrollLeft);
                        const p = [[d.left, d.top], [d.left + r, d.top], [d.left, d.top + a], [d.left + r, d.top + a]];
                        for (let t = 0; t < p.length; t += 1) {
                            const s = p[t];
                            if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= o) {
                                if (0 === s[0] && 0 === s[1]) continue;
                                e = !0
                            }
                        }
                        if (!e) return
                    }
                    t.isHorizontal() ? ((d || p || c || u) && (i.preventDefault ? i.preventDefault() : i.returnValue = !1), ((p || u) && !s || (d || c) && s) && t.slideNext(), ((d || c) && !s || (p || u) && s) && t.slidePrev()) : ((d || p || m || h) && (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (p || h) && t.slideNext(), (d || m) && t.slidePrev()), a("keyPress", r)
                }
            }

            function p() {
                t.keyboard.enabled || (o.addEventListener("keydown", d), t.keyboard.enabled = !0)
            }

            function c() {
                t.keyboard.enabled && (o.removeEventListener("keydown", d), t.keyboard.enabled = !1)
            }

            t.keyboard = {enabled: !1}, s({
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0,
                    pageUpDown: !0
                }
            }), i("init", (() => {
                t.params.keyboard.enabled && p()
            })), i("destroy", (() => {
                t.keyboard.enabled && c()
            })), Object.assign(t.keyboard, {enable: p, disable: c})
        }, function (e) {
            let {swiper: t, extendParams: s, on: i, emit: r} = e;
            const a = n();
            let o;
            s({
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarget: "container",
                    thresholdDelta: null,
                    thresholdTime: null,
                    noMousewheelClass: "swiper-no-mousewheel"
                }
            }), t.mousewheel = {enabled: !1};
            let p, c = d();
            const u = [];

            function m() {
                t.enabled && (t.mouseEntered = !0)
            }

            function h() {
                t.enabled && (t.mouseEntered = !1)
            }

            function f(e) {
                return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta || t.params.mousewheel.thresholdTime && d() - c < t.params.mousewheel.thresholdTime || !(e.delta >= 6 && d() - c < 60) && (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), r("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), r("scroll", e.raw)), c = (new a.Date).getTime(), 1))
            }

            function g(e) {
                let s = e, i = !0;
                if (!t.enabled) return;
                if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`)) return;
                const a = t.params.mousewheel;
                t.params.cssMode && s.preventDefault();
                let n = t.el;
                "container" !== t.params.mousewheel.eventsTarget && (n = document.querySelector(t.params.mousewheel.eventsTarget));
                const c = n && n.contains(s.target);
                if (!t.mouseEntered && !c && !a.releaseOnEdges) return !0;
                s.originalEvent && (s = s.originalEvent);
                let m = 0;
                const h = t.rtlTranslate ? -1 : 1, g = function (e) {
                    let t = 0, s = 0, i = 0, r = 0;
                    return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), i = 10 * t, r = 10 * s, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (i = e.deltaX), e.shiftKey && !i && (i = r, r = 0), (i || r) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, r *= 40) : (i *= 800, r *= 800)), i && !t && (t = i < 1 ? -1 : 1), r && !s && (s = r < 1 ? -1 : 1), {
                        spinX: t,
                        spinY: s,
                        pixelX: i,
                        pixelY: r
                    }
                }(s);
                if (a.forceToAxis) if (t.isHorizontal()) {
                    if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY))) return !0;
                    m = -g.pixelX * h
                } else {
                    if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX))) return !0;
                    m = -g.pixelY
                } else m = Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * h : -g.pixelY;
                if (0 === m) return !0;
                a.invert && (m = -m);
                let v = t.getTranslate() + m * a.sensitivity;
                if (v >= t.minTranslate() && (v = t.minTranslate()), v <= t.maxTranslate() && (v = t.maxTranslate()), i = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()), i && t.params.nested && s.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
                    const e = {time: d(), delta: Math.abs(m), direction: Math.sign(m)},
                        i = p && e.time < p.time + 500 && e.delta <= p.delta && e.direction === p.direction;
                    if (!i) {
                        p = void 0;
                        let n = t.getTranslate() + m * a.sensitivity;
                        const d = t.isBeginning, c = t.isEnd;
                        if (n >= t.minTranslate() && (n = t.minTranslate()), n <= t.maxTranslate() && (n = t.maxTranslate()), t.setTransition(0), t.setTranslate(n), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!d && t.isBeginning || !c && t.isEnd) && t.updateSlidesClasses(), t.params.loop && t.loopFix({
                            direction: e.direction < 0 ? "next" : "prev",
                            byMousewheel: !0
                        }), t.params.freeMode.sticky) {
                            clearTimeout(o), o = void 0, u.length >= 15 && u.shift();
                            const s = u.length ? u[u.length - 1] : void 0, i = u[0];
                            if (u.push(e), s && (e.delta > s.delta || e.direction !== s.direction)) u.splice(0); else if (u.length >= 15 && e.time - i.time < 500 && i.delta - e.delta >= 1 && e.delta <= 6) {
                                const s = m > 0 ? .8 : .2;
                                p = e, u.splice(0), o = l((() => {
                                    t.slideToClosest(t.params.speed, !0, void 0, s)
                                }), 0)
                            }
                            o || (o = l((() => {
                                p = e, u.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5)
                            }), 500))
                        }
                        if (i || r("scroll", s), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), a.releaseOnEdges && (n === t.minTranslate() || n === t.maxTranslate())) return !0
                    }
                } else {
                    const s = {time: d(), delta: Math.abs(m), direction: Math.sign(m), raw: e};
                    u.length >= 2 && u.shift();
                    const i = u.length ? u[u.length - 1] : void 0;
                    if (u.push(s), i ? (s.direction !== i.direction || s.delta > i.delta || s.time > i.time + 150) && f(s) : f(s), function (e) {
                        const s = t.params.mousewheel;
                        if (e.direction < 0) {
                            if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0
                        } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;
                        return !1
                    }(s)) return !0
                }
                return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1
            }

            function v(e) {
                let s = t.el;
                "container" !== t.params.mousewheel.eventsTarget && (s = document.querySelector(t.params.mousewheel.eventsTarget)), s[e]("mouseenter", m), s[e]("mouseleave", h), s[e]("wheel", g)
            }

            function w() {
                return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", g), !0) : !t.mousewheel.enabled && (v("addEventListener"), t.mousewheel.enabled = !0, !0)
            }

            function b() {
                return t.params.cssMode ? (t.wrapperEl.addEventListener(event, g), !0) : !!t.mousewheel.enabled && (v("removeEventListener"), t.mousewheel.enabled = !1, !0)
            }

            i("init", (() => {
                !t.params.mousewheel.enabled && t.params.cssMode && b(), t.params.mousewheel.enabled && w()
            })), i("destroy", (() => {
                t.params.cssMode && w(), t.mousewheel.enabled && b()
            })), Object.assign(t.mousewheel, {enable: w, disable: b})
        }, function (e) {
            let {swiper: t, extendParams: s, on: i, emit: r} = e;

            function a(e) {
                let s;
                return e && "string" == typeof e && t.isElement && (s = t.el.querySelector(e), s) ? s : (e && ("string" == typeof e && (s = [...document.querySelectorAll(e)]), t.params.uniqueNavElements && "string" == typeof e && s && s.length > 1 && 1 === t.el.querySelectorAll(e).length ? s = t.el.querySelector(e) : s && 1 === s.length && (s = s[0])), e && !s ? e : s)
            }

            function n(e, s) {
                const i = t.params.navigation;
                (e = A(e)).forEach((e => {
                    e && (e.classList[s ? "add" : "remove"](...i.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = s), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](i.lockClass))
                }))
            }

            function o() {
                const {nextEl: e, prevEl: s} = t.navigation;
                if (t.params.loop) return n(s, !1), void n(e, !1);
                n(s, t.isBeginning && !t.params.rewind), n(e, t.isEnd && !t.params.rewind)
            }

            function l(e) {
                e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), r("navigationPrev"))
            }

            function d(e) {
                e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), r("navigationNext"))
            }

            function p() {
                const e = t.params.navigation;
                if (t.params.navigation = ie(t, t.originalParams.navigation, t.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                }), !e.nextEl && !e.prevEl) return;
                let s = a(e.nextEl), i = a(e.prevEl);
                Object.assign(t.navigation, {nextEl: s, prevEl: i}), s = A(s), i = A(i);
                const r = (s, i) => {
                    s && s.addEventListener("click", "next" === i ? d : l), !t.enabled && s && s.classList.add(...e.lockClass.split(" "))
                };
                s.forEach((e => r(e, "next"))), i.forEach((e => r(e, "prev")))
            }

            function c() {
                let {nextEl: e, prevEl: s} = t.navigation;
                e = A(e), s = A(s);
                const i = (e, s) => {
                    e.removeEventListener("click", "next" === s ? d : l), e.classList.remove(...t.params.navigation.disabledClass.split(" "))
                };
                e.forEach((e => i(e, "next"))), s.forEach((e => i(e, "prev")))
            }

            s({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            }), t.navigation = {nextEl: null, prevEl: null}, i("init", (() => {
                !1 === t.params.navigation.enabled ? u() : (p(), o())
            })), i("toEdge fromEdge lock unlock", (() => {
                o()
            })), i("destroy", (() => {
                c()
            })), i("enable disable", (() => {
                let {nextEl: e, prevEl: s} = t.navigation;
                e = A(e), s = A(s), t.enabled ? o() : [...e, ...s].filter((e => !!e)).forEach((e => e.classList.add(t.params.navigation.lockClass)))
            })), i("click", ((e, s) => {
                let {nextEl: i, prevEl: a} = t.navigation;
                i = A(i), a = A(a);
                const n = s.target;
                let o = a.includes(n) || i.includes(n);
                if (t.isElement && !o) {
                    const e = s.path || s.composedPath && s.composedPath();
                    e && (o = e.find((e => i.includes(e) || a.includes(e))))
                }
                if (t.params.navigation.hideOnClick && !o) {
                    if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === n || t.pagination.el.contains(n))) return;
                    let e;
                    i.length ? e = i[0].classList.contains(t.params.navigation.hiddenClass) : a.length && (e = a[0].classList.contains(t.params.navigation.hiddenClass)), r(!0 === e ? "navigationShow" : "navigationHide"), [...i, ...a].filter((e => !!e)).forEach((e => e.classList.toggle(t.params.navigation.hiddenClass)))
                }
            }));
            const u = () => {
                t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), c()
            };
            Object.assign(t.navigation, {
                enable: () => {
                    t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), p(), o()
                }, disable: u, update: o, init: p, destroy: c
            })
        }, function (e) {
            let {swiper: t, extendParams: s, on: i, emit: r} = e;
            const a = "swiper-pagination";
            let n;
            s({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: e => e,
                    formatFractionTotal: e => e,
                    bulletClass: `${a}-bullet`,
                    bulletActiveClass: `${a}-bullet-active`,
                    modifierClass: `${a}-`,
                    currentClass: `${a}-current`,
                    totalClass: `${a}-total`,
                    hiddenClass: `${a}-hidden`,
                    progressbarFillClass: `${a}-progressbar-fill`,
                    progressbarOppositeClass: `${a}-progressbar-opposite`,
                    clickableClass: `${a}-clickable`,
                    lockClass: `${a}-lock`,
                    horizontalClass: `${a}-horizontal`,
                    verticalClass: `${a}-vertical`,
                    paginationDisabledClass: `${a}-disabled`
                }
            }), t.pagination = {el: null, bullets: []};
            let o = 0;

            function l() {
                return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length
            }

            function d(e, s) {
                const {bulletActiveClass: i} = t.params.pagination;
                e && (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${i}-${s}`), (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${i}-${s}-${s}`))
            }

            function p(e) {
                const s = e.target.closest(re(t.params.pagination.bulletClass));
                if (!s) return;
                e.preventDefault();
                const i = x(s) * t.params.slidesPerGroup;
                if (t.params.loop) {
                    if (t.realIndex === i) return;
                    t.slideToLoop(i)
                } else t.slideTo(i)
            }

            function c() {
                const e = t.rtl, s = t.params.pagination;
                if (l()) return;
                let i, a, p = t.pagination.el;
                p = A(p);
                const c = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                    u = t.params.loop ? Math.ceil(c / t.params.slidesPerGroup) : t.snapGrid.length;
                if (t.params.loop ? (a = t.previousRealIndex || 0, i = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (i = t.snapIndex, a = t.previousSnapIndex) : (a = t.previousIndex || 0, i = t.activeIndex || 0), "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                    const r = t.pagination.bullets;
                    let l, c, u;
                    if (s.dynamicBullets && (n = T(r[0], t.isHorizontal() ? "width" : "height", !0), p.forEach((e => {
                        e.style[t.isHorizontal() ? "width" : "height"] = n * (s.dynamicMainBullets + 4) + "px"
                    })), s.dynamicMainBullets > 1 && void 0 !== a && (o += i - (a || 0), o > s.dynamicMainBullets - 1 ? o = s.dynamicMainBullets - 1 : o < 0 && (o = 0)), l = Math.max(i - o, 0), c = l + (Math.min(r.length, s.dynamicMainBullets) - 1), u = (c + l) / 2), r.forEach((e => {
                        const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`))].map((e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e)).flat();
                        e.classList.remove(...t)
                    })), p.length > 1) r.forEach((e => {
                        const r = x(e);
                        r === i ? e.classList.add(...s.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"), s.dynamicBullets && (r >= l && r <= c && e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")), r === l && d(e, "prev"), r === c && d(e, "next"))
                    })); else {
                        const e = r[i];
                        if (e && e.classList.add(...s.bulletActiveClass.split(" ")), t.isElement && r.forEach(((e, t) => {
                            e.setAttribute("part", t === i ? "bullet-active" : "bullet")
                        })), s.dynamicBullets) {
                            const e = r[l], t = r[c];
                            for (let e = l; e <= c; e += 1) r[e] && r[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));
                            d(e, "prev"), d(t, "next")
                        }
                    }
                    if (s.dynamicBullets) {
                        const i = Math.min(r.length, s.dynamicMainBullets + 4), a = (n * i - n) / 2 - u * n,
                            o = e ? "right" : "left";
                        r.forEach((e => {
                            e.style[t.isHorizontal() ? o : "top"] = `${a}px`
                        }))
                    }
                }
                p.forEach(((e, a) => {
                    if ("fraction" === s.type && (e.querySelectorAll(re(s.currentClass)).forEach((e => {
                        e.textContent = s.formatFractionCurrent(i + 1)
                    })), e.querySelectorAll(re(s.totalClass)).forEach((e => {
                        e.textContent = s.formatFractionTotal(u)
                    }))), "progressbar" === s.type) {
                        let r;
                        r = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                        const a = (i + 1) / u;
                        let n = 1, o = 1;
                        "horizontal" === r ? n = a : o = a, e.querySelectorAll(re(s.progressbarFillClass)).forEach((e => {
                            e.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${o})`, e.style.transitionDuration = `${t.params.speed}ms`
                        }))
                    }
                    "custom" === s.type && s.renderCustom ? (e.innerHTML = s.renderCustom(t, i + 1, u), 0 === a && r("paginationRender", e)) : (0 === a && r("paginationRender", e), r("paginationUpdate", e)), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](s.lockClass)
                }))
            }

            function u() {
                const e = t.params.pagination;
                if (l()) return;
                const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
                let i = t.pagination.el;
                i = A(i);
                let a = "";
                if ("bullets" === e.type) {
                    let i = t.params.loop ? Math.ceil(s / t.params.slidesPerGroup) : t.snapGrid.length;
                    t.params.freeMode && t.params.freeMode.enabled && i > s && (i = s);
                    for (let s = 0; s < i; s += 1) e.renderBullet ? a += e.renderBullet.call(t, s, e.bulletClass) : a += `<${e.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${e.bulletClass}"></${e.bulletElement}>`
                }
                "fraction" === e.type && (a = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (a = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), t.pagination.bullets = [], i.forEach((s => {
                    "custom" !== e.type && (s.innerHTML = a || ""), "bullets" === e.type && t.pagination.bullets.push(...s.querySelectorAll(re(e.bulletClass)))
                })), "custom" !== e.type && r("paginationRender", i[0])
            }

            function m() {
                t.params.pagination = ie(t, t.originalParams.pagination, t.params.pagination, {el: "swiper-pagination"});
                const e = t.params.pagination;
                if (!e.el) return;
                let s;
                "string" == typeof e.el && t.isElement && (s = t.el.querySelector(e.el)), s || "string" != typeof e.el || (s = [...document.querySelectorAll(e.el)]), s || (s = e.el), s && 0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(s) && s.length > 1 && (s = [...t.el.querySelectorAll(e.el)], s.length > 1 && (s = s.filter((e => E(e, ".swiper")[0] === t.el))[0])), Array.isArray(s) && 1 === s.length && (s = s[0]), Object.assign(t.pagination, {el: s}), s = A(s), s.forEach((s => {
                    "bullets" === e.type && e.clickable && s.classList.add(...(e.clickableClass || "").split(" ")), s.classList.add(e.modifierClass + e.type), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.classList.add(`${e.modifierClass}${e.type}-dynamic`), o = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.classList.add(e.progressbarOppositeClass), e.clickable && s.addEventListener("click", p), t.enabled || s.classList.add(e.lockClass)
                })))
            }

            function h() {
                const e = t.params.pagination;
                if (l()) return;
                let s = t.pagination.el;
                s && (s = A(s), s.forEach((s => {
                    s.classList.remove(e.hiddenClass), s.classList.remove(e.modifierClass + e.type), s.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (s.classList.remove(...(e.clickableClass || "").split(" ")), s.removeEventListener("click", p))
                }))), t.pagination.bullets && t.pagination.bullets.forEach((t => t.classList.remove(...e.bulletActiveClass.split(" "))))
            }

            i("changeDirection", (() => {
                if (!t.pagination || !t.pagination.el) return;
                const e = t.params.pagination;
                let {el: s} = t.pagination;
                s = A(s), s.forEach((s => {
                    s.classList.remove(e.horizontalClass, e.verticalClass), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
                }))
            })), i("init", (() => {
                !1 === t.params.pagination.enabled ? f() : (m(), u(), c())
            })), i("activeIndexChange", (() => {
                void 0 === t.snapIndex && c()
            })), i("snapIndexChange", (() => {
                c()
            })), i("snapGridLengthChange", (() => {
                u(), c()
            })), i("destroy", (() => {
                h()
            })), i("enable disable", (() => {
                let {el: e} = t.pagination;
                e && (e = A(e), e.forEach((e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass))))
            })), i("lock unlock", (() => {
                c()
            })), i("click", ((e, s) => {
                const i = s.target, a = A(t.pagination.el);
                if (t.params.pagination.el && t.params.pagination.hideOnClick && a && a.length > 0 && !i.classList.contains(t.params.pagination.bulletClass)) {
                    if (t.navigation && (t.navigation.nextEl && i === t.navigation.nextEl || t.navigation.prevEl && i === t.navigation.prevEl)) return;
                    const e = a[0].classList.contains(t.params.pagination.hiddenClass);
                    r(!0 === e ? "paginationShow" : "paginationHide"), a.forEach((e => e.classList.toggle(t.params.pagination.hiddenClass)))
                }
            }));
            const f = () => {
                t.el.classList.add(t.params.pagination.paginationDisabledClass);
                let {el: e} = t.pagination;
                e && (e = A(e), e.forEach((e => e.classList.add(t.params.pagination.paginationDisabledClass)))), h()
            };
            Object.assign(t.pagination, {
                enable: () => {
                    t.el.classList.remove(t.params.pagination.paginationDisabledClass);
                    let {el: e} = t.pagination;
                    e && (e = A(e), e.forEach((e => e.classList.remove(t.params.pagination.paginationDisabledClass)))), m(), u(), c()
                }, disable: f, render: u, update: c, init: m, destroy: h
            })
        }, function (e) {
            let {swiper: t, extendParams: s, on: i, emit: a} = e;
            const n = r();
            let d, p, c, u, m = !1, h = null, f = null;

            function g() {
                if (!t.params.scrollbar.el || !t.scrollbar.el) return;
                const {scrollbar: e, rtlTranslate: s} = t, {dragEl: i, el: r} = e, a = t.params.scrollbar,
                    n = t.params.loop ? t.progressLoop : t.progress;
                let o = p, l = (c - p) * n;
                s ? (l = -l, l > 0 ? (o = p - l, l = 0) : -l + p > c && (o = c + l)) : l < 0 ? (o = p + l, l = 0) : l + p > c && (o = c - l), t.isHorizontal() ? (i.style.transform = `translate3d(${l}px, 0, 0)`, i.style.width = `${o}px`) : (i.style.transform = `translate3d(0px, ${l}px, 0)`, i.style.height = `${o}px`), a.hide && (clearTimeout(h), r.style.opacity = 1, h = setTimeout((() => {
                    r.style.opacity = 0, r.style.transitionDuration = "400ms"
                }), 1e3))
            }

            function v() {
                if (!t.params.scrollbar.el || !t.scrollbar.el) return;
                const {scrollbar: e} = t, {dragEl: s, el: i} = e;
                s.style.width = "", s.style.height = "", c = t.isHorizontal() ? i.offsetWidth : i.offsetHeight, u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), p = "auto" === t.params.scrollbar.dragSize ? c * u : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? s.style.width = `${p}px` : s.style.height = `${p}px`, i.style.display = u >= 1 ? "none" : "", t.params.scrollbar.hide && (i.style.opacity = 0), t.params.watchOverflow && t.enabled && e.el.classList[t.isLocked ? "add" : "remove"](t.params.scrollbar.lockClass)
            }

            function y(e) {
                return t.isHorizontal() ? e.clientX : e.clientY
            }

            function x(e) {
                const {scrollbar: s, rtlTranslate: i} = t, {el: r} = s;
                let a;
                a = (y(e) - b(r)[t.isHorizontal() ? "left" : "top"] - (null !== d ? d : p / 2)) / (c - p), a = Math.max(Math.min(a, 1), 0), i && (a = 1 - a);
                const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * a;
                t.updateProgress(n), t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses()
            }

            function E(e) {
                const s = t.params.scrollbar, {scrollbar: i, wrapperEl: r} = t, {el: n, dragEl: o} = i;
                m = !0, d = e.target === o ? y(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), r.style.transitionDuration = "100ms", o.style.transitionDuration = "100ms", x(e), clearTimeout(f), n.style.transitionDuration = "0ms", s.hide && (n.style.opacity = 1), t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "none"), a("scrollbarDragStart", e)
            }

            function S(e) {
                const {scrollbar: s, wrapperEl: i} = t, {el: r, dragEl: n} = s;
                m && (e.preventDefault && e.cancelable ? e.preventDefault() : e.returnValue = !1, x(e), i.style.transitionDuration = "0ms", r.style.transitionDuration = "0ms", n.style.transitionDuration = "0ms", a("scrollbarDragMove", e))
            }

            function T(e) {
                const s = t.params.scrollbar, {scrollbar: i, wrapperEl: r} = t, {el: n} = i;
                m && (m = !1, t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "", r.style.transitionDuration = ""), s.hide && (clearTimeout(f), f = l((() => {
                    n.style.opacity = 0, n.style.transitionDuration = "400ms"
                }), 1e3)), a("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest())
            }

            function M(e) {
                const {scrollbar: s, params: i} = t, r = s.el;
                if (!r) return;
                const a = r, o = !!i.passiveListeners && {passive: !1, capture: !1},
                    l = !!i.passiveListeners && {passive: !0, capture: !1};
                if (!a) return;
                const d = "on" === e ? "addEventListener" : "removeEventListener";
                a[d]("pointerdown", E, o), n[d]("pointermove", S, o), n[d]("pointerup", T, l)
            }

            function C() {
                const {scrollbar: e, el: s} = t;
                t.params.scrollbar = ie(t, t.originalParams.scrollbar, t.params.scrollbar, {el: "swiper-scrollbar"});
                const i = t.params.scrollbar;
                if (!i.el) return;
                let r, a;
                if ("string" == typeof i.el && t.isElement && (r = t.el.querySelector(i.el)), r || "string" != typeof i.el) r || (r = i.el); else if (r = n.querySelectorAll(i.el), !r.length) return;
                t.params.uniqueNavElements && "string" == typeof i.el && r.length > 1 && 1 === s.querySelectorAll(i.el).length && (r = s.querySelector(i.el)), r.length > 0 && (r = r[0]), r.classList.add(t.isHorizontal() ? i.horizontalClass : i.verticalClass), r && (a = r.querySelector(re(t.params.scrollbar.dragClass)), a || (a = w("div", t.params.scrollbar.dragClass), r.append(a))), Object.assign(e, {
                    el: r,
                    dragEl: a
                }), i.draggable && t.params.scrollbar.el && t.scrollbar.el && M("on"), r && r.classList[t.enabled ? "remove" : "add"](...o(t.params.scrollbar.lockClass))
            }

            function P() {
                const e = t.params.scrollbar, s = t.scrollbar.el;
                s && s.classList.remove(...o(t.isHorizontal() ? e.horizontalClass : e.verticalClass)), t.params.scrollbar.el && t.scrollbar.el && M("off")
            }

            s({
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag",
                    scrollbarDisabledClass: "swiper-scrollbar-disabled",
                    horizontalClass: "swiper-scrollbar-horizontal",
                    verticalClass: "swiper-scrollbar-vertical"
                }
            }), t.scrollbar = {el: null, dragEl: null}, i("changeDirection", (() => {
                if (!t.scrollbar || !t.scrollbar.el) return;
                const e = t.params.scrollbar;
                let {el: s} = t.scrollbar;
                s = A(s), s.forEach((s => {
                    s.classList.remove(e.horizontalClass, e.verticalClass), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
                }))
            })), i("init", (() => {
                !1 === t.params.scrollbar.enabled ? L() : (C(), v(), g())
            })), i("update resize observerUpdate lock unlock changeDirection", (() => {
                v()
            })), i("setTranslate", (() => {
                g()
            })), i("setTransition", ((e, s) => {
                !function (e) {
                    t.params.scrollbar.el && t.scrollbar.el && (t.scrollbar.dragEl.style.transitionDuration = `${e}ms`)
                }(s)
            })), i("enable disable", (() => {
                const {el: e} = t.scrollbar;
                e && e.classList[t.enabled ? "remove" : "add"](...o(t.params.scrollbar.lockClass))
            })), i("destroy", (() => {
                P()
            }));
            const L = () => {
                t.el.classList.add(...o(t.params.scrollbar.scrollbarDisabledClass)), t.scrollbar.el && t.scrollbar.el.classList.add(...o(t.params.scrollbar.scrollbarDisabledClass)), P()
            };
            Object.assign(t.scrollbar, {
                enable: () => {
                    t.el.classList.remove(...o(t.params.scrollbar.scrollbarDisabledClass)), t.scrollbar.el && t.scrollbar.el.classList.remove(...o(t.params.scrollbar.scrollbarDisabledClass)), C(), v(), g()
                }, disable: L, updateSize: v, setTranslate: g, init: C, destroy: P
            })
        }, function (e) {
            let {swiper: t, extendParams: s, on: i} = e;
            s({parallax: {enabled: !1}});
            const r = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
                a = (e, s) => {
                    const {rtl: i} = t, r = i ? -1 : 1, a = e.getAttribute("data-swiper-parallax") || "0";
                    let n = e.getAttribute("data-swiper-parallax-x"), o = e.getAttribute("data-swiper-parallax-y");
                    const l = e.getAttribute("data-swiper-parallax-scale"),
                        d = e.getAttribute("data-swiper-parallax-opacity"),
                        p = e.getAttribute("data-swiper-parallax-rotate");
                    if (n || o ? (n = n || "0", o = o || "0") : t.isHorizontal() ? (n = a, o = "0") : (o = a, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * s * r + "%" : n * s * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px", null != d) {
                        const t = d - (d - 1) * (1 - Math.abs(s));
                        e.style.opacity = t
                    }
                    let c = `translate3d(${n}, ${o}, 0px)`;
                    null != l && (c += ` scale(${l - (l - 1) * (1 - Math.abs(s))})`), p && null != p && (c += ` rotate(${p * s * -1}deg)`), e.style.transform = c
                }, n = () => {
                    const {el: e, slides: s, progress: i, snapGrid: n, isElement: o} = t, l = g(e, r);
                    t.isElement && l.push(...g(t.hostEl, r)), l.forEach((e => {
                        a(e, i)
                    })), s.forEach(((e, s) => {
                        let o = e.progress;
                        t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (o += Math.ceil(s / 2) - i * (n.length - 1)), o = Math.min(Math.max(o, -1), 1), e.querySelectorAll(`${r}, [data-swiper-parallax-rotate]`).forEach((e => {
                            a(e, o)
                        }))
                    }))
                };
            i("beforeInit", (() => {
                t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0)
            })), i("init", (() => {
                t.params.parallax.enabled && n()
            })), i("setTranslate", (() => {
                t.params.parallax.enabled && n()
            })), i("setTransition", ((e, s) => {
                t.params.parallax.enabled && function (e) {
                    void 0 === e && (e = t.params.speed);
                    const {el: s, hostEl: i} = t, a = [...s.querySelectorAll(r)];
                    t.isElement && a.push(...i.querySelectorAll(r)), a.forEach((t => {
                        let s = parseInt(t.getAttribute("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (s = 0), t.style.transitionDuration = `${s}ms`
                    }))
                }(s)
            }))
        }, function (e) {
            let {swiper: t, extendParams: s, on: i, emit: r} = e;
            const a = n();
            s({
                zoom: {
                    enabled: !1,
                    limitToOriginalSize: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            }), t.zoom = {enabled: !1};
            let o, l, d = 1, c = !1;
            const u = [], m = {
                originX: 0,
                originY: 0,
                slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                imageEl: void 0,
                imageWrapEl: void 0,
                maxRatio: 3
            }, h = {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {}
            }, f = {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0};
            let v, w = 1;

            function y() {
                if (u.length < 2) return 1;
                const e = u[0].pageX, t = u[0].pageY, s = u[1].pageX, i = u[1].pageY;
                return Math.sqrt((s - e) ** 2 + (i - t) ** 2)
            }

            function x() {
                const e = t.params.zoom, s = m.imageWrapEl.getAttribute("data-swiper-zoom") || e.maxRatio;
                if (e.limitToOriginalSize && m.imageEl && m.imageEl.naturalWidth) {
                    const e = m.imageEl.naturalWidth / m.imageEl.offsetWidth;
                    return Math.min(e, s)
                }
                return s
            }

            function S(e) {
                const s = t.isElement ? "swiper-slide" : `.${t.params.slideClass}`;
                return !!e.target.matches(s) || t.slides.filter((t => t.contains(e.target))).length > 0
            }

            function T(e) {
                if ("mouse" === e.pointerType && u.splice(0, u.length), !S(e)) return;
                const s = t.params.zoom;
                if (o = !1, l = !1, u.push(e), !(u.length < 2)) {
                    if (o = !0, m.scaleStart = y(), !m.slideEl) {
                        m.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`), m.slideEl || (m.slideEl = t.slides[t.activeIndex]);
                        let i = m.slideEl.querySelector(`.${s.containerClass}`);
                        if (i && (i = i.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), m.imageEl = i, m.imageWrapEl = i ? E(m.imageEl, `.${s.containerClass}`)[0] : void 0, !m.imageWrapEl) return void (m.imageEl = void 0);
                        m.maxRatio = x()
                    }
                    if (m.imageEl) {
                        const [e, t] = function () {
                            if (u.length < 2) return {x: null, y: null};
                            const e = m.imageEl.getBoundingClientRect();
                            return [(u[0].pageX + (u[1].pageX - u[0].pageX) / 2 - e.x - a.scrollX) / d, (u[0].pageY + (u[1].pageY - u[0].pageY) / 2 - e.y - a.scrollY) / d]
                        }();
                        m.originX = e, m.originY = t, m.imageEl.style.transitionDuration = "0ms"
                    }
                    c = !0
                }
            }

            function A(e) {
                if (!S(e)) return;
                const s = t.params.zoom, i = t.zoom, r = u.findIndex((t => t.pointerId === e.pointerId));
                r >= 0 && (u[r] = e), u.length < 2 || (l = !0, m.scaleMove = y(), m.imageEl && (i.scale = m.scaleMove / m.scaleStart * d, i.scale > m.maxRatio && (i.scale = m.maxRatio - 1 + (i.scale - m.maxRatio + 1) ** .5), i.scale < s.minRatio && (i.scale = s.minRatio + 1 - (s.minRatio - i.scale + 1) ** .5), m.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`))
            }

            function M(e) {
                if (!S(e)) return;
                if ("mouse" === e.pointerType && "pointerout" === e.type) return;
                const s = t.params.zoom, i = t.zoom, r = u.findIndex((t => t.pointerId === e.pointerId));
                r >= 0 && u.splice(r, 1), o && l && (o = !1, l = !1, m.imageEl && (i.scale = Math.max(Math.min(i.scale, m.maxRatio), s.minRatio), m.imageEl.style.transitionDuration = `${t.params.speed}ms`, m.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`, d = i.scale, c = !1, i.scale > 1 && m.slideEl ? m.slideEl.classList.add(`${s.zoomedSlideClass}`) : i.scale <= 1 && m.slideEl && m.slideEl.classList.remove(`${s.zoomedSlideClass}`), 1 === i.scale && (m.originX = 0, m.originY = 0, m.slideEl = void 0)))
            }

            function C() {
                t.touchEventsData.preventTouchMoveFromPointerMove = !1
            }

            function P(e) {
                if (!S(e) || !function (e) {
                    const s = `.${t.params.zoom.containerClass}`;
                    return !!e.target.matches(s) || [...t.hostEl.querySelectorAll(s)].filter((t => t.contains(e.target))).length > 0
                }(e)) return;
                const s = t.zoom;
                if (!m.imageEl) return;
                if (!h.isTouched || !m.slideEl) return;
                h.isMoved || (h.width = m.imageEl.offsetWidth || m.imageEl.clientWidth, h.height = m.imageEl.offsetHeight || m.imageEl.clientHeight, h.startX = p(m.imageWrapEl, "x") || 0, h.startY = p(m.imageWrapEl, "y") || 0, m.slideWidth = m.slideEl.offsetWidth, m.slideHeight = m.slideEl.offsetHeight, m.imageWrapEl.style.transitionDuration = "0ms");
                const i = h.width * s.scale, r = h.height * s.scale;
                if (h.minX = Math.min(m.slideWidth / 2 - i / 2, 0), h.maxX = -h.minX, h.minY = Math.min(m.slideHeight / 2 - r / 2, 0), h.maxY = -h.minY, h.touchesCurrent.x = u.length > 0 ? u[0].pageX : e.pageX, h.touchesCurrent.y = u.length > 0 ? u[0].pageY : e.pageY, Math.max(Math.abs(h.touchesCurrent.x - h.touchesStart.x), Math.abs(h.touchesCurrent.y - h.touchesStart.y)) > 5 && (t.allowClick = !1), !h.isMoved && !c) {
                    if (t.isHorizontal() && (Math.floor(h.minX) === Math.floor(h.startX) && h.touchesCurrent.x < h.touchesStart.x || Math.floor(h.maxX) === Math.floor(h.startX) && h.touchesCurrent.x > h.touchesStart.x)) return h.isTouched = !1, void C();
                    if (!t.isHorizontal() && (Math.floor(h.minY) === Math.floor(h.startY) && h.touchesCurrent.y < h.touchesStart.y || Math.floor(h.maxY) === Math.floor(h.startY) && h.touchesCurrent.y > h.touchesStart.y)) return h.isTouched = !1, void C()
                }
                e.cancelable && e.preventDefault(), e.stopPropagation(), clearTimeout(v), t.touchEventsData.preventTouchMoveFromPointerMove = !0, v = setTimeout((() => {
                    C()
                })), h.isMoved = !0;
                const a = (s.scale - d) / (m.maxRatio - t.params.zoom.minRatio), {originX: n, originY: o} = m;
                h.currentX = h.touchesCurrent.x - h.touchesStart.x + h.startX + a * (h.width - 2 * n), h.currentY = h.touchesCurrent.y - h.touchesStart.y + h.startY + a * (h.height - 2 * o), h.currentX < h.minX && (h.currentX = h.minX + 1 - (h.minX - h.currentX + 1) ** .8), h.currentX > h.maxX && (h.currentX = h.maxX - 1 + (h.currentX - h.maxX + 1) ** .8), h.currentY < h.minY && (h.currentY = h.minY + 1 - (h.minY - h.currentY + 1) ** .8), h.currentY > h.maxY && (h.currentY = h.maxY - 1 + (h.currentY - h.maxY + 1) ** .8), f.prevPositionX || (f.prevPositionX = h.touchesCurrent.x), f.prevPositionY || (f.prevPositionY = h.touchesCurrent.y), f.prevTime || (f.prevTime = Date.now()), f.x = (h.touchesCurrent.x - f.prevPositionX) / (Date.now() - f.prevTime) / 2, f.y = (h.touchesCurrent.y - f.prevPositionY) / (Date.now() - f.prevTime) / 2, Math.abs(h.touchesCurrent.x - f.prevPositionX) < 2 && (f.x = 0), Math.abs(h.touchesCurrent.y - f.prevPositionY) < 2 && (f.y = 0), f.prevPositionX = h.touchesCurrent.x, f.prevPositionY = h.touchesCurrent.y, f.prevTime = Date.now(), m.imageWrapEl.style.transform = `translate3d(${h.currentX}px, ${h.currentY}px,0)`
            }

            function L() {
                const e = t.zoom;
                m.slideEl && t.activeIndex !== t.slides.indexOf(m.slideEl) && (m.imageEl && (m.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), m.imageWrapEl && (m.imageWrapEl.style.transform = "translate3d(0,0,0)"), m.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`), e.scale = 1, d = 1, m.slideEl = void 0, m.imageEl = void 0, m.imageWrapEl = void 0, m.originX = 0, m.originY = 0)
            }

            function z(e) {
                const s = t.zoom, i = t.params.zoom;
                if (!m.slideEl) {
                    e && e.target && (m.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`)), m.slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.slideEl = g(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : m.slideEl = t.slides[t.activeIndex]);
                    let s = m.slideEl.querySelector(`.${i.containerClass}`);
                    s && (s = s.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), m.imageEl = s, m.imageWrapEl = s ? E(m.imageEl, `.${i.containerClass}`)[0] : void 0
                }
                if (!m.imageEl || !m.imageWrapEl) return;
                let r, n, o, l, p, c, u, f, v, w, y, S, T, A, M, C, P, L;
                t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), m.slideEl.classList.add(`${i.zoomedSlideClass}`), void 0 === h.touchesStart.x && e ? (r = e.pageX, n = e.pageY) : (r = h.touchesStart.x, n = h.touchesStart.y);
                const z = "number" == typeof e ? e : null;
                1 === d && z && (r = void 0, n = void 0);
                const k = x();
                s.scale = z || k, d = z || k, !e || 1 === d && z ? (u = 0, f = 0) : (P = m.slideEl.offsetWidth, L = m.slideEl.offsetHeight, o = b(m.slideEl).left + a.scrollX, l = b(m.slideEl).top + a.scrollY, p = o + P / 2 - r, c = l + L / 2 - n, v = m.imageEl.offsetWidth || m.imageEl.clientWidth, w = m.imageEl.offsetHeight || m.imageEl.clientHeight, y = v * s.scale, S = w * s.scale, T = Math.min(P / 2 - y / 2, 0), A = Math.min(L / 2 - S / 2, 0), M = -T, C = -A, u = p * s.scale, f = c * s.scale, u < T && (u = T), u > M && (u = M), f < A && (f = A), f > C && (f = C)), z && 1 === s.scale && (m.originX = 0, m.originY = 0), m.imageWrapEl.style.transitionDuration = "300ms", m.imageWrapEl.style.transform = `translate3d(${u}px, ${f}px,0)`, m.imageEl.style.transitionDuration = "300ms", m.imageEl.style.transform = `translate3d(0,0,0) scale(${s.scale})`
            }

            function k() {
                const e = t.zoom, s = t.params.zoom;
                if (!m.slideEl) {
                    t.params.virtual && t.params.virtual.enabled && t.virtual ? m.slideEl = g(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : m.slideEl = t.slides[t.activeIndex];
                    let e = m.slideEl.querySelector(`.${s.containerClass}`);
                    e && (e = e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), m.imageEl = e, m.imageWrapEl = e ? E(m.imageEl, `.${s.containerClass}`)[0] : void 0
                }
                m.imageEl && m.imageWrapEl && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, d = 1, m.imageWrapEl.style.transitionDuration = "300ms", m.imageWrapEl.style.transform = "translate3d(0,0,0)", m.imageEl.style.transitionDuration = "300ms", m.imageEl.style.transform = "translate3d(0,0,0) scale(1)", m.slideEl.classList.remove(`${s.zoomedSlideClass}`), m.slideEl = void 0, m.originX = 0, m.originY = 0)
            }

            function I(e) {
                const s = t.zoom;
                s.scale && 1 !== s.scale ? k() : z(e)
            }

            function $() {
                return {
                    passiveListener: !!t.params.passiveListeners && {passive: !0, capture: !1},
                    activeListenerWithCapture: !t.params.passiveListeners || {passive: !1, capture: !0}
                }
            }

            function D() {
                const e = t.zoom;
                if (e.enabled) return;
                e.enabled = !0;
                const {passiveListener: s, activeListenerWithCapture: i} = $();
                t.wrapperEl.addEventListener("pointerdown", T, s), t.wrapperEl.addEventListener("pointermove", A, i), ["pointerup", "pointercancel", "pointerout"].forEach((e => {
                    t.wrapperEl.addEventListener(e, M, s)
                })), t.wrapperEl.addEventListener("pointermove", P, i)
            }

            function O() {
                const e = t.zoom;
                if (!e.enabled) return;
                e.enabled = !1;
                const {passiveListener: s, activeListenerWithCapture: i} = $();
                t.wrapperEl.removeEventListener("pointerdown", T, s), t.wrapperEl.removeEventListener("pointermove", A, i), ["pointerup", "pointercancel", "pointerout"].forEach((e => {
                    t.wrapperEl.removeEventListener(e, M, s)
                })), t.wrapperEl.removeEventListener("pointermove", P, i)
            }

            Object.defineProperty(t.zoom, "scale", {
                get() {
                    return w
                }, set(e) {
                    if (w !== e) {
                        const t = m.imageEl, s = m.slideEl;
                        r("zoomChange", e, t, s)
                    }
                    w = e
                }
            }), i("init", (() => {
                t.params.zoom.enabled && D()
            })), i("destroy", (() => {
                O()
            })), i("touchStart", ((e, s) => {
                t.zoom.enabled && function (e) {
                    const s = t.device;
                    if (!m.imageEl) return;
                    if (h.isTouched) return;
                    s.android && e.cancelable && e.preventDefault(), h.isTouched = !0;
                    const i = u.length > 0 ? u[0] : e;
                    h.touchesStart.x = i.pageX, h.touchesStart.y = i.pageY
                }(s)
            })), i("touchEnd", ((e, s) => {
                t.zoom.enabled && function () {
                    const e = t.zoom;
                    if (!m.imageEl) return;
                    if (!h.isTouched || !h.isMoved) return h.isTouched = !1, void (h.isMoved = !1);
                    h.isTouched = !1, h.isMoved = !1;
                    let s = 300, i = 300;
                    const r = f.x * s, a = h.currentX + r, n = f.y * i, o = h.currentY + n;
                    0 !== f.x && (s = Math.abs((a - h.currentX) / f.x)), 0 !== f.y && (i = Math.abs((o - h.currentY) / f.y));
                    const l = Math.max(s, i);
                    h.currentX = a, h.currentY = o;
                    const d = h.width * e.scale, p = h.height * e.scale;
                    h.minX = Math.min(m.slideWidth / 2 - d / 2, 0), h.maxX = -h.minX, h.minY = Math.min(m.slideHeight / 2 - p / 2, 0), h.maxY = -h.minY, h.currentX = Math.max(Math.min(h.currentX, h.maxX), h.minX), h.currentY = Math.max(Math.min(h.currentY, h.maxY), h.minY), m.imageWrapEl.style.transitionDuration = `${l}ms`, m.imageWrapEl.style.transform = `translate3d(${h.currentX}px, ${h.currentY}px,0)`
                }()
            })), i("doubleTap", ((e, s) => {
                !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && I(s)
            })), i("transitionEnd", (() => {
                t.zoom.enabled && t.params.zoom.enabled && L()
            })), i("slideChange", (() => {
                t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && L()
            })), Object.assign(t.zoom, {enable: D, disable: O, in: z, out: k, toggle: I})
        }, function (e) {
            let {swiper: t, extendParams: s, on: i} = e;

            function r(e, t) {
                const s = function () {
                    let e, t, s;
                    return (i, r) => {
                        for (t = -1, e = i.length; e - t > 1;) s = e + t >> 1, i[s] <= r ? t = s : e = s;
                        return e
                    }
                }();
                let i, r;
                return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                    return e ? (r = s(this.x, e), i = r - 1, (e - this.x[i]) * (this.y[r] - this.y[i]) / (this.x[r] - this.x[i]) + this.y[i]) : 0
                }, this
            }

            function a() {
                t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
            }

            s({
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            }), t.controller = {control: void 0}, i("beforeInit", (() => {
                if ("undefined" != typeof window && ("string" == typeof t.params.controller.control || t.params.controller.control instanceof HTMLElement)) {
                    const e = document.querySelector(t.params.controller.control);
                    if (e && e.swiper) t.controller.control = e.swiper; else if (e) {
                        const s = i => {
                            t.controller.control = i.detail[0], t.update(), e.removeEventListener("init", s)
                        };
                        e.addEventListener("init", s)
                    }
                } else t.controller.control = t.params.controller.control
            })), i("update", (() => {
                a()
            })), i("resize", (() => {
                a()
            })), i("observerUpdate", (() => {
                a()
            })), i("setTranslate", ((e, s, i) => {
                t.controller.control && !t.controller.control.destroyed && t.controller.setTranslate(s, i)
            })), i("setTransition", ((e, s, i) => {
                t.controller.control && !t.controller.control.destroyed && t.controller.setTransition(s, i)
            })), Object.assign(t.controller, {
                setTranslate: function (e, s) {
                    const i = t.controller.control;
                    let a, n;
                    const o = t.constructor;

                    function l(e) {
                        if (e.destroyed) return;
                        const s = t.rtlTranslate ? -t.translate : t.translate;
                        "slide" === t.params.controller.by && (function (e) {
                            t.controller.spline = t.params.loop ? new r(t.slidesGrid, e.slidesGrid) : new r(t.snapGrid, e.snapGrid)
                        }(e), n = -t.controller.spline.interpolate(-s)), n && "container" !== t.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), !Number.isNaN(a) && Number.isFinite(a) || (a = 1), n = (s - t.minTranslate()) * a + e.minTranslate()), t.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, t), e.updateActiveIndex(), e.updateSlidesClasses()
                    }

                    if (Array.isArray(i)) for (let e = 0; e < i.length; e += 1) i[e] !== s && i[e] instanceof o && l(i[e]); else i instanceof o && s !== i && l(i)
                }, setTransition: function (e, s) {
                    const i = t.constructor, r = t.controller.control;
                    let a;

                    function n(s) {
                        s.destroyed || (s.setTransition(e, t), 0 !== e && (s.transitionStart(), s.params.autoHeight && l((() => {
                            s.updateAutoHeight()
                        })), S(s.wrapperEl, (() => {
                            r && s.transitionEnd()
                        }))))
                    }

                    if (Array.isArray(r)) for (a = 0; a < r.length; a += 1) r[a] !== s && r[a] instanceof i && n(r[a]); else r instanceof i && s !== r && n(r)
                }
            })
        }, function (e) {
            let {swiper: t, extendParams: s, on: i} = e;
            s({
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    slideLabelMessage: "{{index}} / {{slidesLength}}",
                    containerMessage: null,
                    containerRoleDescriptionMessage: null,
                    itemRoleDescriptionMessage: null,
                    slideRole: "group",
                    id: null
                }
            }), t.a11y = {clicked: !1};
            let a, n, o = null, l = (new Date).getTime();

            function d(e) {
                const t = o;
                0 !== t.length && (t.innerHTML = "", t.innerHTML = e)
            }

            function p(e) {
                (e = A(e)).forEach((e => {
                    e.setAttribute("tabIndex", "0")
                }))
            }

            function c(e) {
                (e = A(e)).forEach((e => {
                    e.setAttribute("tabIndex", "-1")
                }))
            }

            function u(e, t) {
                (e = A(e)).forEach((e => {
                    e.setAttribute("role", t)
                }))
            }

            function m(e, t) {
                (e = A(e)).forEach((e => {
                    e.setAttribute("aria-roledescription", t)
                }))
            }

            function h(e, t) {
                (e = A(e)).forEach((e => {
                    e.setAttribute("aria-label", t)
                }))
            }

            function f(e) {
                (e = A(e)).forEach((e => {
                    e.setAttribute("aria-disabled", !0)
                }))
            }

            function g(e) {
                (e = A(e)).forEach((e => {
                    e.setAttribute("aria-disabled", !1)
                }))
            }

            function v(e) {
                if (13 !== e.keyCode && 32 !== e.keyCode) return;
                const s = t.params.a11y, i = e.target;
                if (!t.pagination || !t.pagination.el || i !== t.pagination.el && !t.pagination.el.contains(e.target) || e.target.matches(re(t.params.pagination.bulletClass))) {
                    if (t.navigation && t.navigation.prevEl && t.navigation.nextEl) {
                        const e = A(t.navigation.prevEl);
                        A(t.navigation.nextEl).includes(i) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? d(s.lastSlideMessage) : d(s.nextSlideMessage)), e.includes(i) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? d(s.firstSlideMessage) : d(s.prevSlideMessage))
                    }
                    t.pagination && i.matches(re(t.params.pagination.bulletClass)) && i.click()
                }
            }

            function b() {
                return t.pagination && t.pagination.bullets && t.pagination.bullets.length
            }

            function y() {
                return b() && t.params.pagination.clickable
            }

            const E = (e, t, s) => {
                p(e), "BUTTON" !== e.tagName && (u(e, "button"), e.addEventListener("keydown", v)), h(e, s), function (e, t) {
                    (e = A(e)).forEach((e => {
                        e.setAttribute("aria-controls", t)
                    }))
                }(e, t)
            }, S = e => {
                n && n !== e.target && !n.contains(e.target) && (a = !0), t.a11y.clicked = !0
            }, T = () => {
                a = !1, requestAnimationFrame((() => {
                    requestAnimationFrame((() => {
                        t.destroyed || (t.a11y.clicked = !1)
                    }))
                }))
            }, M = e => {
                l = (new Date).getTime()
            }, C = e => {
                if (t.a11y.clicked) return;
                if ((new Date).getTime() - l < 100) return;
                const s = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
                if (!s || !t.slides.includes(s)) return;
                n = s;
                const i = t.slides.indexOf(s) === t.activeIndex,
                    r = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
                i || r || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, requestAnimationFrame((() => {
                    a || (t.params.loop ? t.slideToLoop(parseInt(s.getAttribute("data-swiper-slide-index")), 0) : t.slideTo(t.slides.indexOf(s), 0), a = !1)
                })))
            }, P = () => {
                const e = t.params.a11y;
                e.itemRoleDescriptionMessage && m(t.slides, e.itemRoleDescriptionMessage), e.slideRole && u(t.slides, e.slideRole);
                const s = t.slides.length;
                e.slideLabelMessage && t.slides.forEach(((i, r) => {
                    const a = t.params.loop ? parseInt(i.getAttribute("data-swiper-slide-index"), 10) : r;
                    h(i, e.slideLabelMessage.replace(/\{\{index\}\}/, a + 1).replace(/\{\{slidesLength\}\}/, s))
                }))
            };
            i("beforeInit", (() => {
                o = w("span", t.params.a11y.notificationClass), o.setAttribute("aria-live", "assertive"), o.setAttribute("aria-atomic", "true")
            })), i("afterInit", (() => {
                t.params.a11y.enabled && (() => {
                    const e = t.params.a11y;
                    t.el.append(o);
                    const s = t.el;
                    e.containerRoleDescriptionMessage && m(s, e.containerRoleDescriptionMessage), e.containerMessage && h(s, e.containerMessage);
                    const i = t.wrapperEl,
                        a = e.id || i.getAttribute("id") || `swiper-wrapper-${n = 16, void 0 === n && (n = 16), "x".repeat(n).replace(/x/g, (() => Math.round(16 * Math.random()).toString(16)))}`;
                    var n;
                    const l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
                    var d;
                    d = a, A(i).forEach((e => {
                        e.setAttribute("id", d)
                    })), function (e, t) {
                        (e = A(e)).forEach((e => {
                            e.setAttribute("aria-live", t)
                        }))
                    }(i, l), P();
                    let {nextEl: p, prevEl: c} = t.navigation ? t.navigation : {};
                    p = A(p), c = A(c), p && p.forEach((t => E(t, a, e.nextSlideMessage))), c && c.forEach((t => E(t, a, e.prevSlideMessage))), y() && A(t.pagination.el).forEach((e => {
                        e.addEventListener("keydown", v)
                    })), r().addEventListener("visibilitychange", M), t.el.addEventListener("focus", C, !0), t.el.addEventListener("focus", C, !0), t.el.addEventListener("pointerdown", S, !0), t.el.addEventListener("pointerup", T, !0)
                })()
            })), i("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => {
                t.params.a11y.enabled && P()
            })), i("fromEdge toEdge afterInit lock unlock", (() => {
                t.params.a11y.enabled && function () {
                    if (t.params.loop || t.params.rewind || !t.navigation) return;
                    const {nextEl: e, prevEl: s} = t.navigation;
                    s && (t.isBeginning ? (f(s), c(s)) : (g(s), p(s))), e && (t.isEnd ? (f(e), c(e)) : (g(e), p(e)))
                }()
            })), i("paginationUpdate", (() => {
                t.params.a11y.enabled && function () {
                    const e = t.params.a11y;
                    b() && t.pagination.bullets.forEach((s => {
                        t.params.pagination.clickable && (p(s), t.params.pagination.renderBullet || (u(s, "button"), h(s, e.paginationBulletMessage.replace(/\{\{index\}\}/, x(s) + 1)))), s.matches(re(t.params.pagination.bulletActiveClass)) ? s.setAttribute("aria-current", "true") : s.removeAttribute("aria-current")
                    }))
                }()
            })), i("destroy", (() => {
                t.params.a11y.enabled && function () {
                    o && o.remove();
                    let {nextEl: e, prevEl: s} = t.navigation ? t.navigation : {};
                    e = A(e), s = A(s), e && e.forEach((e => e.removeEventListener("keydown", v))), s && s.forEach((e => e.removeEventListener("keydown", v))), y() && A(t.pagination.el).forEach((e => {
                        e.removeEventListener("keydown", v)
                    })), r().removeEventListener("visibilitychange", M), t.el && "string" != typeof t.el && (t.el.removeEventListener("focus", C, !0), t.el.removeEventListener("pointerdown", S, !0), t.el.removeEventListener("pointerup", T, !0))
                }()
            }))
        }, function (e) {
            let {swiper: t, extendParams: s, on: i} = e;
            s({history: {enabled: !1, root: "", replaceState: !1, key: "slides", keepQuery: !1}});
            let r = !1, a = {};
            const o = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
                l = e => {
                    const t = n();
                    let s;
                    s = e ? new URL(e) : t.location;
                    const i = s.pathname.slice(1).split("/").filter((e => "" !== e)), r = i.length;
                    return {key: i[r - 2], value: i[r - 1]}
                }, d = (e, s) => {
                    const i = n();
                    if (!r || !t.params.history.enabled) return;
                    let a;
                    a = t.params.url ? new URL(t.params.url) : i.location;
                    const l = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${s}"]`) : t.slides[s];
                    let d = o(l.getAttribute("data-history"));
                    if (t.params.history.root.length > 0) {
                        let s = t.params.history.root;
                        "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), d = `${s}/${e ? `${e}/` : ""}${d}`
                    } else a.pathname.includes(e) || (d = `${e ? `${e}/` : ""}${d}`);
                    t.params.history.keepQuery && (d += a.search);
                    const p = i.history.state;
                    p && p.value === d || (t.params.history.replaceState ? i.history.replaceState({value: d}, null, d) : i.history.pushState({value: d}, null, d))
                }, p = (e, s, i) => {
                    if (s) for (let r = 0, a = t.slides.length; r < a; r += 1) {
                        const a = t.slides[r];
                        if (o(a.getAttribute("data-history")) === s) {
                            const s = t.getSlideIndex(a);
                            t.slideTo(s, e, i)
                        }
                    } else t.slideTo(0, e, i)
                }, c = () => {
                    a = l(t.params.url), p(t.params.speed, a.value, !1)
                };
            i("init", (() => {
                t.params.history.enabled && (() => {
                    const e = n();
                    if (t.params.history) {
                        if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void (t.params.hashNavigation.enabled = !0);
                        r = !0, a = l(t.params.url), a.key || a.value ? (p(0, a.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", c)) : t.params.history.replaceState || e.addEventListener("popstate", c)
                    }
                })()
            })), i("destroy", (() => {
                t.params.history.enabled && (() => {
                    const e = n();
                    t.params.history.replaceState || e.removeEventListener("popstate", c)
                })()
            })), i("transitionEnd _freeModeNoMomentumRelease", (() => {
                r && d(t.params.history.key, t.activeIndex)
            })), i("slideChange", (() => {
                r && t.params.cssMode && d(t.params.history.key, t.activeIndex)
            }))
        }, function (e) {
            let {swiper: t, extendParams: s, emit: i, on: a} = e, o = !1;
            const l = r(), d = n();
            s({
                hashNavigation: {
                    enabled: !1, replaceState: !1, watchState: !1, getSlideIndex(e, s) {
                        if (t.virtual && t.params.virtual.enabled) {
                            const e = t.slides.filter((e => e.getAttribute("data-hash") === s))[0];
                            return e ? parseInt(e.getAttribute("data-swiper-slide-index"), 10) : 0
                        }
                        return t.getSlideIndex(g(t.slidesEl, `.${t.params.slideClass}[data-hash="${s}"], swiper-slide[data-hash="${s}"]`)[0])
                    }
                }
            });
            const p = () => {
                i("hashChange");
                const e = l.location.hash.replace("#", ""),
                    s = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex];
                if (e !== (s ? s.getAttribute("data-hash") : "")) {
                    const s = t.params.hashNavigation.getSlideIndex(t, e);
                    if (void 0 === s || Number.isNaN(s)) return;
                    t.slideTo(s)
                }
            }, c = () => {
                if (!o || !t.params.hashNavigation.enabled) return;
                const e = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex],
                    s = e ? e.getAttribute("data-hash") || e.getAttribute("data-history") : "";
                t.params.hashNavigation.replaceState && d.history && d.history.replaceState ? (d.history.replaceState(null, null, `#${s}` || ""), i("hashSet")) : (l.location.hash = s || "", i("hashSet"))
            };
            a("init", (() => {
                t.params.hashNavigation.enabled && (() => {
                    if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
                    o = !0;
                    const e = l.location.hash.replace("#", "");
                    if (e) {
                        const s = 0, i = t.params.hashNavigation.getSlideIndex(t, e);
                        t.slideTo(i || 0, s, t.params.runCallbacksOnInit, !0)
                    }
                    t.params.hashNavigation.watchState && d.addEventListener("hashchange", p)
                })()
            })), a("destroy", (() => {
                t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d.removeEventListener("hashchange", p)
            })), a("transitionEnd _freeModeNoMomentumRelease", (() => {
                o && c()
            })), a("slideChange", (() => {
                o && t.params.cssMode && c()
            }))
        }, function (e) {
            let t, s, {swiper: i, extendParams: a, on: n, emit: o, params: l} = e;
            i.autoplay = {running: !1, paused: !1, timeLeft: 0}, a({
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !1,
                    stopOnLastSlide: !1,
                    reverseDirection: !1,
                    pauseOnMouseEnter: !1
                }
            });
            let d, p, c, u, m, h, f, g, v = l && l.autoplay ? l.autoplay.delay : 3e3,
                w = l && l.autoplay ? l.autoplay.delay : 3e3, b = (new Date).getTime();

            function y(e) {
                i && !i.destroyed && i.wrapperEl && e.target === i.wrapperEl && (i.wrapperEl.removeEventListener("transitionend", y), g || e.detail && e.detail.bySwiperTouchMove || M())
            }

            const x = () => {
                if (i.destroyed || !i.autoplay.running) return;
                i.autoplay.paused ? p = !0 : p && (w = d, p = !1);
                const e = i.autoplay.paused ? d : b + w - (new Date).getTime();
                i.autoplay.timeLeft = e, o("autoplayTimeLeft", e, e / v), s = requestAnimationFrame((() => {
                    x()
                }))
            }, E = e => {
                if (i.destroyed || !i.autoplay.running) return;
                cancelAnimationFrame(s), x();
                let r = void 0 === e ? i.params.autoplay.delay : e;
                v = i.params.autoplay.delay, w = i.params.autoplay.delay;
                const a = (() => {
                    let e;
                    if (e = i.virtual && i.params.virtual.enabled ? i.slides.filter((e => e.classList.contains("swiper-slide-active")))[0] : i.slides[i.activeIndex], e) return parseInt(e.getAttribute("data-swiper-autoplay"), 10)
                })();
                !Number.isNaN(a) && a > 0 && void 0 === e && (r = a, v = a, w = a), d = r;
                const n = i.params.speed, l = () => {
                    i && !i.destroyed && (i.params.autoplay.reverseDirection ? !i.isBeginning || i.params.loop || i.params.rewind ? (i.slidePrev(n, !0, !0), o("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(i.slides.length - 1, n, !0, !0), o("autoplay")) : !i.isEnd || i.params.loop || i.params.rewind ? (i.slideNext(n, !0, !0), o("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(0, n, !0, !0), o("autoplay")), i.params.cssMode && (b = (new Date).getTime(), requestAnimationFrame((() => {
                        E()
                    }))))
                };
                return r > 0 ? (clearTimeout(t), t = setTimeout((() => {
                    l()
                }), r)) : requestAnimationFrame((() => {
                    l()
                })), r
            }, S = () => {
                b = (new Date).getTime(), i.autoplay.running = !0, E(), o("autoplayStart")
            }, T = () => {
                i.autoplay.running = !1, clearTimeout(t), cancelAnimationFrame(s), o("autoplayStop")
            }, A = (e, s) => {
                if (i.destroyed || !i.autoplay.running) return;
                clearTimeout(t), e || (f = !0);
                const r = () => {
                    o("autoplayPause"), i.params.autoplay.waitForTransition ? i.wrapperEl.addEventListener("transitionend", y) : M()
                };
                if (i.autoplay.paused = !0, s) return h && (d = i.params.autoplay.delay), h = !1, void r();
                const a = d || i.params.autoplay.delay;
                d = a - ((new Date).getTime() - b), i.isEnd && d < 0 && !i.params.loop || (d < 0 && (d = 0), r())
            }, M = () => {
                i.isEnd && d < 0 && !i.params.loop || i.destroyed || !i.autoplay.running || (b = (new Date).getTime(), f ? (f = !1, E(d)) : E(), i.autoplay.paused = !1, o("autoplayResume"))
            }, C = () => {
                if (i.destroyed || !i.autoplay.running) return;
                const e = r();
                "hidden" === e.visibilityState && (f = !0, A(!0)), "visible" === e.visibilityState && M()
            }, P = e => {
                "mouse" === e.pointerType && (f = !0, g = !0, i.animating || i.autoplay.paused || A(!0))
            }, L = e => {
                "mouse" === e.pointerType && (g = !1, i.autoplay.paused && M())
            };
            n("init", (() => {
                i.params.autoplay.enabled && (i.params.autoplay.pauseOnMouseEnter && (i.el.addEventListener("pointerenter", P), i.el.addEventListener("pointerleave", L)), r().addEventListener("visibilitychange", C), S())
            })), n("destroy", (() => {
                i.el && "string" != typeof i.el && (i.el.removeEventListener("pointerenter", P), i.el.removeEventListener("pointerleave", L)), r().removeEventListener("visibilitychange", C), i.autoplay.running && T()
            })), n("_freeModeStaticRelease", (() => {
                (u || f) && M()
            })), n("_freeModeNoMomentumRelease", (() => {
                i.params.autoplay.disableOnInteraction ? T() : A(!0, !0)
            })), n("beforeTransitionStart", ((e, t, s) => {
                !i.destroyed && i.autoplay.running && (s || !i.params.autoplay.disableOnInteraction ? A(!0, !0) : T())
            })), n("sliderFirstMove", (() => {
                !i.destroyed && i.autoplay.running && (i.params.autoplay.disableOnInteraction ? T() : (c = !0, u = !1, f = !1, m = setTimeout((() => {
                    f = !0, u = !0, A(!0)
                }), 200)))
            })), n("touchEnd", (() => {
                if (!i.destroyed && i.autoplay.running && c) {
                    if (clearTimeout(m), clearTimeout(t), i.params.autoplay.disableOnInteraction) return u = !1, void (c = !1);
                    u && i.params.cssMode && M(), u = !1, c = !1
                }
            })), n("slideChange", (() => {
                !i.destroyed && i.autoplay.running && (h = !0)
            })), Object.assign(i.autoplay, {start: S, stop: T, pause: A, resume: M})
        }, function (e) {
            let {swiper: t, extendParams: s, on: i} = e;
            s({
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: !0,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-thumbs"
                }
            });
            let a = !1, n = !1;

            function o() {
                const e = t.thumbs.swiper;
                if (!e || e.destroyed) return;
                const s = e.clickedIndex, i = e.clickedSlide;
                if (i && i.classList.contains(t.params.thumbs.slideThumbActiveClass)) return;
                if (null == s) return;
                let r;
                r = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : s, t.params.loop ? t.slideToLoop(r) : t.slideTo(r)
            }

            function l() {
                const {thumbs: e} = t.params;
                if (a) return !1;
                a = !0;
                const s = t.constructor;
                if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), Object.assign(t.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), t.thumbs.swiper.update(); else if (c(e.swiper)) {
                    const i = Object.assign({}, e.swiper);
                    Object.assign(i, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }), t.thumbs.swiper = new s(i), n = !0
                }
                return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", o), !0
            }

            function d(e) {
                const s = t.thumbs.swiper;
                if (!s || s.destroyed) return;
                const i = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
                let r = 1;
                const a = t.params.thumbs.slideThumbActiveClass;
                if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (r = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (r = 1), r = Math.floor(r), s.slides.forEach((e => e.classList.remove(a))), s.params.loop || s.params.virtual && s.params.virtual.enabled) for (let e = 0; e < r; e += 1) g(s.slidesEl, `[data-swiper-slide-index="${t.realIndex + e}"]`).forEach((e => {
                    e.classList.add(a)
                })); else for (let e = 0; e < r; e += 1) s.slides[t.realIndex + e] && s.slides[t.realIndex + e].classList.add(a);
                const n = t.params.thumbs.autoScrollOffset, o = n && !s.params.loop;
                if (t.realIndex !== s.realIndex || o) {
                    const r = s.activeIndex;
                    let a, l;
                    if (s.params.loop) {
                        const e = s.slides.filter((e => e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`))[0];
                        a = s.slides.indexOf(e), l = t.activeIndex > t.previousIndex ? "next" : "prev"
                    } else a = t.realIndex, l = a > t.previousIndex ? "next" : "prev";
                    o && (a += "next" === l ? n : -1 * n), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(a) < 0 && (s.params.centeredSlides ? a = a > r ? a - Math.floor(i / 2) + 1 : a + Math.floor(i / 2) - 1 : a > r && s.params.slidesPerGroup, s.slideTo(a, e ? 0 : void 0))
                }
            }

            t.thumbs = {swiper: null}, i("beforeInit", (() => {
                const {thumbs: e} = t.params;
                if (e && e.swiper) if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
                    const s = r(), i = () => {
                        const i = "string" == typeof e.swiper ? s.querySelector(e.swiper) : e.swiper;
                        if (i && i.swiper) e.swiper = i.swiper, l(), d(!0); else if (i) {
                            const s = r => {
                                e.swiper = r.detail[0], i.removeEventListener("init", s), l(), d(!0), e.swiper.update(), t.update()
                            };
                            i.addEventListener("init", s)
                        }
                        return i
                    }, a = () => {
                        t.destroyed || i() || requestAnimationFrame(a)
                    };
                    requestAnimationFrame(a)
                } else l(), d(!0)
            })), i("slideChange update resize observerUpdate", (() => {
                d()
            })), i("setTransition", ((e, s) => {
                const i = t.thumbs.swiper;
                i && !i.destroyed && i.setTransition(s)
            })), i("beforeDestroy", (() => {
                const e = t.thumbs.swiper;
                e && !e.destroyed && n && e.destroy()
            })), Object.assign(t.thumbs, {init: l, update: d})
        }, function (e) {
            let {swiper: t, extendParams: s, emit: i, once: r} = e;
            s({
                freeMode: {
                    enabled: !1,
                    momentum: !0,
                    momentumRatio: 1,
                    momentumBounce: !0,
                    momentumBounceRatio: 1,
                    momentumVelocityRatio: 1,
                    sticky: !1,
                    minimumVelocity: .02
                }
            }), Object.assign(t, {
                freeMode: {
                    onTouchStart: function () {
                        if (t.params.cssMode) return;
                        const e = t.getTranslate();
                        t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({currentPos: t.rtl ? t.translate : -t.translate})
                    }, onTouchMove: function () {
                        if (t.params.cssMode) return;
                        const {touchEventsData: e, touches: s} = t;
                        0 === e.velocities.length && e.velocities.push({
                            position: s[t.isHorizontal() ? "startX" : "startY"],
                            time: e.touchStartTime
                        }), e.velocities.push({position: s[t.isHorizontal() ? "currentX" : "currentY"], time: d()})
                    }, onTouchEnd: function (e) {
                        let {currentPos: s} = e;
                        if (t.params.cssMode) return;
                        const {params: a, wrapperEl: n, rtlTranslate: o, snapGrid: l, touchEventsData: p} = t,
                            c = d() - p.touchStartTime;
                        if (s < -t.minTranslate()) t.slideTo(t.activeIndex); else if (s > -t.maxTranslate()) t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1); else {
                            if (a.freeMode.momentum) {
                                if (p.velocities.length > 1) {
                                    const e = p.velocities.pop(), s = p.velocities.pop(), i = e.position - s.position,
                                        r = e.time - s.time;
                                    t.velocity = i / r, t.velocity /= 2, Math.abs(t.velocity) < a.freeMode.minimumVelocity && (t.velocity = 0), (r > 150 || d() - e.time > 300) && (t.velocity = 0)
                                } else t.velocity = 0;
                                t.velocity *= a.freeMode.momentumVelocityRatio, p.velocities.length = 0;
                                let e = 1e3 * a.freeMode.momentumRatio;
                                const s = t.velocity * e;
                                let c = t.translate + s;
                                o && (c = -c);
                                let u, m = !1;
                                const h = 20 * Math.abs(t.velocity) * a.freeMode.momentumBounceRatio;
                                let f;
                                if (c < t.maxTranslate()) a.freeMode.momentumBounce ? (c + t.maxTranslate() < -h && (c = t.maxTranslate() - h), u = t.maxTranslate(), m = !0, p.allowMomentumBounce = !0) : c = t.maxTranslate(), a.loop && a.centeredSlides && (f = !0); else if (c > t.minTranslate()) a.freeMode.momentumBounce ? (c - t.minTranslate() > h && (c = t.minTranslate() + h), u = t.minTranslate(), m = !0, p.allowMomentumBounce = !0) : c = t.minTranslate(), a.loop && a.centeredSlides && (f = !0); else if (a.freeMode.sticky) {
                                    let e;
                                    for (let t = 0; t < l.length; t += 1) if (l[t] > -c) {
                                        e = t;
                                        break
                                    }
                                    c = Math.abs(l[e] - c) < Math.abs(l[e - 1] - c) || "next" === t.swipeDirection ? l[e] : l[e - 1], c = -c
                                }
                                if (f && r("transitionEnd", (() => {
                                    t.loopFix()
                                })), 0 !== t.velocity) {
                                    if (e = o ? Math.abs((-c - t.translate) / t.velocity) : Math.abs((c - t.translate) / t.velocity), a.freeMode.sticky) {
                                        const s = Math.abs((o ? -c : c) - t.translate),
                                            i = t.slidesSizesGrid[t.activeIndex];
                                        e = s < i ? a.speed : s < 2 * i ? 1.5 * a.speed : 2.5 * a.speed
                                    }
                                } else if (a.freeMode.sticky) return void t.slideToClosest();
                                a.freeMode.momentumBounce && m ? (t.updateProgress(u), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating = !0, S(n, (() => {
                                    t && !t.destroyed && p.allowMomentumBounce && (i("momentumBounce"), t.setTransition(a.speed), setTimeout((() => {
                                        t.setTranslate(u), S(n, (() => {
                                            t && !t.destroyed && t.transitionEnd()
                                        }))
                                    }), 0))
                                }))) : t.velocity ? (i("_freeModeNoMomentumRelease"), t.updateProgress(c), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, S(n, (() => {
                                    t && !t.destroyed && t.transitionEnd()
                                })))) : t.updateProgress(c), t.updateActiveIndex(), t.updateSlidesClasses()
                            } else {
                                if (a.freeMode.sticky) return void t.slideToClosest();
                                a.freeMode && i("_freeModeNoMomentumRelease")
                            }
                            (!a.freeMode.momentum || c >= a.longSwipesMs) && (i("_freeModeStaticRelease"), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                        }
                    }
                }
            })
        }, function (e) {
            let t, s, i, r, {swiper: a, extendParams: n, on: o} = e;
            n({grid: {rows: 1, fill: "column"}});
            const l = () => {
                let e = a.params.spaceBetween;
                return "string" == typeof e && e.indexOf("%") >= 0 ? e = parseFloat(e.replace("%", "")) / 100 * a.size : "string" == typeof e && (e = parseFloat(e)), e
            };
            o("init", (() => {
                r = a.params.grid && a.params.grid.rows > 1
            })), o("update", (() => {
                const {params: e, el: t} = a, s = e.grid && e.grid.rows > 1;
                r && !s ? (t.classList.remove(`${e.containerModifierClass}grid`, `${e.containerModifierClass}grid-column`), i = 1, a.emitContainerClasses()) : !r && s && (t.classList.add(`${e.containerModifierClass}grid`), "column" === e.grid.fill && t.classList.add(`${e.containerModifierClass}grid-column`), a.emitContainerClasses()), r = s
            })), a.grid = {
                initSlides: e => {
                    const {slidesPerView: r} = a.params, {rows: n, fill: o} = a.params.grid,
                        l = a.virtual && a.params.virtual.enabled ? a.virtual.slides.length : e.length;
                    i = Math.floor(l / n), t = Math.floor(l / n) === l / n ? l : Math.ceil(l / n) * n, "auto" !== r && "row" === o && (t = Math.max(t, r * n)), s = t / n
                }, unsetSlides: () => {
                    a.slides && a.slides.forEach((e => {
                        e.swiperSlideGridSet && (e.style.height = "", e.style[a.getDirectionLabel("margin-top")] = "")
                    }))
                }, updateSlide: (e, r, n) => {
                    const {slidesPerGroup: o} = a.params, d = l(), {rows: p, fill: c} = a.params.grid,
                        u = a.virtual && a.params.virtual.enabled ? a.virtual.slides.length : n.length;
                    let m, h, f;
                    if ("row" === c && o > 1) {
                        const s = Math.floor(e / (o * p)), i = e - p * o * s,
                            a = 0 === s ? o : Math.min(Math.ceil((u - s * p * o) / p), o);
                        f = Math.floor(i / a), h = i - f * a + s * o, m = h + f * t / p, r.style.order = m
                    } else "column" === c ? (h = Math.floor(e / p), f = e - h * p, (h > i || h === i && f === p - 1) && (f += 1, f >= p && (f = 0, h += 1))) : (f = Math.floor(e / s), h = e - f * s);
                    r.row = f, r.column = h, r.style.height = `calc((100% - ${(p - 1) * d}px) / ${p})`, r.style[a.getDirectionLabel("margin-top")] = 0 !== f ? d && `${d}px` : "", r.swiperSlideGridSet = !0
                }, updateWrapperSize: (e, s) => {
                    const {centeredSlides: i, roundLengths: r} = a.params, n = l(), {rows: o} = a.params.grid;
                    if (a.virtualSize = (e + n) * t, a.virtualSize = Math.ceil(a.virtualSize / o) - n, a.params.cssMode || (a.wrapperEl.style[a.getDirectionLabel("width")] = `${a.virtualSize + n}px`), i) {
                        const e = [];
                        for (let t = 0; t < s.length; t += 1) {
                            let i = s[t];
                            r && (i = Math.floor(i)), s[t] < a.virtualSize + s[0] && e.push(i)
                        }
                        s.splice(0, s.length), s.push(...e)
                    }
                }
            }
        }, function (e) {
            let {swiper: t} = e;
            Object.assign(t, {
                appendSlide: ae.bind(t),
                prependSlide: ne.bind(t),
                addSlide: oe.bind(t),
                removeSlide: le.bind(t),
                removeAllSlides: de.bind(t)
            })
        }, function (e) {
            let {swiper: t, extendParams: s, on: i} = e;
            s({fadeEffect: {crossFade: !1}}), pe({
                effect: "fade",
                swiper: t,
                on: i,
                setTranslate: () => {
                    const {slides: e} = t;
                    t.params.fadeEffect;
                    for (let s = 0; s < e.length; s += 1) {
                        const e = t.slides[s];
                        let i = -e.swiperSlideOffset;
                        t.params.virtualTranslate || (i -= t.translate);
                        let r = 0;
                        t.isHorizontal() || (r = i, i = 0);
                        const a = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e.progress), 0) : 1 + Math.min(Math.max(e.progress, -1), 0),
                            n = ce(0, e);
                        n.style.opacity = a, n.style.transform = `translate3d(${i}px, ${r}px, 0px)`
                    }
                },
                setTransition: e => {
                    const s = t.slides.map((e => f(e)));
                    s.forEach((t => {
                        t.style.transitionDuration = `${e}ms`
                    })), ue({swiper: t, duration: e, transformElements: s, allSlides: !0})
                },
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !t.params.cssMode
                })
            })
        }, function (e) {
            let {swiper: t, extendParams: s, on: i} = e;
            s({cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}});
            const r = (e, t, s) => {
                let i = s ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
                    r = s ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
                i || (i = w("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "left" : "top")).split(" ")), e.append(i)), r || (r = w("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "right" : "bottom")).split(" ")), e.append(r)), i && (i.style.opacity = Math.max(-t, 0)), r && (r.style.opacity = Math.max(t, 0))
            };
            pe({
                effect: "cube",
                swiper: t,
                on: i,
                setTranslate: () => {
                    const {
                        el: e,
                        wrapperEl: s,
                        slides: i,
                        width: a,
                        height: n,
                        rtlTranslate: o,
                        size: l,
                        browser: d
                    } = t, p = t.params.cubeEffect, c = t.isHorizontal(), u = t.virtual && t.params.virtual.enabled;
                    let m, h = 0;
                    p.shadow && (c ? (m = t.wrapperEl.querySelector(".swiper-cube-shadow"), m || (m = w("div", "swiper-cube-shadow"), t.wrapperEl.append(m)), m.style.height = `${a}px`) : (m = e.querySelector(".swiper-cube-shadow"), m || (m = w("div", "swiper-cube-shadow"), e.append(m))));
                    for (let e = 0; e < i.length; e += 1) {
                        const s = i[e];
                        let a = e;
                        u && (a = parseInt(s.getAttribute("data-swiper-slide-index"), 10));
                        let n = 90 * a, d = Math.floor(n / 360);
                        o && (n = -n, d = Math.floor(-n / 360));
                        const m = Math.max(Math.min(s.progress, 1), -1);
                        let f = 0, g = 0, v = 0;
                        a % 4 == 0 ? (f = 4 * -d * l, v = 0) : (a - 1) % 4 == 0 ? (f = 0, v = 4 * -d * l) : (a - 2) % 4 == 0 ? (f = l + 4 * d * l, v = l) : (a - 3) % 4 == 0 && (f = -l, v = 3 * l + 4 * l * d), o && (f = -f), c || (g = f, f = 0);
                        const w = `rotateX(${c ? 0 : -n}deg) rotateY(${c ? n : 0}deg) translate3d(${f}px, ${g}px, ${v}px)`;
                        m <= 1 && m > -1 && (h = 90 * a + 90 * m, o && (h = 90 * -a - 90 * m), t.browser && t.browser.need3dFix && Math.abs(h) / 90 % 2 == 1 && (h += .001)), s.style.transform = w, p.slideShadows && r(s, m, c)
                    }
                    if (s.style.transformOrigin = `50% 50% -${l / 2}px`, s.style["-webkit-transform-origin"] = `50% 50% -${l / 2}px`, p.shadow) if (c) m.style.transform = `translate3d(0px, ${a / 2 + p.shadowOffset}px, ${-a / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${p.shadowScale})`; else {
                        const e = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                            t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                            s = p.shadowScale, i = p.shadowScale / t, r = p.shadowOffset;
                        m.style.transform = `scale3d(${s}, 1, ${i}) translate3d(0px, ${n / 2 + r}px, ${-n / 2 / i}px) rotateX(-89.99deg)`
                    }
                    const f = (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -l / 2 : 0;
                    s.style.transform = `translate3d(0px,0,${f}px) rotateX(${t.isHorizontal() ? 0 : h}deg) rotateY(${t.isHorizontal() ? -h : 0}deg)`, s.style.setProperty("--swiper-cube-translate-z", `${f}px`)
                },
                setTransition: e => {
                    const {el: s, slides: i} = t;
                    if (i.forEach((t => {
                        t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
                            t.style.transitionDuration = `${e}ms`
                        }))
                    })), t.params.cubeEffect.shadow && !t.isHorizontal()) {
                        const t = s.querySelector(".swiper-cube-shadow");
                        t && (t.style.transitionDuration = `${e}ms`)
                    }
                },
                recreateShadows: () => {
                    const e = t.isHorizontal();
                    t.slides.forEach((t => {
                        const s = Math.max(Math.min(t.progress, 1), -1);
                        r(t, s, e)
                    }))
                },
                getEffectParams: () => t.params.cubeEffect,
                perspective: () => !0,
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: !1,
                    virtualTranslate: !0
                })
            })
        }, function (e) {
            let {swiper: t, extendParams: s, on: i} = e;
            s({flipEffect: {slideShadows: !0, limitRotation: !0}});
            const r = (e, s) => {
                let i = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
                    r = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
                i || (i = me("flip", e, t.isHorizontal() ? "left" : "top")), r || (r = me("flip", e, t.isHorizontal() ? "right" : "bottom")), i && (i.style.opacity = Math.max(-s, 0)), r && (r.style.opacity = Math.max(s, 0))
            };
            pe({
                effect: "flip",
                swiper: t,
                on: i,
                setTranslate: () => {
                    const {slides: e, rtlTranslate: s} = t, i = t.params.flipEffect;
                    for (let a = 0; a < e.length; a += 1) {
                        const n = e[a];
                        let o = n.progress;
                        t.params.flipEffect.limitRotation && (o = Math.max(Math.min(n.progress, 1), -1));
                        const l = n.swiperSlideOffset;
                        let d = -180 * o, p = 0, c = t.params.cssMode ? -l - t.translate : -l, u = 0;
                        t.isHorizontal() ? s && (d = -d) : (u = c, c = 0, p = -d, d = 0), t.browser && t.browser.need3dFix && (Math.abs(d) / 90 % 2 == 1 && (d += .001), Math.abs(p) / 90 % 2 == 1 && (p += .001)), n.style.zIndex = -Math.abs(Math.round(o)) + e.length, i.slideShadows && r(n, o);
                        const m = `translate3d(${c}px, ${u}px, 0px) rotateX(${p}deg) rotateY(${d}deg)`;
                        ce(0, n).style.transform = m
                    }
                },
                setTransition: e => {
                    const s = t.slides.map((e => f(e)));
                    s.forEach((t => {
                        t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
                            t.style.transitionDuration = `${e}ms`
                        }))
                    })), ue({swiper: t, duration: e, transformElements: s})
                },
                recreateShadows: () => {
                    t.params.flipEffect, t.slides.forEach((e => {
                        let s = e.progress;
                        t.params.flipEffect.limitRotation && (s = Math.max(Math.min(e.progress, 1), -1)), r(e, s)
                    }))
                },
                getEffectParams: () => t.params.flipEffect,
                perspective: () => !0,
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !t.params.cssMode
                })
            })
        }, function (e) {
            let {swiper: t, extendParams: s, on: i} = e;
            s({coverflowEffect: {rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: !0}}), pe({
                effect: "coverflow", swiper: t, on: i, setTranslate: () => {
                    const {width: e, height: s, slides: i, slidesSizesGrid: r} = t, a = t.params.coverflowEffect,
                        n = t.isHorizontal(), o = t.translate, l = n ? e / 2 - o : s / 2 - o,
                        d = n ? a.rotate : -a.rotate, p = a.depth;
                    for (let e = 0, s = i.length; e < s; e += 1) {
                        const s = i[e], o = r[e], c = (l - s.swiperSlideOffset - o / 2) / o,
                            u = "function" == typeof a.modifier ? a.modifier(c) : c * a.modifier;
                        let m = n ? d * u : 0, h = n ? 0 : d * u, f = -p * Math.abs(u), g = a.stretch;
                        "string" == typeof g && -1 !== g.indexOf("%") && (g = parseFloat(a.stretch) / 100 * o);
                        let v = n ? 0 : g * u, w = n ? g * u : 0, b = 1 - (1 - a.scale) * Math.abs(u);
                        Math.abs(w) < .001 && (w = 0), Math.abs(v) < .001 && (v = 0), Math.abs(f) < .001 && (f = 0), Math.abs(m) < .001 && (m = 0), Math.abs(h) < .001 && (h = 0), Math.abs(b) < .001 && (b = 0), t.browser && t.browser.need3dFix && (Math.abs(m) / 90 % 2 == 1 && (m += .001), Math.abs(h) / 90 % 2 == 1 && (h += .001));
                        const y = `translate3d(${w}px,${v}px,${f}px)  rotateX(${h}deg) rotateY(${m}deg) scale(${b})`;
                        if (ce(0, s).style.transform = y, s.style.zIndex = 1 - Math.abs(Math.round(u)), a.slideShadows) {
                            let e = n ? s.querySelector(".swiper-slide-shadow-left") : s.querySelector(".swiper-slide-shadow-top"),
                                t = n ? s.querySelector(".swiper-slide-shadow-right") : s.querySelector(".swiper-slide-shadow-bottom");
                            e || (e = me("coverflow", s, n ? "left" : "top")), t || (t = me("coverflow", s, n ? "right" : "bottom")), e && (e.style.opacity = u > 0 ? u : 0), t && (t.style.opacity = -u > 0 ? -u : 0)
                        }
                    }
                }, setTransition: e => {
                    t.slides.map((e => f(e))).forEach((t => {
                        t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
                            t.style.transitionDuration = `${e}ms`
                        }))
                    }))
                }, perspective: () => !0, overwriteParams: () => ({watchSlidesProgress: !0})
            })
        }, function (e) {
            let {swiper: t, extendParams: s, on: i} = e;
            s({
                creativeEffect: {
                    limitProgress: 1,
                    shadowPerProgress: !1,
                    progressMultiplier: 1,
                    perspective: !0,
                    prev: {translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1},
                    next: {translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1}
                }
            });
            const r = e => "string" == typeof e ? e : `${e}px`;
            pe({
                effect: "creative",
                swiper: t,
                on: i,
                setTranslate: () => {
                    const {slides: e, wrapperEl: s, slidesSizesGrid: i} = t,
                        a = t.params.creativeEffect, {progressMultiplier: n} = a, o = t.params.centeredSlides;
                    if (o) {
                        const e = i[0] / 2 - t.params.slidesOffsetBefore || 0;
                        s.style.transform = `translateX(calc(50% - ${e}px))`
                    }
                    for (let s = 0; s < e.length; s += 1) {
                        const i = e[s], l = i.progress,
                            d = Math.min(Math.max(i.progress, -a.limitProgress), a.limitProgress);
                        let p = d;
                        o || (p = Math.min(Math.max(i.originalProgress, -a.limitProgress), a.limitProgress));
                        const c = i.swiperSlideOffset, u = [t.params.cssMode ? -c - t.translate : -c, 0, 0],
                            m = [0, 0, 0];
                        let h = !1;
                        t.isHorizontal() || (u[1] = u[0], u[0] = 0);
                        let f = {translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1};
                        d < 0 ? (f = a.next, h = !0) : d > 0 && (f = a.prev, h = !0), u.forEach(((e, t) => {
                            u[t] = `calc(${e}px + (${r(f.translate[t])} * ${Math.abs(d * n)}))`
                        })), m.forEach(((e, s) => {
                            let i = f.rotate[s] * Math.abs(d * n);
                            t.browser && t.browser.need3dFix && Math.abs(i) / 90 % 2 == 1 && (i += .001), m[s] = i
                        })), i.style.zIndex = -Math.abs(Math.round(l)) + e.length;
                        const g = u.join(", "), v = `rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`,
                            w = p < 0 ? `scale(${1 + (1 - f.scale) * p * n})` : `scale(${1 - (1 - f.scale) * p * n})`,
                            b = p < 0 ? 1 + (1 - f.opacity) * p * n : 1 - (1 - f.opacity) * p * n,
                            y = `translate3d(${g}) ${v} ${w}`;
                        if (h && f.shadow || !h) {
                            let e = i.querySelector(".swiper-slide-shadow");
                            if (!e && f.shadow && (e = me("creative", i)), e) {
                                const t = a.shadowPerProgress ? d * (1 / a.limitProgress) : d;
                                e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                            }
                        }
                        const x = ce(0, i);
                        x.style.transform = y, x.style.opacity = b, f.origin && (x.style.transformOrigin = f.origin)
                    }
                },
                setTransition: e => {
                    const s = t.slides.map((e => f(e)));
                    s.forEach((t => {
                        t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach((t => {
                            t.style.transitionDuration = `${e}ms`
                        }))
                    })), ue({swiper: t, duration: e, transformElements: s, allSlides: !0})
                },
                perspective: () => t.params.creativeEffect.perspective,
                overwriteParams: () => ({watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode})
            })
        }, function (e) {
            let {swiper: t, extendParams: s, on: i} = e;
            s({cardsEffect: {slideShadows: !0, rotate: !0, perSlideRotate: 2, perSlideOffset: 8}}), pe({
                effect: "cards",
                swiper: t,
                on: i,
                setTranslate: () => {
                    const {slides: e, activeIndex: s, rtlTranslate: i} = t,
                        r = t.params.cardsEffect, {startTranslate: a, isTouched: n} = t.touchEventsData,
                        o = i ? -t.translate : t.translate;
                    for (let l = 0; l < e.length; l += 1) {
                        const d = e[l], p = d.progress, c = Math.min(Math.max(p, -4), 4);
                        let u = d.swiperSlideOffset;
                        t.params.centeredSlides && !t.params.cssMode && (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (u -= e[0].swiperSlideOffset);
                        let m = t.params.cssMode ? -u - t.translate : -u, h = 0;
                        const f = -100 * Math.abs(c);
                        let g = 1, v = -r.perSlideRotate * c, w = r.perSlideOffset - .75 * Math.abs(c);
                        const b = t.virtual && t.params.virtual.enabled ? t.virtual.from + l : l,
                            y = (b === s || b === s - 1) && c > 0 && c < 1 && (n || t.params.cssMode) && o < a,
                            x = (b === s || b === s + 1) && c < 0 && c > -1 && (n || t.params.cssMode) && o > a;
                        if (y || x) {
                            const e = (1 - Math.abs((Math.abs(c) - .5) / .5)) ** .5;
                            v += -28 * c * e, g += -.5 * e, w += 96 * e, h = -25 * e * Math.abs(c) + "%"
                        }
                        if (m = c < 0 ? `calc(${m}px ${i ? "-" : "+"} (${w * Math.abs(c)}%))` : c > 0 ? `calc(${m}px ${i ? "-" : "+"} (-${w * Math.abs(c)}%))` : `${m}px`, !t.isHorizontal()) {
                            const e = h;
                            h = m, m = e
                        }
                        const E = c < 0 ? "" + (1 + (1 - g) * c) : "" + (1 - (1 - g) * c),
                            S = `\n        translate3d(${m}, ${h}, ${f}px)\n        rotateZ(${r.rotate ? i ? -v : v : 0}deg)\n        scale(${E})\n      `;
                        if (r.slideShadows) {
                            let e = d.querySelector(".swiper-slide-shadow");
                            e || (e = me("cards", d)), e && (e.style.opacity = Math.min(Math.max((Math.abs(c) - .5) / .5, 0), 1))
                        }
                        d.style.zIndex = -Math.abs(Math.round(p)) + e.length, ce(0, d).style.transform = S
                    }
                },
                setTransition: e => {
                    const s = t.slides.map((e => f(e)));
                    s.forEach((t => {
                        t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach((t => {
                            t.style.transitionDuration = `${e}ms`
                        }))
                    })), ue({swiper: t, duration: e, transformElements: s})
                },
                perspective: () => !0,
                overwriteParams: () => ({watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode})
            })
        }];
        se.use(he);
        var fe = s(379), ge = s.n(fe), ve = s(795), we = s.n(ve), be = s(569), ye = s.n(be), xe = s(565), Ee = s.n(xe),
            Se = s(216), Te = s.n(Se), Ae = s(589), Me = s.n(Ae), Ce = s(541), Pe = {};
        Pe.styleTagTransform = Me(), Pe.setAttributes = Ee(), Pe.insert = ye().bind(null, "head"), Pe.domAPI = we(), Pe.insertStyleElement = Te(), ge()(Ce.Z, Pe), Ce.Z && Ce.Z.locals && Ce.Z.locals, function () {
            const e = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
                t = ["января", "февраля", "марта", "апреля", "майя", "июня", "июля", "августа", "сентября", "октября", "ноября"];

            function s() {
                const e = new Date, t = document.querySelector("#services-current-time"),
                    s = e.getHours().toString().padStart(2, "0"), i = e.getMinutes().toString().padStart(2, "0");
                t.textContent = `${s}:${i}`
            }

            function i() {
                const s = new Date, i = document.querySelector("#services-current-date"), r = e[s.getDay()],
                    a = s.getDate(), n = t[s.getMonth()];
                i.textContent = `${r} ${a} ${n}`
            }



        }(), function () {
            const e = document.querySelector(".services__actions-title");
            document.querySelectorAll(".services__actions-icon").forEach((t => {
                t.addEventListener("mouseover", (function () {
                    e.textContent = `${this.dataset.name}`
                })), t.addEventListener("mouseout", (function () {
                    e.textContent = "Услуги"
                }))
            }))
        }(), function () {
            const e = document.querySelectorAll(".tour__location"),
                t = document.querySelectorAll(".tour__image-picture");
            e.forEach((s => {
                s.addEventListener("click", (function () {
                    s.classList.add("active");
                    for (let e = 0; e < t.length; e++) t[e].src = `./img/tour/${this.id}-${e + 1}.jpg`;
                    e.forEach((e => {
                        e !== this && e.classList.remove("active")
                    }))
                }))
            }))
        }(), document.querySelectorAll(".catalog__bookcard-text").forEach((e => {
            if (e.textContent.length > 197) {
                const t = e.textContent.slice(0, 192);
                e.textContent = `${t}...`
            }
        })), function () {
            const e = document.querySelector(".dosai-fixed__chat-box"),
                t = document.querySelector(".dosai-fixed__chat"), s = document.querySelector(".dosai-fixed__chat-form"),
                i = document.querySelector(".dosai-fixed__chat-input");

            function r() {
                !function (t) {
                    let s = t.split(""), i = 25, r = "";
                    for (let e = 0; e < s.length; e++) r += s[e], e === i && (r += `\n${s[e]}`, i += 25);
                    const a = document.createElement("div");
                    a.textContent = r, a.classList.add("dosai__user-msg"), e.appendChild(a)
                }(i.value), i.value = "", s.style.height = "49px", i.rows = 1
            }

            i.addEventListener("input", (function () {
                t.style.height = "auto", s.style.height = "auto", this.rows = 2
            })), s.addEventListener("keypress", (function (e) {
                "Enter" === e.key && (e.preventDefault(), "" !== i.value && r())
            })), s.addEventListener("submit", (function (e) {
                e.preventDefault(), "" !== i.value && r()
            }))
        }(), new se(".hero__swiper", {
            slidesPerView: 1,
            loop: !0,
            speed: 600,
            navigation: {prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next"},
            effect: "fade",
            fadeEffect: {crossFade: !0}
        }), new se(".services__news-swiper", {
            slidesPerView: 1,
            loop: !0,
            speed: 400,
            autoplay: {delay: 5e3},
            navigation: {prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next"}
        }), new se(".services__events-swiper", {
            slidesPerView: 1,
            loop: !1,
            navigation: {prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next"}
        }), new se(".services__courses-swiper", {
            slidesPerView: 1,
            loop: !0,
            speed: 400,
            autoplay: {delay: 6e3},
            navigation: {prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next"}
        }), new se(".tour__swiper", {
            direction: "vertical",
            slidesPerView: 7,
            spaceBetween: 0,
            loop: !1,
            speed: 400,
            navigation: {prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next"}
        })
    }()
}();