const loginForm = document.querySelector('[data-login-form]');
const email = document.querySelector('[data-login-email]');
const password = document.querySelector('[data-login-pass]');
const loginBtn = document.querySelector('[data-login-btn]');

const hidden = document.querySelector('[data-hidden]');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value === '' || password.value === '') {
    hidden.classList.remove('hidden');
    return;
  }
  hidden.classList.add('hidden');
  window.location.href = '../screens/all-products.html'
});
