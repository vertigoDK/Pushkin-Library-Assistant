document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    const submenuToggles = document.querySelectorAll('.submenu-toggle');

    console.log('Nav toggle:', navToggle); // Debugging output
    console.log('Nav list:', navList); // Debugging output
    console.log('Submenu toggles:', submenuToggles.length); // Debugging output

    // Toggle main menu visibility on mobile
    navToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
        console.log('Menu toggle clicked'); // Debugging output
    });

    // Handle submenu toggle in mobile view
    submenuToggles.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            let submenu = this.nextElementSibling;
            console.log('Submenu click:', submenu); // Debugging output

            if (submenu.classList.contains('active')) {
                submenu.classList.remove('active'); // Hide submenu
                console.log('Submenu hidden'); // Debugging output
            } else {
                // Close all open submenus first
                document.querySelectorAll('.submenu').forEach(sub => sub.classList.remove('active'));
                submenu.classList.add('active'); // Show this submenu
                console.log('Submenu shown'); // Debugging output
            }
        });
    });

    // Close submenus when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-list')) {
            document.querySelectorAll('.submenu').forEach(sub => {
                sub.classList.remove('active');
                console.log('Submenu closed from outside click'); // Debugging output
            });
        }
    });
});
