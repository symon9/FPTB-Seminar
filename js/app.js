const button = document.getElementById('btn-click');
const menu = document.getElementById('menu-li');

button.addEventListener('click', showMenu);

function showMenu() {
    button.classList.toggle('active');
    menu.classList.toggle('active');
}

