// - CRUD

const  url = 'http://localhost:3000/';
const renderUrl = 'https://alurageek-wnpr.onrender.com/products'

// # get
const GetProducts = () => fetch(renderUrl).then((res) => res.json()).catch(error => console.log(error));

const GetProduct = (id) => {
  // console.log(id);
  return fetch(`${renderUrl}${id}`).then((res) => res.json());
}
const CreateProduct = (name, price, category, desc, imageUrl, id) => {
  return fetch(renderUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, price, category, desc, imageUrl, id: uuid.v4() }),
  }).then(data => console.log(data)).catch((error) => console.log(error))
};

const UpdateProduct = (imageUrl,category, name, price, desc, id) => {
  return fetch(`${renderUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ imageUrl,category, name, price, desc, id })
  })
  .then((res) => res)
  .catch((error) => console.log(error));
};

const DeleteProduct = (id) => {
  console.log(`Eliminar a --> ${id}`);
  return fetch(renderUrl + id, {
    method: 'DELETE',
  });
};


export const productsServices = {
  GetProducts,
  GetProduct,
  CreateProduct,
  DeleteProduct,
  UpdateProduct,
}