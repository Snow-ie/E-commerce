document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('hamburger');
    const closeButton = document.querySelector('.close-btn');
    const menuContainer = document.querySelector('.menu-container');

    menuButton.addEventListener('click', () => {
        menuContainer.classList.toggle('active');
    });

    closeButton.addEventListener('click', () => {
        menuContainer.classList.remove('active');
    });
});
