//show search input
const searchBtn = document.getElementById('search-btn');
const loginBtn = document.getElementById('login-btn');
const searchBar = document.querySelector('.search-bar-container');

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

//show navbar menu
const menuBar = document.getElementById('menu-bar');
const navbar = document.querySelector('.navbar');

function showMenu() {
    navbar.classList.toggle('active-menu');
}

menuBar.addEventListener('click', showMenu);