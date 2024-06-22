document.addEventListener('DOMContentLoaded', function () {
    function updateTimes() {
        const now = new Date();
        const openingTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 0, 0); // Время открытия 08:00
        const closingTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 19, 0, 0); // Время закрытия 19:00

        let isLibraryOpen = now >= openingTime && now < closingTime;

        // Получаем элементы статуса
        const openStatus = document.getElementById('library-status-open');
        const closeStatus = document.getElementById('library-status-close');

        if (isLibraryOpen) {
            // Библиотека открыта
            closeStatus.style.display = 'none'; // Скрываем статус закрытия
            openStatus.style.display = 'block'; // Показываем статус открытия
        } else {
            // Библиотека закрыта
            openStatus.style.display = 'none'; // Скрываем статус открытия
            closeStatus.style.display = 'block'; // Показываем статус закрытия
        }

        // Обновляем текст времени до закрытия или открытия
        let msUntilChange = isLibraryOpen ? closingTime - now : now < openingTime ? openingTime - now : openingTime.setDate(openingTime.getDate() + 1) - now;
        const hours = Math.floor(msUntilChange / 3600000);
        const minutes = Math.floor((msUntilChange % 3600000) / 60000);
        const seconds = Math.floor((msUntilChange % 60000) / 1000);

        document.getElementById('services-close-time').textContent =
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    updateTimes();
    setInterval(updateTimes, 1000); // Обновляем каждую секунду
});
