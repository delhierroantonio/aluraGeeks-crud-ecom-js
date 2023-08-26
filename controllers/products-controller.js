import { productsServices } from '../services/products-services.js';

const newProduct = (id, name, price, imageUrl) => {
  // console.log(id);
  const section = document.createElement('section');
  // ./assets/images/
  const content = `
      <div class="product">
        <img src="${imageUrl}" alt="${name} product" class="product-image">
        <p class="product-title">${name}</p>
        <span class="product-price">$${price}</span>
        <a href="#" class="product-more" id='${id}'>ver producto</a>
      </div>
  `
  const classes = ['products-row', 'p-main'];
  section.classList.add(...classes);
  section.dataset.id = id;
  section.innerHTML = content;
  // section.dataset.id = id;
  return section;
};

const starwarsProducts = document.querySelector('[data-category=sw]');
const consolesProducts = document.querySelector('[data-category=vg]');
const variosProducts = document.querySelector('[data-category=ot]');

productsServices.GetProducts()
  .then((data) => {
    data.forEach((product) => {
      const newElement = newProduct(product.id, product.name, product.price, product.imageUrl);
      if (product.category == starwarsProducts.dataset.category) {
        starwarsProducts.appendChild(newElement);
      } if (product.category == consolesProducts.dataset.category) {
        consolesProducts.appendChild(newElement);
      } if (product.category == variosProducts.dataset.category) {
        variosProducts.appendChild(newElement);
      }
    })
  });
