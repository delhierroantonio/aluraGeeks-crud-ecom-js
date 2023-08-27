import { productsServices } from '../services/products-services.js';

const consolesDiv = document.querySelector('[product-consoles]');

// const url = new URL(window.location);
// const id = url.searchParams.get('id');
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
  // section.classList.add(...classes);
  section.dataset.id = id;
  section.innerHTML = content;
  // section.dataset.id = id;
  return section;
};

const showConsoles = async () => {
  try {
    const consoles = await productsServices.GetProduct('?category=vg');
    consoles.forEach((product) => {
      const newElement = newProduct(product.id, product.name, product.price, product.imageUrl);
      consolesDiv.appendChild(newElement);
    });
    console.log(consoles);
  } catch (error) {
    console.log(error);
  }
}

showConsoles();