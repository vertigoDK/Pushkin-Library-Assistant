/*! For license information please see index.bundle.js.LICENSE.txt */
!function () {
    "use strict";
    var e = {
        541: function (e, t, i) {
            var s = i(81), r = i.n(s), n = i(645), a = i.n(n), o = i(667), l = i.n(o), d = new URL(i(954), i.b),
                c = a()(r()), p = l()(d);
            c.push([e.id, "/**\n * Swiper 11.1.4\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2024 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: May 30, 2024\n */\n\n/* FONT_START */\n@font-face {\n  font-family: 'swiper-icons';\n  src: url(" + p + ");\n  font-weight: 400;\n  font-style: normal;\n}\n/* FONT_END */\n:root {\n  --swiper-theme-color: #007aff;\n  /*\n  --swiper-preloader-color: var(--swiper-theme-color);\n  --swiper-wrapper-transition-timing-function: initial;\n  */\n}\n:host {\n  position: relative;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  z-index: 1;\n}\n.swiper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n  display: block;\n}\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);\n  box-sizing: content-box;\n}\n.swiper-android .swiper-slide,\n.swiper-ios .swiper-slide,\n.swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-horizontal {\n  touch-action: pan-y;\n}\n.swiper-vertical {\n  touch-action: pan-x;\n}\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n  display: block;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n/* Auto Height */\n.swiper-autoheight,\n.swiper-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n.swiper-backface-hidden .swiper-slide {\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n/* 3D Effects */\n.swiper-3d.swiper-css-mode .swiper-wrapper {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-wrapper {\n  transform-style: preserve-3d;\n}\n.swiper-3d {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-slide,\n.swiper-3d .swiper-cube-shadow {\n  transform-style: preserve-3d;\n}\n/* CSS Mode */\n.swiper-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  /* For Firefox */\n  -ms-overflow-style: none;\n  /* For Internet Explorer and Edge */\n}\n.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.swiper-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n.swiper-css-mode.swiper-horizontal > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n.swiper-css-mode.swiper-vertical > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n.swiper-css-mode.swiper-free-mode > .swiper-wrapper {\n  scroll-snap-type: none;\n}\n.swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: none;\n}\n.swiper-css-mode.swiper-centered > .swiper-wrapper::before {\n  content: '';\n  flex-shrink: 0;\n  order: 9999;\n}\n.swiper-css-mode.swiper-centered > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: center center;\n  scroll-snap-stop: always;\n}\n.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {\n  margin-inline-start: var(--swiper-centered-offset-before);\n}\n.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n  height: 100%;\n  min-height: 1px;\n  width: var(--swiper-centered-offset-after);\n}\n.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n  margin-block-start: var(--swiper-centered-offset-before);\n}\n.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper::before {\n  width: 100%;\n  min-width: 1px;\n  height: var(--swiper-centered-offset-after);\n}\n/* Slide styles start */\n/* 3D Shadows */\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom,\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-3d .swiper-slide-shadow {\n  background: rgba(0, 0, 0, 0.15);\n}\n.swiper-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  transform-origin: 50%;\n  box-sizing: border-box;\n  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));\n  border-radius: 50%;\n  border-top-color: transparent;\n}\n.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,\n.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader {\n  animation: swiper-preloader-spin 1s infinite linear;\n}\n.swiper-lazy-preloader-white {\n  --swiper-preloader-color: #fff;\n}\n.swiper-lazy-preloader-black {\n  --swiper-preloader-color: #000;\n}\n@keyframes swiper-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/* Slide styles end */\n.swiper-virtual .swiper-slide {\n  -webkit-backface-visibility: hidden;\n  transform: translateZ(0);\n}\n.swiper-virtual.swiper-css-mode .swiper-wrapper::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n}\n.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after {\n  height: 1px;\n  width: var(--swiper-virtual-size);\n}\n.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after {\n  width: 1px;\n  height: var(--swiper-virtual-size);\n}\n:root {\n  --swiper-navigation-size: 44px;\n  /*\n  --swiper-navigation-top-offset: 50%;\n  --swiper-navigation-sides-offset: 10px;\n  --swiper-navigation-color: var(--swiper-theme-color);\n  */\n}\n.swiper-button-prev,\n.swiper-button-next {\n  position: absolute;\n  top: var(--swiper-navigation-top-offset, 50%);\n  width: calc(var(--swiper-navigation-size) / 44 * 27);\n  height: var(--swiper-navigation-size);\n  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));\n  z-index: 10;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--swiper-navigation-color, var(--swiper-theme-color));\n}\n.swiper-button-prev.swiper-button-disabled,\n.swiper-button-next.swiper-button-disabled {\n  opacity: 0.35;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-button-prev.swiper-button-hidden,\n.swiper-button-next.swiper-button-hidden {\n  opacity: 0;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-navigation-disabled .swiper-button-prev,\n.swiper-navigation-disabled .swiper-button-next {\n  display: none !important;\n}\n.swiper-button-prev svg,\n.swiper-button-next svg {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  transform-origin: center;\n}\n.swiper-rtl .swiper-button-prev svg,\n.swiper-rtl .swiper-button-next svg {\n  transform: rotate(180deg);\n}\n.swiper-button-prev,\n.swiper-rtl .swiper-button-next {\n  left: var(--swiper-navigation-sides-offset, 10px);\n  right: auto;\n}\n.swiper-button-next,\n.swiper-rtl .swiper-button-prev {\n  right: var(--swiper-navigation-sides-offset, 10px);\n  left: auto;\n}\n.swiper-button-lock {\n  display: none;\n}\n/* Navigation font start */\n.swiper-button-prev:after,\n.swiper-button-next:after {\n  font-family: swiper-icons;\n  font-size: var(--swiper-navigation-size);\n  text-transform: none !important;\n  letter-spacing: 0;\n  font-variant: initial;\n  line-height: 1;\n}\n.swiper-button-prev:after,\n.swiper-rtl .swiper-button-next:after {\n  content: 'prev';\n}\n.swiper-button-next,\n.swiper-rtl .swiper-button-prev {\n  right: var(--swiper-navigation-sides-offset, 10px);\n  left: auto;\n}\n.swiper-button-next:after,\n.swiper-rtl .swiper-button-prev:after {\n  content: 'next';\n}\n/* Navigation font end */\n:root {\n  /*\n  --swiper-pagination-color: var(--swiper-theme-color);\n  --swiper-pagination-left: auto;\n  --swiper-pagination-right: 8px;\n  --swiper-pagination-bottom: 8px;\n  --swiper-pagination-top: auto;\n  --swiper-pagination-fraction-color: inherit;\n  --swiper-pagination-progressbar-bg-color: rgba(0,0,0,0.25);\n  --swiper-pagination-progressbar-size: 4px;\n  --swiper-pagination-bullet-size: 8px;\n  --swiper-pagination-bullet-width: 8px;\n  --swiper-pagination-bullet-height: 8px;\n  --swiper-pagination-bullet-border-radius: 50%;\n  --swiper-pagination-bullet-inactive-color: #000;\n  --swiper-pagination-bullet-inactive-opacity: 0.2;\n  --swiper-pagination-bullet-opacity: 1;\n  --swiper-pagination-bullet-horizontal-gap: 4px;\n  --swiper-pagination-bullet-vertical-gap: 6px;\n  */\n}\n.swiper-pagination {\n  position: absolute;\n  text-align: center;\n  transition: 300ms opacity;\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n.swiper-pagination.swiper-pagination-hidden {\n  opacity: 0;\n}\n.swiper-pagination-disabled > .swiper-pagination,\n.swiper-pagination.swiper-pagination-disabled {\n  display: none !important;\n}\n/* Common Styles */\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-horizontal > .swiper-pagination-bullets,\n.swiper-pagination-bullets.swiper-pagination-horizontal {\n  bottom: var(--swiper-pagination-bottom, 8px);\n  top: var(--swiper-pagination-top, auto);\n  left: 0;\n  width: 100%;\n}\n/* Bullets */\n.swiper-pagination-bullets-dynamic {\n  overflow: hidden;\n  font-size: 0;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transform: scale(0.33);\n  position: relative;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullet {\n  width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));\n  height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));\n  display: inline-block;\n  border-radius: var(--swiper-pagination-bullet-border-radius, 50%);\n  background: var(--swiper-pagination-bullet-inactive-color, #000);\n  opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);\n}\nbutton.swiper-pagination-bullet {\n  border: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  -webkit-appearance: none;\n          appearance: none;\n}\n.swiper-pagination-clickable .swiper-pagination-bullet {\n  cursor: pointer;\n}\n.swiper-pagination-bullet:only-child {\n  display: none !important;\n}\n.swiper-pagination-bullet-active {\n  opacity: var(--swiper-pagination-bullet-opacity, 1);\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n}\n.swiper-vertical > .swiper-pagination-bullets,\n.swiper-pagination-vertical.swiper-pagination-bullets {\n  right: var(--swiper-pagination-right, 8px);\n  left: var(--swiper-pagination-left, auto);\n  top: 50%;\n  transform: translate3d(0px, -50%, 0);\n}\n.swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet,\n.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;\n  display: block;\n}\n.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n}\n.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  display: inline-block;\n  transition: 200ms transform,\n        200ms top;\n}\n.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,\n.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);\n}\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,\n.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,\n.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform,\n        200ms left;\n}\n.swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform,\n    200ms right;\n}\n/* Fraction */\n.swiper-pagination-fraction {\n  color: var(--swiper-pagination-fraction-color, inherit);\n}\n/* Progress */\n.swiper-pagination-progressbar {\n  background: var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, 0.25));\n  position: absolute;\n}\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  transform-origin: left top;\n}\n.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  transform-origin: right top;\n}\n.swiper-horizontal > .swiper-pagination-progressbar,\n.swiper-pagination-progressbar.swiper-pagination-horizontal,\n.swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite {\n  width: 100%;\n  height: var(--swiper-pagination-progressbar-size, 4px);\n  left: 0;\n  top: 0;\n}\n.swiper-vertical > .swiper-pagination-progressbar,\n.swiper-pagination-progressbar.swiper-pagination-vertical,\n.swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite {\n  width: var(--swiper-pagination-progressbar-size, 4px);\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.swiper-pagination-lock {\n  display: none;\n}\n:root {\n  /*\n  --swiper-scrollbar-border-radius: 10px;\n  --swiper-scrollbar-top: auto;\n  --swiper-scrollbar-bottom: 4px;\n  --swiper-scrollbar-left: auto;\n  --swiper-scrollbar-right: 4px;\n  --swiper-scrollbar-sides-offset: 1%;\n  --swiper-scrollbar-bg-color: rgba(0, 0, 0, 0.1);\n  --swiper-scrollbar-drag-bg-color: rgba(0, 0, 0, 0.5);\n  --swiper-scrollbar-size: 4px;\n  */\n}\n.swiper-scrollbar {\n  border-radius: var(--swiper-scrollbar-border-radius, 10px);\n  position: relative;\n  touch-action: none;\n  background: var(--swiper-scrollbar-bg-color, rgba(0, 0, 0, 0.1));\n}\n.swiper-scrollbar-disabled > .swiper-scrollbar,\n.swiper-scrollbar.swiper-scrollbar-disabled {\n  display: none !important;\n}\n.swiper-horizontal > .swiper-scrollbar,\n.swiper-scrollbar.swiper-scrollbar-horizontal {\n  position: absolute;\n  left: var(--swiper-scrollbar-sides-offset, 1%);\n  bottom: var(--swiper-scrollbar-bottom, 4px);\n  top: var(--swiper-scrollbar-top, auto);\n  z-index: 50;\n  height: var(--swiper-scrollbar-size, 4px);\n  width: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));\n}\n.swiper-vertical > .swiper-scrollbar,\n.swiper-scrollbar.swiper-scrollbar-vertical {\n  position: absolute;\n  left: var(--swiper-scrollbar-left, auto);\n  right: var(--swiper-scrollbar-right, 4px);\n  top: var(--swiper-scrollbar-sides-offset, 1%);\n  z-index: 50;\n  width: var(--swiper-scrollbar-size, 4px);\n  height: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));\n}\n.swiper-scrollbar-drag {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  background: var(--swiper-scrollbar-drag-bg-color, rgba(0, 0, 0, 0.5));\n  border-radius: var(--swiper-scrollbar-border-radius, 10px);\n  left: 0;\n  top: 0;\n}\n.swiper-scrollbar-cursor-drag {\n  cursor: move;\n}\n.swiper-scrollbar-lock {\n  display: none;\n}\n/* Zoom container styles start */\n.swiper-zoom-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.swiper-zoom-container > img,\n.swiper-zoom-container > svg,\n.swiper-zoom-container > canvas {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n/* Zoom container styles end */\n.swiper-slide-zoomed {\n  cursor: move;\n  touch-action: none;\n}\n/* a11y */\n.swiper .swiper-notification {\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  opacity: 0;\n  z-index: -1000;\n}\n.swiper-free-mode > .swiper-wrapper {\n  transition-timing-function: ease-out;\n  margin: 0 auto;\n}\n.swiper-grid > .swiper-wrapper {\n  flex-wrap: wrap;\n}\n.swiper-grid-column > .swiper-wrapper {\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n.swiper-fade.swiper-free-mode .swiper-slide {\n  transition-timing-function: ease-out;\n}\n.swiper-fade .swiper-slide {\n  pointer-events: none;\n  transition-property: opacity;\n}\n.swiper-fade .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-fade .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-fade .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-cube {\n  overflow: visible;\n}\n.swiper-cube .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  z-index: 1;\n  visibility: hidden;\n  transform-origin: 0 0;\n  width: 100%;\n  height: 100%;\n}\n.swiper-cube .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-cube.swiper-rtl .swiper-slide {\n  transform-origin: 100% 0;\n}\n.swiper-cube .swiper-slide-active,\n.swiper-cube .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-cube .swiper-slide-active,\n.swiper-cube .swiper-slide-next,\n.swiper-cube .swiper-slide-prev {\n  pointer-events: auto;\n  visibility: visible;\n}\n.swiper-cube .swiper-cube-shadow {\n  position: absolute;\n  left: 0;\n  bottom: 0px;\n  width: 100%;\n  height: 100%;\n  opacity: 0.6;\n  z-index: 0;\n}\n.swiper-cube .swiper-cube-shadow:before {\n  content: '';\n  background: #000;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  filter: blur(50px);\n}\n.swiper-cube .swiper-slide-next + .swiper-slide {\n  pointer-events: auto;\n  visibility: visible;\n}\n/* Cube slide shadows start */\n.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-top,\n.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-bottom,\n.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-left,\n.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n/* Cube slide shadows end */\n.swiper-flip {\n  overflow: visible;\n}\n.swiper-flip .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  z-index: 1;\n}\n.swiper-flip .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-flip .swiper-slide-active,\n.swiper-flip .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n/* Flip slide shadows start */\n.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-top,\n.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-bottom,\n.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-left,\n.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n/* Flip slide shadows end */\n.swiper-creative .swiper-slide {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  overflow: hidden;\n  transition-property: transform, opacity, height;\n}\n.swiper-cards {\n  overflow: visible;\n}\n.swiper-cards .swiper-slide {\n  transform-origin: center bottom;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  overflow: hidden;\n}\n", ""]), t.Z = c
        }, 645: function (e) {
            e.exports = function (e) {
                var t = [];
                return t.toString = function () {
                    return this.map((function (t) {
                        var i = "", s = void 0 !== t[5];
                        return t[4] && (i += "@supports (".concat(t[4], ") {")), t[2] && (i += "@media ".concat(t[2], " {")), s && (i += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), i += e(t), s && (i += "}"), t[2] && (i += "}"), t[4] && (i += "}"), i
                    })).join("")
                }, t.i = function (e, i, s, r, n) {
                    "string" == typeof e && (e = [[null, e, void 0]]);
                    var a = {};
                    if (s) for (var o = 0; o < this.length; o++) {
                        var l = this[o][0];
                        null != l && (a[l] = !0)
                    }
                    for (var d = 0; d < e.length; d++) {
                        var c = [].concat(e[d]);
                        s && a[c[0]] || (void 0 !== n && (void 0 === c[5] || (c[1] = "@layer".concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {").concat(c[1], "}")), c[5] = n), i && (c[2] ? (c[1] = "@media ".concat(c[2], " {").concat(c[1], "}"), c[2] = i) : c[2] = i), r && (c[4] ? (c[1] = "@supports (".concat(c[4], ") {").concat(c[1], "}"), c[4] = r) : c[4] = "".concat(r)), t.push(c))
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

            function i(e) {
                for (var i = -1, s = 0; s < t.length; s++) if (t[s].identifier === e) {
                    i = s;
                    break
                }
                return i
            }

            function s(e, s) {
                for (var n = {}, a = [], o = 0; o < e.length; o++) {
                    var l = e[o], d = s.base ? l[0] + s.base : l[0], c = n[d] || 0, p = "".concat(d, " ").concat(c);
                    n[d] = c + 1;
                    var u = i(p), m = {css: l[1], media: l[2], sourceMap: l[3], supports: l[4], layer: l[5]};
                    if (-1 !== u) t[u].references++, t[u].updater(m); else {
                        var f = r(m, s);
                        s.byIndex = o, t.splice(o, 0, {identifier: p, updater: f, references: 1})
                    }
                    a.push(p)
                }
                return a
            }

            function r(e, t) {
                var i = t.domAPI(t);
                return i.update(e), function (t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
                        i.update(e = t)
                    } else i.remove()
                }
            }

            e.exports = function (e, r) {
                var n = s(e = e || [], r = r || {});
                return function (e) {
                    e = e || [];
                    for (var a = 0; a < n.length; a++) {
                        var o = i(n[a]);
                        t[o].references--
                    }
                    for (var l = s(e, r), d = 0; d < n.length; d++) {
                        var c = i(n[d]);
                        0 === t[c].references && (t[c].updater(), t.splice(c, 1))
                    }
                    n = l
                }
            }
        }, 569: function (e) {
            var t = {};
            e.exports = function (e, i) {
                var s = function (e) {
                    if (void 0 === t[e]) {
                        var i = document.querySelector(e);
                        if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement) try {
                            i = i.contentDocument.head
                        } catch (e) {
                            i = null
                        }
                        t[e] = i
                    }
                    return t[e]
                }(e);
                if (!s) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                s.appendChild(i)
            }
        }, 216: function (e) {
            e.exports = function (e) {
                var t = document.createElement("style");
                return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
            }
        }, 565: function (e, t, i) {
            e.exports = function (e) {
                var t = i.nc;
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
                    update: function (i) {
                        !function (e, t, i) {
                            var s = "";
                            i.supports && (s += "@supports (".concat(i.supports, ") {")), i.media && (s += "@media ".concat(i.media, " {"));
                            var r = void 0 !== i.layer;
                            r && (s += "@layer".concat(i.layer.length > 0 ? " ".concat(i.layer) : "", " {")), s += i.css, r && (s += "}"), i.media && (s += "}"), i.supports && (s += "}");
                            var n = i.sourceMap;
                            n && "undefined" != typeof btoa && (s += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n)))), " */")), t.styleTagTransform(s, e, t.options)
                        }(t, e, i)
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

    function i(s) {
        var r = t[s];
        if (void 0 !== r) return r.exports;
        var n = t[s] = {id: s, exports: {}};
        return e[s](n, n.exports, i), n.exports
    }

    i.m = e, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return i.d(t, {a: t}), t
    }, i.d = function (e, t) {
        for (var s in t) i.o(t, s) && !i.o(e, s) && Object.defineProperty(e, s, {enumerable: !0, get: t[s]})
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.b = document.baseURI || self.location.href, i.nc = void 0, function () {
        function e(e) {
            return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
        }

        function t(i, s) {
            void 0 === i && (i = {}), void 0 === s && (s = {}), Object.keys(s).forEach((r => {
                void 0 === i[r] ? i[r] = s[r] : e(s[r]) && e(i[r]) && Object.keys(s[r]).length > 0 && t(i[r], s[r])
            }))
        }

        const s = {
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
            return t(e, s), e
        }

        const n = {
            document: s,
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

        function a() {
            const e = "undefined" != typeof window ? window : {};
            return t(e, n), e
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

        function c(e, t) {
            void 0 === t && (t = "x");
            const i = a();
            let s, r, n;
            const o = function (e) {
                const t = a();
                let i;
                return t.getComputedStyle && (i = t.getComputedStyle(e, null)), !i && e.currentStyle && (i = e.currentStyle), i || (i = e.style), i
            }(e);
            return i.WebKitCSSMatrix ? (r = o.transform || o.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map((e => e.replace(",", "."))).join(", ")), n = new i.WebKitCSSMatrix("none" === r ? "" : r)) : (n = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = n.toString().split(",")), "x" === t && (r = i.WebKitCSSMatrix ? n.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === t && (r = i.WebKitCSSMatrix ? n.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), r || 0
        }

        function p(e) {
            return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
        }

        function u() {
            const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                t = ["__proto__", "constructor", "prototype"];
            for (let s = 1; s < arguments.length; s += 1) {
                const r = s < 0 || arguments.length <= s ? void 0 : arguments[s];
                if (null != r && (i = r, !("undefined" != typeof window && void 0 !== window.HTMLElement ? i instanceof HTMLElement : i && (1 === i.nodeType || 11 === i.nodeType)))) {
                    const i = Object.keys(Object(r)).filter((e => t.indexOf(e) < 0));
                    for (let t = 0, s = i.length; t < s; t += 1) {
                        const s = i[t], n = Object.getOwnPropertyDescriptor(r, s);
                        void 0 !== n && n.enumerable && (p(e[s]) && p(r[s]) ? r[s].__swiper__ ? e[s] = r[s] : u(e[s], r[s]) : !p(e[s]) && p(r[s]) ? (e[s] = {}, r[s].__swiper__ ? e[s] = r[s] : u(e[s], r[s])) : e[s] = r[s])
                    }
                }
            }
            var i;
            return e
        }

        function m(e, t, i) {
            e.style.setProperty(t, i)
        }

        function f(e) {
            let {swiper: t, targetPosition: i, side: s} = e;
            const r = a(), n = -t.translate;
            let o, l = null;
            const d = t.params.speed;
            t.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(t.cssModeFrameID);
            const c = i > n ? "next" : "prev", p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
                u = () => {
                    o = (new Date).getTime(), null === l && (l = o);
                    const e = Math.max(Math.min((o - l) / d, 1), 0), a = .5 - Math.cos(e * Math.PI) / 2;
                    let c = n + a * (i - n);
                    if (p(c, i) && (c = i), t.wrapperEl.scrollTo({[s]: c}), p(c, i)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                        t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({[s]: c})
                    })), void r.cancelAnimationFrame(t.cssModeFrameID);
                    t.cssModeFrameID = r.requestAnimationFrame(u)
                };
            u()
        }

        function h(e) {
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
            const i = document.createElement(e);
            return i.classList.add(...Array.isArray(t) ? t : o(t)), i
        }

        function b(e) {
            const t = a(), i = r(), s = e.getBoundingClientRect(), n = i.body, o = e.clientTop || n.clientTop || 0,
                l = e.clientLeft || n.clientLeft || 0, d = e === t ? t.scrollY : e.scrollTop,
                c = e === t ? t.scrollX : e.scrollLeft;
            return {top: s.top + d - o, left: s.left + c - l}
        }

        function y(e, t) {
            return a().getComputedStyle(e, null).getPropertyValue(t)
        }

        function x(e) {
            let t, i = e;
            if (i) {
                for (t = 0; null !== (i = i.previousSibling);) 1 === i.nodeType && (t += 1);
                return t
            }
        }

        function E(e, t) {
            const i = [];
            let s = e.parentElement;
            for (; s;) t ? s.matches(t) && i.push(s) : i.push(s), s = s.parentElement;
            return i
        }

        function S(e, t) {
            t && e.addEventListener("transitionend", (function i(s) {
                s.target === e && (t.call(e, s), e.removeEventListener("transitionend", i))
            }))
        }

        function T(e, t, i) {
            const s = a();
            return i ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
        }

        function A(e) {
            return (Array.isArray(e) ? e : [e]).filter((e => !!e))
        }

        let M, C, L;

        function P() {
            return M || (M = function () {
                const e = a(), t = r();
                return {
                    smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                    touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                }
            }()), M
        }

        function k(e) {
            return void 0 === e && (e = {}), C || (C = function (e) {
                let {userAgent: t} = void 0 === e ? {} : e;
                const i = P(), s = a(), r = s.navigator.platform, n = t || s.navigator.userAgent,
                    o = {ios: !1, android: !1}, l = s.screen.width, d = s.screen.height,
                    c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
                let p = n.match(/(iPad).*OS\s([\d_]+)/);
                const u = n.match(/(iPod)(.*OS\s([\d_]+))?/), m = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                    f = "Win32" === r;
                let h = "MacIntel" === r;
                return !p && h && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${d}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), h = !1), c && !f && (o.os = "android", o.android = !0), (p || m || u) && (o.os = "ios", o.ios = !0), o
            }(e)), C
        }

        var z = {
            on(e, t, i) {
                const s = this;
                if (!s.eventsListeners || s.destroyed) return s;
                if ("function" != typeof t) return s;
                const r = i ? "unshift" : "push";
                return e.split(" ").forEach((e => {
                    s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][r](t)
                })), s
            }, once(e, t, i) {
                const s = this;
                if (!s.eventsListeners || s.destroyed) return s;
                if ("function" != typeof t) return s;

                function r() {
                    s.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
                    for (var i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
                    t.apply(s, n)
                }

                return r.__emitterProxy = t, s.on(e, r, i)
            }, onAny(e, t) {
                const i = this;
                if (!i.eventsListeners || i.destroyed) return i;
                if ("function" != typeof e) return i;
                const s = t ? "unshift" : "push";
                return i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[s](e), i
            }, offAny(e) {
                const t = this;
                if (!t.eventsListeners || t.destroyed) return t;
                if (!t.eventsAnyListeners) return t;
                const i = t.eventsAnyListeners.indexOf(e);
                return i >= 0 && t.eventsAnyListeners.splice(i, 1), t
            }, off(e, t) {
                const i = this;
                return !i.eventsListeners || i.destroyed ? i : i.eventsListeners ? (e.split(" ").forEach((e => {
                    void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach(((s, r) => {
                        (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(r, 1)
                    }))
                })), i) : i
            }, emit() {
                const e = this;
                if (!e.eventsListeners || e.destroyed) return e;
                if (!e.eventsListeners) return e;
                let t, i, s;
                for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
                return "string" == typeof n[0] || Array.isArray(n[0]) ? (t = n[0], i = n.slice(1, n.length), s = e) : (t = n[0].events, i = n[0].data, s = n[0].context || e), i.unshift(s), (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                    e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                        e.apply(s, [t, ...i])
                    })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                        e.apply(s, i)
                    }))
                })), e
            }
        };
        const I = (e, t, i) => {
            t && !e.classList.contains(i) ? e.classList.add(i) : !t && e.classList.contains(i) && e.classList.remove(i)
        }, O = (e, t, i) => {
            t && !e.classList.contains(i) ? e.classList.add(i) : !t && e.classList.contains(i) && e.classList.remove(i)
        }, D = (e, t) => {
            if (!e || e.destroyed || !e.params) return;
            const i = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
            if (i) {
                let t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
                !t && e.isElement && (i.shadowRoot ? t = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame((() => {
                    i.shadowRoot && (t = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove())
                }))), t && t.remove()
            }
        }, $ = (e, t) => {
            if (!e.slides[t]) return;
            const i = e.slides[t].querySelector('[loading="lazy"]');
            i && i.removeAttribute("loading")
        }, B = e => {
            if (!e || e.destroyed || !e.params) return;
            let t = e.params.lazyPreloadPrevNext;
            const i = e.slides.length;
            if (!i || !t || t < 0) return;
            t = Math.min(t, i);
            const s = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                r = e.activeIndex;
            if (e.params.grid && e.params.grid.rows > 1) {
                const i = r, n = [i - t];
                return n.push(...Array.from({length: t}).map(((e, t) => i + s + t))), void e.slides.forEach(((t, i) => {
                    n.includes(t.column) && $(e, i)
                }))
            }
            const n = r + s - 1;
            if (e.params.rewind || e.params.loop) for (let s = r - t; s <= n + t; s += 1) {
                const t = (s % i + i) % i;
                (t < r || t > n) && $(e, t)
            } else for (let s = Math.max(r - t, 0); s <= Math.min(n + t, i - 1); s += 1) s !== r && (s > n || s < r) && $(e, s)
        };
        var Y = {
            updateSize: function () {
                const e = this;
                let t, i;
                const s = e.el;
                t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : s.clientWidth, i = void 0 !== e.params.height && null !== e.params.height ? e.params.height : s.clientHeight, 0 === t && e.isHorizontal() || 0 === i && e.isVertical() || (t = t - parseInt(y(s, "padding-left") || 0, 10) - parseInt(y(s, "padding-right") || 0, 10), i = i - parseInt(y(s, "padding-top") || 0, 10) - parseInt(y(s, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(i) && (i = 0), Object.assign(e, {
                    width: t,
                    height: i,
                    size: e.isHorizontal() ? t : i
                }))
            }, updateSlides: function () {
                const e = this;

                function t(t, i) {
                    return parseFloat(t.getPropertyValue(e.getDirectionLabel(i)) || 0)
                }

                const i = e.params, {wrapperEl: s, slidesEl: r, size: n, rtlTranslate: a, wrongRTL: o} = e,
                    l = e.virtual && i.virtual.enabled, d = l ? e.virtual.slides.length : e.slides.length,
                    c = g(r, `.${e.params.slideClass}, swiper-slide`), p = l ? e.virtual.slides.length : c.length;
                let u = [];
                const f = [], h = [];
                let v = i.slidesOffsetBefore;
                "function" == typeof v && (v = i.slidesOffsetBefore.call(e));
                let w = i.slidesOffsetAfter;
                "function" == typeof w && (w = i.slidesOffsetAfter.call(e));
                const b = e.snapGrid.length, x = e.slidesGrid.length;
                let E = i.spaceBetween, S = -v, A = 0, M = 0;
                if (void 0 === n) return;
                "string" == typeof E && E.indexOf("%") >= 0 ? E = parseFloat(E.replace("%", "")) / 100 * n : "string" == typeof E && (E = parseFloat(E)), e.virtualSize = -E, c.forEach((e => {
                    a ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                })), i.centeredSlides && i.cssMode && (m(s, "--swiper-centered-offset-before", ""), m(s, "--swiper-centered-offset-after", ""));
                const C = i.grid && i.grid.rows > 1 && e.grid;
                let L;
                C ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
                const P = "auto" === i.slidesPerView && i.breakpoints && Object.keys(i.breakpoints).filter((e => void 0 !== i.breakpoints[e].slidesPerView)).length > 0;
                for (let s = 0; s < p; s += 1) {
                    let r;
                    if (L = 0, c[s] && (r = c[s]), C && e.grid.updateSlide(s, r, c), !c[s] || "none" !== y(r, "display")) {
                        if ("auto" === i.slidesPerView) {
                            P && (c[s].style[e.getDirectionLabel("width")] = "");
                            const n = getComputedStyle(r), a = r.style.transform, o = r.style.webkitTransform;
                            if (a && (r.style.transform = "none"), o && (r.style.webkitTransform = "none"), i.roundLengths) L = e.isHorizontal() ? T(r, "width", !0) : T(r, "height", !0); else {
                                const e = t(n, "width"), i = t(n, "padding-left"), s = t(n, "padding-right"),
                                    a = t(n, "margin-left"), o = t(n, "margin-right"),
                                    l = n.getPropertyValue("box-sizing");
                                if (l && "border-box" === l) L = e + a + o; else {
                                    const {clientWidth: t, offsetWidth: n} = r;
                                    L = e + i + s + a + o + (n - t)
                                }
                            }
                            a && (r.style.transform = a), o && (r.style.webkitTransform = o), i.roundLengths && (L = Math.floor(L))
                        } else L = (n - (i.slidesPerView - 1) * E) / i.slidesPerView, i.roundLengths && (L = Math.floor(L)), c[s] && (c[s].style[e.getDirectionLabel("width")] = `${L}px`);
                        c[s] && (c[s].swiperSlideSize = L), h.push(L), i.centeredSlides ? (S = S + L / 2 + A / 2 + E, 0 === A && 0 !== s && (S = S - n / 2 - E), 0 === s && (S = S - n / 2 - E), Math.abs(S) < .001 && (S = 0), i.roundLengths && (S = Math.floor(S)), M % i.slidesPerGroup == 0 && u.push(S), f.push(S)) : (i.roundLengths && (S = Math.floor(S)), (M - Math.min(e.params.slidesPerGroupSkip, M)) % e.params.slidesPerGroup == 0 && u.push(S), f.push(S), S = S + L + E), e.virtualSize += L + E, A = L, M += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, n) + w, a && o && ("slide" === i.effect || "coverflow" === i.effect) && (s.style.width = `${e.virtualSize + E}px`), i.setWrapperSize && (s.style[e.getDirectionLabel("width")] = `${e.virtualSize + E}px`), C && e.grid.updateWrapperSize(L, u), !i.centeredSlides) {
                    const t = [];
                    for (let s = 0; s < u.length; s += 1) {
                        let r = u[s];
                        i.roundLengths && (r = Math.floor(r)), u[s] <= e.virtualSize - n && t.push(r)
                    }
                    u = t, Math.floor(e.virtualSize - n) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - n)
                }
                if (l && i.loop) {
                    const t = h[0] + E;
                    if (i.slidesPerGroup > 1) {
                        const s = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / i.slidesPerGroup),
                            r = t * i.slidesPerGroup;
                        for (let e = 0; e < s; e += 1) u.push(u[u.length - 1] + r)
                    }
                    for (let s = 0; s < e.virtual.slidesBefore + e.virtual.slidesAfter; s += 1) 1 === i.slidesPerGroup && u.push(u[u.length - 1] + t), f.push(f[f.length - 1] + t), e.virtualSize += t
                }
                if (0 === u.length && (u = [0]), 0 !== E) {
                    const t = e.isHorizontal() && a ? "marginLeft" : e.getDirectionLabel("marginRight");
                    c.filter(((e, t) => !(i.cssMode && !i.loop) || t !== c.length - 1)).forEach((e => {
                        e.style[t] = `${E}px`
                    }))
                }
                if (i.centeredSlides && i.centeredSlidesBounds) {
                    let e = 0;
                    h.forEach((t => {
                        e += t + (E || 0)
                    })), e -= E;
                    const t = e - n;
                    u = u.map((e => e <= 0 ? -v : e > t ? t + w : e))
                }
                if (i.centerInsufficientSlides) {
                    let e = 0;
                    h.forEach((t => {
                        e += t + (E || 0)
                    })), e -= E;
                    const t = (i.slidesOffsetBefore || 0) + (i.slidesOffsetAfter || 0);
                    if (e + t < n) {
                        const i = (n - e - t) / 2;
                        u.forEach(((e, t) => {
                            u[t] = e - i
                        })), f.forEach(((e, t) => {
                            f[t] = e + i
                        }))
                    }
                }
                if (Object.assign(e, {
                    slides: c,
                    snapGrid: u,
                    slidesGrid: f,
                    slidesSizesGrid: h
                }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
                    m(s, "--swiper-centered-offset-before", -u[0] + "px"), m(s, "--swiper-centered-offset-after", e.size / 2 - h[h.length - 1] / 2 + "px");
                    const t = -e.snapGrid[0], i = -e.slidesGrid[0];
                    e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + i))
                }
                if (p !== d && e.emit("slidesLengthChange"), u.length !== b && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== x && e.emit("slidesGridLengthChange"), i.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(l || i.cssMode || "slide" !== i.effect && "fade" !== i.effect)) {
                    const t = `${i.containerModifierClass}backface-hidden`, s = e.el.classList.contains(t);
                    p <= i.maxBackfaceHiddenSlides ? s || e.el.classList.add(t) : s && e.el.classList.remove(t)
                }
            }, updateAutoHeight: function (e) {
                const t = this, i = [], s = t.virtual && t.params.virtual.enabled;
                let r, n = 0;
                "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                const a = e => s ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
                if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) if (t.params.centeredSlides) (t.visibleSlides || []).forEach((e => {
                    i.push(e)
                })); else for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
                    const e = t.activeIndex + r;
                    if (e > t.slides.length && !s) break;
                    i.push(a(e))
                } else i.push(a(t.activeIndex));
                for (r = 0; r < i.length; r += 1) if (void 0 !== i[r]) {
                    const e = i[r].offsetHeight;
                    n = e > n ? e : n
                }
                (n || 0 === n) && (t.wrapperEl.style.height = `${n}px`)
            }, updateSlidesOffset: function () {
                const e = this, t = e.slides,
                    i = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
                for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = (e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop) - i - e.cssOverflowAdjustment()
            }, updateSlidesProgress: function (e) {
                void 0 === e && (e = this && this.translate || 0);
                const t = this, i = t.params, {slides: s, rtlTranslate: r, snapGrid: n} = t;
                if (0 === s.length) return;
                void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
                let a = -e;
                r && (a = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                let o = i.spaceBetween;
                "string" == typeof o && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * t.size : "string" == typeof o && (o = parseFloat(o));
                for (let e = 0; e < s.length; e += 1) {
                    const l = s[e];
                    let d = l.swiperSlideOffset;
                    i.cssMode && i.centeredSlides && (d -= s[0].swiperSlideOffset);
                    const c = (a + (i.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
                        p = (a - n[0] + (i.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
                        u = -(a - d), m = u + t.slidesSizesGrid[e], f = u >= 0 && u <= t.size - t.slidesSizesGrid[e],
                        h = u >= 0 && u < t.size - 1 || m > 1 && m <= t.size || u <= 0 && m >= t.size;
                    h && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e)), I(l, h, i.slideVisibleClass), I(l, f, i.slideFullyVisibleClass), l.progress = r ? -c : c, l.originalProgress = r ? -p : p
                }
            }, updateProgress: function (e) {
                const t = this;
                if (void 0 === e) {
                    const i = t.rtlTranslate ? -1 : 1;
                    e = t && t.translate && t.translate * i || 0
                }
                const i = t.params, s = t.maxTranslate() - t.minTranslate();
                let {progress: r, isBeginning: n, isEnd: a, progressLoop: o} = t;
                const l = n, d = a;
                if (0 === s) r = 0, n = !0, a = !0; else {
                    r = (e - t.minTranslate()) / s;
                    const i = Math.abs(e - t.minTranslate()) < 1, o = Math.abs(e - t.maxTranslate()) < 1;
                    n = i || r <= 0, a = o || r >= 1, i && (r = 0), o && (r = 1)
                }
                if (i.loop) {
                    const i = t.getSlideIndexByData(0), s = t.getSlideIndexByData(t.slides.length - 1),
                        r = t.slidesGrid[i], n = t.slidesGrid[s], a = t.slidesGrid[t.slidesGrid.length - 1],
                        l = Math.abs(e);
                    o = l >= r ? (l - r) / a : (l + a - n) / a, o > 1 && (o -= 1)
                }
                Object.assign(t, {
                    progress: r,
                    progressLoop: o,
                    isBeginning: n,
                    isEnd: a
                }), (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && t.updateSlidesProgress(e), n && !l && t.emit("reachBeginning toEdge"), a && !d && t.emit("reachEnd toEdge"), (l && !n || d && !a) && t.emit("fromEdge"), t.emit("progress", r)
            }, updateSlidesClasses: function () {
                const e = this, {slides: t, params: i, slidesEl: s, activeIndex: r} = e,
                    n = e.virtual && i.virtual.enabled, a = e.grid && i.grid && i.grid.rows > 1,
                    o = e => g(s, `.${i.slideClass}${e}, swiper-slide${e}`)[0];
                let l, d, c;
                if (n) if (i.loop) {
                    let t = r - e.virtual.slidesBefore;
                    t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), l = o(`[data-swiper-slide-index="${t}"]`)
                } else l = o(`[data-swiper-slide-index="${r}"]`); else a ? (l = t.filter((e => e.column === r))[0], c = t.filter((e => e.column === r + 1))[0], d = t.filter((e => e.column === r - 1))[0]) : l = t[r];
                l && (a || (c = function (e, t) {
                    const i = [];
                    for (; e.nextElementSibling;) {
                        const s = e.nextElementSibling;
                        t ? s.matches(t) && i.push(s) : i.push(s), e = s
                    }
                    return i
                }(l, `.${i.slideClass}, swiper-slide`)[0], i.loop && !c && (c = t[0]), d = function (e, t) {
                    const i = [];
                    for (; e.previousElementSibling;) {
                        const s = e.previousElementSibling;
                        t ? s.matches(t) && i.push(s) : i.push(s), e = s
                    }
                    return i
                }(l, `.${i.slideClass}, swiper-slide`)[0], i.loop && 0 === !d && (d = t[t.length - 1]))), t.forEach((e => {
                    O(e, e === l, i.slideActiveClass), O(e, e === c, i.slideNextClass), O(e, e === d, i.slidePrevClass)
                })), e.emitSlidesClasses()
            }, updateActiveIndex: function (e) {
                const t = this, i = t.rtlTranslate ? t.translate : -t.translate, {
                    snapGrid: s,
                    params: r,
                    activeIndex: n,
                    realIndex: a,
                    snapIndex: o
                } = t;
                let l, d = e;
                const c = e => {
                    let i = e - t.virtual.slidesBefore;
                    return i < 0 && (i = t.virtual.slides.length + i), i >= t.virtual.slides.length && (i -= t.virtual.slides.length), i
                };
                if (void 0 === d && (d = function (e) {
                    const {slidesGrid: t, params: i} = e, s = e.rtlTranslate ? e.translate : -e.translate;
                    let r;
                    for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? s >= t[e] && s < t[e + 1] - (t[e + 1] - t[e]) / 2 ? r = e : s >= t[e] && s < t[e + 1] && (r = e + 1) : s >= t[e] && (r = e);
                    return i.normalizeSlideIndex && (r < 0 || void 0 === r) && (r = 0), r
                }(t)), s.indexOf(i) >= 0) l = s.indexOf(i); else {
                    const e = Math.min(r.slidesPerGroupSkip, d);
                    l = e + Math.floor((d - e) / r.slidesPerGroup)
                }
                if (l >= s.length && (l = s.length - 1), d === n && !t.params.loop) return void (l !== o && (t.snapIndex = l, t.emit("snapIndexChange")));
                if (d === n && t.params.loop && t.virtual && t.params.virtual.enabled) return void (t.realIndex = c(d));
                const p = t.grid && r.grid && r.grid.rows > 1;
                let u;
                if (t.virtual && r.virtual.enabled && r.loop) u = c(d); else if (p) {
                    const e = t.slides.filter((e => e.column === d))[0];
                    let i = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                    Number.isNaN(i) && (i = Math.max(t.slides.indexOf(e), 0)), u = Math.floor(i / r.grid.rows)
                } else if (t.slides[d]) {
                    const e = t.slides[d].getAttribute("data-swiper-slide-index");
                    u = e ? parseInt(e, 10) : d
                } else u = d;
                Object.assign(t, {
                    previousSnapIndex: o,
                    snapIndex: l,
                    previousRealIndex: a,
                    realIndex: u,
                    previousIndex: n,
                    activeIndex: d
                }), t.initialized && B(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (a !== u && t.emit("realIndexChange"), t.emit("slideChange"))
            }, updateClickedSlide: function (e, t) {
                const i = this, s = i.params;
                let r = e.closest(`.${s.slideClass}, swiper-slide`);
                !r && i.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {
                    !r && e.matches && e.matches(`.${s.slideClass}, swiper-slide`) && (r = e)
                }));
                let n, a = !1;
                if (r) for (let e = 0; e < i.slides.length; e += 1) if (i.slides[e] === r) {
                    a = !0, n = e;
                    break
                }
                if (!r || !a) return i.clickedSlide = void 0, void (i.clickedIndex = void 0);
                i.clickedSlide = r, i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : i.clickedIndex = n, s.slideToClickedSlide && void 0 !== i.clickedIndex && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide()
            }
        };

        function G(e) {
            let {swiper: t, runCallbacks: i, direction: s, step: r} = e;
            const {activeIndex: n, previousIndex: a} = t;
            let o = s;
            if (o || (o = n > a ? "next" : n < a ? "prev" : "reset"), t.emit(`transition${r}`), i && n !== a) {
                if ("reset" === o) return void t.emit(`slideResetTransition${r}`);
                t.emit(`slideChangeTransition${r}`), "next" === o ? t.emit(`slideNextTransition${r}`) : t.emit(`slidePrevTransition${r}`)
            }
        }

        var N = {
            slideTo: function (e, t, i, s, r) {
                void 0 === e && (e = 0), void 0 === i && (i = !0), "string" == typeof e && (e = parseInt(e, 10));
                const n = this;
                let a = e;
                a < 0 && (a = 0);
                const {
                    params: o,
                    snapGrid: l,
                    slidesGrid: d,
                    previousIndex: c,
                    activeIndex: p,
                    rtlTranslate: u,
                    wrapperEl: m,
                    enabled: h
                } = n;
                if (!h && !s && !r || n.destroyed || n.animating && o.preventInteractionOnTransition) return !1;
                void 0 === t && (t = n.params.speed);
                const g = Math.min(n.params.slidesPerGroupSkip, a);
                let v = g + Math.floor((a - g) / n.params.slidesPerGroup);
                v >= l.length && (v = l.length - 1);
                const w = -l[v];
                if (o.normalizeSlideIndex) for (let e = 0; e < d.length; e += 1) {
                    const t = -Math.floor(100 * w), i = Math.floor(100 * d[e]), s = Math.floor(100 * d[e + 1]);
                    void 0 !== d[e + 1] ? t >= i && t < s - (s - i) / 2 ? a = e : t >= i && t < s && (a = e + 1) : t >= i && (a = e)
                }
                if (n.initialized && a !== p) {
                    if (!n.allowSlideNext && (u ? w > n.translate && w > n.minTranslate() : w < n.translate && w < n.minTranslate())) return !1;
                    if (!n.allowSlidePrev && w > n.translate && w > n.maxTranslate() && (p || 0) !== a) return !1
                }
                let b;
                if (a !== (c || 0) && i && n.emit("beforeSlideChangeStart"), n.updateProgress(w), b = a > p ? "next" : a < p ? "prev" : "reset", u && -w === n.translate || !u && w === n.translate) return n.updateActiveIndex(a), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== o.effect && n.setTranslate(w), "reset" !== b && (n.transitionStart(i, b), n.transitionEnd(i, b)), !1;
                if (o.cssMode) {
                    const e = n.isHorizontal(), i = u ? w : -w;
                    if (0 === t) {
                        const t = n.virtual && n.params.virtual.enabled;
                        t && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), t && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                            m[e ? "scrollLeft" : "scrollTop"] = i
                        }))) : m[e ? "scrollLeft" : "scrollTop"] = i, t && requestAnimationFrame((() => {
                            n.wrapperEl.style.scrollSnapType = "", n._immediateVirtual = !1
                        }))
                    } else {
                        if (!n.support.smoothScroll) return f({
                            swiper: n,
                            targetPosition: i,
                            side: e ? "left" : "top"
                        }), !0;
                        m.scrollTo({[e ? "left" : "top"]: i, behavior: "smooth"})
                    }
                    return !0
                }
                return n.setTransition(t), n.setTranslate(w), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, s), n.transitionStart(i, b), 0 === t ? n.transitionEnd(i, b) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function (e) {
                    n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(i, b))
                }), n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)), !0
            }, slideToLoop: function (e, t, i, s) {
                void 0 === e && (e = 0), void 0 === i && (i = !0), "string" == typeof e && (e = parseInt(e, 10));
                const r = this;
                if (r.destroyed) return;
                void 0 === t && (t = r.params.speed);
                const n = r.grid && r.params.grid && r.params.grid.rows > 1;
                let a = e;
                if (r.params.loop) if (r.virtual && r.params.virtual.enabled) a += r.virtual.slidesBefore; else {
                    let e;
                    if (n) {
                        const t = a * r.params.grid.rows;
                        e = r.slides.filter((e => 1 * e.getAttribute("data-swiper-slide-index") === t))[0].column
                    } else e = r.getSlideIndexByData(a);
                    const t = n ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length, {centeredSlides: i} = r.params;
                    let o = r.params.slidesPerView;
                    "auto" === o ? o = r.slidesPerViewDynamic() : (o = Math.ceil(parseFloat(r.params.slidesPerView, 10)), i && o % 2 == 0 && (o += 1));
                    let l = t - e < o;
                    if (i && (l = l || e < Math.ceil(o / 2)), s && i && "auto" !== r.params.slidesPerView && !n && (l = !1), l) {
                        const s = i ? e < r.activeIndex ? "prev" : "next" : e - r.activeIndex - 1 < r.params.slidesPerView ? "next" : "prev";
                        r.loopFix({
                            direction: s,
                            slideTo: !0,
                            activeSlideIndex: "next" === s ? e + 1 : e - t + 1,
                            slideRealIndex: "next" === s ? r.realIndex : void 0
                        })
                    }
                    if (n) {
                        const e = a * r.params.grid.rows;
                        a = r.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0].column
                    } else a = r.getSlideIndexByData(a)
                }
                return requestAnimationFrame((() => {
                    r.slideTo(a, t, i, s)
                })), r
            }, slideNext: function (e, t, i) {
                void 0 === t && (t = !0);
                const s = this, {enabled: r, params: n, animating: a} = s;
                if (!r || s.destroyed) return s;
                void 0 === e && (e = s.params.speed);
                let o = n.slidesPerGroup;
                "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
                const l = s.activeIndex < n.slidesPerGroupSkip ? 1 : o, d = s.virtual && n.virtual.enabled;
                if (n.loop) {
                    if (a && !d && n.loopPreventsSliding) return !1;
                    if (s.loopFix({direction: "next"}), s._clientLeft = s.wrapperEl.clientLeft, s.activeIndex === s.slides.length - 1 && n.cssMode) return requestAnimationFrame((() => {
                        s.slideTo(s.activeIndex + l, e, t, i)
                    })), !0
                }
                return n.rewind && s.isEnd ? s.slideTo(0, e, t, i) : s.slideTo(s.activeIndex + l, e, t, i)
            }, slidePrev: function (e, t, i) {
                void 0 === t && (t = !0);
                const s = this, {params: r, snapGrid: n, slidesGrid: a, rtlTranslate: o, enabled: l, animating: d} = s;
                if (!l || s.destroyed) return s;
                void 0 === e && (e = s.params.speed);
                const c = s.virtual && r.virtual.enabled;
                if (r.loop) {
                    if (d && !c && r.loopPreventsSliding) return !1;
                    s.loopFix({direction: "prev"}), s._clientLeft = s.wrapperEl.clientLeft
                }

                function p(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }

                const u = p(o ? s.translate : -s.translate), m = n.map((e => p(e)));
                let f = n[m.indexOf(u) - 1];
                if (void 0 === f && r.cssMode) {
                    let e;
                    n.forEach(((t, i) => {
                        u >= t && (e = i)
                    })), void 0 !== e && (f = n[e > 0 ? e - 1 : e])
                }
                let h = 0;
                if (void 0 !== f && (h = a.indexOf(f), h < 0 && (h = s.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (h = h - s.slidesPerViewDynamic("previous", !0) + 1, h = Math.max(h, 0))), r.rewind && s.isBeginning) {
                    const r = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
                    return s.slideTo(r, e, t, i)
                }
                return r.loop && 0 === s.activeIndex && r.cssMode ? (requestAnimationFrame((() => {
                    s.slideTo(h, e, t, i)
                })), !0) : s.slideTo(h, e, t, i)
            }, slideReset: function (e, t, i) {
                void 0 === t && (t = !0);
                const s = this;
                if (!s.destroyed) return void 0 === e && (e = s.params.speed), s.slideTo(s.activeIndex, e, t, i)
            }, slideToClosest: function (e, t, i, s) {
                void 0 === t && (t = !0), void 0 === s && (s = .5);
                const r = this;
                if (r.destroyed) return;
                void 0 === e && (e = r.params.speed);
                let n = r.activeIndex;
                const a = Math.min(r.params.slidesPerGroupSkip, n),
                    o = a + Math.floor((n - a) / r.params.slidesPerGroup),
                    l = r.rtlTranslate ? r.translate : -r.translate;
                if (l >= r.snapGrid[o]) {
                    const e = r.snapGrid[o];
                    l - e > (r.snapGrid[o + 1] - e) * s && (n += r.params.slidesPerGroup)
                } else {
                    const e = r.snapGrid[o - 1];
                    l - e <= (r.snapGrid[o] - e) * s && (n -= r.params.slidesPerGroup)
                }
                return n = Math.max(n, 0), n = Math.min(n, r.slidesGrid.length - 1), r.slideTo(n, e, t, i)
            }, slideToClickedSlide: function () {
                const e = this;
                if (e.destroyed) return;
                const {params: t, slidesEl: i} = e,
                    s = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                let r, n = e.clickedIndex;
                const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
                if (t.loop) {
                    if (e.animating) return;
                    r = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? n < e.loopedSlides - s / 2 || n > e.slides.length - e.loopedSlides + s / 2 ? (e.loopFix(), n = e.getSlideIndex(g(i, `${a}[data-swiper-slide-index="${r}"]`)[0]), l((() => {
                        e.slideTo(n)
                    }))) : e.slideTo(n) : n > e.slides.length - s ? (e.loopFix(), n = e.getSlideIndex(g(i, `${a}[data-swiper-slide-index="${r}"]`)[0]), l((() => {
                        e.slideTo(n)
                    }))) : e.slideTo(n)
                } else e.slideTo(n)
            }
        }, _ = {
            loopCreate: function (e) {
                const t = this, {params: i, slidesEl: s} = t;
                if (!i.loop || t.virtual && t.params.virtual.enabled) return;
                const r = () => {
                        g(s, `.${i.slideClass}, swiper-slide`).forEach(((e, t) => {
                            e.setAttribute("data-swiper-slide-index", t)
                        }))
                    }, n = t.grid && i.grid && i.grid.rows > 1, a = i.slidesPerGroup * (n ? i.grid.rows : 1),
                    o = t.slides.length % a != 0, l = n && t.slides.length % i.grid.rows != 0, d = e => {
                        for (let s = 0; s < e; s += 1) {
                            const e = t.isElement ? w("swiper-slide", [i.slideBlankClass]) : w("div", [i.slideClass, i.slideBlankClass]);
                            t.slidesEl.append(e)
                        }
                    };
                o ? (i.loopAddBlankSlides ? (d(a - t.slides.length % a), t.recalcSlides(), t.updateSlides()) : v("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), r()) : l ? (i.loopAddBlankSlides ? (d(i.grid.rows - t.slides.length % i.grid.rows), t.recalcSlides(), t.updateSlides()) : v("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), r()) : r(), t.loopFix({
                    slideRealIndex: e,
                    direction: i.centeredSlides ? void 0 : "next"
                })
            }, loopFix: function (e) {
                let {
                    slideRealIndex: t,
                    slideTo: i = !0,
                    direction: s,
                    setTranslate: r,
                    activeSlideIndex: n,
                    byController: a,
                    byMousewheel: o
                } = void 0 === e ? {} : e;
                const l = this;
                if (!l.params.loop) return;
                l.emit("beforeLoopFix");
                const {
                    slides: d,
                    allowSlidePrev: c,
                    allowSlideNext: p,
                    slidesEl: u,
                    params: m
                } = l, {centeredSlides: f} = m;
                if (l.allowSlidePrev = !0, l.allowSlideNext = !0, l.virtual && m.virtual.enabled) return i && (m.centeredSlides || 0 !== l.snapIndex ? m.centeredSlides && l.snapIndex < m.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0) : l.slideTo(l.virtual.slides.length, 0, !1, !0)), l.allowSlidePrev = c, l.allowSlideNext = p, void l.emit("loopFix");
                let h = m.slidesPerView;
                "auto" === h ? h = l.slidesPerViewDynamic() : (h = Math.ceil(parseFloat(m.slidesPerView, 10)), f && h % 2 == 0 && (h += 1));
                const g = m.slidesPerGroupAuto ? h : m.slidesPerGroup;
                let w = g;
                w % g != 0 && (w += g - w % g), w += m.loopAdditionalSlides, l.loopedSlides = w;
                const b = l.grid && m.grid && m.grid.rows > 1;
                d.length < h + w ? v("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === m.grid.fill && v("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
                const y = [], x = [];
                let E = l.activeIndex;
                void 0 === n ? n = l.getSlideIndex(d.filter((e => e.classList.contains(m.slideActiveClass)))[0]) : E = n;
                const S = "next" === s || !s, T = "prev" === s || !s;
                let A = 0, M = 0;
                const C = b ? Math.ceil(d.length / m.grid.rows) : d.length,
                    L = (b ? d[n].column : n) + (f && void 0 === r ? -h / 2 + .5 : 0);
                if (L < w) {
                    A = Math.max(w - L, g);
                    for (let e = 0; e < w - L; e += 1) {
                        const t = e - Math.floor(e / C) * C;
                        if (b) {
                            const e = C - t - 1;
                            for (let t = d.length - 1; t >= 0; t -= 1) d[t].column === e && y.push(t)
                        } else y.push(C - t - 1)
                    }
                } else if (L + h > C - w) {
                    M = Math.max(L - (C - 2 * w), g);
                    for (let e = 0; e < M; e += 1) {
                        const t = e - Math.floor(e / C) * C;
                        b ? d.forEach(((e, i) => {
                            e.column === t && x.push(i)
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
                })), m.watchSlidesProgress && l.updateSlidesOffset(), i) if (y.length > 0 && T) {
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
                if (l.allowSlidePrev = c, l.allowSlideNext = p, l.controller && l.controller.control && !a) {
                    const e = {slideRealIndex: t, direction: s, setTranslate: r, activeSlideIndex: n, byController: !0};
                    Array.isArray(l.controller.control) ? l.controller.control.forEach((t => {
                        !t.destroyed && t.params.loop && t.loopFix({
                            ...e,
                            slideTo: t.params.slidesPerView === m.slidesPerView && i
                        })
                    })) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix({
                        ...e,
                        slideTo: l.controller.control.params.slidesPerView === m.slidesPerView && i
                    })
                }
                l.emit("loopFix")
            }, loopDestroy: function () {
                const e = this, {params: t, slidesEl: i} = e;
                if (!t.loop || e.virtual && e.params.virtual.enabled) return;
                e.recalcSlides();
                const s = [];
                e.slides.forEach((e => {
                    const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                    s[t] = e
                })), e.slides.forEach((e => {
                    e.removeAttribute("data-swiper-slide-index")
                })), s.forEach((e => {
                    i.append(e)
                })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
            }
        };

        function R(e, t, i) {
            const s = a(), {params: r} = e, n = r.edgeSwipeDetection, o = r.edgeSwipeThreshold;
            return !n || !(i <= o || i >= s.innerWidth - o) || "prevent" === n && (t.preventDefault(), !0)
        }

        function F(e) {
            const t = this, i = r();
            let s = e;
            s.originalEvent && (s = s.originalEvent);
            const n = t.touchEventsData;
            if ("pointerdown" === s.type) {
                if (null !== n.pointerId && n.pointerId !== s.pointerId) return;
                n.pointerId = s.pointerId
            } else "touchstart" === s.type && 1 === s.targetTouches.length && (n.touchId = s.targetTouches[0].identifier);
            if ("touchstart" === s.type) return void R(t, s, s.targetTouches[0].pageX);
            const {params: o, touches: l, enabled: c} = t;
            if (!c) return;
            if (!o.simulateTouch && "mouse" === s.pointerType) return;
            if (t.animating && o.preventInteractionOnTransition) return;
            !t.animating && o.cssMode && o.loop && t.loopFix();
            let p = s.target;
            if ("wrapper" === o.touchEventsTarget && !t.wrapperEl.contains(p)) return;
            if ("which" in s && 3 === s.which) return;
            if ("button" in s && s.button > 0) return;
            if (n.isTouched && n.isMoved) return;
            const u = !!o.noSwipingClass && "" !== o.noSwipingClass, m = s.composedPath ? s.composedPath() : s.path;
            u && s.target && s.target.shadowRoot && m && (p = m[0]);
            const f = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
                h = !(!s.target || !s.target.shadowRoot);
            if (o.noSwiping && (h ? function (e, t) {
                return void 0 === t && (t = this), function t(i) {
                    if (!i || i === r() || i === a()) return null;
                    i.assignedSlot && (i = i.assignedSlot);
                    const s = i.closest(e);
                    return s || i.getRootNode ? s || t(i.getRootNode().host) : null
                }(t)
            }(f, p) : p.closest(f))) return void (t.allowClick = !0);
            if (o.swipeHandler && !p.closest(o.swipeHandler)) return;
            l.currentX = s.pageX, l.currentY = s.pageY;
            const g = l.currentX, v = l.currentY;
            if (!R(t, s, g)) return;
            Object.assign(n, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }), l.startX = g, l.startY = v, n.touchStartTime = d(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, o.threshold > 0 && (n.allowThresholdMove = !1);
            let w = !0;
            p.matches(n.focusableElements) && (w = !1, "SELECT" === p.nodeName && (n.isTouched = !1)), i.activeElement && i.activeElement.matches(n.focusableElements) && i.activeElement !== p && i.activeElement.blur();
            const b = w && t.allowTouchMove && o.touchStartPreventDefault;
            !o.touchStartForcePreventDefault && !b || p.isContentEditable || s.preventDefault(), o.freeMode && o.freeMode.enabled && t.freeMode && t.animating && !o.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", s)
        }

        function q(e) {
            const t = r(), i = this, s = i.touchEventsData, {params: n, touches: a, rtlTranslate: o, enabled: l} = i;
            if (!l) return;
            if (!n.simulateTouch && "mouse" === e.pointerType) return;
            let c, p = e;
            if (p.originalEvent && (p = p.originalEvent), "pointermove" === p.type) {
                if (null !== s.touchId) return;
                if (p.pointerId !== s.pointerId) return
            }
            if ("touchmove" === p.type) {
                if (c = [...p.changedTouches].filter((e => e.identifier === s.touchId))[0], !c || c.identifier !== s.touchId) return
            } else c = p;
            if (!s.isTouched) return void (s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", p));
            const u = c.pageX, m = c.pageY;
            if (p.preventedByNestedSwiper) return a.startX = u, void (a.startY = m);
            if (!i.allowTouchMove) return p.target.matches(s.focusableElements) || (i.allowClick = !1), void (s.isTouched && (Object.assign(a, {
                startX: u,
                startY: m,
                currentX: u,
                currentY: m
            }), s.touchStartTime = d()));
            if (n.touchReleaseOnEdges && !n.loop) if (i.isVertical()) {
                if (m < a.startY && i.translate <= i.maxTranslate() || m > a.startY && i.translate >= i.minTranslate()) return s.isTouched = !1, void (s.isMoved = !1)
            } else if (u < a.startX && i.translate <= i.maxTranslate() || u > a.startX && i.translate >= i.minTranslate()) return;
            if (t.activeElement && p.target === t.activeElement && p.target.matches(s.focusableElements)) return s.isMoved = !0, void (i.allowClick = !1);
            s.allowTouchCallbacks && i.emit("touchMove", p), a.previousX = a.currentX, a.previousY = a.currentY, a.currentX = u, a.currentY = m;
            const f = a.currentX - a.startX, h = a.currentY - a.startY;
            if (i.params.threshold && Math.sqrt(f ** 2 + h ** 2) < i.params.threshold) return;
            if (void 0 === s.isScrolling) {
                let e;
                i.isHorizontal() && a.currentY === a.startY || i.isVertical() && a.currentX === a.startX ? s.isScrolling = !1 : f * f + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(f)) / Math.PI, s.isScrolling = i.isHorizontal() ? e > n.touchAngle : 90 - e > n.touchAngle)
            }
            if (s.isScrolling && i.emit("touchMoveOpposite", p), void 0 === s.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (s.startMoving = !0)), s.isScrolling || "touchmove" === p.type && s.preventTouchMoveFromPointerMove) return void (s.isTouched = !1);
            if (!s.startMoving) return;
            i.allowClick = !1, !n.cssMode && p.cancelable && p.preventDefault(), n.touchMoveStopPropagation && !n.nested && p.stopPropagation();
            let g = i.isHorizontal() ? f : h,
                v = i.isHorizontal() ? a.currentX - a.previousX : a.currentY - a.previousY;
            n.oneWayMovement && (g = Math.abs(g) * (o ? 1 : -1), v = Math.abs(v) * (o ? 1 : -1)), a.diff = g, g *= n.touchRatio, o && (g = -g, v = -v);
            const w = i.touchesDirection;
            i.swipeDirection = g > 0 ? "prev" : "next", i.touchesDirection = v > 0 ? "prev" : "next";
            const b = i.params.loop && !n.cssMode,
                y = "next" === i.touchesDirection && i.allowSlideNext || "prev" === i.touchesDirection && i.allowSlidePrev;
            if (!s.isMoved) {
                if (b && y && i.loopFix({direction: i.swipeDirection}), s.startTranslate = i.getTranslate(), i.setTransition(0), i.animating) {
                    const e = new window.CustomEvent("transitionend", {
                        bubbles: !0,
                        cancelable: !0,
                        detail: {bySwiperTouchMove: !0}
                    });
                    i.wrapperEl.dispatchEvent(e)
                }
                s.allowMomentumBounce = !1, !n.grabCursor || !0 !== i.allowSlideNext && !0 !== i.allowSlidePrev || i.setGrabCursor(!0), i.emit("sliderFirstMove", p)
            }
            if ((new Date).getTime(), s.isMoved && s.allowThresholdMove && w !== i.touchesDirection && b && y && Math.abs(g) >= 1) return Object.assign(a, {
                startX: u,
                startY: m,
                currentX: u,
                currentY: m,
                startTranslate: s.currentTranslate
            }), s.loopSwapReset = !0, void (s.startTranslate = s.currentTranslate);
            i.emit("sliderMove", p), s.isMoved = !0, s.currentTranslate = g + s.startTranslate;
            let x = !0, E = n.resistanceRatio;
            if (n.touchReleaseOnEdges && (E = 0), g > 0 ? (b && y && s.allowThresholdMove && s.currentTranslate > (n.centeredSlides ? i.minTranslate() - i.slidesSizesGrid[i.activeIndex + 1] : i.minTranslate()) && i.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0
            }), s.currentTranslate > i.minTranslate() && (x = !1, n.resistance && (s.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + s.startTranslate + g) ** E))) : g < 0 && (b && y && s.allowThresholdMove && s.currentTranslate < (n.centeredSlides ? i.maxTranslate() + i.slidesSizesGrid[i.slidesSizesGrid.length - 1] : i.maxTranslate()) && i.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex: i.slides.length - ("auto" === n.slidesPerView ? i.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10)))
            }), s.currentTranslate < i.maxTranslate() && (x = !1, n.resistance && (s.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - s.startTranslate - g) ** E))), x && (p.preventedByNestedSwiper = !0), !i.allowSlideNext && "next" === i.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && "prev" === i.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), i.allowSlidePrev || i.allowSlideNext || (s.currentTranslate = s.startTranslate), n.threshold > 0) {
                if (!(Math.abs(g) > n.threshold || s.allowThresholdMove)) return void (s.currentTranslate = s.startTranslate);
                if (!s.allowThresholdMove) return s.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, s.currentTranslate = s.startTranslate, void (a.diff = i.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
            }
            n.followFinger && !n.cssMode && ((n.freeMode && n.freeMode.enabled && i.freeMode || n.watchSlidesProgress) && (i.updateActiveIndex(), i.updateSlidesClasses()), n.freeMode && n.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(), i.updateProgress(s.currentTranslate), i.setTranslate(s.currentTranslate))
        }

        function H(e) {
            const t = this, i = t.touchEventsData;
            let s, r = e;
            if (r.originalEvent && (r = r.originalEvent), "touchend" === r.type || "touchcancel" === r.type) {
                if (s = [...r.changedTouches].filter((e => e.identifier === i.touchId))[0], !s || s.identifier !== i.touchId) return
            } else {
                if (null !== i.touchId) return;
                if (r.pointerId !== i.pointerId) return;
                s = r
            }
            if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(r.type) && (!["pointercancel", "contextmenu"].includes(r.type) || !t.browser.isSafari && !t.browser.isWebView)) return;
            i.pointerId = null, i.touchId = null;
            const {params: n, touches: a, rtlTranslate: o, slidesGrid: c, enabled: p} = t;
            if (!p) return;
            if (!n.simulateTouch && "mouse" === r.pointerType) return;
            if (i.allowTouchCallbacks && t.emit("touchEnd", r), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && n.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
            n.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            const u = d(), m = u - i.touchStartTime;
            if (t.allowClick) {
                const e = r.path || r.composedPath && r.composedPath();
                t.updateClickedSlide(e && e[0] || r.target, e), t.emit("tap click", r), m < 300 && u - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", r)
            }
            if (i.lastClickTime = d(), l((() => {
                t.destroyed || (t.allowClick = !0)
            })), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff && !i.loopSwapReset || i.currentTranslate === i.startTranslate && !i.loopSwapReset) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
            let f;
            if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, f = n.followFinger ? o ? t.translate : -t.translate : -i.currentTranslate, n.cssMode) return;
            if (n.freeMode && n.freeMode.enabled) return void t.freeMode.onTouchEnd({currentPos: f});
            const h = f >= -t.maxTranslate() && !t.params.loop;
            let g = 0, v = t.slidesSizesGrid[0];
            for (let e = 0; e < c.length; e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
                const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                void 0 !== c[e + t] ? (h || f >= c[e] && f < c[e + t]) && (g = e, v = c[e + t] - c[e]) : (h || f >= c[e]) && (g = e, v = c[c.length - 1] - c[c.length - 2])
            }
            let w = null, b = null;
            n.rewind && (t.isBeginning ? b = n.virtual && n.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (w = 0));
            const y = (f - c[g]) / v, x = g < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
            if (m > n.longSwipesMs) {
                if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (y >= n.longSwipesRatio ? t.slideTo(n.rewind && t.isEnd ? w : g + x) : t.slideTo(g)), "prev" === t.swipeDirection && (y > 1 - n.longSwipesRatio ? t.slideTo(g + x) : null !== b && y < 0 && Math.abs(y) > n.longSwipesRatio ? t.slideTo(b) : t.slideTo(g))
            } else {
                if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                !t.navigation || r.target !== t.navigation.nextEl && r.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== w ? w : g + x), "prev" === t.swipeDirection && t.slideTo(null !== b ? b : g)) : r.target === t.navigation.nextEl ? t.slideTo(g + x) : t.slideTo(g)
            }
        }

        function j() {
            const e = this, {params: t, el: i} = e;
            if (i && 0 === i.offsetWidth) return;
            t.breakpoints && e.setBreakpoint();
            const {allowSlideNext: s, allowSlidePrev: r, snapGrid: n} = e, a = e.virtual && e.params.virtual.enabled;
            e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
            const o = a && t.loop;
            !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
                e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
            }), 500)), e.allowSlidePrev = r, e.allowSlideNext = s, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow()
        }

        function X(e) {
            const t = this;
            t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
        }

        function V() {
            const e = this, {wrapperEl: t, rtlTranslate: i, enabled: s} = e;
            if (!s) return;
            let r;
            e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
            const n = e.maxTranslate() - e.minTranslate();
            r = 0 === n ? 0 : (e.translate - e.minTranslate()) / n, r !== e.progress && e.updateProgress(i ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
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
            const i = r(), {params: s, el: n, wrapperEl: a, device: o} = e, l = !!s.nested,
                d = "on" === t ? "addEventListener" : "removeEventListener", c = t;
            n && "string" != typeof n && (i[d]("touchstart", e.onDocumentTouchStart, {
                passive: !1,
                capture: l
            }), n[d]("touchstart", e.onTouchStart, {passive: !1}), n[d]("pointerdown", e.onTouchStart, {passive: !1}), i[d]("touchmove", e.onTouchMove, {
                passive: !1,
                capture: l
            }), i[d]("pointermove", e.onTouchMove, {
                passive: !1,
                capture: l
            }), i[d]("touchend", e.onTouchEnd, {passive: !0}), i[d]("pointerup", e.onTouchEnd, {passive: !0}), i[d]("pointercancel", e.onTouchEnd, {passive: !0}), i[d]("touchcancel", e.onTouchEnd, {passive: !0}), i[d]("pointerout", e.onTouchEnd, {passive: !0}), i[d]("pointerleave", e.onTouchEnd, {passive: !0}), i[d]("contextmenu", e.onTouchEnd, {passive: !0}), (s.preventClicks || s.preventClicksPropagation) && n[d]("click", e.onClick, !0), s.cssMode && a[d]("scroll", e.onScroll), s.updateOnWindowResize ? e[c](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", j, !0) : e[c]("observerUpdate", j, !0), n[d]("load", e.onLoad, {capture: !0}))
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
            return function (i) {
                void 0 === i && (i = {});
                const s = Object.keys(i)[0], r = i[s];
                "object" == typeof r && null !== r ? (!0 === e[s] && (e[s] = {enabled: !0}), "navigation" === s && e[s] && e[s].enabled && !e[s].prevEl && !e[s].nextEl && (e[s].auto = !0), ["pagination", "scrollbar"].indexOf(s) >= 0 && e[s] && e[s].enabled && !e[s].el && (e[s].auto = !0), s in e && "enabled" in r ? ("object" != typeof e[s] || "enabled" in e[s] || (e[s].enabled = !0), e[s] || (e[s] = {enabled: !1}), u(t, i)) : u(t, i)) : u(t, i)
            }
        }

        const ee = {
            eventsEmitter: z, update: Y, translate: {
                getTranslate: function (e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    const {params: t, rtlTranslate: i, translate: s, wrapperEl: r} = this;
                    if (t.virtualTranslate) return i ? -s : s;
                    if (t.cssMode) return s;
                    let n = c(r, e);
                    return n += this.cssOverflowAdjustment(), i && (n = -n), n || 0
                }, setTranslate: function (e, t) {
                    const i = this, {rtlTranslate: s, params: r, wrapperEl: n, progress: a} = i;
                    let o, l = 0, d = 0;
                    i.isHorizontal() ? l = s ? -e : e : d = e, r.roundLengths && (l = Math.floor(l), d = Math.floor(d)), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? l : d, r.cssMode ? n[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -l : -d : r.virtualTranslate || (i.isHorizontal() ? l -= i.cssOverflowAdjustment() : d -= i.cssOverflowAdjustment(), n.style.transform = `translate3d(${l}px, ${d}px, 0px)`);
                    const c = i.maxTranslate() - i.minTranslate();
                    o = 0 === c ? 0 : (e - i.minTranslate()) / c, o !== a && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
                }, minTranslate: function () {
                    return -this.snapGrid[0]
                }, maxTranslate: function () {
                    return -this.snapGrid[this.snapGrid.length - 1]
                }, translateTo: function (e, t, i, s, r) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
                    const n = this, {params: a, wrapperEl: o} = n;
                    if (n.animating && a.preventInteractionOnTransition) return !1;
                    const l = n.minTranslate(), d = n.maxTranslate();
                    let c;
                    if (c = s && e > l ? l : s && e < d ? d : e, n.updateProgress(c), a.cssMode) {
                        const e = n.isHorizontal();
                        if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c; else {
                            if (!n.support.smoothScroll) return f({
                                swiper: n,
                                targetPosition: -c,
                                side: e ? "left" : "top"
                            }), !0;
                            o.scrollTo({[e ? "left" : "top"]: -c, behavior: "smooth"})
                        }
                        return !0
                    }
                    return 0 === t ? (n.setTransition(0), n.setTranslate(c), i && (n.emit("beforeTransitionStart", t, r), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(c), i && (n.emit("beforeTransitionStart", t, r), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function (e) {
                        n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, n.animating = !1, i && n.emit("transitionEnd"))
                    }), n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))), !0
                }
            }, transition: {
                setTransition: function (e, t) {
                    const i = this;
                    i.params.cssMode || (i.wrapperEl.style.transitionDuration = `${e}ms`, i.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), i.emit("setTransition", e, t)
                }, transitionStart: function (e, t) {
                    void 0 === e && (e = !0);
                    const i = this, {params: s} = i;
                    s.cssMode || (s.autoHeight && i.updateAutoHeight(), G({
                        swiper: i,
                        runCallbacks: e,
                        direction: t,
                        step: "Start"
                    }))
                }, transitionEnd: function (e, t) {
                    void 0 === e && (e = !0);
                    const i = this, {params: s} = i;
                    i.animating = !1, s.cssMode || (i.setTransition(0), G({
                        swiper: i,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }))
                }
            }, slide: N, loop: _, grabCursor: {
                setGrabCursor: function (e) {
                    const t = this;
                    if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                    const i = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                    t.isElement && (t.__preventObserver__ = !0), i.style.cursor = "move", i.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
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
                    e.onTouchStart = F.bind(e), e.onTouchMove = q.bind(e), e.onTouchEnd = H.bind(e), e.onDocumentTouchStart = U.bind(e), t.cssMode && (e.onScroll = V.bind(e)), e.onClick = X.bind(e), e.onLoad = W.bind(e), Z(e, "on")
                }, detachEvents: function () {
                    Z(this, "off")
                }
            }, breakpoints: {
                setBreakpoint: function () {
                    const e = this, {realIndex: t, initialized: i, params: s, el: r} = e, n = s.breakpoints;
                    if (!n || n && 0 === Object.keys(n).length) return;
                    const a = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
                    if (!a || e.currentBreakpoint === a) return;
                    const o = (a in n ? n[a] : void 0) || e.originalParams, l = Q(e, s), d = Q(e, o),
                        c = e.params.grabCursor, p = o.grabCursor, m = s.enabled;
                    l && !d ? (r.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), e.emitContainerClasses()) : !l && d && (r.classList.add(`${s.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === s.grid.fill) && r.classList.add(`${s.containerModifierClass}grid-column`), e.emitContainerClasses()), c && !p ? e.unsetGrabCursor() : !c && p && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((t => {
                        if (void 0 === o[t]) return;
                        const i = s[t] && s[t].enabled, r = o[t] && o[t].enabled;
                        i && !r && e[t].disable(), !i && r && e[t].enable()
                    }));
                    const f = o.direction && o.direction !== s.direction,
                        h = s.loop && (o.slidesPerView !== s.slidesPerView || f), g = s.loop;
                    f && i && e.changeDirection(), u(e.params, o);
                    const v = e.params.enabled, w = e.params.loop;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), m && !v ? e.disable() : !m && v && e.enable(), e.currentBreakpoint = a, e.emit("_beforeBreakpoint", o), i && (h ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !g && w ? (e.loopCreate(t), e.updateSlides()) : g && !w && e.loopDestroy()), e.emit("breakpoint", o)
                }, getBreakpoint: function (e, t, i) {
                    if (void 0 === t && (t = "window"), !e || "container" === t && !i) return;
                    let s = !1;
                    const r = a(), n = "window" === t ? r.innerHeight : i.clientHeight, o = Object.keys(e).map((e => {
                        if ("string" == typeof e && 0 === e.indexOf("@")) {
                            const t = parseFloat(e.substr(1));
                            return {value: n * t, point: e}
                        }
                        return {value: e, point: e}
                    }));
                    o.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                    for (let e = 0; e < o.length; e += 1) {
                        const {point: n, value: a} = o[e];
                        "window" === t ? r.matchMedia(`(min-width: ${a}px)`).matches && (s = n) : a <= i.clientWidth && (s = n)
                    }
                    return s || "max"
                }
            }, checkOverflow: {
                checkOverflow: function () {
                    const e = this, {isLocked: t, params: i} = e, {slidesOffsetBefore: s} = i;
                    if (s) {
                        const t = e.slides.length - 1, i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
                        e.isLocked = e.size > i
                    } else e.isLocked = 1 === e.snapGrid.length;
                    !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                }
            }, classes: {
                addClasses: function () {
                    const e = this, {classNames: t, params: i, rtl: s, el: r, device: n} = e, a = function (e, t) {
                        const i = [];
                        return e.forEach((e => {
                            "object" == typeof e ? Object.keys(e).forEach((s => {
                                e[s] && i.push(t + s)
                            })) : "string" == typeof e && i.push(t + e)
                        })), i
                    }(["initialized", i.direction, {"free-mode": e.params.freeMode && i.freeMode.enabled}, {autoheight: i.autoHeight}, {rtl: s}, {grid: i.grid && i.grid.rows > 1}, {"grid-column": i.grid && i.grid.rows > 1 && "column" === i.grid.fill}, {android: n.android}, {ios: n.ios}, {"css-mode": i.cssMode}, {centered: i.cssMode && i.centeredSlides}, {"watch-progress": i.watchSlidesProgress}], i.containerModifierClass);
                    t.push(...a), r.classList.add(...t), e.emitContainerClasses()
                }, removeClasses: function () {
                    const {el: e, classNames: t} = this;
                    e && "string" != typeof e && (e.classList.remove(...t), this.emitContainerClasses())
                }
            }
        }, te = {};

        class ie {
            constructor() {
                let e, t;
                for (var i = arguments.length, s = new Array(i), n = 0; n < i; n++) s[n] = arguments[n];
                1 === s.length && s[0].constructor && "Object" === Object.prototype.toString.call(s[0]).slice(8, -1) ? t = s[0] : [e, t] = s, t || (t = {}), t = u({}, t), e && !t.el && (t.el = e);
                const o = r();
                if (t.el && "string" == typeof t.el && o.querySelectorAll(t.el).length > 1) {
                    const e = [];
                    return o.querySelectorAll(t.el).forEach((i => {
                        const s = u({}, t, {el: i});
                        e.push(new ie(s))
                    })), e
                }
                const l = this;
                l.__swiper__ = !0, l.support = P(), l.device = k({userAgent: t.userAgent}), l.browser = (L || (L = function () {
                    const e = a(), t = k();
                    let i = !1;

                    function s() {
                        const t = e.navigator.userAgent.toLowerCase();
                        return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                    }

                    if (s()) {
                        const t = String(e.navigator.userAgent);
                        if (t.includes("Version/")) {
                            const [e, s] = t.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                            i = e < 16 || 16 === e && s < 2
                        }
                    }
                    const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent), n = s();
                    return {isSafari: i || n, needPerspectiveFix: i, need3dFix: n || r && t.ios, isWebView: r}
                }()), L), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
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
                const c = u({}, K, d);
                return l.params = u({}, c, te, t), l.originalParams = u({}, l.params), l.passedParams = u({}, t), l.params && l.params.on && Object.keys(l.params.on).forEach((e => {
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
                const {slidesEl: t, params: i} = this, s = x(g(t, `.${i.slideClass}, swiper-slide`)[0]);
                return x(e) - s
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
                const i = this;
                e = Math.min(Math.max(e, 0), 1);
                const s = i.minTranslate(), r = (i.maxTranslate() - s) * e + s;
                i.translateTo(r, void 0 === t ? 0 : t), i.updateActiveIndex(), i.updateSlidesClasses()
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
                e.slides.forEach((i => {
                    const s = e.getSlideClasses(i);
                    t.push({slideEl: i, classNames: s}), e.emit("_slideClass", i, s)
                })), e.emit("_slideClasses", t)
            }

            slidesPerViewDynamic(e, t) {
                void 0 === e && (e = "current"), void 0 === t && (t = !1);
                const {params: i, slides: s, slidesGrid: r, slidesSizesGrid: n, size: a, activeIndex: o} = this;
                let l = 1;
                if ("number" == typeof i.slidesPerView) return i.slidesPerView;
                if (i.centeredSlides) {
                    let e, t = s[o] ? Math.ceil(s[o].swiperSlideSize) : 0;
                    for (let i = o + 1; i < s.length; i += 1) s[i] && !e && (t += Math.ceil(s[i].swiperSlideSize), l += 1, t > a && (e = !0));
                    for (let i = o - 1; i >= 0; i -= 1) s[i] && !e && (t += s[i].swiperSlideSize, l += 1, t > a && (e = !0))
                } else if ("current" === e) for (let e = o + 1; e < s.length; e += 1) (t ? r[e] + n[e] - r[o] < a : r[e] - r[o] < a) && (l += 1); else for (let e = o - 1; e >= 0; e -= 1) r[o] - r[e] < a && (l += 1);
                return l
            }

            update() {
                const e = this;
                if (!e || e.destroyed) return;
                const {snapGrid: t, params: i} = e;

                function s() {
                    const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                }

                let r;
                if (i.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
                    t.complete && D(e, t)
                })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), i.freeMode && i.freeMode.enabled && !i.cssMode) s(), i.autoHeight && e.updateAutoHeight(); else {
                    if (("auto" === i.slidesPerView || i.slidesPerView > 1) && e.isEnd && !i.centeredSlides) {
                        const t = e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
                        r = e.slideTo(t.length - 1, 0, !1, !0)
                    } else r = e.slideTo(e.activeIndex, 0, !1, !0);
                    r || s()
                }
                i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
            }

            changeDirection(e, t) {
                void 0 === t && (t = !0);
                const i = this, s = i.params.direction;
                return e || (e = "horizontal" === s ? "vertical" : "horizontal"), e === s || "horizontal" !== e && "vertical" !== e || (i.el.classList.remove(`${i.params.containerModifierClass}${s}`), i.el.classList.add(`${i.params.containerModifierClass}${e}`), i.emitContainerClasses(), i.params.direction = e, i.slides.forEach((t => {
                    "vertical" === e ? t.style.width = "" : t.style.height = ""
                })), i.emit("changeDirection"), t && i.update()), i
            }

            changeLanguageDirection(e) {
                const t = this;
                t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
            }

            mount(e) {
                const t = this;
                if (t.mounted) return !0;
                let i = e || t.params.el;
                if ("string" == typeof i && (i = document.querySelector(i)), !i) return !1;
                i.swiper = t, i.parentNode && i.parentNode.host && i.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
                const s = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
                let r = i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(s()) : g(i, s())[0];
                return !r && t.params.createElements && (r = w("div", t.params.wrapperClass), i.append(r), g(i, `.${t.params.slideClass}`).forEach((e => {
                    r.append(e)
                }))), Object.assign(t, {
                    el: i,
                    wrapperEl: r,
                    slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : r,
                    hostEl: t.isElement ? i.parentNode.host : i,
                    mounted: !0,
                    rtl: "rtl" === i.dir.toLowerCase() || "rtl" === y(i, "direction"),
                    rtlTranslate: "horizontal" === t.params.direction && ("rtl" === i.dir.toLowerCase() || "rtl" === y(i, "direction")),
                    wrongRTL: "-webkit-box" === y(r, "display")
                }), !0
            }

            init(e) {
                const t = this;
                if (t.initialized) return t;
                if (!1 === t.mount(e)) return t;
                t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
                const i = [...t.el.querySelectorAll('[loading="lazy"]')];
                return t.isElement && i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), i.forEach((e => {
                    e.complete ? D(t, e) : e.addEventListener("load", (e => {
                        D(t, e.target)
                    }))
                })), B(t), t.initialized = !0, B(t), t.emit("init"), t.emit("afterInit"), t
            }

            destroy(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                const i = this, {params: s, el: r, wrapperEl: n, slides: a} = i;
                return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), r && "string" != typeof r && r.removeAttribute("style"), n && n.removeAttribute("style"), a && a.length && a.forEach((e => {
                    e.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
                }))), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((e => {
                    i.off(e)
                })), !1 !== e && (i.el && "string" != typeof i.el && (i.el.swiper = null), function (e) {
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
                }(i)), i.destroyed = !0), null
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
                ie.prototype.__modules__ || (ie.prototype.__modules__ = []);
                const t = ie.prototype.__modules__;
                "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
            }

            static use(e) {
                return Array.isArray(e) ? (e.forEach((e => ie.installModule(e))), ie) : (ie.installModule(e), ie)
            }
        }

        function se(e, t, i, s) {
            return e.params.createElements && Object.keys(s).forEach((r => {
                if (!i[r] && !0 === i.auto) {
                    let n = g(e.el, `.${s[r]}`)[0];
                    n || (n = w("div", s[r]), n.className = s[r], e.el.append(n)), i[r] = n, t[r] = n
                }
            })), i
        }

        function re(e) {
            return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`
        }

        function ne(e) {
            const t = this, {params: i, slidesEl: s} = t;
            i.loop && t.loopDestroy();
            const r = e => {
                if ("string" == typeof e) {
                    const t = document.createElement("div");
                    t.innerHTML = e, s.append(t.children[0]), t.innerHTML = ""
                } else s.append(e)
            };
            if ("object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && r(e[t]); else r(e);
            t.recalcSlides(), i.loop && t.loopCreate(), i.observer && !t.isElement || t.update()
        }

        function ae(e) {
            const t = this, {params: i, activeIndex: s, slidesEl: r} = t;
            i.loop && t.loopDestroy();
            let n = s + 1;
            const a = e => {
                if ("string" == typeof e) {
                    const t = document.createElement("div");
                    t.innerHTML = e, r.prepend(t.children[0]), t.innerHTML = ""
                } else r.prepend(e)
            };
            if ("object" == typeof e && "length" in e) {
                for (let t = 0; t < e.length; t += 1) e[t] && a(e[t]);
                n = s + e.length
            } else a(e);
            t.recalcSlides(), i.loop && t.loopCreate(), i.observer && !t.isElement || t.update(), t.slideTo(n, 0, !1)
        }

        function oe(e, t) {
            const i = this, {params: s, activeIndex: r, slidesEl: n} = i;
            let a = r;
            s.loop && (a -= i.loopedSlides, i.loopDestroy(), i.recalcSlides());
            const o = i.slides.length;
            if (e <= 0) return void i.prependSlide(t);
            if (e >= o) return void i.appendSlide(t);
            let l = a > e ? a + 1 : a;
            const d = [];
            for (let t = o - 1; t >= e; t -= 1) {
                const e = i.slides[t];
                e.remove(), d.unshift(e)
            }
            if ("object" == typeof t && "length" in t) {
                for (let e = 0; e < t.length; e += 1) t[e] && n.append(t[e]);
                l = a > e ? a + t.length : a
            } else n.append(t);
            for (let e = 0; e < d.length; e += 1) n.append(d[e]);
            i.recalcSlides(), s.loop && i.loopCreate(), s.observer && !i.isElement || i.update(), s.loop ? i.slideTo(l + i.loopedSlides, 0, !1) : i.slideTo(l, 0, !1)
        }

        function le(e) {
            const t = this, {params: i, activeIndex: s} = t;
            let r = s;
            i.loop && (r -= t.loopedSlides, t.loopDestroy());
            let n, a = r;
            if ("object" == typeof e && "length" in e) {
                for (let i = 0; i < e.length; i += 1) n = e[i], t.slides[n] && t.slides[n].remove(), n < a && (a -= 1);
                a = Math.max(a, 0)
            } else n = e, t.slides[n] && t.slides[n].remove(), n < a && (a -= 1), a = Math.max(a, 0);
            t.recalcSlides(), i.loop && t.loopCreate(), i.observer && !t.isElement || t.update(), i.loop ? t.slideTo(a + t.loopedSlides, 0, !1) : t.slideTo(a, 0, !1)
        }

        function de() {
            const e = this, t = [];
            for (let i = 0; i < e.slides.length; i += 1) t.push(i);
            e.removeSlide(t)
        }

        function ce(e) {
            const {
                effect: t,
                swiper: i,
                on: s,
                setTranslate: r,
                setTransition: n,
                overwriteParams: a,
                perspective: o,
                recreateShadows: l,
                getEffectParams: d
            } = e;
            let c;
            s("beforeInit", (() => {
                if (i.params.effect !== t) return;
                i.classNames.push(`${i.params.containerModifierClass}${t}`), o && o() && i.classNames.push(`${i.params.containerModifierClass}3d`);
                const e = a ? a() : {};
                Object.assign(i.params, e), Object.assign(i.originalParams, e)
            })), s("setTranslate", (() => {
                i.params.effect === t && r()
            })), s("setTransition", ((e, s) => {
                i.params.effect === t && n(s)
            })), s("transitionEnd", (() => {
                if (i.params.effect === t && l) {
                    if (!d || !d().slideShadows) return;
                    i.slides.forEach((e => {
                        e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e => e.remove()))
                    })), l()
                }
            })), s("virtualUpdate", (() => {
                i.params.effect === t && (i.slides.length || (c = !0), requestAnimationFrame((() => {
                    c && i.slides && i.slides.length && (r(), c = !1)
                })))
            }))
        }

        function pe(e, t) {
            const i = h(t);
            return i !== t && (i.style.backfaceVisibility = "hidden", i.style["-webkit-backface-visibility"] = "hidden"), i
        }

        function ue(e) {
            let {swiper: t, duration: i, transformElements: s, allSlides: r} = e;
            const {activeIndex: n} = t;
            if (t.params.virtualTranslate && 0 !== i) {
                let e, i = !1;
                e = r ? s : s.filter((e => {
                    const i = e.classList.contains("swiper-slide-transform") ? (e => e.parentElement ? e.parentElement : t.slides.filter((t => t.shadowRoot && t.shadowRoot === e.parentNode))[0])(e) : e;
                    return t.getSlideIndex(i) === n
                })), e.forEach((e => {
                    S(e, (() => {
                        if (i) return;
                        if (!t || t.destroyed) return;
                        i = !0, t.animating = !1;
                        const e = new window.CustomEvent("transitionend", {bubbles: !0, cancelable: !0});
                        t.wrapperEl.dispatchEvent(e)
                    }))
                }))
            }
        }

        function me(e, t, i) {
            const s = `swiper-slide-shadow${i ? `-${i}` : ""}${e ? ` swiper-slide-shadow-${e}` : ""}`, r = h(t);
            let n = r.querySelector(`.${s.split(" ").join(".")}`);
            return n || (n = w("div", s.split(" ")), r.append(n)), n
        }

        Object.keys(ee).forEach((e => {
            Object.keys(ee[e]).forEach((t => {
                ie.prototype[t] = ee[e][t]
            }))
        })), ie.use([function (e) {
            let {swiper: t, on: i, emit: s} = e;
            const r = a();
            let n = null, o = null;
            const l = () => {
                t && !t.destroyed && t.initialized && (s("beforeResize"), s("resize"))
            }, d = () => {
                t && !t.destroyed && t.initialized && s("orientationchange")
            };
            i("init", (() => {
                t.params.resizeObserver && void 0 !== r.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver((e => {
                    o = r.requestAnimationFrame((() => {
                        const {width: i, height: s} = t;
                        let r = i, n = s;
                        e.forEach((e => {
                            let {contentBoxSize: i, contentRect: s, target: a} = e;
                            a && a !== t.el || (r = s ? s.width : (i[0] || i).inlineSize, n = s ? s.height : (i[0] || i).blockSize)
                        })), r === i && n === s || l()
                    }))
                })), n.observe(t.el)) : (r.addEventListener("resize", l), r.addEventListener("orientationchange", d))
            })), i("destroy", (() => {
                o && r.cancelAnimationFrame(o), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), r.removeEventListener("resize", l), r.removeEventListener("orientationchange", d)
            }))
        }, function (e) {
            let {swiper: t, extendParams: i, on: s, emit: r} = e;
            const n = [], o = a(), l = function (e, i) {
                void 0 === i && (i = {});
                const s = new (o.MutationObserver || o.WebkitMutationObserver)((e => {
                    if (t.__preventObserver__) return;
                    if (1 === e.length) return void r("observerUpdate", e[0]);
                    const i = function () {
                        r("observerUpdate", e[0])
                    };
                    o.requestAnimationFrame ? o.requestAnimationFrame(i) : o.setTimeout(i, 0)
                }));
                s.observe(e, {
                    attributes: void 0 === i.attributes || i.attributes,
                    childList: void 0 === i.childList || i.childList,
                    characterData: void 0 === i.characterData || i.characterData
                }), n.push(s)
            };
            i({observer: !1, observeParents: !1, observeSlideChildren: !1}), s("init", (() => {
                if (t.params.observer) {
                    if (t.params.observeParents) {
                        const e = E(t.hostEl);
                        for (let t = 0; t < e.length; t += 1) l(e[t])
                    }
                    l(t.hostEl, {childList: t.params.observeSlideChildren}), l(t.wrapperEl, {attributes: !1})
                }
            })), s("destroy", (() => {
                n.forEach((e => {
                    e.disconnect()
                })), n.splice(0, n.length)
            }))
        }]);
        const fe = [function (e) {
            let t, {swiper: i, extendParams: s, on: n, emit: a} = e;
            s({
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
            i.virtual = {cache: {}, from: void 0, to: void 0, slides: [], offset: 0, slidesGrid: []};
            const l = o.createElement("div");

            function d(e, t) {
                const s = i.params.virtual;
                if (s.cache && i.virtual.cache[t]) return i.virtual.cache[t];
                let r;
                return s.renderSlide ? (r = s.renderSlide.call(i, e, t), "string" == typeof r && (l.innerHTML = r, r = l.children[0])) : r = i.isElement ? w("swiper-slide") : w("div", i.params.slideClass), r.setAttribute("data-swiper-slide-index", t), s.renderSlide || (r.innerHTML = e), s.cache && (i.virtual.cache[t] = r), r
            }

            function c(e, t) {
                const {slidesPerView: s, slidesPerGroup: r, centeredSlides: n, loop: o, initialSlide: l} = i.params;
                if (t && !o && l > 0) return;
                const {addSlidesBefore: c, addSlidesAfter: p} = i.params.virtual, {
                    from: u,
                    to: m,
                    slides: f,
                    slidesGrid: h,
                    offset: v
                } = i.virtual;
                i.params.cssMode || i.updateActiveIndex();
                const w = i.activeIndex || 0;
                let b, y, x;
                b = i.rtlTranslate ? "right" : i.isHorizontal() ? "left" : "top", n ? (y = Math.floor(s / 2) + r + p, x = Math.floor(s / 2) + r + c) : (y = s + (r - 1) + p, x = (o ? s : r) + c);
                let E = w - x, S = w + y;
                o || (E = Math.max(E, 0), S = Math.min(S, f.length - 1));
                let T = (i.slidesGrid[E] || 0) - (i.slidesGrid[0] || 0);

                function A() {
                    i.updateSlides(), i.updateProgress(), i.updateSlidesClasses(), a("virtualUpdate")
                }

                if (o && w >= x ? (E -= x, n || (T += i.slidesGrid[0])) : o && w < x && (E = -x, n && (T += i.slidesGrid[0])), Object.assign(i.virtual, {
                    from: E,
                    to: S,
                    offset: T,
                    slidesGrid: i.slidesGrid,
                    slidesBefore: x,
                    slidesAfter: y
                }), u === E && m === S && !e) return i.slidesGrid !== h && T !== v && i.slides.forEach((e => {
                    e.style[b] = T - Math.abs(i.cssOverflowAdjustment()) + "px"
                })), i.updateProgress(), void a("virtualUpdate");
                if (i.params.virtual.renderExternal) return i.params.virtual.renderExternal.call(i, {
                    offset: T,
                    from: E,
                    to: S,
                    slides: function () {
                        const e = [];
                        for (let t = E; t <= S; t += 1) e.push(f[t]);
                        return e
                    }()
                }), void (i.params.virtual.renderExternalUpdate ? A() : a("virtualUpdate"));
                const M = [], C = [], L = e => {
                    let t = e;
                    return e < 0 ? t = f.length + e : t >= f.length && (t -= f.length), t
                };
                if (e) i.slides.filter((e => e.matches(`.${i.params.slideClass}, swiper-slide`))).forEach((e => {
                    e.remove()
                })); else for (let e = u; e <= m; e += 1) if (e < E || e > S) {
                    const t = L(e);
                    i.slides.filter((e => e.matches(`.${i.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`))).forEach((e => {
                        e.remove()
                    }))
                }
                const P = o ? -f.length : 0, k = o ? 2 * f.length : f.length;
                for (let t = P; t < k; t += 1) if (t >= E && t <= S) {
                    const i = L(t);
                    void 0 === m || e ? C.push(i) : (t > m && C.push(i), t < u && M.push(i))
                }
                if (C.forEach((e => {
                    i.slidesEl.append(d(f[e], e))
                })), o) for (let e = M.length - 1; e >= 0; e -= 1) {
                    const t = M[e];
                    i.slidesEl.prepend(d(f[t], t))
                } else M.sort(((e, t) => t - e)), M.forEach((e => {
                    i.slidesEl.prepend(d(f[e], e))
                }));
                g(i.slidesEl, ".swiper-slide, swiper-slide").forEach((e => {
                    e.style[b] = T - Math.abs(i.cssOverflowAdjustment()) + "px"
                })), A()
            }

            n("beforeInit", (() => {
                if (!i.params.virtual.enabled) return;
                let e;
                if (void 0 === i.passedParams.virtual.slides) {
                    const t = [...i.slidesEl.children].filter((e => e.matches(`.${i.params.slideClass}, swiper-slide`)));
                    t && t.length && (i.virtual.slides = [...t], e = !0, t.forEach(((e, t) => {
                        e.setAttribute("data-swiper-slide-index", t), i.virtual.cache[t] = e, e.remove()
                    })))
                }
                e || (i.virtual.slides = i.params.virtual.slides), i.classNames.push(`${i.params.containerModifierClass}virtual`), i.params.watchSlidesProgress = !0, i.originalParams.watchSlidesProgress = !0, c(!1, !0)
            })), n("setTranslate", (() => {
                i.params.virtual.enabled && (i.params.cssMode && !i._immediateVirtual ? (clearTimeout(t), t = setTimeout((() => {
                    c()
                }), 100)) : c())
            })), n("init update resize", (() => {
                i.params.virtual.enabled && i.params.cssMode && m(i.wrapperEl, "--swiper-virtual-size", `${i.virtualSize}px`)
            })), Object.assign(i.virtual, {
                appendSlide: function (e) {
                    if ("object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && i.virtual.slides.push(e[t]); else i.virtual.slides.push(e);
                    c(!0)
                }, prependSlide: function (e) {
                    const t = i.activeIndex;
                    let s = t + 1, r = 1;
                    if (Array.isArray(e)) {
                        for (let t = 0; t < e.length; t += 1) e[t] && i.virtual.slides.unshift(e[t]);
                        s = t + e.length, r = e.length
                    } else i.virtual.slides.unshift(e);
                    if (i.params.virtual.cache) {
                        const e = i.virtual.cache, t = {};
                        Object.keys(e).forEach((i => {
                            const s = e[i], n = s.getAttribute("data-swiper-slide-index");
                            n && s.setAttribute("data-swiper-slide-index", parseInt(n, 10) + r), t[parseInt(i, 10) + r] = s
                        })), i.virtual.cache = t
                    }
                    c(!0), i.slideTo(s, 0)
                }, removeSlide: function (e) {
                    if (null == e) return;
                    let t = i.activeIndex;
                    if (Array.isArray(e)) for (let s = e.length - 1; s >= 0; s -= 1) i.params.virtual.cache && (delete i.virtual.cache[e[s]], Object.keys(i.virtual.cache).forEach((t => {
                        t > e && (i.virtual.cache[t - 1] = i.virtual.cache[t], i.virtual.cache[t - 1].setAttribute("data-swiper-slide-index", t - 1), delete i.virtual.cache[t])
                    }))), i.virtual.slides.splice(e[s], 1), e[s] < t && (t -= 1), t = Math.max(t, 0); else i.params.virtual.cache && (delete i.virtual.cache[e], Object.keys(i.virtual.cache).forEach((t => {
                        t > e && (i.virtual.cache[t - 1] = i.virtual.cache[t], i.virtual.cache[t - 1].setAttribute("data-swiper-slide-index", t - 1), delete i.virtual.cache[t])
                    }))), i.virtual.slides.splice(e, 1), e < t && (t -= 1), t = Math.max(t, 0);
                    c(!0), i.slideTo(t, 0)
                }, removeAllSlides: function () {
                    i.virtual.slides = [], i.params.virtual.cache && (i.virtual.cache = {}), c(!0), i.slideTo(0, 0)
                }, update: c
            })
        }, function (e) {
            let {swiper: t, extendParams: i, on: s, emit: n} = e;
            const o = r(), l = a();

            function d(e) {
                if (!t.enabled) return;
                const {rtlTranslate: i} = t;
                let s = e;
                s.originalEvent && (s = s.originalEvent);
                const r = s.keyCode || s.charCode, a = t.params.keyboard.pageUpDown, d = a && 33 === r,
                    c = a && 34 === r, p = 37 === r, u = 39 === r, m = 38 === r, f = 40 === r;
                if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && f || c)) return !1;
                if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && m || d)) return !1;
                if (!(s.shiftKey || s.altKey || s.ctrlKey || s.metaKey || o.activeElement && o.activeElement.nodeName && ("input" === o.activeElement.nodeName.toLowerCase() || "textarea" === o.activeElement.nodeName.toLowerCase()))) {
                    if (t.params.keyboard.onlyInViewport && (d || c || p || u || m || f)) {
                        let e = !1;
                        if (E(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 && 0 === E(t.el, `.${t.params.slideActiveClass}`).length) return;
                        const s = t.el, r = s.clientWidth, n = s.clientHeight, a = l.innerWidth, o = l.innerHeight,
                            d = b(s);
                        i && (d.left -= s.scrollLeft);
                        const c = [[d.left, d.top], [d.left + r, d.top], [d.left, d.top + n], [d.left + r, d.top + n]];
                        for (let t = 0; t < c.length; t += 1) {
                            const i = c[t];
                            if (i[0] >= 0 && i[0] <= a && i[1] >= 0 && i[1] <= o) {
                                if (0 === i[0] && 0 === i[1]) continue;
                                e = !0
                            }
                        }
                        if (!e) return
                    }
                    t.isHorizontal() ? ((d || c || p || u) && (s.preventDefault ? s.preventDefault() : s.returnValue = !1), ((c || u) && !i || (d || p) && i) && t.slideNext(), ((d || p) && !i || (c || u) && i) && t.slidePrev()) : ((d || c || m || f) && (s.preventDefault ? s.preventDefault() : s.returnValue = !1), (c || f) && t.slideNext(), (d || m) && t.slidePrev()), n("keyPress", r)
                }
            }

            function c() {
                t.keyboard.enabled || (o.addEventListener("keydown", d), t.keyboard.enabled = !0)
            }

            function p() {
                t.keyboard.enabled && (o.removeEventListener("keydown", d), t.keyboard.enabled = !1)
            }

            t.keyboard = {enabled: !1}, i({
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0,
                    pageUpDown: !0
                }
            }), s("init", (() => {
                t.params.keyboard.enabled && c()
            })), s("destroy", (() => {
                t.keyboard.enabled && p()
            })), Object.assign(t.keyboard, {enable: c, disable: p})
        }, function (e) {
            let {swiper: t, extendParams: i, on: s, emit: r} = e;
            const n = a();
            let o;
            i({
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
            let c, p = d();
            const u = [];

            function m() {
                t.enabled && (t.mouseEntered = !0)
            }

            function f() {
                t.enabled && (t.mouseEntered = !1)
            }

            function h(e) {
                return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta || t.params.mousewheel.thresholdTime && d() - p < t.params.mousewheel.thresholdTime || !(e.delta >= 6 && d() - p < 60) && (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), r("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), r("scroll", e.raw)), p = (new n.Date).getTime(), 1))
            }

            function g(e) {
                let i = e, s = !0;
                if (!t.enabled) return;
                if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`)) return;
                const n = t.params.mousewheel;
                t.params.cssMode && i.preventDefault();
                let a = t.el;
                "container" !== t.params.mousewheel.eventsTarget && (a = document.querySelector(t.params.mousewheel.eventsTarget));
                const p = a && a.contains(i.target);
                if (!t.mouseEntered && !p && !n.releaseOnEdges) return !0;
                i.originalEvent && (i = i.originalEvent);
                let m = 0;
                const f = t.rtlTranslate ? -1 : 1, g = function (e) {
                    let t = 0, i = 0, s = 0, r = 0;
                    return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, r = 10 * i, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = r, r = 0), (s || r) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, r *= 40) : (s *= 800, r *= 800)), s && !t && (t = s < 1 ? -1 : 1), r && !i && (i = r < 1 ? -1 : 1), {
                        spinX: t,
                        spinY: i,
                        pixelX: s,
                        pixelY: r
                    }
                }(i);
                if (n.forceToAxis) if (t.isHorizontal()) {
                    if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY))) return !0;
                    m = -g.pixelX * f
                } else {
                    if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX))) return !0;
                    m = -g.pixelY
                } else m = Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * f : -g.pixelY;
                if (0 === m) return !0;
                n.invert && (m = -m);
                let v = t.getTranslate() + m * n.sensitivity;
                if (v >= t.minTranslate() && (v = t.minTranslate()), v <= t.maxTranslate() && (v = t.maxTranslate()), s = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()), s && t.params.nested && i.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
                    const e = {time: d(), delta: Math.abs(m), direction: Math.sign(m)},
                        s = c && e.time < c.time + 500 && e.delta <= c.delta && e.direction === c.direction;
                    if (!s) {
                        c = void 0;
                        let a = t.getTranslate() + m * n.sensitivity;
                        const d = t.isBeginning, p = t.isEnd;
                        if (a >= t.minTranslate() && (a = t.minTranslate()), a <= t.maxTranslate() && (a = t.maxTranslate()), t.setTransition(0), t.setTranslate(a), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!d && t.isBeginning || !p && t.isEnd) && t.updateSlidesClasses(), t.params.loop && t.loopFix({
                            direction: e.direction < 0 ? "next" : "prev",
                            byMousewheel: !0
                        }), t.params.freeMode.sticky) {
                            clearTimeout(o), o = void 0, u.length >= 15 && u.shift();
                            const i = u.length ? u[u.length - 1] : void 0, s = u[0];
                            if (u.push(e), i && (e.delta > i.delta || e.direction !== i.direction)) u.splice(0); else if (u.length >= 15 && e.time - s.time < 500 && s.delta - e.delta >= 1 && e.delta <= 6) {
                                const i = m > 0 ? .8 : .2;
                                c = e, u.splice(0), o = l((() => {
                                    t.slideToClosest(t.params.speed, !0, void 0, i)
                                }), 0)
                            }
                            o || (o = l((() => {
                                c = e, u.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5)
                            }), 500))
                        }
                        if (s || r("scroll", i), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), n.releaseOnEdges && (a === t.minTranslate() || a === t.maxTranslate())) return !0
                    }
                } else {
                    const i = {time: d(), delta: Math.abs(m), direction: Math.sign(m), raw: e};
                    u.length >= 2 && u.shift();
                    const s = u.length ? u[u.length - 1] : void 0;
                    if (u.push(i), s ? (i.direction !== s.direction || i.delta > s.delta || i.time > s.time + 150) && h(i) : h(i), function (e) {
                        const i = t.params.mousewheel;
                        if (e.direction < 0) {
                            if (t.isEnd && !t.params.loop && i.releaseOnEdges) return !0
                        } else if (t.isBeginning && !t.params.loop && i.releaseOnEdges) return !0;
                        return !1
                    }(i)) return !0
                }
                return i.preventDefault ? i.preventDefault() : i.returnValue = !1, !1
            }

            function v(e) {
                let i = t.el;
                "container" !== t.params.mousewheel.eventsTarget && (i = document.querySelector(t.params.mousewheel.eventsTarget)), i[e]("mouseenter", m), i[e]("mouseleave", f), i[e]("wheel", g)
            }

            function w() {
                return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", g), !0) : !t.mousewheel.enabled && (v("addEventListener"), t.mousewheel.enabled = !0, !0)
            }

            function b() {
                return t.params.cssMode ? (t.wrapperEl.addEventListener(event, g), !0) : !!t.mousewheel.enabled && (v("removeEventListener"), t.mousewheel.enabled = !1, !0)
            }

            s("init", (() => {
                !t.params.mousewheel.enabled && t.params.cssMode && b(), t.params.mousewheel.enabled && w()
            })), s("destroy", (() => {
                t.params.cssMode && w(), t.mousewheel.enabled && b()
            })), Object.assign(t.mousewheel, {enable: w, disable: b})
        }, function (e) {
            let {swiper: t, extendParams: i, on: s, emit: r} = e;

            function n(e) {
                let i;
                return e && "string" == typeof e && t.isElement && (i = t.el.querySelector(e), i) ? i : (e && ("string" == typeof e && (i = [...document.querySelectorAll(e)]), t.params.uniqueNavElements && "string" == typeof e && i && i.length > 1 && 1 === t.el.querySelectorAll(e).length ? i = t.el.querySelector(e) : i && 1 === i.length && (i = i[0])), e && !i ? e : i)
            }

            function a(e, i) {
                const s = t.params.navigation;
                (e = A(e)).forEach((e => {
                    e && (e.classList[i ? "add" : "remove"](...s.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = i), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](s.lockClass))
                }))
            }

            function o() {
                const {nextEl: e, prevEl: i} = t.navigation;
                if (t.params.loop) return a(i, !1), void a(e, !1);
                a(i, t.isBeginning && !t.params.rewind), a(e, t.isEnd && !t.params.rewind)
            }

            function l(e) {
                e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), r("navigationPrev"))
            }

            function d(e) {
                e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), r("navigationNext"))
            }

            function c() {
                const e = t.params.navigation;
                if (t.params.navigation = se(t, t.originalParams.navigation, t.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                }), !e.nextEl && !e.prevEl) return;
                let i = n(e.nextEl), s = n(e.prevEl);
                Object.assign(t.navigation, {nextEl: i, prevEl: s}), i = A(i), s = A(s);
                const r = (i, s) => {
                    i && i.addEventListener("click", "next" === s ? d : l), !t.enabled && i && i.classList.add(...e.lockClass.split(" "))
                };
                i.forEach((e => r(e, "next"))), s.forEach((e => r(e, "prev")))
            }

            function p() {
                let {nextEl: e, prevEl: i} = t.navigation;
                e = A(e), i = A(i);
                const s = (e, i) => {
                    e.removeEventListener("click", "next" === i ? d : l), e.classList.remove(...t.params.navigation.disabledClass.split(" "))
                };
                e.forEach((e => s(e, "next"))), i.forEach((e => s(e, "prev")))
            }

            i({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            }), t.navigation = {nextEl: null, prevEl: null}, s("init", (() => {
                !1 === t.params.navigation.enabled ? u() : (c(), o())
            })), s("toEdge fromEdge lock unlock", (() => {
                o()
            })), s("destroy", (() => {
                p()
            })), s("enable disable", (() => {
                let {nextEl: e, prevEl: i} = t.navigation;
                e = A(e), i = A(i), t.enabled ? o() : [...e, ...i].filter((e => !!e)).forEach((e => e.classList.add(t.params.navigation.lockClass)))
            })), s("click", ((e, i) => {
                let {nextEl: s, prevEl: n} = t.navigation;
                s = A(s), n = A(n);
                const a = i.target;
                let o = n.includes(a) || s.includes(a);
                if (t.isElement && !o) {
                    const e = i.path || i.composedPath && i.composedPath();
                    e && (o = e.find((e => s.includes(e) || n.includes(e))))
                }
                if (t.params.navigation.hideOnClick && !o) {
                    if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === a || t.pagination.el.contains(a))) return;
                    let e;
                    s.length ? e = s[0].classList.contains(t.params.navigation.hiddenClass) : n.length && (e = n[0].classList.contains(t.params.navigation.hiddenClass)), r(!0 === e ? "navigationShow" : "navigationHide"), [...s, ...n].filter((e => !!e)).forEach((e => e.classList.toggle(t.params.navigation.hiddenClass)))
                }
            }));
            const u = () => {
                t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), p()
            };
            Object.assign(t.navigation, {
                enable: () => {
                    t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), c(), o()
                }, disable: u, update: o, init: c, destroy: p
            })
        }, function (e) {
            let {swiper: t, extendParams: i, on: s, emit: r} = e;
            const n = "swiper-pagination";
            let a;
            i({
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
                    bulletClass: `${n}-bullet`,
                    bulletActiveClass: `${n}-bullet-active`,
                    modifierClass: `${n}-`,
                    currentClass: `${n}-current`,
                    totalClass: `${n}-total`,
                    hiddenClass: `${n}-hidden`,
                    progressbarFillClass: `${n}-progressbar-fill`,
                    progressbarOppositeClass: `${n}-progressbar-opposite`,
                    clickableClass: `${n}-clickable`,
                    lockClass: `${n}-lock`,
                    horizontalClass: `${n}-horizontal`,
                    verticalClass: `${n}-vertical`,
                    paginationDisabledClass: `${n}-disabled`
                }
            }), t.pagination = {el: null, bullets: []};
            let o = 0;

            function l() {
                return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length
            }

            function d(e, i) {
                const {bulletActiveClass: s} = t.params.pagination;
                e && (e = e[("prev" === i ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${s}-${i}`), (e = e[("prev" === i ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${s}-${i}-${i}`))
            }

            function c(e) {
                const i = e.target.closest(re(t.params.pagination.bulletClass));
                if (!i) return;
                e.preventDefault();
                const s = x(i) * t.params.slidesPerGroup;
                if (t.params.loop) {
                    if (t.realIndex === s) return;
                    t.slideToLoop(s)
                } else t.slideTo(s)
            }

            function p() {
                const e = t.rtl, i = t.params.pagination;
                if (l()) return;
                let s, n, c = t.pagination.el;
                c = A(c);
                const p = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                    u = t.params.loop ? Math.ceil(p / t.params.slidesPerGroup) : t.snapGrid.length;
                if (t.params.loop ? (n = t.previousRealIndex || 0, s = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (s = t.snapIndex, n = t.previousSnapIndex) : (n = t.previousIndex || 0, s = t.activeIndex || 0), "bullets" === i.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                    const r = t.pagination.bullets;
                    let l, p, u;
                    if (i.dynamicBullets && (a = T(r[0], t.isHorizontal() ? "width" : "height", !0), c.forEach((e => {
                        e.style[t.isHorizontal() ? "width" : "height"] = a * (i.dynamicMainBullets + 4) + "px"
                    })), i.dynamicMainBullets > 1 && void 0 !== n && (o += s - (n || 0), o > i.dynamicMainBullets - 1 ? o = i.dynamicMainBullets - 1 : o < 0 && (o = 0)), l = Math.max(s - o, 0), p = l + (Math.min(r.length, i.dynamicMainBullets) - 1), u = (p + l) / 2), r.forEach((e => {
                        const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${i.bulletActiveClass}${e}`))].map((e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e)).flat();
                        e.classList.remove(...t)
                    })), c.length > 1) r.forEach((e => {
                        const r = x(e);
                        r === s ? e.classList.add(...i.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"), i.dynamicBullets && (r >= l && r <= p && e.classList.add(...`${i.bulletActiveClass}-main`.split(" ")), r === l && d(e, "prev"), r === p && d(e, "next"))
                    })); else {
                        const e = r[s];
                        if (e && e.classList.add(...i.bulletActiveClass.split(" ")), t.isElement && r.forEach(((e, t) => {
                            e.setAttribute("part", t === s ? "bullet-active" : "bullet")
                        })), i.dynamicBullets) {
                            const e = r[l], t = r[p];
                            for (let e = l; e <= p; e += 1) r[e] && r[e].classList.add(...`${i.bulletActiveClass}-main`.split(" "));
                            d(e, "prev"), d(t, "next")
                        }
                    }
                    if (i.dynamicBullets) {
                        const s = Math.min(r.length, i.dynamicMainBullets + 4), n = (a * s - a) / 2 - u * a,
                            o = e ? "right" : "left";
                        r.forEach((e => {
                            e.style[t.isHorizontal() ? o : "top"] = `${n}px`
                        }))
                    }
                }
                c.forEach(((e, n) => {
                    if ("fraction" === i.type && (e.querySelectorAll(re(i.currentClass)).forEach((e => {
                        e.textContent = i.formatFractionCurrent(s + 1)
                    })), e.querySelectorAll(re(i.totalClass)).forEach((e => {
                        e.textContent = i.formatFractionTotal(u)
                    }))), "progressbar" === i.type) {
                        let r;
                        r = i.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                        const n = (s + 1) / u;
                        let a = 1, o = 1;
                        "horizontal" === r ? a = n : o = n, e.querySelectorAll(re(i.progressbarFillClass)).forEach((e => {
                            e.style.transform = `translate3d(0,0,0) scaleX(${a}) scaleY(${o})`, e.style.transitionDuration = `${t.params.speed}ms`
                        }))
                    }
                    "custom" === i.type && i.renderCustom ? (e.innerHTML = i.renderCustom(t, s + 1, u), 0 === n && r("paginationRender", e)) : (0 === n && r("paginationRender", e), r("paginationUpdate", e)), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](i.lockClass)
                }))
            }

            function u() {
                const e = t.params.pagination;
                if (l()) return;
                const i = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
                let s = t.pagination.el;
                s = A(s);
                let n = "";
                if ("bullets" === e.type) {
                    let s = t.params.loop ? Math.ceil(i / t.params.slidesPerGroup) : t.snapGrid.length;
                    t.params.freeMode && t.params.freeMode.enabled && s > i && (s = i);
                    for (let i = 0; i < s; i += 1) e.renderBullet ? n += e.renderBullet.call(t, i, e.bulletClass) : n += `<${e.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${e.bulletClass}"></${e.bulletElement}>`
                }
                "fraction" === e.type && (n = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (n = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), t.pagination.bullets = [], s.forEach((i => {
                    "custom" !== e.type && (i.innerHTML = n || ""), "bullets" === e.type && t.pagination.bullets.push(...i.querySelectorAll(re(e.bulletClass)))
                })), "custom" !== e.type && r("paginationRender", s[0])
            }

            function m() {
                t.params.pagination = se(t, t.originalParams.pagination, t.params.pagination, {el: "swiper-pagination"});
                const e = t.params.pagination;
                if (!e.el) return;
                let i;
                "string" == typeof e.el && t.isElement && (i = t.el.querySelector(e.el)), i || "string" != typeof e.el || (i = [...document.querySelectorAll(e.el)]), i || (i = e.el), i && 0 !== i.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(i) && i.length > 1 && (i = [...t.el.querySelectorAll(e.el)], i.length > 1 && (i = i.filter((e => E(e, ".swiper")[0] === t.el))[0])), Array.isArray(i) && 1 === i.length && (i = i[0]), Object.assign(t.pagination, {el: i}), i = A(i), i.forEach((i => {
                    "bullets" === e.type && e.clickable && i.classList.add(...(e.clickableClass || "").split(" ")), i.classList.add(e.modifierClass + e.type), i.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (i.classList.add(`${e.modifierClass}${e.type}-dynamic`), o = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && i.classList.add(e.progressbarOppositeClass), e.clickable && i.addEventListener("click", c), t.enabled || i.classList.add(e.lockClass)
                })))
            }

            function f() {
                const e = t.params.pagination;
                if (l()) return;
                let i = t.pagination.el;
                i && (i = A(i), i.forEach((i => {
                    i.classList.remove(e.hiddenClass), i.classList.remove(e.modifierClass + e.type), i.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (i.classList.remove(...(e.clickableClass || "").split(" ")), i.removeEventListener("click", c))
                }))), t.pagination.bullets && t.pagination.bullets.forEach((t => t.classList.remove(...e.bulletActiveClass.split(" "))))
            }

            s("changeDirection", (() => {
                if (!t.pagination || !t.pagination.el) return;
                const e = t.params.pagination;
                let {el: i} = t.pagination;
                i = A(i), i.forEach((i => {
                    i.classList.remove(e.horizontalClass, e.verticalClass), i.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
                }))
            })), s("init", (() => {
                !1 === t.params.pagination.enabled ? h() : (m(), u(), p())
            })), s("activeIndexChange", (() => {
                void 0 === t.snapIndex && p()
            })), s("snapIndexChange", (() => {
                p()
            })), s("snapGridLengthChange", (() => {
                u(), p()
            })), s("destroy", (() => {
                f()
            })), s("enable disable", (() => {
                let {el: e} = t.pagination;
                e && (e = A(e), e.forEach((e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass))))
            })), s("lock unlock", (() => {
                p()
            })), s("click", ((e, i) => {
                const s = i.target, n = A(t.pagination.el);
                if (t.params.pagination.el && t.params.pagination.hideOnClick && n && n.length > 0 && !s.classList.contains(t.params.pagination.bulletClass)) {
                    if (t.navigation && (t.navigation.nextEl && s === t.navigation.nextEl || t.navigation.prevEl && s === t.navigation.prevEl)) return;
                    const e = n[0].classList.contains(t.params.pagination.hiddenClass);
                    r(!0 === e ? "paginationShow" : "paginationHide"), n.forEach((e => e.classList.toggle(t.params.pagination.hiddenClass)))
                }
            }));
            const h = () => {
                t.el.classList.add(t.params.pagination.paginationDisabledClass);
                let {el: e} = t.pagination;
                e && (e = A(e), e.forEach((e => e.classList.add(t.params.pagination.paginationDisabledClass)))), f()
            };
            Object.assign(t.pagination, {
                enable: () => {
                    t.el.classList.remove(t.params.pagination.paginationDisabledClass);
                    let {el: e} = t.pagination;
                    e && (e = A(e), e.forEach((e => e.classList.remove(t.params.pagination.paginationDisabledClass)))), m(), u(), p()
                }, disable: h, render: u, update: p, init: m, destroy: f
            })
        }, function (e) {
            let {swiper: t, extendParams: i, on: s, emit: n} = e;
            const a = r();
            let d, c, p, u, m = !1, f = null, h = null;

            function g() {
                if (!t.params.scrollbar.el || !t.scrollbar.el) return;
                const {scrollbar: e, rtlTranslate: i} = t, {dragEl: s, el: r} = e, n = t.params.scrollbar,
                    a = t.params.loop ? t.progressLoop : t.progress;
                let o = c, l = (p - c) * a;
                i ? (l = -l, l > 0 ? (o = c - l, l = 0) : -l + c > p && (o = p + l)) : l < 0 ? (o = c + l, l = 0) : l + c > p && (o = p - l), t.isHorizontal() ? (s.style.transform = `translate3d(${l}px, 0, 0)`, s.style.width = `${o}px`) : (s.style.transform = `translate3d(0px, ${l}px, 0)`, s.style.height = `${o}px`), n.hide && (clearTimeout(f), r.style.opacity = 1, f = setTimeout((() => {
                    r.style.opacity = 0, r.style.transitionDuration = "400ms"
                }), 1e3))
            }

            function v() {
                if (!t.params.scrollbar.el || !t.scrollbar.el) return;
                const {scrollbar: e} = t, {dragEl: i, el: s} = e;
                i.style.width = "", i.style.height = "", p = t.isHorizontal() ? s.offsetWidth : s.offsetHeight, u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), c = "auto" === t.params.scrollbar.dragSize ? p * u : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? i.style.width = `${c}px` : i.style.height = `${c}px`, s.style.display = u >= 1 ? "none" : "", t.params.scrollbar.hide && (s.style.opacity = 0), t.params.watchOverflow && t.enabled && e.el.classList[t.isLocked ? "add" : "remove"](t.params.scrollbar.lockClass)
            }

            function y(e) {
                return t.isHorizontal() ? e.clientX : e.clientY
            }

            function x(e) {
                const {scrollbar: i, rtlTranslate: s} = t, {el: r} = i;
                let n;
                n = (y(e) - b(r)[t.isHorizontal() ? "left" : "top"] - (null !== d ? d : c / 2)) / (p - c), n = Math.max(Math.min(n, 1), 0), s && (n = 1 - n);
                const a = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * n;
                t.updateProgress(a), t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses()
            }

            function E(e) {
                const i = t.params.scrollbar, {scrollbar: s, wrapperEl: r} = t, {el: a, dragEl: o} = s;
                m = !0, d = e.target === o ? y(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), r.style.transitionDuration = "100ms", o.style.transitionDuration = "100ms", x(e), clearTimeout(h), a.style.transitionDuration = "0ms", i.hide && (a.style.opacity = 1), t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "none"), n("scrollbarDragStart", e)
            }

            function S(e) {
                const {scrollbar: i, wrapperEl: s} = t, {el: r, dragEl: a} = i;
                m && (e.preventDefault && e.cancelable ? e.preventDefault() : e.returnValue = !1, x(e), s.style.transitionDuration = "0ms", r.style.transitionDuration = "0ms", a.style.transitionDuration = "0ms", n("scrollbarDragMove", e))
            }

            function T(e) {
                const i = t.params.scrollbar, {scrollbar: s, wrapperEl: r} = t, {el: a} = s;
                m && (m = !1, t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "", r.style.transitionDuration = ""), i.hide && (clearTimeout(h), h = l((() => {
                    a.style.opacity = 0, a.style.transitionDuration = "400ms"
                }), 1e3)), n("scrollbarDragEnd", e), i.snapOnRelease && t.slideToClosest())
            }

            function M(e) {
                const {scrollbar: i, params: s} = t, r = i.el;
                if (!r) return;
                const n = r, o = !!s.passiveListeners && {passive: !1, capture: !1},
                    l = !!s.passiveListeners && {passive: !0, capture: !1};
                if (!n) return;
                const d = "on" === e ? "addEventListener" : "removeEventListener";
                n[d]("pointerdown", E, o), a[d]("pointermove", S, o), a[d]("pointerup", T, l)
            }

            function C() {
                const {scrollbar: e, el: i} = t;
                t.params.scrollbar = se(t, t.originalParams.scrollbar, t.params.scrollbar, {el: "swiper-scrollbar"});
                const s = t.params.scrollbar;
                if (!s.el) return;
                let r, n;
                if ("string" == typeof s.el && t.isElement && (r = t.el.querySelector(s.el)), r || "string" != typeof s.el) r || (r = s.el); else if (r = a.querySelectorAll(s.el), !r.length) return;
                t.params.uniqueNavElements && "string" == typeof s.el && r.length > 1 && 1 === i.querySelectorAll(s.el).length && (r = i.querySelector(s.el)), r.length > 0 && (r = r[0]), r.classList.add(t.isHorizontal() ? s.horizontalClass : s.verticalClass), r && (n = r.querySelector(re(t.params.scrollbar.dragClass)), n || (n = w("div", t.params.scrollbar.dragClass), r.append(n))), Object.assign(e, {
                    el: r,
                    dragEl: n
                }), s.draggable && t.params.scrollbar.el && t.scrollbar.el && M("on"), r && r.classList[t.enabled ? "remove" : "add"](...o(t.params.scrollbar.lockClass))
            }

            function L() {
                const e = t.params.scrollbar, i = t.scrollbar.el;
                i && i.classList.remove(...o(t.isHorizontal() ? e.horizontalClass : e.verticalClass)), t.params.scrollbar.el && t.scrollbar.el && M("off")
            }

            i({
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
            }), t.scrollbar = {el: null, dragEl: null}, s("changeDirection", (() => {
                if (!t.scrollbar || !t.scrollbar.el) return;
                const e = t.params.scrollbar;
                let {el: i} = t.scrollbar;
                i = A(i), i.forEach((i => {
                    i.classList.remove(e.horizontalClass, e.verticalClass), i.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
                }))
            })), s("init", (() => {
                !1 === t.params.scrollbar.enabled ? P() : (C(), v(), g())
            })), s("update resize observerUpdate lock unlock changeDirection", (() => {
                v()
            })), s("setTranslate", (() => {
                g()
            })), s("setTransition", ((e, i) => {
                !function (e) {
                    t.params.scrollbar.el && t.scrollbar.el && (t.scrollbar.dragEl.style.transitionDuration = `${e}ms`)
                }(i)
            })), s("enable disable", (() => {
                const {el: e} = t.scrollbar;
                e && e.classList[t.enabled ? "remove" : "add"](...o(t.params.scrollbar.lockClass))
            })), s("destroy", (() => {
                L()
            }));
            const P = () => {
                t.el.classList.add(...o(t.params.scrollbar.scrollbarDisabledClass)), t.scrollbar.el && t.scrollbar.el.classList.add(...o(t.params.scrollbar.scrollbarDisabledClass)), L()
            };
            Object.assign(t.scrollbar, {
                enable: () => {
                    t.el.classList.remove(...o(t.params.scrollbar.scrollbarDisabledClass)), t.scrollbar.el && t.scrollbar.el.classList.remove(...o(t.params.scrollbar.scrollbarDisabledClass)), C(), v(), g()
                }, disable: P, updateSize: v, setTranslate: g, init: C, destroy: L
            })
        }, function (e) {
            let {swiper: t, extendParams: i, on: s} = e;
            i({parallax: {enabled: !1}});
            const r = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
                n = (e, i) => {
                    const {rtl: s} = t, r = s ? -1 : 1, n = e.getAttribute("data-swiper-parallax") || "0";
                    let a = e.getAttribute("data-swiper-parallax-x"), o = e.getAttribute("data-swiper-parallax-y");
                    const l = e.getAttribute("data-swiper-parallax-scale"),
                        d = e.getAttribute("data-swiper-parallax-opacity"),
                        c = e.getAttribute("data-swiper-parallax-rotate");
                    if (a || o ? (a = a || "0", o = o || "0") : t.isHorizontal() ? (a = n, o = "0") : (o = n, a = "0"), a = a.indexOf("%") >= 0 ? parseInt(a, 10) * i * r + "%" : a * i * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * i + "%" : o * i + "px", null != d) {
                        const t = d - (d - 1) * (1 - Math.abs(i));
                        e.style.opacity = t
                    }
                    let p = `translate3d(${a}, ${o}, 0px)`;
                    null != l && (p += ` scale(${l - (l - 1) * (1 - Math.abs(i))})`), c && null != c && (p += ` rotate(${c * i * -1}deg)`), e.style.transform = p
                }, a = () => {
                    const {el: e, slides: i, progress: s, snapGrid: a, isElement: o} = t, l = g(e, r);
                    t.isElement && l.push(...g(t.hostEl, r)), l.forEach((e => {
                        n(e, s)
                    })), i.forEach(((e, i) => {
                        let o = e.progress;
                        t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (o += Math.ceil(i / 2) - s * (a.length - 1)), o = Math.min(Math.max(o, -1), 1), e.querySelectorAll(`${r}, [data-swiper-parallax-rotate]`).forEach((e => {
                            n(e, o)
                        }))
                    }))
                };
            s("beforeInit", (() => {
                t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0)
            })), s("init", (() => {
                t.params.parallax.enabled && a()
            })), s("setTranslate", (() => {
                t.params.parallax.enabled && a()
            })), s("setTransition", ((e, i) => {
                t.params.parallax.enabled && function (e) {
                    void 0 === e && (e = t.params.speed);
                    const {el: i, hostEl: s} = t, n = [...i.querySelectorAll(r)];
                    t.isElement && n.push(...s.querySelectorAll(r)), n.forEach((t => {
                        let i = parseInt(t.getAttribute("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (i = 0), t.style.transitionDuration = `${i}ms`
                    }))
                }(i)
            }))
        }, function (e) {
            let {swiper: t, extendParams: i, on: s, emit: r} = e;
            const n = a();
            i({
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
            let o, l, d = 1, p = !1;
            const u = [], m = {
                originX: 0,
                originY: 0,
                slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                imageEl: void 0,
                imageWrapEl: void 0,
                maxRatio: 3
            }, f = {
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
            }, h = {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0};
            let v, w = 1;

            function y() {
                if (u.length < 2) return 1;
                const e = u[0].pageX, t = u[0].pageY, i = u[1].pageX, s = u[1].pageY;
                return Math.sqrt((i - e) ** 2 + (s - t) ** 2)
            }

            function x() {
                const e = t.params.zoom, i = m.imageWrapEl.getAttribute("data-swiper-zoom") || e.maxRatio;
                if (e.limitToOriginalSize && m.imageEl && m.imageEl.naturalWidth) {
                    const e = m.imageEl.naturalWidth / m.imageEl.offsetWidth;
                    return Math.min(e, i)
                }
                return i
            }

            function S(e) {
                const i = t.isElement ? "swiper-slide" : `.${t.params.slideClass}`;
                return !!e.target.matches(i) || t.slides.filter((t => t.contains(e.target))).length > 0
            }

            function T(e) {
                if ("mouse" === e.pointerType && u.splice(0, u.length), !S(e)) return;
                const i = t.params.zoom;
                if (o = !1, l = !1, u.push(e), !(u.length < 2)) {
                    if (o = !0, m.scaleStart = y(), !m.slideEl) {
                        m.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`), m.slideEl || (m.slideEl = t.slides[t.activeIndex]);
                        let s = m.slideEl.querySelector(`.${i.containerClass}`);
                        if (s && (s = s.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), m.imageEl = s, m.imageWrapEl = s ? E(m.imageEl, `.${i.containerClass}`)[0] : void 0, !m.imageWrapEl) return void (m.imageEl = void 0);
                        m.maxRatio = x()
                    }
                    if (m.imageEl) {
                        const [e, t] = function () {
                            if (u.length < 2) return {x: null, y: null};
                            const e = m.imageEl.getBoundingClientRect();
                            return [(u[0].pageX + (u[1].pageX - u[0].pageX) / 2 - e.x - n.scrollX) / d, (u[0].pageY + (u[1].pageY - u[0].pageY) / 2 - e.y - n.scrollY) / d]
                        }();
                        m.originX = e, m.originY = t, m.imageEl.style.transitionDuration = "0ms"
                    }
                    p = !0
                }
            }

            function A(e) {
                if (!S(e)) return;
                const i = t.params.zoom, s = t.zoom, r = u.findIndex((t => t.pointerId === e.pointerId));
                r >= 0 && (u[r] = e), u.length < 2 || (l = !0, m.scaleMove = y(), m.imageEl && (s.scale = m.scaleMove / m.scaleStart * d, s.scale > m.maxRatio && (s.scale = m.maxRatio - 1 + (s.scale - m.maxRatio + 1) ** .5), s.scale < i.minRatio && (s.scale = i.minRatio + 1 - (i.minRatio - s.scale + 1) ** .5), m.imageEl.style.transform = `translate3d(0,0,0) scale(${s.scale})`))
            }

            function M(e) {
                if (!S(e)) return;
                if ("mouse" === e.pointerType && "pointerout" === e.type) return;
                const i = t.params.zoom, s = t.zoom, r = u.findIndex((t => t.pointerId === e.pointerId));
                r >= 0 && u.splice(r, 1), o && l && (o = !1, l = !1, m.imageEl && (s.scale = Math.max(Math.min(s.scale, m.maxRatio), i.minRatio), m.imageEl.style.transitionDuration = `${t.params.speed}ms`, m.imageEl.style.transform = `translate3d(0,0,0) scale(${s.scale})`, d = s.scale, p = !1, s.scale > 1 && m.slideEl ? m.slideEl.classList.add(`${i.zoomedSlideClass}`) : s.scale <= 1 && m.slideEl && m.slideEl.classList.remove(`${i.zoomedSlideClass}`), 1 === s.scale && (m.originX = 0, m.originY = 0, m.slideEl = void 0)))
            }

            function C() {
                t.touchEventsData.preventTouchMoveFromPointerMove = !1
            }

            function L(e) {
                if (!S(e) || !function (e) {
                    const i = `.${t.params.zoom.containerClass}`;
                    return !!e.target.matches(i) || [...t.hostEl.querySelectorAll(i)].filter((t => t.contains(e.target))).length > 0
                }(e)) return;
                const i = t.zoom;
                if (!m.imageEl) return;
                if (!f.isTouched || !m.slideEl) return;
                f.isMoved || (f.width = m.imageEl.offsetWidth || m.imageEl.clientWidth, f.height = m.imageEl.offsetHeight || m.imageEl.clientHeight, f.startX = c(m.imageWrapEl, "x") || 0, f.startY = c(m.imageWrapEl, "y") || 0, m.slideWidth = m.slideEl.offsetWidth, m.slideHeight = m.slideEl.offsetHeight, m.imageWrapEl.style.transitionDuration = "0ms");
                const s = f.width * i.scale, r = f.height * i.scale;
                if (f.minX = Math.min(m.slideWidth / 2 - s / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - r / 2, 0), f.maxY = -f.minY, f.touchesCurrent.x = u.length > 0 ? u[0].pageX : e.pageX, f.touchesCurrent.y = u.length > 0 ? u[0].pageY : e.pageY, Math.max(Math.abs(f.touchesCurrent.x - f.touchesStart.x), Math.abs(f.touchesCurrent.y - f.touchesStart.y)) > 5 && (t.allowClick = !1), !f.isMoved && !p) {
                    if (t.isHorizontal() && (Math.floor(f.minX) === Math.floor(f.startX) && f.touchesCurrent.x < f.touchesStart.x || Math.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent.x > f.touchesStart.x)) return f.isTouched = !1, void C();
                    if (!t.isHorizontal() && (Math.floor(f.minY) === Math.floor(f.startY) && f.touchesCurrent.y < f.touchesStart.y || Math.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent.y > f.touchesStart.y)) return f.isTouched = !1, void C()
                }
                e.cancelable && e.preventDefault(), e.stopPropagation(), clearTimeout(v), t.touchEventsData.preventTouchMoveFromPointerMove = !0, v = setTimeout((() => {
                    C()
                })), f.isMoved = !0;
                const n = (i.scale - d) / (m.maxRatio - t.params.zoom.minRatio), {originX: a, originY: o} = m;
                f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX + n * (f.width - 2 * a), f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY + n * (f.height - 2 * o), f.currentX < f.minX && (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** .8), f.currentX > f.maxX && (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** .8), f.currentY < f.minY && (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** .8), f.currentY > f.maxY && (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** .8), h.prevPositionX || (h.prevPositionX = f.touchesCurrent.x), h.prevPositionY || (h.prevPositionY = f.touchesCurrent.y), h.prevTime || (h.prevTime = Date.now()), h.x = (f.touchesCurrent.x - h.prevPositionX) / (Date.now() - h.prevTime) / 2, h.y = (f.touchesCurrent.y - h.prevPositionY) / (Date.now() - h.prevTime) / 2, Math.abs(f.touchesCurrent.x - h.prevPositionX) < 2 && (h.x = 0), Math.abs(f.touchesCurrent.y - h.prevPositionY) < 2 && (h.y = 0), h.prevPositionX = f.touchesCurrent.x, h.prevPositionY = f.touchesCurrent.y, h.prevTime = Date.now(), m.imageWrapEl.style.transform = `translate3d(${f.currentX}px, ${f.currentY}px,0)`
            }

            function P() {
                const e = t.zoom;
                m.slideEl && t.activeIndex !== t.slides.indexOf(m.slideEl) && (m.imageEl && (m.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), m.imageWrapEl && (m.imageWrapEl.style.transform = "translate3d(0,0,0)"), m.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`), e.scale = 1, d = 1, m.slideEl = void 0, m.imageEl = void 0, m.imageWrapEl = void 0, m.originX = 0, m.originY = 0)
            }

            function k(e) {
                const i = t.zoom, s = t.params.zoom;
                if (!m.slideEl) {
                    e && e.target && (m.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`)), m.slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.slideEl = g(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : m.slideEl = t.slides[t.activeIndex]);
                    let i = m.slideEl.querySelector(`.${s.containerClass}`);
                    i && (i = i.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), m.imageEl = i, m.imageWrapEl = i ? E(m.imageEl, `.${s.containerClass}`)[0] : void 0
                }
                if (!m.imageEl || !m.imageWrapEl) return;
                let r, a, o, l, c, p, u, h, v, w, y, S, T, A, M, C, L, P;
                t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), m.slideEl.classList.add(`${s.zoomedSlideClass}`), void 0 === f.touchesStart.x && e ? (r = e.pageX, a = e.pageY) : (r = f.touchesStart.x, a = f.touchesStart.y);
                const k = "number" == typeof e ? e : null;
                1 === d && k && (r = void 0, a = void 0);
                const z = x();
                i.scale = k || z, d = k || z, !e || 1 === d && k ? (u = 0, h = 0) : (L = m.slideEl.offsetWidth, P = m.slideEl.offsetHeight, o = b(m.slideEl).left + n.scrollX, l = b(m.slideEl).top + n.scrollY, c = o + L / 2 - r, p = l + P / 2 - a, v = m.imageEl.offsetWidth || m.imageEl.clientWidth, w = m.imageEl.offsetHeight || m.imageEl.clientHeight, y = v * i.scale, S = w * i.scale, T = Math.min(L / 2 - y / 2, 0), A = Math.min(P / 2 - S / 2, 0), M = -T, C = -A, u = c * i.scale, h = p * i.scale, u < T && (u = T), u > M && (u = M), h < A && (h = A), h > C && (h = C)), k && 1 === i.scale && (m.originX = 0, m.originY = 0), m.imageWrapEl.style.transitionDuration = "300ms", m.imageWrapEl.style.transform = `translate3d(${u}px, ${h}px,0)`, m.imageEl.style.transitionDuration = "300ms", m.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`
            }

            function z() {
                const e = t.zoom, i = t.params.zoom;
                if (!m.slideEl) {
                    t.params.virtual && t.params.virtual.enabled && t.virtual ? m.slideEl = g(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : m.slideEl = t.slides[t.activeIndex];
                    let e = m.slideEl.querySelector(`.${i.containerClass}`);
                    e && (e = e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), m.imageEl = e, m.imageWrapEl = e ? E(m.imageEl, `.${i.containerClass}`)[0] : void 0
                }
                m.imageEl && m.imageWrapEl && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, d = 1, m.imageWrapEl.style.transitionDuration = "300ms", m.imageWrapEl.style.transform = "translate3d(0,0,0)", m.imageEl.style.transitionDuration = "300ms", m.imageEl.style.transform = "translate3d(0,0,0) scale(1)", m.slideEl.classList.remove(`${i.zoomedSlideClass}`), m.slideEl = void 0, m.originX = 0, m.originY = 0)
            }

            function I(e) {
                const i = t.zoom;
                i.scale && 1 !== i.scale ? z() : k(e)
            }

            function O() {
                return {
                    passiveListener: !!t.params.passiveListeners && {passive: !0, capture: !1},
                    activeListenerWithCapture: !t.params.passiveListeners || {passive: !1, capture: !0}
                }
            }

            function D() {
                const e = t.zoom;
                if (e.enabled) return;
                e.enabled = !0;
                const {passiveListener: i, activeListenerWithCapture: s} = O();
                t.wrapperEl.addEventListener("pointerdown", T, i), t.wrapperEl.addEventListener("pointermove", A, s), ["pointerup", "pointercancel", "pointerout"].forEach((e => {
                    t.wrapperEl.addEventListener(e, M, i)
                })), t.wrapperEl.addEventListener("pointermove", L, s)
            }

            function $() {
                const e = t.zoom;
                if (!e.enabled) return;
                e.enabled = !1;
                const {passiveListener: i, activeListenerWithCapture: s} = O();
                t.wrapperEl.removeEventListener("pointerdown", T, i), t.wrapperEl.removeEventListener("pointermove", A, s), ["pointerup", "pointercancel", "pointerout"].forEach((e => {
                    t.wrapperEl.removeEventListener(e, M, i)
                })), t.wrapperEl.removeEventListener("pointermove", L, s)
            }

            Object.defineProperty(t.zoom, "scale", {
                get() {
                    return w
                }, set(e) {
                    if (w !== e) {
                        const t = m.imageEl, i = m.slideEl;
                        r("zoomChange", e, t, i)
                    }
                    w = e
                }
            }), s("init", (() => {
                t.params.zoom.enabled && D()
            })), s("destroy", (() => {
                $()
            })), s("touchStart", ((e, i) => {
                t.zoom.enabled && function (e) {
                    const i = t.device;
                    if (!m.imageEl) return;
                    if (f.isTouched) return;
                    i.android && e.cancelable && e.preventDefault(), f.isTouched = !0;
                    const s = u.length > 0 ? u[0] : e;
                    f.touchesStart.x = s.pageX, f.touchesStart.y = s.pageY
                }(i)
            })), s("touchEnd", ((e, i) => {
                t.zoom.enabled && function () {
                    const e = t.zoom;
                    if (!m.imageEl) return;
                    if (!f.isTouched || !f.isMoved) return f.isTouched = !1, void (f.isMoved = !1);
                    f.isTouched = !1, f.isMoved = !1;
                    let i = 300, s = 300;
                    const r = h.x * i, n = f.currentX + r, a = h.y * s, o = f.currentY + a;
                    0 !== h.x && (i = Math.abs((n - f.currentX) / h.x)), 0 !== h.y && (s = Math.abs((o - f.currentY) / h.y));
                    const l = Math.max(i, s);
                    f.currentX = n, f.currentY = o;
                    const d = f.width * e.scale, c = f.height * e.scale;
                    f.minX = Math.min(m.slideWidth / 2 - d / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - c / 2, 0), f.maxY = -f.minY, f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX), f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY), m.imageWrapEl.style.transitionDuration = `${l}ms`, m.imageWrapEl.style.transform = `translate3d(${f.currentX}px, ${f.currentY}px,0)`
                }()
            })), s("doubleTap", ((e, i) => {
                !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && I(i)
            })), s("transitionEnd", (() => {
                t.zoom.enabled && t.params.zoom.enabled && P()
            })), s("slideChange", (() => {
                t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && P()
            })), Object.assign(t.zoom, {enable: D, disable: $, in: k, out: z, toggle: I})
        }, function (e) {
            let {swiper: t, extendParams: i, on: s} = e;

            function r(e, t) {
                const i = function () {
                    let e, t, i;
                    return (s, r) => {
                        for (t = -1, e = s.length; e - t > 1;) i = e + t >> 1, s[i] <= r ? t = i : e = i;
                        return e
                    }
                }();
                let s, r;
                return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                    return e ? (r = i(this.x, e), s = r - 1, (e - this.x[s]) * (this.y[r] - this.y[s]) / (this.x[r] - this.x[s]) + this.y[s]) : 0
                }, this
            }

            function n() {
                t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
            }

            i({
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            }), t.controller = {control: void 0}, s("beforeInit", (() => {
                if ("undefined" != typeof window && ("string" == typeof t.params.controller.control || t.params.controller.control instanceof HTMLElement)) {
                    const e = document.querySelector(t.params.controller.control);
                    if (e && e.swiper) t.controller.control = e.swiper; else if (e) {
                        const i = s => {
                            t.controller.control = s.detail[0], t.update(), e.removeEventListener("init", i)
                        };
                        e.addEventListener("init", i)
                    }
                } else t.controller.control = t.params.controller.control
            })), s("update", (() => {
                n()
            })), s("resize", (() => {
                n()
            })), s("observerUpdate", (() => {
                n()
            })), s("setTranslate", ((e, i, s) => {
                t.controller.control && !t.controller.control.destroyed && t.controller.setTranslate(i, s)
            })), s("setTransition", ((e, i, s) => {
                t.controller.control && !t.controller.control.destroyed && t.controller.setTransition(i, s)
            })), Object.assign(t.controller, {
                setTranslate: function (e, i) {
                    const s = t.controller.control;
                    let n, a;
                    const o = t.constructor;

                    function l(e) {
                        if (e.destroyed) return;
                        const i = t.rtlTranslate ? -t.translate : t.translate;
                        "slide" === t.params.controller.by && (function (e) {
                            t.controller.spline = t.params.loop ? new r(t.slidesGrid, e.slidesGrid) : new r(t.snapGrid, e.snapGrid)
                        }(e), a = -t.controller.spline.interpolate(-i)), a && "container" !== t.params.controller.by || (n = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), !Number.isNaN(n) && Number.isFinite(n) || (n = 1), a = (i - t.minTranslate()) * n + e.minTranslate()), t.params.controller.inverse && (a = e.maxTranslate() - a), e.updateProgress(a), e.setTranslate(a, t), e.updateActiveIndex(), e.updateSlidesClasses()
                    }

                    if (Array.isArray(s)) for (let e = 0; e < s.length; e += 1) s[e] !== i && s[e] instanceof o && l(s[e]); else s instanceof o && i !== s && l(s)
                }, setTransition: function (e, i) {
                    const s = t.constructor, r = t.controller.control;
                    let n;

                    function a(i) {
                        i.destroyed || (i.setTransition(e, t), 0 !== e && (i.transitionStart(), i.params.autoHeight && l((() => {
                            i.updateAutoHeight()
                        })), S(i.wrapperEl, (() => {
                            r && i.transitionEnd()
                        }))))
                    }

                    if (Array.isArray(r)) for (n = 0; n < r.length; n += 1) r[n] !== i && r[n] instanceof s && a(r[n]); else r instanceof s && i !== r && a(r)
                }
            })
        }, function (e) {
            let {swiper: t, extendParams: i, on: s} = e;
            i({
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
            let n, a, o = null, l = (new Date).getTime();

            function d(e) {
                const t = o;
                0 !== t.length && (t.innerHTML = "", t.innerHTML = e)
            }

            function c(e) {
                (e = A(e)).forEach((e => {
                    e.setAttribute("tabIndex", "0")
                }))
            }

            function p(e) {
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

            function f(e, t) {
                (e = A(e)).forEach((e => {
                    e.setAttribute("aria-label", t)
                }))
            }

            function h(e) {
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
                const i = t.params.a11y, s = e.target;
                if (!t.pagination || !t.pagination.el || s !== t.pagination.el && !t.pagination.el.contains(e.target) || e.target.matches(re(t.params.pagination.bulletClass))) {
                    if (t.navigation && t.navigation.prevEl && t.navigation.nextEl) {
                        const e = A(t.navigation.prevEl);
                        A(t.navigation.nextEl).includes(s) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? d(i.lastSlideMessage) : d(i.nextSlideMessage)), e.includes(s) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? d(i.firstSlideMessage) : d(i.prevSlideMessage))
                    }
                    t.pagination && s.matches(re(t.params.pagination.bulletClass)) && s.click()
                }
            }

            function b() {
                return t.pagination && t.pagination.bullets && t.pagination.bullets.length
            }

            function y() {
                return b() && t.params.pagination.clickable
            }

            const E = (e, t, i) => {
                c(e), "BUTTON" !== e.tagName && (u(e, "button"), e.addEventListener("keydown", v)), f(e, i), function (e, t) {
                    (e = A(e)).forEach((e => {
                        e.setAttribute("aria-controls", t)
                    }))
                }(e, t)
            }, S = e => {
                a && a !== e.target && !a.contains(e.target) && (n = !0), t.a11y.clicked = !0
            }, T = () => {
                n = !1, requestAnimationFrame((() => {
                    requestAnimationFrame((() => {
                        t.destroyed || (t.a11y.clicked = !1)
                    }))
                }))
            }, M = e => {
                l = (new Date).getTime()
            }, C = e => {
                if (t.a11y.clicked) return;
                if ((new Date).getTime() - l < 100) return;
                const i = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
                if (!i || !t.slides.includes(i)) return;
                a = i;
                const s = t.slides.indexOf(i) === t.activeIndex,
                    r = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(i);
                s || r || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, requestAnimationFrame((() => {
                    n || (t.params.loop ? t.slideToLoop(parseInt(i.getAttribute("data-swiper-slide-index")), 0) : t.slideTo(t.slides.indexOf(i), 0), n = !1)
                })))
            }, L = () => {
                const e = t.params.a11y;
                e.itemRoleDescriptionMessage && m(t.slides, e.itemRoleDescriptionMessage), e.slideRole && u(t.slides, e.slideRole);
                const i = t.slides.length;
                e.slideLabelMessage && t.slides.forEach(((s, r) => {
                    const n = t.params.loop ? parseInt(s.getAttribute("data-swiper-slide-index"), 10) : r;
                    f(s, e.slideLabelMessage.replace(/\{\{index\}\}/, n + 1).replace(/\{\{slidesLength\}\}/, i))
                }))
            };
            s("beforeInit", (() => {
                o = w("span", t.params.a11y.notificationClass), o.setAttribute("aria-live", "assertive"), o.setAttribute("aria-atomic", "true")
            })), s("afterInit", (() => {
                t.params.a11y.enabled && (() => {
                    const e = t.params.a11y;
                    t.el.append(o);
                    const i = t.el;
                    e.containerRoleDescriptionMessage && m(i, e.containerRoleDescriptionMessage), e.containerMessage && f(i, e.containerMessage);
                    const s = t.wrapperEl,
                        n = e.id || s.getAttribute("id") || `swiper-wrapper-${a = 16, void 0 === a && (a = 16), "x".repeat(a).replace(/x/g, (() => Math.round(16 * Math.random()).toString(16)))}`;
                    var a;
                    const l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
                    var d;
                    d = n, A(s).forEach((e => {
                        e.setAttribute("id", d)
                    })), function (e, t) {
                        (e = A(e)).forEach((e => {
                            e.setAttribute("aria-live", t)
                        }))
                    }(s, l), L();
                    let {nextEl: c, prevEl: p} = t.navigation ? t.navigation : {};
                    c = A(c), p = A(p), c && c.forEach((t => E(t, n, e.nextSlideMessage))), p && p.forEach((t => E(t, n, e.prevSlideMessage))), y() && A(t.pagination.el).forEach((e => {
                        e.addEventListener("keydown", v)
                    })), r().addEventListener("visibilitychange", M), t.el.addEventListener("focus", C, !0), t.el.addEventListener("focus", C, !0), t.el.addEventListener("pointerdown", S, !0), t.el.addEventListener("pointerup", T, !0)
                })()
            })), s("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => {
                t.params.a11y.enabled && L()
            })), s("fromEdge toEdge afterInit lock unlock", (() => {
                t.params.a11y.enabled && function () {
                    if (t.params.loop || t.params.rewind || !t.navigation) return;
                    const {nextEl: e, prevEl: i} = t.navigation;
                    i && (t.isBeginning ? (h(i), p(i)) : (g(i), c(i))), e && (t.isEnd ? (h(e), p(e)) : (g(e), c(e)))
                }()
            })), s("paginationUpdate", (() => {
                t.params.a11y.enabled && function () {
                    const e = t.params.a11y;
                    b() && t.pagination.bullets.forEach((i => {
                        t.params.pagination.clickable && (c(i), t.params.pagination.renderBullet || (u(i, "button"), f(i, e.paginationBulletMessage.replace(/\{\{index\}\}/, x(i) + 1)))), i.matches(re(t.params.pagination.bulletActiveClass)) ? i.setAttribute("aria-current", "true") : i.removeAttribute("aria-current")
                    }))
                }()
            })), s("destroy", (() => {
                t.params.a11y.enabled && function () {
                    o && o.remove();
                    let {nextEl: e, prevEl: i} = t.navigation ? t.navigation : {};
                    e = A(e), i = A(i), e && e.forEach((e => e.removeEventListener("keydown", v))), i && i.forEach((e => e.removeEventListener("keydown", v))), y() && A(t.pagination.el).forEach((e => {
                        e.removeEventListener("keydown", v)
                    })), r().removeEventListener("visibilitychange", M), t.el && "string" != typeof t.el && (t.el.removeEventListener("focus", C, !0), t.el.removeEventListener("pointerdown", S, !0), t.el.removeEventListener("pointerup", T, !0))
                }()
            }))
        }, function (e) {
            let {swiper: t, extendParams: i, on: s} = e;
            i({history: {enabled: !1, root: "", replaceState: !1, key: "slides", keepQuery: !1}});
            let r = !1, n = {};
            const o = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
                l = e => {
                    const t = a();
                    let i;
                    i = e ? new URL(e) : t.location;
                    const s = i.pathname.slice(1).split("/").filter((e => "" !== e)), r = s.length;
                    return {key: s[r - 2], value: s[r - 1]}
                }, d = (e, i) => {
                    const s = a();
                    if (!r || !t.params.history.enabled) return;
                    let n;
                    n = t.params.url ? new URL(t.params.url) : s.location;
                    const l = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${i}"]`) : t.slides[i];
                    let d = o(l.getAttribute("data-history"));
                    if (t.params.history.root.length > 0) {
                        let i = t.params.history.root;
                        "/" === i[i.length - 1] && (i = i.slice(0, i.length - 1)), d = `${i}/${e ? `${e}/` : ""}${d}`
                    } else n.pathname.includes(e) || (d = `${e ? `${e}/` : ""}${d}`);
                    t.params.history.keepQuery && (d += n.search);
                    const c = s.history.state;
                    c && c.value === d || (t.params.history.replaceState ? s.history.replaceState({value: d}, null, d) : s.history.pushState({value: d}, null, d))
                }, c = (e, i, s) => {
                    if (i) for (let r = 0, n = t.slides.length; r < n; r += 1) {
                        const n = t.slides[r];
                        if (o(n.getAttribute("data-history")) === i) {
                            const i = t.getSlideIndex(n);
                            t.slideTo(i, e, s)
                        }
                    } else t.slideTo(0, e, s)
                }, p = () => {
                    n = l(t.params.url), c(t.params.speed, n.value, !1)
                };
            s("init", (() => {
                t.params.history.enabled && (() => {
                    const e = a();
                    if (t.params.history) {
                        if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void (t.params.hashNavigation.enabled = !0);
                        r = !0, n = l(t.params.url), n.key || n.value ? (c(0, n.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", p)) : t.params.history.replaceState || e.addEventListener("popstate", p)
                    }
                })()
            })), s("destroy", (() => {
                t.params.history.enabled && (() => {
                    const e = a();
                    t.params.history.replaceState || e.removeEventListener("popstate", p)
                })()
            })), s("transitionEnd _freeModeNoMomentumRelease", (() => {
                r && d(t.params.history.key, t.activeIndex)
            })), s("slideChange", (() => {
                r && t.params.cssMode && d(t.params.history.key, t.activeIndex)
            }))
        }, function (e) {
            let {swiper: t, extendParams: i, emit: s, on: n} = e, o = !1;
            const l = r(), d = a();
            i({
                hashNavigation: {
                    enabled: !1, replaceState: !1, watchState: !1, getSlideIndex(e, i) {
                        if (t.virtual && t.params.virtual.enabled) {
                            const e = t.slides.filter((e => e.getAttribute("data-hash") === i))[0];
                            return e ? parseInt(e.getAttribute("data-swiper-slide-index"), 10) : 0
                        }
                        return t.getSlideIndex(g(t.slidesEl, `.${t.params.slideClass}[data-hash="${i}"], swiper-slide[data-hash="${i}"]`)[0])
                    }
                }
            });
            const c = () => {
                s("hashChange");
                const e = l.location.hash.replace("#", ""),
                    i = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex];
                if (e !== (i ? i.getAttribute("data-hash") : "")) {
                    const i = t.params.hashNavigation.getSlideIndex(t, e);
                    if (void 0 === i || Number.isNaN(i)) return;
                    t.slideTo(i)
                }
            }, p = () => {
                if (!o || !t.params.hashNavigation.enabled) return;
                const e = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex],
                    i = e ? e.getAttribute("data-hash") || e.getAttribute("data-history") : "";
                t.params.hashNavigation.replaceState && d.history && d.history.replaceState ? (d.history.replaceState(null, null, `#${i}` || ""), s("hashSet")) : (l.location.hash = i || "", s("hashSet"))
            };
            n("init", (() => {
                t.params.hashNavigation.enabled && (() => {
                    if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
                    o = !0;
                    const e = l.location.hash.replace("#", "");
                    if (e) {
                        const i = 0, s = t.params.hashNavigation.getSlideIndex(t, e);
                        t.slideTo(s || 0, i, t.params.runCallbacksOnInit, !0)
                    }
                    t.params.hashNavigation.watchState && d.addEventListener("hashchange", c)
                })()
            })), n("destroy", (() => {
                t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d.removeEventListener("hashchange", c)
            })), n("transitionEnd _freeModeNoMomentumRelease", (() => {
                o && p()
            })), n("slideChange", (() => {
                o && t.params.cssMode && p()
            }))
        }, function (e) {
            let t, i, {swiper: s, extendParams: n, on: a, emit: o, params: l} = e;
            s.autoplay = {running: !1, paused: !1, timeLeft: 0}, n({
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
            let d, c, p, u, m, f, h, g, v = l && l.autoplay ? l.autoplay.delay : 3e3,
                w = l && l.autoplay ? l.autoplay.delay : 3e3, b = (new Date).getTime();

            function y(e) {
                s && !s.destroyed && s.wrapperEl && e.target === s.wrapperEl && (s.wrapperEl.removeEventListener("transitionend", y), g || e.detail && e.detail.bySwiperTouchMove || M())
            }

            const x = () => {
                if (s.destroyed || !s.autoplay.running) return;
                s.autoplay.paused ? c = !0 : c && (w = d, c = !1);
                const e = s.autoplay.paused ? d : b + w - (new Date).getTime();
                s.autoplay.timeLeft = e, o("autoplayTimeLeft", e, e / v), i = requestAnimationFrame((() => {
                    x()
                }))
            }, E = e => {
                if (s.destroyed || !s.autoplay.running) return;
                cancelAnimationFrame(i), x();
                let r = void 0 === e ? s.params.autoplay.delay : e;
                v = s.params.autoplay.delay, w = s.params.autoplay.delay;
                const n = (() => {
                    let e;
                    if (e = s.virtual && s.params.virtual.enabled ? s.slides.filter((e => e.classList.contains("swiper-slide-active")))[0] : s.slides[s.activeIndex], e) return parseInt(e.getAttribute("data-swiper-autoplay"), 10)
                })();
                !Number.isNaN(n) && n > 0 && void 0 === e && (r = n, v = n, w = n), d = r;
                const a = s.params.speed, l = () => {
                    s && !s.destroyed && (s.params.autoplay.reverseDirection ? !s.isBeginning || s.params.loop || s.params.rewind ? (s.slidePrev(a, !0, !0), o("autoplay")) : s.params.autoplay.stopOnLastSlide || (s.slideTo(s.slides.length - 1, a, !0, !0), o("autoplay")) : !s.isEnd || s.params.loop || s.params.rewind ? (s.slideNext(a, !0, !0), o("autoplay")) : s.params.autoplay.stopOnLastSlide || (s.slideTo(0, a, !0, !0), o("autoplay")), s.params.cssMode && (b = (new Date).getTime(), requestAnimationFrame((() => {
                        E()
                    }))))
                };
                return r > 0 ? (clearTimeout(t), t = setTimeout((() => {
                    l()
                }), r)) : requestAnimationFrame((() => {
                    l()
                })), r
            }, S = () => {
                b = (new Date).getTime(), s.autoplay.running = !0, E(), o("autoplayStart")
            }, T = () => {
                s.autoplay.running = !1, clearTimeout(t), cancelAnimationFrame(i), o("autoplayStop")
            }, A = (e, i) => {
                if (s.destroyed || !s.autoplay.running) return;
                clearTimeout(t), e || (h = !0);
                const r = () => {
                    o("autoplayPause"), s.params.autoplay.waitForTransition ? s.wrapperEl.addEventListener("transitionend", y) : M()
                };
                if (s.autoplay.paused = !0, i) return f && (d = s.params.autoplay.delay), f = !1, void r();
                const n = d || s.params.autoplay.delay;
                d = n - ((new Date).getTime() - b), s.isEnd && d < 0 && !s.params.loop || (d < 0 && (d = 0), r())
            }, M = () => {
                s.isEnd && d < 0 && !s.params.loop || s.destroyed || !s.autoplay.running || (b = (new Date).getTime(), h ? (h = !1, E(d)) : E(), s.autoplay.paused = !1, o("autoplayResume"))
            }, C = () => {
                if (s.destroyed || !s.autoplay.running) return;
                const e = r();
                "hidden" === e.visibilityState && (h = !0, A(!0)), "visible" === e.visibilityState && M()
            }, L = e => {
                "mouse" === e.pointerType && (h = !0, g = !0, s.animating || s.autoplay.paused || A(!0))
            }, P = e => {
                "mouse" === e.pointerType && (g = !1, s.autoplay.paused && M())
            };
            a("init", (() => {
                s.params.autoplay.enabled && (s.params.autoplay.pauseOnMouseEnter && (s.el.addEventListener("pointerenter", L), s.el.addEventListener("pointerleave", P)), r().addEventListener("visibilitychange", C), S())
            })), a("destroy", (() => {
                s.el && "string" != typeof s.el && (s.el.removeEventListener("pointerenter", L), s.el.removeEventListener("pointerleave", P)), r().removeEventListener("visibilitychange", C), s.autoplay.running && T()
            })), a("_freeModeStaticRelease", (() => {
                (u || h) && M()
            })), a("_freeModeNoMomentumRelease", (() => {
                s.params.autoplay.disableOnInteraction ? T() : A(!0, !0)
            })), a("beforeTransitionStart", ((e, t, i) => {
                !s.destroyed && s.autoplay.running && (i || !s.params.autoplay.disableOnInteraction ? A(!0, !0) : T())
            })), a("sliderFirstMove", (() => {
                !s.destroyed && s.autoplay.running && (s.params.autoplay.disableOnInteraction ? T() : (p = !0, u = !1, h = !1, m = setTimeout((() => {
                    h = !0, u = !0, A(!0)
                }), 200)))
            })), a("touchEnd", (() => {
                if (!s.destroyed && s.autoplay.running && p) {
                    if (clearTimeout(m), clearTimeout(t), s.params.autoplay.disableOnInteraction) return u = !1, void (p = !1);
                    u && s.params.cssMode && M(), u = !1, p = !1
                }
            })), a("slideChange", (() => {
                !s.destroyed && s.autoplay.running && (f = !0)
            })), Object.assign(s.autoplay, {start: S, stop: T, pause: A, resume: M})
        }, function (e) {
            let {swiper: t, extendParams: i, on: s} = e;
            i({
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: !0,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-thumbs"
                }
            });
            let n = !1, a = !1;

            function o() {
                const e = t.thumbs.swiper;
                if (!e || e.destroyed) return;
                const i = e.clickedIndex, s = e.clickedSlide;
                if (s && s.classList.contains(t.params.thumbs.slideThumbActiveClass)) return;
                if (null == i) return;
                let r;
                r = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : i, t.params.loop ? t.slideToLoop(r) : t.slideTo(r)
            }

            function l() {
                const {thumbs: e} = t.params;
                if (n) return !1;
                n = !0;
                const i = t.constructor;
                if (e.swiper instanceof i) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), Object.assign(t.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), t.thumbs.swiper.update(); else if (p(e.swiper)) {
                    const s = Object.assign({}, e.swiper);
                    Object.assign(s, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }), t.thumbs.swiper = new i(s), a = !0
                }
                return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", o), !0
            }

            function d(e) {
                const i = t.thumbs.swiper;
                if (!i || i.destroyed) return;
                const s = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView;
                let r = 1;
                const n = t.params.thumbs.slideThumbActiveClass;
                if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (r = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (r = 1), r = Math.floor(r), i.slides.forEach((e => e.classList.remove(n))), i.params.loop || i.params.virtual && i.params.virtual.enabled) for (let e = 0; e < r; e += 1) g(i.slidesEl, `[data-swiper-slide-index="${t.realIndex + e}"]`).forEach((e => {
                    e.classList.add(n)
                })); else for (let e = 0; e < r; e += 1) i.slides[t.realIndex + e] && i.slides[t.realIndex + e].classList.add(n);
                const a = t.params.thumbs.autoScrollOffset, o = a && !i.params.loop;
                if (t.realIndex !== i.realIndex || o) {
                    const r = i.activeIndex;
                    let n, l;
                    if (i.params.loop) {
                        const e = i.slides.filter((e => e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`))[0];
                        n = i.slides.indexOf(e), l = t.activeIndex > t.previousIndex ? "next" : "prev"
                    } else n = t.realIndex, l = n > t.previousIndex ? "next" : "prev";
                    o && (n += "next" === l ? a : -1 * a), i.visibleSlidesIndexes && i.visibleSlidesIndexes.indexOf(n) < 0 && (i.params.centeredSlides ? n = n > r ? n - Math.floor(s / 2) + 1 : n + Math.floor(s / 2) - 1 : n > r && i.params.slidesPerGroup, i.slideTo(n, e ? 0 : void 0))
                }
            }

            t.thumbs = {swiper: null}, s("beforeInit", (() => {
                const {thumbs: e} = t.params;
                if (e && e.swiper) if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
                    const i = r(), s = () => {
                        const s = "string" == typeof e.swiper ? i.querySelector(e.swiper) : e.swiper;
                        if (s && s.swiper) e.swiper = s.swiper, l(), d(!0); else if (s) {
                            const i = r => {
                                e.swiper = r.detail[0], s.removeEventListener("init", i), l(), d(!0), e.swiper.update(), t.update()
                            };
                            s.addEventListener("init", i)
                        }
                        return s
                    }, n = () => {
                        t.destroyed || s() || requestAnimationFrame(n)
                    };
                    requestAnimationFrame(n)
                } else l(), d(!0)
            })), s("slideChange update resize observerUpdate", (() => {
                d()
            })), s("setTransition", ((e, i) => {
                const s = t.thumbs.swiper;
                s && !s.destroyed && s.setTransition(i)
            })), s("beforeDestroy", (() => {
                const e = t.thumbs.swiper;
                e && !e.destroyed && a && e.destroy()
            })), Object.assign(t.thumbs, {init: l, update: d})
        }, function (e) {
            let {swiper: t, extendParams: i, emit: s, once: r} = e;
            i({
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
                        const {touchEventsData: e, touches: i} = t;
                        0 === e.velocities.length && e.velocities.push({
                            position: i[t.isHorizontal() ? "startX" : "startY"],
                            time: e.touchStartTime
                        }), e.velocities.push({position: i[t.isHorizontal() ? "currentX" : "currentY"], time: d()})
                    }, onTouchEnd: function (e) {
                        let {currentPos: i} = e;
                        if (t.params.cssMode) return;
                        const {params: n, wrapperEl: a, rtlTranslate: o, snapGrid: l, touchEventsData: c} = t,
                            p = d() - c.touchStartTime;
                        if (i < -t.minTranslate()) t.slideTo(t.activeIndex); else if (i > -t.maxTranslate()) t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1); else {
                            if (n.freeMode.momentum) {
                                if (c.velocities.length > 1) {
                                    const e = c.velocities.pop(), i = c.velocities.pop(), s = e.position - i.position,
                                        r = e.time - i.time;
                                    t.velocity = s / r, t.velocity /= 2, Math.abs(t.velocity) < n.freeMode.minimumVelocity && (t.velocity = 0), (r > 150 || d() - e.time > 300) && (t.velocity = 0)
                                } else t.velocity = 0;
                                t.velocity *= n.freeMode.momentumVelocityRatio, c.velocities.length = 0;
                                let e = 1e3 * n.freeMode.momentumRatio;
                                const i = t.velocity * e;
                                let p = t.translate + i;
                                o && (p = -p);
                                let u, m = !1;
                                const f = 20 * Math.abs(t.velocity) * n.freeMode.momentumBounceRatio;
                                let h;
                                if (p < t.maxTranslate()) n.freeMode.momentumBounce ? (p + t.maxTranslate() < -f && (p = t.maxTranslate() - f), u = t.maxTranslate(), m = !0, c.allowMomentumBounce = !0) : p = t.maxTranslate(), n.loop && n.centeredSlides && (h = !0); else if (p > t.minTranslate()) n.freeMode.momentumBounce ? (p - t.minTranslate() > f && (p = t.minTranslate() + f), u = t.minTranslate(), m = !0, c.allowMomentumBounce = !0) : p = t.minTranslate(), n.loop && n.centeredSlides && (h = !0); else if (n.freeMode.sticky) {
                                    let e;
                                    for (let t = 0; t < l.length; t += 1) if (l[t] > -p) {
                                        e = t;
                                        break
                                    }
                                    p = Math.abs(l[e] - p) < Math.abs(l[e - 1] - p) || "next" === t.swipeDirection ? l[e] : l[e - 1], p = -p
                                }
                                if (h && r("transitionEnd", (() => {
                                    t.loopFix()
                                })), 0 !== t.velocity) {
                                    if (e = o ? Math.abs((-p - t.translate) / t.velocity) : Math.abs((p - t.translate) / t.velocity), n.freeMode.sticky) {
                                        const i = Math.abs((o ? -p : p) - t.translate),
                                            s = t.slidesSizesGrid[t.activeIndex];
                                        e = i < s ? n.speed : i < 2 * s ? 1.5 * n.speed : 2.5 * n.speed
                                    }
                                } else if (n.freeMode.sticky) return void t.slideToClosest();
                                n.freeMode.momentumBounce && m ? (t.updateProgress(u), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating = !0, S(a, (() => {
                                    t && !t.destroyed && c.allowMomentumBounce && (s("momentumBounce"), t.setTransition(n.speed), setTimeout((() => {
                                        t.setTranslate(u), S(a, (() => {
                                            t && !t.destroyed && t.transitionEnd()
                                        }))
                                    }), 0))
                                }))) : t.velocity ? (s("_freeModeNoMomentumRelease"), t.updateProgress(p), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, S(a, (() => {
                                    t && !t.destroyed && t.transitionEnd()
                                })))) : t.updateProgress(p), t.updateActiveIndex(), t.updateSlidesClasses()
                            } else {
                                if (n.freeMode.sticky) return void t.slideToClosest();
                                n.freeMode && s("_freeModeNoMomentumRelease")
                            }
                            (!n.freeMode.momentum || p >= n.longSwipesMs) && (s("_freeModeStaticRelease"), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                        }
                    }
                }
            })
        }, function (e) {
            let t, i, s, r, {swiper: n, extendParams: a, on: o} = e;
            a({grid: {rows: 1, fill: "column"}});
            const l = () => {
                let e = n.params.spaceBetween;
                return "string" == typeof e && e.indexOf("%") >= 0 ? e = parseFloat(e.replace("%", "")) / 100 * n.size : "string" == typeof e && (e = parseFloat(e)), e
            };
            o("init", (() => {
                r = n.params.grid && n.params.grid.rows > 1
            })), o("update", (() => {
                const {params: e, el: t} = n, i = e.grid && e.grid.rows > 1;
                r && !i ? (t.classList.remove(`${e.containerModifierClass}grid`, `${e.containerModifierClass}grid-column`), s = 1, n.emitContainerClasses()) : !r && i && (t.classList.add(`${e.containerModifierClass}grid`), "column" === e.grid.fill && t.classList.add(`${e.containerModifierClass}grid-column`), n.emitContainerClasses()), r = i
            })), n.grid = {
                initSlides: e => {
                    const {slidesPerView: r} = n.params, {rows: a, fill: o} = n.params.grid,
                        l = n.virtual && n.params.virtual.enabled ? n.virtual.slides.length : e.length;
                    s = Math.floor(l / a), t = Math.floor(l / a) === l / a ? l : Math.ceil(l / a) * a, "auto" !== r && "row" === o && (t = Math.max(t, r * a)), i = t / a
                }, unsetSlides: () => {
                    n.slides && n.slides.forEach((e => {
                        e.swiperSlideGridSet && (e.style.height = "", e.style[n.getDirectionLabel("margin-top")] = "")
                    }))
                }, updateSlide: (e, r, a) => {
                    const {slidesPerGroup: o} = n.params, d = l(), {rows: c, fill: p} = n.params.grid,
                        u = n.virtual && n.params.virtual.enabled ? n.virtual.slides.length : a.length;
                    let m, f, h;
                    if ("row" === p && o > 1) {
                        const i = Math.floor(e / (o * c)), s = e - c * o * i,
                            n = 0 === i ? o : Math.min(Math.ceil((u - i * c * o) / c), o);
                        h = Math.floor(s / n), f = s - h * n + i * o, m = f + h * t / c, r.style.order = m
                    } else "column" === p ? (f = Math.floor(e / c), h = e - f * c, (f > s || f === s && h === c - 1) && (h += 1, h >= c && (h = 0, f += 1))) : (h = Math.floor(e / i), f = e - h * i);
                    r.row = h, r.column = f, r.style.height = `calc((100% - ${(c - 1) * d}px) / ${c})`, r.style[n.getDirectionLabel("margin-top")] = 0 !== h ? d && `${d}px` : "", r.swiperSlideGridSet = !0
                }, updateWrapperSize: (e, i) => {
                    const {centeredSlides: s, roundLengths: r} = n.params, a = l(), {rows: o} = n.params.grid;
                    if (n.virtualSize = (e + a) * t, n.virtualSize = Math.ceil(n.virtualSize / o) - a, n.params.cssMode || (n.wrapperEl.style[n.getDirectionLabel("width")] = `${n.virtualSize + a}px`), s) {
                        const e = [];
                        for (let t = 0; t < i.length; t += 1) {
                            let s = i[t];
                            r && (s = Math.floor(s)), i[t] < n.virtualSize + i[0] && e.push(s)
                        }
                        i.splice(0, i.length), i.push(...e)
                    }
                }
            }
        }, function (e) {
            let {swiper: t} = e;
            Object.assign(t, {
                appendSlide: ne.bind(t),
                prependSlide: ae.bind(t),
                addSlide: oe.bind(t),
                removeSlide: le.bind(t),
                removeAllSlides: de.bind(t)
            })
        }, function (e) {
            let {swiper: t, extendParams: i, on: s} = e;
            i({fadeEffect: {crossFade: !1}}), ce({
                effect: "fade",
                swiper: t,
                on: s,
                setTranslate: () => {
                    const {slides: e} = t;
                    t.params.fadeEffect;
                    for (let i = 0; i < e.length; i += 1) {
                        const e = t.slides[i];
                        let s = -e.swiperSlideOffset;
                        t.params.virtualTranslate || (s -= t.translate);
                        let r = 0;
                        t.isHorizontal() || (r = s, s = 0);
                        const n = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e.progress), 0) : 1 + Math.min(Math.max(e.progress, -1), 0),
                            a = pe(0, e);
                        a.style.opacity = n, a.style.transform = `translate3d(${s}px, ${r}px, 0px)`
                    }
                },
                setTransition: e => {
                    const i = t.slides.map((e => h(e)));
                    i.forEach((t => {
                        t.style.transitionDuration = `${e}ms`
                    })), ue({swiper: t, duration: e, transformElements: i, allSlides: !0})
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
            let {swiper: t, extendParams: i, on: s} = e;
            i({cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}});
            const r = (e, t, i) => {
                let s = i ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
                    r = i ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
                s || (s = w("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (i ? "left" : "top")).split(" ")), e.append(s)), r || (r = w("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (i ? "right" : "bottom")).split(" ")), e.append(r)), s && (s.style.opacity = Math.max(-t, 0)), r && (r.style.opacity = Math.max(t, 0))
            };
            ce({
                effect: "cube",
                swiper: t,
                on: s,
                setTranslate: () => {
                    const {
                        el: e,
                        wrapperEl: i,
                        slides: s,
                        width: n,
                        height: a,
                        rtlTranslate: o,
                        size: l,
                        browser: d
                    } = t, c = t.params.cubeEffect, p = t.isHorizontal(), u = t.virtual && t.params.virtual.enabled;
                    let m, f = 0;
                    c.shadow && (p ? (m = t.wrapperEl.querySelector(".swiper-cube-shadow"), m || (m = w("div", "swiper-cube-shadow"), t.wrapperEl.append(m)), m.style.height = `${n}px`) : (m = e.querySelector(".swiper-cube-shadow"), m || (m = w("div", "swiper-cube-shadow"), e.append(m))));
                    for (let e = 0; e < s.length; e += 1) {
                        const i = s[e];
                        let n = e;
                        u && (n = parseInt(i.getAttribute("data-swiper-slide-index"), 10));
                        let a = 90 * n, d = Math.floor(a / 360);
                        o && (a = -a, d = Math.floor(-a / 360));
                        const m = Math.max(Math.min(i.progress, 1), -1);
                        let h = 0, g = 0, v = 0;
                        n % 4 == 0 ? (h = 4 * -d * l, v = 0) : (n - 1) % 4 == 0 ? (h = 0, v = 4 * -d * l) : (n - 2) % 4 == 0 ? (h = l + 4 * d * l, v = l) : (n - 3) % 4 == 0 && (h = -l, v = 3 * l + 4 * l * d), o && (h = -h), p || (g = h, h = 0);
                        const w = `rotateX(${p ? 0 : -a}deg) rotateY(${p ? a : 0}deg) translate3d(${h}px, ${g}px, ${v}px)`;
                        m <= 1 && m > -1 && (f = 90 * n + 90 * m, o && (f = 90 * -n - 90 * m), t.browser && t.browser.need3dFix && Math.abs(f) / 90 % 2 == 1 && (f += .001)), i.style.transform = w, c.slideShadows && r(i, m, p)
                    }
                    if (i.style.transformOrigin = `50% 50% -${l / 2}px`, i.style["-webkit-transform-origin"] = `50% 50% -${l / 2}px`, c.shadow) if (p) m.style.transform = `translate3d(0px, ${n / 2 + c.shadowOffset}px, ${-n / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${c.shadowScale})`; else {
                        const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                            t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                            i = c.shadowScale, s = c.shadowScale / t, r = c.shadowOffset;
                        m.style.transform = `scale3d(${i}, 1, ${s}) translate3d(0px, ${a / 2 + r}px, ${-a / 2 / s}px) rotateX(-89.99deg)`
                    }
                    const h = (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -l / 2 : 0;
                    i.style.transform = `translate3d(0px,0,${h}px) rotateX(${t.isHorizontal() ? 0 : f}deg) rotateY(${t.isHorizontal() ? -f : 0}deg)`, i.style.setProperty("--swiper-cube-translate-z", `${h}px`)
                },
                setTransition: e => {
                    const {el: i, slides: s} = t;
                    if (s.forEach((t => {
                        t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
                            t.style.transitionDuration = `${e}ms`
                        }))
                    })), t.params.cubeEffect.shadow && !t.isHorizontal()) {
                        const t = i.querySelector(".swiper-cube-shadow");
                        t && (t.style.transitionDuration = `${e}ms`)
                    }
                },
                recreateShadows: () => {
                    const e = t.isHorizontal();
                    t.slides.forEach((t => {
                        const i = Math.max(Math.min(t.progress, 1), -1);
                        r(t, i, e)
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
            let {swiper: t, extendParams: i, on: s} = e;
            i({flipEffect: {slideShadows: !0, limitRotation: !0}});
            const r = (e, i) => {
                let s = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
                    r = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
                s || (s = me("flip", e, t.isHorizontal() ? "left" : "top")), r || (r = me("flip", e, t.isHorizontal() ? "right" : "bottom")), s && (s.style.opacity = Math.max(-i, 0)), r && (r.style.opacity = Math.max(i, 0))
            };
            ce({
                effect: "flip",
                swiper: t,
                on: s,
                setTranslate: () => {
                    const {slides: e, rtlTranslate: i} = t, s = t.params.flipEffect;
                    for (let n = 0; n < e.length; n += 1) {
                        const a = e[n];
                        let o = a.progress;
                        t.params.flipEffect.limitRotation && (o = Math.max(Math.min(a.progress, 1), -1));
                        const l = a.swiperSlideOffset;
                        let d = -180 * o, c = 0, p = t.params.cssMode ? -l - t.translate : -l, u = 0;
                        t.isHorizontal() ? i && (d = -d) : (u = p, p = 0, c = -d, d = 0), t.browser && t.browser.need3dFix && (Math.abs(d) / 90 % 2 == 1 && (d += .001), Math.abs(c) / 90 % 2 == 1 && (c += .001)), a.style.zIndex = -Math.abs(Math.round(o)) + e.length, s.slideShadows && r(a, o);
                        const m = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
                        pe(0, a).style.transform = m
                    }
                },
                setTransition: e => {
                    const i = t.slides.map((e => h(e)));
                    i.forEach((t => {
                        t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
                            t.style.transitionDuration = `${e}ms`
                        }))
                    })), ue({swiper: t, duration: e, transformElements: i})
                },
                recreateShadows: () => {
                    t.params.flipEffect, t.slides.forEach((e => {
                        let i = e.progress;
                        t.params.flipEffect.limitRotation && (i = Math.max(Math.min(e.progress, 1), -1)), r(e, i)
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
            let {swiper: t, extendParams: i, on: s} = e;
            i({coverflowEffect: {rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: !0}}), ce({
                effect: "coverflow", swiper: t, on: s, setTranslate: () => {
                    const {width: e, height: i, slides: s, slidesSizesGrid: r} = t, n = t.params.coverflowEffect,
                        a = t.isHorizontal(), o = t.translate, l = a ? e / 2 - o : i / 2 - o,
                        d = a ? n.rotate : -n.rotate, c = n.depth;
                    for (let e = 0, i = s.length; e < i; e += 1) {
                        const i = s[e], o = r[e], p = (l - i.swiperSlideOffset - o / 2) / o,
                            u = "function" == typeof n.modifier ? n.modifier(p) : p * n.modifier;
                        let m = a ? d * u : 0, f = a ? 0 : d * u, h = -c * Math.abs(u), g = n.stretch;
                        "string" == typeof g && -1 !== g.indexOf("%") && (g = parseFloat(n.stretch) / 100 * o);
                        let v = a ? 0 : g * u, w = a ? g * u : 0, b = 1 - (1 - n.scale) * Math.abs(u);
                        Math.abs(w) < .001 && (w = 0), Math.abs(v) < .001 && (v = 0), Math.abs(h) < .001 && (h = 0), Math.abs(m) < .001 && (m = 0), Math.abs(f) < .001 && (f = 0), Math.abs(b) < .001 && (b = 0), t.browser && t.browser.need3dFix && (Math.abs(m) / 90 % 2 == 1 && (m += .001), Math.abs(f) / 90 % 2 == 1 && (f += .001));
                        const y = `translate3d(${w}px,${v}px,${h}px)  rotateX(${f}deg) rotateY(${m}deg) scale(${b})`;
                        if (pe(0, i).style.transform = y, i.style.zIndex = 1 - Math.abs(Math.round(u)), n.slideShadows) {
                            let e = a ? i.querySelector(".swiper-slide-shadow-left") : i.querySelector(".swiper-slide-shadow-top"),
                                t = a ? i.querySelector(".swiper-slide-shadow-right") : i.querySelector(".swiper-slide-shadow-bottom");
                            e || (e = me("coverflow", i, a ? "left" : "top")), t || (t = me("coverflow", i, a ? "right" : "bottom")), e && (e.style.opacity = u > 0 ? u : 0), t && (t.style.opacity = -u > 0 ? -u : 0)
                        }
                    }
                }, setTransition: e => {
                    t.slides.map((e => h(e))).forEach((t => {
                        t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
                            t.style.transitionDuration = `${e}ms`
                        }))
                    }))
                }, perspective: () => !0, overwriteParams: () => ({watchSlidesProgress: !0})
            })
        }, function (e) {
            let {swiper: t, extendParams: i, on: s} = e;
            i({
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
            ce({
                effect: "creative",
                swiper: t,
                on: s,
                setTranslate: () => {
                    const {slides: e, wrapperEl: i, slidesSizesGrid: s} = t,
                        n = t.params.creativeEffect, {progressMultiplier: a} = n, o = t.params.centeredSlides;
                    if (o) {
                        const e = s[0] / 2 - t.params.slidesOffsetBefore || 0;
                        i.style.transform = `translateX(calc(50% - ${e}px))`
                    }
                    for (let i = 0; i < e.length; i += 1) {
                        const s = e[i], l = s.progress,
                            d = Math.min(Math.max(s.progress, -n.limitProgress), n.limitProgress);
                        let c = d;
                        o || (c = Math.min(Math.max(s.originalProgress, -n.limitProgress), n.limitProgress));
                        const p = s.swiperSlideOffset, u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
                            m = [0, 0, 0];
                        let f = !1;
                        t.isHorizontal() || (u[1] = u[0], u[0] = 0);
                        let h = {translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1};
                        d < 0 ? (h = n.next, f = !0) : d > 0 && (h = n.prev, f = !0), u.forEach(((e, t) => {
                            u[t] = `calc(${e}px + (${r(h.translate[t])} * ${Math.abs(d * a)}))`
                        })), m.forEach(((e, i) => {
                            let s = h.rotate[i] * Math.abs(d * a);
                            t.browser && t.browser.need3dFix && Math.abs(s) / 90 % 2 == 1 && (s += .001), m[i] = s
                        })), s.style.zIndex = -Math.abs(Math.round(l)) + e.length;
                        const g = u.join(", "), v = `rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`,
                            w = c < 0 ? `scale(${1 + (1 - h.scale) * c * a})` : `scale(${1 - (1 - h.scale) * c * a})`,
                            b = c < 0 ? 1 + (1 - h.opacity) * c * a : 1 - (1 - h.opacity) * c * a,
                            y = `translate3d(${g}) ${v} ${w}`;
                        if (f && h.shadow || !f) {
                            let e = s.querySelector(".swiper-slide-shadow");
                            if (!e && h.shadow && (e = me("creative", s)), e) {
                                const t = n.shadowPerProgress ? d * (1 / n.limitProgress) : d;
                                e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                            }
                        }
                        const x = pe(0, s);
                        x.style.transform = y, x.style.opacity = b, h.origin && (x.style.transformOrigin = h.origin)
                    }
                },
                setTransition: e => {
                    const i = t.slides.map((e => h(e)));
                    i.forEach((t => {
                        t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach((t => {
                            t.style.transitionDuration = `${e}ms`
                        }))
                    })), ue({swiper: t, duration: e, transformElements: i, allSlides: !0})
                },
                perspective: () => t.params.creativeEffect.perspective,
                overwriteParams: () => ({watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode})
            })
        }, function (e) {
            let {swiper: t, extendParams: i, on: s} = e;
            i({cardsEffect: {slideShadows: !0, rotate: !0, perSlideRotate: 2, perSlideOffset: 8}}), ce({
                effect: "cards",
                swiper: t,
                on: s,
                setTranslate: () => {
                    const {slides: e, activeIndex: i, rtlTranslate: s} = t,
                        r = t.params.cardsEffect, {startTranslate: n, isTouched: a} = t.touchEventsData,
                        o = s ? -t.translate : t.translate;
                    for (let l = 0; l < e.length; l += 1) {
                        const d = e[l], c = d.progress, p = Math.min(Math.max(c, -4), 4);
                        let u = d.swiperSlideOffset;
                        t.params.centeredSlides && !t.params.cssMode && (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (u -= e[0].swiperSlideOffset);
                        let m = t.params.cssMode ? -u - t.translate : -u, f = 0;
                        const h = -100 * Math.abs(p);
                        let g = 1, v = -r.perSlideRotate * p, w = r.perSlideOffset - .75 * Math.abs(p);
                        const b = t.virtual && t.params.virtual.enabled ? t.virtual.from + l : l,
                            y = (b === i || b === i - 1) && p > 0 && p < 1 && (a || t.params.cssMode) && o < n,
                            x = (b === i || b === i + 1) && p < 0 && p > -1 && (a || t.params.cssMode) && o > n;
                        if (y || x) {
                            const e = (1 - Math.abs((Math.abs(p) - .5) / .5)) ** .5;
                            v += -28 * p * e, g += -.5 * e, w += 96 * e, f = -25 * e * Math.abs(p) + "%"
                        }
                        if (m = p < 0 ? `calc(${m}px ${s ? "-" : "+"} (${w * Math.abs(p)}%))` : p > 0 ? `calc(${m}px ${s ? "-" : "+"} (-${w * Math.abs(p)}%))` : `${m}px`, !t.isHorizontal()) {
                            const e = f;
                            f = m, m = e
                        }
                        const E = p < 0 ? "" + (1 + (1 - g) * p) : "" + (1 - (1 - g) * p),
                            S = `\n        translate3d(${m}, ${f}, ${h}px)\n        rotateZ(${r.rotate ? s ? -v : v : 0}deg)\n        scale(${E})\n      `;
                        if (r.slideShadows) {
                            let e = d.querySelector(".swiper-slide-shadow");
                            e || (e = me("cards", d)), e && (e.style.opacity = Math.min(Math.max((Math.abs(p) - .5) / .5, 0), 1))
                        }
                        d.style.zIndex = -Math.abs(Math.round(c)) + e.length, pe(0, d).style.transform = S
                    }
                },
                setTransition: e => {
                    const i = t.slides.map((e => h(e)));
                    i.forEach((t => {
                        t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach((t => {
                            t.style.transitionDuration = `${e}ms`
                        }))
                    })), ue({swiper: t, duration: e, transformElements: i})
                },
                perspective: () => !0,
                overwriteParams: () => ({watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode})
            })
        }];
        ie.use(fe);
        var he = i(379), ge = i.n(he), ve = i(795), we = i.n(ve), be = i(569), ye = i.n(be), xe = i(565), Ee = i.n(xe),
            Se = i(216), Te = i.n(Se), Ae = i(589), Me = i.n(Ae), Ce = i(541), Le = {};
        Le.styleTagTransform = Me(), Le.setAttributes = Ee(), Le.insert = ye().bind(null, "head"), Le.domAPI = we(), Le.insertStyleElement = Te(), ge()(Ce.Z, Le), Ce.Z && Ce.Z.locals && Ce.Z.locals;
        var Pe = function (e) {
            return "object" == typeof window.Node ? e instanceof window.Node : null !== e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName
        }, ke = function (e, t) {
            if (void 0 === t && (t = document), e instanceof Array) return e.filter(Pe);
            if (Pe(e)) return [e];
            if (i = e, s = Object.prototype.toString.call(i), "object" == typeof window.NodeList ? i instanceof window.NodeList : null !== i && "object" == typeof i && "number" == typeof i.length && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(s) && (0 === i.length || Pe(i[0]))) return Array.prototype.slice.call(e);
            var i, s;
            if ("string" == typeof e) try {
                var r = t.querySelectorAll(e);
                return Array.prototype.slice.call(r)
            } catch (e) {
                return []
            }
            return []
        };

        function ze(e) {
            if (e.constructor !== Array) throw new TypeError("Expected array.");
            if (16 === e.length) return e;
            if (6 === e.length) {
                var t = Ie();
                return t[0] = e[0], t[1] = e[1], t[4] = e[2], t[5] = e[3], t[12] = e[4], t[13] = e[5], t
            }
            throw new RangeError("Expected array with either 6 or 16 values.")
        }

        function Ie() {
            for (var e = [], t = 0; t < 16; t++) t % 5 == 0 ? e.push(1) : e.push(0);
            return e
        }

        function Oe(e, t) {
            for (var i = ze(e), s = ze(t), r = [], n = 0; n < 4; n++) for (var a = [i[n], i[n + 4], i[n + 8], i[n + 12]], o = 0; o < 4; o++) {
                var l = 4 * o, d = [s[l], s[l + 1], s[l + 2], s[l + 3]],
                    c = a[0] * d[0] + a[1] * d[1] + a[2] * d[2] + a[3] * d[3];
                r[n + l] = c
            }
            return r
        }

        function De(e) {
            if ("string" == typeof e) {
                var t = e.match(/matrix(3d)?\(([^)]+)\)/);
                if (t) return ze(t[2].split(", ").map(parseFloat))
            }
            return Ie()
        }

        function $e(e, t) {
            var i = Ie();
            return i[0] = e, i[5] = "number" == typeof t ? t : e, i
        }

        var Be, Ye = (Be = Date.now(), function (e) {
                var t = Date.now();
                t - Be > 16 ? (Be = t, e(t)) : setTimeout((function () {
                    return Ye(e)
                }), 0)
            }),
            Ge = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || Ye,
            Ne = {
                delay: 0,
                distance: "0",
                duration: 600,
                easing: "cubic-bezier(0.5, 0, 0, 1)",
                interval: 0,
                opacity: 0,
                origin: "bottom",
                rotate: {x: 0, y: 0, z: 0},
                scale: 1,
                cleanup: !1,
                container: document.documentElement,
                desktop: !0,
                mobile: !0,
                reset: !1,
                useDelay: "always",
                viewFactor: 0,
                viewOffset: {top: 0, right: 0, bottom: 0, left: 0},
                afterReset: function () {
                },
                afterReveal: function () {
                },
                beforeReset: function () {
                },
                beforeReveal: function () {
                }
            }, _e = function () {
                document.documentElement.classList.add("sr"), document.body ? document.body.style.height = "100%" : document.addEventListener("DOMContentLoaded", (function () {
                    document.body.style.height = "100%"
                }))
            }, Re = function () {
                return document.documentElement.classList.remove("sr"), {
                    clean: function () {
                    }, destroy: function () {
                    }, reveal: function () {
                    }, sync: function () {
                    }, get noop() {
                        return !0
                    }
                }
            };

        function Fe(e) {
            return null !== e && e instanceof Object && (e.constructor === Object || "[object Object]" === Object.prototype.toString.call(e))
        }

        function qe(e, t) {
            if (Fe(e)) return Object.keys(e).forEach((function (i) {
                return t(e[i], i, e)
            }));
            if (e instanceof Array) return e.forEach((function (i, s) {
                return t(i, s, e)
            }));
            throw new TypeError("Expected either an array or object literal.")
        }

        function He(e) {
            for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
            if (this.constructor.debug && console) {
                var s = "%cScrollReveal: " + e;
                t.forEach((function (e) {
                    return s += "\n — " + e
                })), console.log(s, "color: #ea654b;")
            }
        }

        function je() {
            var e = this, t = {active: [], stale: []}, i = {active: [], stale: []}, s = {active: [], stale: []};
            try {
                qe(ke("[data-sr-id]"), (function (e) {
                    var i = parseInt(e.getAttribute("data-sr-id"));
                    t.active.push(i)
                }))
            } catch (e) {
                throw e
            }
            qe(this.store.elements, (function (e) {
                -1 === t.active.indexOf(e.id) && t.stale.push(e.id)
            })), qe(t.stale, (function (t) {
                return delete e.store.elements[t]
            })), qe(this.store.elements, (function (e) {
                -1 === s.active.indexOf(e.containerId) && s.active.push(e.containerId), e.hasOwnProperty("sequence") && -1 === i.active.indexOf(e.sequence.id) && i.active.push(e.sequence.id)
            })), qe(this.store.containers, (function (e) {
                -1 === s.active.indexOf(e.id) && s.stale.push(e.id)
            })), qe(s.stale, (function (t) {
                var i = e.store.containers[t].node;
                i.removeEventListener("scroll", e.delegate), i.removeEventListener("resize", e.delegate), delete e.store.containers[t]
            })), qe(this.store.sequences, (function (e) {
                -1 === i.active.indexOf(e.id) && i.stale.push(e.id)
            })), qe(i.stale, (function (t) {
                return delete e.store.sequences[t]
            }))
        }

        var Xe = function () {
            var e = {}, t = document.documentElement.style;

            function i(i, s) {
                if (void 0 === s && (s = t), i && "string" == typeof i) {
                    if (e[i]) return e[i];
                    if ("string" == typeof s[i]) return e[i] = i;
                    if ("string" == typeof s["-webkit-" + i]) return e[i] = "-webkit-" + i;
                    throw new RangeError('Unable to find "' + i + '" style property.')
                }
                throw new TypeError("Expected a string.")
            }

            return i.clearCache = function () {
                return e = {}
            }, i
        }();

        function Ve(e) {
            var t = window.getComputedStyle(e.node), i = t.position, s = e.config, r = {},
                n = (e.node.getAttribute("style") || "").match(/[\w-]+\s*:\s*[^;]+\s*/gi) || [];
            r.computed = n ? n.map((function (e) {
                return e.trim()
            })).join("; ") + ";" : "", r.generated = n.some((function (e) {
                return e.match(/visibility\s?:\s?visible/i)
            })) ? r.computed : n.concat(["visibility: visible"]).map((function (e) {
                return e.trim()
            })).join("; ") + ";";
            var a, o, l, d = parseFloat(t.opacity),
                c = isNaN(parseFloat(s.opacity)) ? parseFloat(t.opacity) : parseFloat(s.opacity),
                p = {computed: d !== c ? "opacity: " + d + ";" : "", generated: d !== c ? "opacity: " + c + ";" : ""},
                u = [];
            if (parseFloat(s.distance)) {
                var m = "top" === s.origin || "bottom" === s.origin ? "Y" : "X", f = s.distance;
                "top" !== s.origin && "left" !== s.origin || (f = /^-/.test(f) ? f.substr(1) : "-" + f);
                var h = f.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g), g = h[0];
                switch (h[1]) {
                    case"em":
                        f = parseInt(t.fontSize) * g;
                        break;
                    case"px":
                        f = g;
                        break;
                    case"%":
                        f = "Y" === m ? e.node.getBoundingClientRect().height * g / 100 : e.node.getBoundingClientRect().width * g / 100;
                        break;
                    default:
                        throw new RangeError("Unrecognized or missing distance unit.")
                }
                "Y" === m ? u.push(function (e) {
                    var t = Ie();
                    return t[13] = e, t
                }(f)) : u.push(function (e) {
                    var t = Ie();
                    return t[12] = e, t
                }(f))
            }
            s.rotate.x && u.push((a = s.rotate.x, o = Math.PI / 180 * a, (l = Ie())[5] = l[10] = Math.cos(o), l[6] = l[9] = Math.sin(o), l[9] *= -1, l)), s.rotate.y && u.push(function (e) {
                var t = Math.PI / 180 * e, i = Ie();
                return i[0] = i[10] = Math.cos(t), i[2] = i[8] = Math.sin(t), i[2] *= -1, i
            }(s.rotate.y)), s.rotate.z && u.push(function (e) {
                var t = Math.PI / 180 * e, i = Ie();
                return i[0] = i[5] = Math.cos(t), i[1] = i[4] = Math.sin(t), i[4] *= -1, i
            }(s.rotate.z)), 1 !== s.scale && (0 === s.scale ? u.push($e(2e-4)) : u.push($e(s.scale)));
            var v = {};
            if (u.length) {
                v.property = Xe("transform"), v.computed = {
                    raw: t[v.property],
                    matrix: De(t[v.property])
                }, u.unshift(v.computed.matrix);
                var w = u.reduce(Oe);
                v.generated = {
                    initial: v.property + ": matrix3d(" + w.join(", ") + ");",
                    final: v.property + ": matrix3d(" + v.computed.matrix.join(", ") + ");"
                }
            } else v.generated = {initial: "", final: ""};
            var b = {};
            if (p.generated || v.generated.initial) {
                b.property = Xe("transition"), b.computed = t[b.property], b.fragments = [];
                var y = s.delay, x = s.duration, E = s.easing;
                p.generated && b.fragments.push({
                    delayed: "opacity " + x / 1e3 + "s " + E + " " + y / 1e3 + "s",
                    instant: "opacity " + x / 1e3 + "s " + E + " 0s"
                }), v.generated.initial && b.fragments.push({
                    delayed: v.property + " " + x / 1e3 + "s " + E + " " + y / 1e3 + "s",
                    instant: v.property + " " + x / 1e3 + "s " + E + " 0s"
                }), b.computed && !b.computed.match(/all 0s|none 0s/) && b.fragments.unshift({
                    delayed: b.computed,
                    instant: b.computed
                });
                var S = b.fragments.reduce((function (e, t, i) {
                    return e.delayed += 0 === i ? t.delayed : ", " + t.delayed, e.instant += 0 === i ? t.instant : ", " + t.instant, e
                }), {delayed: "", instant: ""});
                b.generated = {
                    delayed: b.property + ": " + S.delayed + ";",
                    instant: b.property + ": " + S.instant + ";"
                }
            } else b.generated = {delayed: "", instant: ""};
            return {inline: r, opacity: p, position: i, transform: v, transition: b}
        }

        function We(e, t) {
            t.split(";").forEach((function (t) {
                var i = t.split(":"), s = i[0], r = i.slice(1);
                s && r && (e.style[s.trim()] = r.join(":"))
            }))
        }

        function Ue(e) {
            var t, i = this;
            try {
                qe(ke(e), (function (e) {
                    var s = e.getAttribute("data-sr-id");
                    if (null !== s) {
                        t = !0;
                        var r = i.store.elements[s];
                        r.callbackTimer && window.clearTimeout(r.callbackTimer.clock), We(r.node, r.styles.inline.generated), e.removeAttribute("data-sr-id"), delete i.store.elements[s]
                    }
                }))
            } catch (e) {
                return He.call(this, "Clean failed.", e.message)
            }
            if (t) try {
                je.call(this)
            } catch (e) {
                return He.call(this, "Clean failed.", e.message)
            }
        }

        function Ze() {
            var e = this;
            qe(this.store.elements, (function (e) {
                We(e.node, e.styles.inline.generated), e.node.removeAttribute("data-sr-id")
            })), qe(this.store.containers, (function (t) {
                var i = t.node === document.documentElement ? window : t.node;
                i.removeEventListener("scroll", e.delegate), i.removeEventListener("resize", e.delegate)
            })), this.store = {containers: {}, elements: {}, history: [], sequences: {}}
        }

        function Qe(e) {
            for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
            if (Fe(e)) return qe(t, (function (t) {
                qe(t, (function (t, i) {
                    Fe(t) ? (e[i] && Fe(e[i]) || (e[i] = {}), Qe(e[i], t)) : e[i] = t
                }))
            })), e;
            throw new TypeError("Target must be an object literal.")
        }

        function Ke(e) {
            return void 0 === e && (e = navigator.userAgent), /Android|iPhone|iPad|iPod/i.test(e)
        }

        var Je, et = (Je = 0, function () {
            return Je++
        });

        function tt() {
            var e = this;
            je.call(this), qe(this.store.elements, (function (e) {
                var t = [e.styles.inline.generated];
                e.visible ? (t.push(e.styles.opacity.computed), t.push(e.styles.transform.generated.final), e.revealed = !0) : (t.push(e.styles.opacity.generated), t.push(e.styles.transform.generated.initial), e.revealed = !1), We(e.node, t.filter((function (e) {
                    return "" !== e
                })).join(" "))
            })), qe(this.store.containers, (function (t) {
                var i = t.node === document.documentElement ? window : t.node;
                i.addEventListener("scroll", e.delegate), i.addEventListener("resize", e.delegate)
            })), this.delegate(), this.initTimeout = null
        }

        function it(e, t) {
            void 0 === t && (t = {});
            var i = t.pristine || this.pristine,
                s = "always" === e.config.useDelay || "onload" === e.config.useDelay && i || "once" === e.config.useDelay && !e.seen,
                r = e.visible && !e.revealed, n = !e.visible && e.revealed && e.config.reset;
            return t.reveal || r ? st.call(this, e, s) : t.reset || n ? rt.call(this, e) : void 0
        }

        function st(e, t) {
            var i = [e.styles.inline.generated, e.styles.opacity.computed, e.styles.transform.generated.final];
            t ? i.push(e.styles.transition.generated.delayed) : i.push(e.styles.transition.generated.instant), e.revealed = e.seen = !0, We(e.node, i.filter((function (e) {
                return "" !== e
            })).join(" ")), nt.call(this, e, t)
        }

        function rt(e) {
            var t = [e.styles.inline.generated, e.styles.opacity.generated, e.styles.transform.generated.initial, e.styles.transition.generated.instant];
            e.revealed = !1, We(e.node, t.filter((function (e) {
                return "" !== e
            })).join(" ")), nt.call(this, e)
        }

        function nt(e, t) {
            var i = this, s = t ? e.config.duration + e.config.delay : e.config.duration,
                r = e.revealed ? e.config.beforeReveal : e.config.beforeReset,
                n = e.revealed ? e.config.afterReveal : e.config.afterReset, a = 0;
            e.callbackTimer && (a = Date.now() - e.callbackTimer.start, window.clearTimeout(e.callbackTimer.clock)), r(e.node), e.callbackTimer = {
                start: Date.now(),
                clock: window.setTimeout((function () {
                    n(e.node), e.callbackTimer = null, e.revealed && !e.config.reset && e.config.cleanup && Ue.call(i, e.node)
                }), s - a)
            }
        }

        function at(e, t) {
            if (void 0 === t && (t = this.pristine), !e.visible && e.revealed && e.config.reset) return it.call(this, e, {reset: !0});
            var i = this.store.sequences[e.sequence.id], s = e.sequence.index;
            if (i) {
                var r = new lt(i, "visible", this.store), n = new lt(i, "revealed", this.store);
                if (i.models = {visible: r, revealed: n}, !n.body.length) {
                    var a = i.members[r.body[0]], o = this.store.elements[a];
                    if (o) return dt.call(this, i, r.body[0], -1, t), dt.call(this, i, r.body[0], 1, t), it.call(this, o, {
                        reveal: !0,
                        pristine: t
                    })
                }
                if (!i.blocked.head && s === [].concat(n.head).pop() && s >= [].concat(r.body).shift()) return dt.call(this, i, s, -1, t), it.call(this, e, {
                    reveal: !0,
                    pristine: t
                });
                if (!i.blocked.foot && s === [].concat(n.foot).shift() && s <= [].concat(r.body).pop()) return dt.call(this, i, s, 1, t), it.call(this, e, {
                    reveal: !0,
                    pristine: t
                })
            }
        }

        function ot(e) {
            var t = Math.abs(e);
            if (isNaN(t)) throw new RangeError("Invalid sequence interval.");
            this.id = et(), this.interval = Math.max(t, 16), this.members = [], this.models = {}, this.blocked = {
                head: !1,
                foot: !1
            }
        }

        function lt(e, t, i) {
            var s = this;
            this.head = [], this.body = [], this.foot = [], qe(e.members, (function (e, r) {
                var n = i.elements[e];
                n && n[t] && s.body.push(r)
            })), this.body.length && qe(e.members, (function (e, r) {
                var n = i.elements[e];
                n && !n[t] && (r < s.body[0] ? s.head.push(r) : s.foot.push(r))
            }))
        }

        function dt(e, t, i, s) {
            var r = this, n = ["head", null, "foot"][1 + i], a = e.members[t + i], o = this.store.elements[a];
            e.blocked[n] = !0, setTimeout((function () {
                e.blocked[n] = !1, o && at.call(r, o, s)
            }), e.interval)
        }

        function ct(e, t, i) {
            var s = this;
            void 0 === t && (t = {}), void 0 === i && (i = !1);
            var r, n = [], a = t.interval || Ne.interval;
            try {
                a && (r = new ot(a));
                var o = ke(e);
                if (!o.length) throw new Error("Invalid reveal target.");
                var l = o.reduce((function (e, i) {
                    var a = {}, o = i.getAttribute("data-sr-id");
                    o ? (Qe(a, s.store.elements[o]), We(a.node, a.styles.inline.computed)) : (a.id = et(), a.node = i, a.seen = !1, a.revealed = !1, a.visible = !1);
                    var l = Qe({}, a.config || s.defaults, t);
                    if (!l.mobile && Ke() || !l.desktop && !Ke()) return o && Ue.call(s, a), e;
                    var d, c = ke(l.container)[0];
                    if (!c) throw new Error("Invalid container.");
                    return c.contains(i) ? (d = function (e) {
                        for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
                        var s = null;
                        return qe(t, (function (t) {
                            qe(t, (function (t) {
                                null === s && t.node === e && (s = t.id)
                            }))
                        })), s
                    }(c, n, s.store.containers), null === d && (d = et(), n.push({
                        id: d,
                        node: c
                    })), a.config = l, a.containerId = d, a.styles = Ve(a), r && (a.sequence = {
                        id: r.id,
                        index: r.members.length
                    }, r.members.push(a.id)), e.push(a), e) : e
                }), []);
                qe(l, (function (e) {
                    s.store.elements[e.id] = e, e.node.setAttribute("data-sr-id", e.id)
                }))
            } catch (e) {
                return He.call(this, "Reveal failed.", e.message)
            }
            qe(n, (function (e) {
                s.store.containers[e.id] = {id: e.id, node: e.node}
            })), r && (this.store.sequences[r.id] = r), !0 !== i && (this.store.history.push({
                target: e,
                options: t
            }), this.initTimeout && window.clearTimeout(this.initTimeout), this.initTimeout = window.setTimeout(tt.bind(this), 0))
        }

        function pt() {
            var e = this;
            qe(this.store.history, (function (t) {
                ct.call(e, t.target, t.options, !0)
            })), tt.call(this)
        }

        var ut, mt, ft, ht, gt, vt, wt, bt, yt = Math.sign || function (e) {
            return (e > 0) - (e < 0) || +e
        };

        function xt(e, t) {
            var i = t ? e.node.clientHeight : e.node.offsetHeight, s = t ? e.node.clientWidth : e.node.offsetWidth,
                r = 0, n = 0, a = e.node;
            do {
                isNaN(a.offsetTop) || (r += a.offsetTop), isNaN(a.offsetLeft) || (n += a.offsetLeft), a = a.offsetParent
            } while (a);
            return {bounds: {top: r, right: n + s, bottom: r + i, left: n}, height: i, width: s}
        }

        function Et(e) {
            var t, i;
            return e.node === document.documentElement ? (t = window.pageYOffset, i = window.pageXOffset) : (t = e.node.scrollTop, i = e.node.scrollLeft), {
                top: t,
                left: i
            }
        }

        function St(e) {
            void 0 === e && (e = {});
            var t = this.store.containers[e.containerId];
            if (t) {
                var i = Math.max(0, Math.min(1, e.config.viewFactor)), s = e.config.viewOffset,
                    r = e.geometry.bounds.top + e.geometry.height * i,
                    n = e.geometry.bounds.right - e.geometry.width * i,
                    a = e.geometry.bounds.bottom - e.geometry.height * i,
                    o = e.geometry.bounds.left + e.geometry.width * i, l = t.geometry.bounds.top + t.scroll.top + s.top,
                    d = t.geometry.bounds.right + t.scroll.left - s.right,
                    c = t.geometry.bounds.bottom + t.scroll.top - s.bottom,
                    p = t.geometry.bounds.left + t.scroll.left + s.left;
                return r < c && n > p && a > l && o < d || "fixed" === e.styles.position
            }
        }

        function Tt(e, t) {
            var i = this;
            void 0 === e && (e = {type: "init"}), void 0 === t && (t = this.store.elements), Ge((function () {
                var s = "init" === e.type || "resize" === e.type;
                qe(i.store.containers, (function (e) {
                    s && (e.geometry = xt.call(i, e, !0));
                    var t = Et.call(i, e);
                    e.scroll && (e.direction = {
                        x: yt(t.left - e.scroll.left),
                        y: yt(t.top - e.scroll.top)
                    }), e.scroll = t
                })), qe(t, (function (e) {
                    (s || void 0 === e.geometry) && (e.geometry = xt.call(i, e)), e.visible = St.call(i, e)
                })), qe(t, (function (e) {
                    e.sequence ? at.call(i, e) : it.call(i, e)
                })), i.pristine = !1
            }))
        }

        function At(e) {
            var t;
            if (void 0 === e && (e = {}), void 0 === this || Object.getPrototypeOf(this) !== At.prototype) return new At(e);
            if (!At.isSupported()) return He.call(this, "Instantiation failed.", "This browser is not supported."), Re();
            try {
                t = Qe({}, vt || Ne, e)
            } catch (e) {
                return He.call(this, "Invalid configuration.", e.message), Re()
            }
            try {
                if (!ke(t.container)[0]) throw new Error("Invalid container.")
            } catch (e) {
                return He.call(this, e.message), Re()
            }
            return !(vt = t).mobile && Ke() || !vt.desktop && !Ke() ? (He.call(this, "This device is disabled.", "desktop: " + vt.desktop, "mobile: " + vt.mobile), Re()) : (_e(), this.store = {
                containers: {},
                elements: {},
                history: [],
                sequences: {}
            }, this.pristine = !0, ut = ut || Tt.bind(this), mt = mt || Ze.bind(this), ft = ft || ct.bind(this), ht = ht || Ue.bind(this), gt = gt || pt.bind(this), Object.defineProperty(this, "delegate", {
                get: function () {
                    return ut
                }
            }), Object.defineProperty(this, "destroy", {
                get: function () {
                    return mt
                }
            }), Object.defineProperty(this, "reveal", {
                get: function () {
                    return ft
                }
            }), Object.defineProperty(this, "clean", {
                get: function () {
                    return ht
                }
            }), Object.defineProperty(this, "sync", {
                get: function () {
                    return gt
                }
            }), Object.defineProperty(this, "defaults", {
                get: function () {
                    return vt
                }
            }), Object.defineProperty(this, "version", {
                get: function () {
                    return "4.0.9"
                }
            }), Object.defineProperty(this, "noop", {
                get: function () {
                    return !1
                }
            }), bt || (bt = this))
        }

        At.isSupported = function () {
            return function () {
                var e = document.documentElement.style;
                return "transform" in e || "WebkitTransform" in e
            }() && function () {
                var e = document.documentElement.style;
                return "transition" in e || "WebkitTransition" in e
            }()
        }, Object.defineProperty(At, "debug", {
            get: function () {
                return wt || !1
            }, set: function (e) {
                return wt = "boolean" == typeof e ? e : wt
            }
        }), At();
        var Mt = At;
        (function () {
            const e = document.querySelector(".header"), t = document.querySelector(".mobile-nav-btn"),
                i = document.querySelector(".mobile-nav"), s = document.querySelector(".nav-icon");
            t.onclick = function () {
                e.classList.toggle("header-active"), i.classList.toggle("mobile-nav--open"), s.classList.toggle("nav-icon--active"), document.body.classList.toggle("no-scroll"), o()
            };
            const r = document.querySelectorAll(".mobile-nav__item"), n = document.querySelectorAll(".mobile-nav__btn"),
                a = document.querySelector(".mobile-nav");

            function o() {
                r.forEach((e => {
                    e.classList.remove("active"), e.classList.remove("none"), e.classList.add("shown")
                }))
            }

            n.forEach((e => {
                e.onclick = function () {
                    const t = e.closest(".mobile-nav__item");
                    var i;
                    t.classList.contains("active") ? (t.classList.remove("active"), o()) : (t.classList.add("active"), i = t, r.forEach((e => {
                        i !== e && (e.classList.add("none"), e.classList.remove("shown"), e.classList.remove("active"))
                    })))
                }
            })), a.addEventListener("click", (function (e) {
                const t = e.target;
                e.stopPropagation(), t.classList.contains("mobile-nav__btn") || t.classList.contains("mobile-nav__link") || o()
            }))
        })(), function () {
            const e = document.querySelector(".header-wrapper"), t = document.querySelector(".header"),
                i = document.querySelector(".hero"), s = document.querySelector(".news__picture"),
                r = document.querySelector(".dosai"), n = t.offsetHeight;
            let a;
            a = i || s || r, e && (e.style.height = `${n}px`), window.addEventListener("scroll", (() => {
                const e = window.pageYOffset < window.oldPageYOffset;
                window.oldPageYOffset = window.pageYOffset, e && window.pageYOffset > a.offsetHeight ? t.classList.add("fixed") : t.classList.remove("fixed")
            }))
        }(), function () {
            const e = document.querySelectorAll(".tour__location"),
                t = document.querySelectorAll(".tour__image-picture"),
                i = document.querySelector(".tour__list-arrow-prev"),
                s = document.querySelector(".tour__list-arrow-next");
            let r = e[0];

            function n() {
                for (let e = 0; e < t.length; e++) {
                    function i() {
                        // t[e].style.removeProperty("animation")
                    }

                    t[e].src = `/static/img/tour/${r.id}-${e + 1}.jpg`, t[e].style.animation = "imageAppear .3s ease-in", setTimeout(i, 350)
                }
            }

            e.forEach((t => {
                t.addEventListener("click", (function () {
                    r = t, r.classList.add("active"), n(), e.forEach((e => {
                        e !== r && e.classList.remove("active")
                    }))
                }))
            })), i.addEventListener("click", (function () {
                for (let t = 0; t < e.length; t++) if (0 !== t && e[t] === r) r.classList.remove("active"), r = e[t - 1], r.classList.add("active"); else if (0 === t && e[t] === r) {
                    r.classList.remove("active"), r = e[e.length - 1], r.classList.add("active");
                    break
                }
                n()
            })), s.addEventListener("click", (function () {
                for (let t = 0; t < e.length; t++) {
                    if (t !== e.length - 1 && e[t] === r) {
                        r.classList.remove("active"), r = e[t + 1], r.classList.add("active");
                        break
                    }
                    t === e.length - 1 && e[t] === r && (r.classList.remove("active"), r = e[0], r.classList.add("active"))
                }
                n()
            }))
        }(), document.querySelectorAll(".catalog__bookcard-text").forEach((e => {
            if (e.textContent.length > 197) {
                const t = e.textContent.slice(0, 192);
                e.textContent = `${t}...`
            }
        })), new ie(".hero__swiper", {
            slidesPerView: 1,
            loop: !0,
            speed: 600,
            navigation: {prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next"},
            effect: "fade",
            fadeEffect: {crossFade: !0}
        }), new ie(".services__news-swiper", {
            slidesPerView: 1,
            loop: !0,
            speed: 400,
            autoplay: {delay: 5e3},
            navigation: {prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next"}
        }), new ie(".services__events-swiper", {
            slidesPerView: 1,
            loop: !1,
            navigation: {prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next"}
        }), new ie(".services__courses-swiper", {
            slidesPerView: 1,
            loop: !0,
            speed: 400,
            autoplay: {delay: 6e3},
            navigation: {prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next"}
        }), new ie(".tour__swiper", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: !1,
            speed: 400,
            breakpoints: {
                0: {direction: "horizontal", slidesPerView: 1},
                // 500: {direction: "horizontal", slidesPerView: 4},
                600: {direction: "vertical", slidesPerView: 7}
            },
            navigation: {prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next"}
        }), Mt({distance: "60px", duration: 2e3}), Mt().reveal(".hero__title", {
            origin: "bottom",
            duration: 1200
        }), Mt().reveal(".hero__social-1", {
            origin: "bottom",
            duration: 1e3,
            distance: "20px"
        }), Mt().reveal(".hero__social-2", {
            origin: "bottom",
            duration: 1100,
            distance: "20px"
        }), Mt().reveal(".hero__social-3", {
            origin: "bottom",
            duration: 1200,
            distance: "20px"
        }), Mt().reveal(".hero__social-4", {
            origin: "bottom",
            duration: 1300,
            distance: "21px"
        }), Mt().reveal(".hero__social-5", {
            origin: "bottom",
            duration: 1300,
            distance: "21px"
        }), Mt().reveal(".hero__social-6", {
            origin: "bottom",
            duration: 1500,
            distance: "23px"
        }), Mt().reveal(".hero__social-7", {
            origin: "bottom",
            duration: 1600,
            distance: "24px"
        }), Mt().reveal(".hero__links", {
            origin: "top",
            duration: 1100,
            distance: "30px"
        }), Mt().reveal(".services__time", {
            origin: "left",
            duration: 800,
            distance: "30px"
        }), Mt().reveal(".services__news", {
            origin: "bottom",
            duration: 1100,
            distance: "40px"
        }), Mt().reveal(".services__ai-chat", {
            origin: "right",
            delay: 200,
            duration: 1100,
            distance: "30px"
        }), Mt().reveal(".services__actions", {
            origin: "bottom",
            delay: 100,
            duration: 1e3,
            distance: "40px"
        }), Mt().reveal(".services__events", {
            origin: "right",
            delay: 200,
            duration: 1400,
            distance: "45px"
        }), Mt().reveal(".services__courses", {
            origin: "left",
            delay: 100,
            duration: 900,
            distance: "30px"
        }), Mt().reveal(".title", {origin: "left", duration: 800, distance: "30px"})
    }()
}();