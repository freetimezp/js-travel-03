//show search input
const searchBtn = document.getElementById('search-btn');
const loginBtn = document.getElementById('login-btn');
const searchBar = document.querySelector('.search-bar-container');

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});