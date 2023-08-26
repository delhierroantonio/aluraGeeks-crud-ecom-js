const form = document.querySelector('[data-form]');

const inputName = document.querySelector('[data-name');
const inputMsg = document.querySelector('[data-msg');

const errorMsg = document.querySelector('[data-error-span]');

// const nameError = document.querySelector('[data-error-name]');
// const  msgError = document.querySelector('[data-error-msg]');

// classes to remove -> d-none

form.addEventListener('submit', e => {
  e.preventDefault();
  validateForm();
});

const validateForm = (e) => {
  if (inputName.value === '' || inputMsg.value === '') {
    errorMsg.innerHTML = 'Revisa que los campos no esten vacios'
    return;
  } 
  errorMsg.innerHTML = '';
  inputName.value = '';
  inputMsg.value = '';
  alert('Gracias por ponerse en contacto, nos contactaremos tan pronto sea posible');
  // if ((inputName.value && inputMsg.value) === '') {
  //   alert('Revisa que los campos sean correctos');
  // } else {
  //   alert(`Tu mensaje se ha enviado correctamente: ${inputName.value}, pronto nos pondremos en contacto`);
  // }
  // if (inputName.value === '') {
  //   nameError.classList.remove('d-none');
  //   return;
  // } 
  // nameError.classList.add('d-none');
  // if (inputMsg.value === '') {
  //   msgError.classList.remove('d-none');
  //   return;
  // }
  // msgError.classList.add('d-none');
}