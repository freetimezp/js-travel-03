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

//show login menu
const formCon = document.querySelector('.login-form-container');
const form = document.getElementById('form');
const formClose = document.getElementById('form-close');

function showLoginForm() {
    formCon.style.top = '0px';
}

function hideLoginForm() {
    formCon.style.top = '-100%';
}

formClose.addEventListener('click', hideLoginForm);

loginBtn.addEventListener('click', showLoginForm);