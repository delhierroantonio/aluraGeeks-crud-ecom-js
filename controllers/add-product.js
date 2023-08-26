import { productsServices } from '../services/products-services.js';

const form = document.querySelector('[data-np-form]');

const error = document.getElementById('error');
const imageInput = document.querySelector('[data-np-image]');
const nameInput = document.querySelector('[data-np-name]');
const priceInput = document.querySelector('[data-np-price]');
const categoryInput = document.querySelector('[data-np-select]');
const descInput = document.querySelector('[data-np-desc]');


form.addEventListener('submit', (e) => {
  e.preventDefault();

  productsServices
    .CreateProduct(nameInput.value, priceInput.value, categoryInput.value, descInput.value, imageInput.value)
    .then((res) => {
      window.location.href = '/screens/all-products.html'
      console.log(res);
    // debugger
  })
  .catch(error => console.log(error + 'AQUI ESTA EL ERROR'));
})
