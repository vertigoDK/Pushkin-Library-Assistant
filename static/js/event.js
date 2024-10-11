document.addEventListener('DOMContentLoaded', () => {
    // Инициализация Swiper
    const swiper = new Swiper('.swiper-container-events', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 30000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Функция для добавления обработчиков кликов на элементы .event внутри активных слайдов
    function addEventClickHandler(slide) {
        // Находим элемент .event-content внутри слайда
        const eventContent = slide.querySelector('.event-content');

        if (eventContent) {
            // Убираем старые обработчики, чтобы избежать дублирования
            eventContent.removeEventListener('click', toggleEventDetails);

            // Добавляем новый обработчик клика
            eventContent.addEventListener('click', toggleEventDetails);
        }
    }

    // Функция для показа/скрытия деталей события
    function toggleEventDetails() {
        // Находим блок с подробностями внутри текущего элемента
        const details = this.querySelector('.event-details');

        // Проверяем, открыты ли они
        if (details.style.maxHeight) {
            // Если открыты, скрываем
            details.style.maxHeight = null;
            details.style.opacity = '0';
        } else {
            // Если скрыты, показываем
            details.style.maxHeight = details.scrollHeight + 'px';
            details.style.opacity = '1';
        }
    }

    // Добавляем обработчики кликов для активного слайда при инициализации Swiper
    swiper.on('slideChangeTransitionEnd', () => {
        // Получаем активный слайд
        const activeSlide = swiper.slides[swiper.activeIndex];
        // Добавляем обработчик клика для активного слайда
        addEventClickHandler(activeSlide);
    });

    // Добавляем обработчики кликов для начального активного слайда после инициализации Swiper
    addEventClickHandler(swiper.slides[swiper.activeIndex]);
});
