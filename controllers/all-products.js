import { productsServices } from '../services/products-services.js';

const allContainer = document.querySelector('[data-all-products]');

    const card = (id, name, price, imageUrl) => {
      const box = document.createElement('div');
      const content = `
      <div>
        <div class="all-product-image" id='${id}'>
          <img src="${imageUrl}" alt="product photo" class="ap-image">
          <img src="../assets/images/delete-icon.svg" alt="delete icon" class="delete-icon" data-delete id='${id}'>
          <a href="./edit-product.html?id=${id}">
            <img src="../assets/images/edit-icon.svg" alt="edit icon" class="edit-icon" data-edit id='${id}'>
          </a>
          </div>
        <p class="all-product-title">${name}</p>
        <p class="all-product-price">${price}</p>
        <p class="all-product-id">#${id}</p>
      </div>
      `
      box.classList.add('all-row-box');
      box.dataset.id = id;
      box.innerHTML = content;

      const deleteBtn = box.querySelector('[data-delete]');
      const editBtn = box.querySelector('[data-edit]');

      deleteBtn.addEventListener('click', () => {
        const id = deleteBtn.id;
        productsServices
          .DeleteProduct('/' + id)
          .then((res) => {
            console.log(res);
            window.location.href = '/screens/all-products.html'
          })
          .catch((error) => console.log(error));
      });

      editBtn.addEventListener('click', () => {
        const id = editBtn.id;
        console.log(`Editando producto con id: ${id}`);
      });

      return box;
    };

    productsServices.GetProducts()
    .then((data) => {
      // console.log(data);
      data.forEach(element => {
        const newElement = card(element.id, element.name, element.price, element.imageUrl)
        allContainer.appendChild(newElement);
      });
    })

    // 16:18

    // {
    //   "id": 18,
    //   "name": "other 6",
    //   "price": 475,
    //   "category": "ot",
    //   "imageUrl": "./assets/images/d6.webp"
    // }