document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    const submenuToggles = document.querySelectorAll('.submenu-toggle');

    console.log('Nav toggle:', navToggle); // Debugging output
    console.log('Nav list:', navList); // Debugging output

    // Toggle main menu visibility on mobile
    navToggle.addEventListener('click', function () {
        navList.classList.toggle('active');
    });

    // Handle submenu toggle in mobile view
    submenuToggles.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            let submenu = this.nextElementSibling;

            if (submenu.classList.contains('active')) {

                submenu.classList.remove('active'); // Hide submenu
                submenu.style.display = "none";
            } else {
                // Close all open submenus first
                document.querySelectorAll('.submenu').forEach(sub => sub.classList.remove('active'));
                document.querySelectorAll('.submenu').forEach(sub => sub.style.display = "none");
                submenu.classList.add('active'); // Show this submenu

                submenu.style.display = "block";
                console.log('Submenu shown');
            }
        });

        item.addEventListener('focusout', function (e) {
            console.log('1')
        });
    });

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.nav-list')) {
            document.querySelectorAll('.submenu').forEach(sub => {
                sub.classList.remove('active');
            });
        }
    });
     // Close submenus and menu when clicking outside

    // Close submenus and menu when the user scrolls
    navList.addEventListener('mouseleave', function() {
        document.querySelectorAll('.submenu').forEach(sub => sub.classList.remove('active'));
        navList.classList.remove('active'); // Also hide the main menu

    });

      // Обработка изменения размера окна
    function adjustMenu() {
        if (window.innerWidth < 768) { // предположим, что меню должно скрываться на экранах меньше 768px
            navList.classList.remove('active');
        } else {
            navList.classList.add('active');
        }
    }

    window.addEventListener('resize', adjustMenu);
    adjustMenu(); // Вызов при загрузке страницы для инициализации состояния

});
function adjustMenuItems() {
    console.log('run function')
    const navList = document.querySelector('.nav-list');
    const moreDropdown = document.querySelector('.dropdown-content');
    let navWidth = navList.offsetWidth;
    let moreWidth = document.querySelector('.more').offsetWidth;
    let totalWidth = 0;

    // Считаем общую ширину элементов меню
    const items = Array.from(navList.querySelectorAll(':scope > li:not(.more)'));
    items.forEach(item => {
        totalWidth += item.offsetWidth;
    });

    // Перемещаем элементы в "Ещё"
    while (totalWidth + moreWidth > navWidth && items.length > 0) {
        let item = items.pop();
        moreDropdown.appendChild(item);
        moreDropdown.classList.add('hidden'); // Убедитесь, что изначально скрыто
        totalWidth -= item.offsetWidth;
    }
}

// Вызываем функцию при изменении размера окна
window.addEventListener('resize', adjustMenuItems);
// Инициализация при загрузке страницы
adjustMenuItems();
