const searchInput = document.querySelector('[data-search-input]');
const searchBtn  = document.querySelector('[data-search-btn]');

searchInput.addEventListener('submit', e => {
    e.preventDefault();
    console.log('Item has been searched');
});