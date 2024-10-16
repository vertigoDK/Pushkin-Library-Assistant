const roomData = {
    "foyer": "tour-lobby",
    "children-sector": "tour-childrens-room",
    "school-of-masters": "tour-masters-school",
    "robotics-room": "tour-gym-room",
    "it-center": "tour-it-center",
    "american-corner": "tour-american-corner",
    "maker-space": "tour-maker-space"
};

// Функция для изменения картинок
function updateImages(room) {
    const gallery = document.getElementById("gallery");
    const basePath = roomData[room];

    // Обновляем источники изображений
    gallery.querySelectorAll("img").forEach((img, index) => {


        img.classList.remove('show'); // Убираем активный класс
        img.classList.add('fade'); // Добавляем класс для плавного перехода
        setTimeout(() => {
            img.src = `/static/img/tour/${basePath}-${index + 1}.jpg`; // Меняем источник изображения
            img.classList.remove('fade'); // Убираем класс плавного исчезновения
            img.classList.add('show'); // Показываем новое изображение
        }, 200); // Задержка 0.5 секунды для плавного эффекта

    });
}

// Обработка кликов на элементы списка
document.getElementById("room-list").addEventListener("click", function (e) {
    if (e.target && e.target.nodeName === "LI") {
        // Убираем активный класс у всех элементов
        document.querySelectorAll("#room-list li").forEach(item => {
            item.classList.remove("active");
        });
        // Добавляем активный класс к выбранному элементу
        e.target.classList.add("active");
        // Обновляем картинки
        const room = e.target.getAttribute("data-room");
        updateImages(room);
    }
});

// Инициализация с первой комнаты
updateImages("foyer");