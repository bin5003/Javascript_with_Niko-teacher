const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-from input');

function onLoginSubmit(information) {
  information.preventDefault();
  console.log(information);
}

loginForm.addEventListener('submit', onLoginSubmit);
