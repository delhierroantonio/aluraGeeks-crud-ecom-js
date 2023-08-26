import { productsServices } from '../services/products-services.js';

const form = document.querySelector('[data-edit-form]');


const url = new URL(window.location);
const wId = url.searchParams.get("id");
// console.log(wId);
// console.log(url);
const getProduct = async () => {

  if (wId === null) {
    window.location.href = '../index.html';
  }

  try {
    
    const product = await productsServices.GetProduct(wId)
    const productImageUrl = document.querySelector('[data-edit-image]');
    const productSelect = document.querySelector('[data-edit-select]');
    const productName = document.querySelector('[data-edit-name]');
    const productPrice = document.querySelector('[data-edit-price]');
    const productDesc = document.querySelector('[data-edit-desc]');
    
    productImageUrl.value = product.imageUrl;
    productSelect.value = product.category;
    productName.value = product.name;
    productPrice.value = product.price;
    productDesc.value = product.desc;
    // console.log(product);
  } 
    catch (error) {
      console.log(error);
    }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const productImageUrl = document.querySelector('[data-edit-image]').value;
  const productSelect = document.querySelector('[data-edit-select]').value;
  const productName = document.querySelector('[data-edit-name]').value;
  const productPrice = document.querySelector('[data-edit-price]').value;
  const productDesc = document.querySelector('[data-edit-desc]').value;

  productsServices.UpdateProduct(productImageUrl,productSelect, productName, productPrice, productDesc, wId)
    .then((res) => {
      console.log(res);
      window.location.href = '../screens/all-products.html'
    })
    .catch((error) => console.log(error))
});

getProduct();

