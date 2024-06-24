document.querySelector('.mobile-nav-btn').addEventListener('click', function() {
    const nav = document.querySelector('.header__nav');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
});