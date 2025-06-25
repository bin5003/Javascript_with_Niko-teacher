const loginForm = document.querySelector('#login-form'); // login-from
const loginInput = document.querySelector('#login-form input');

const link = document.querySelector('a');

function onLoginSubmit(information) {
  information.preventDefault();
  console.log(loginInput.value);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}

loginForm.addEventListener('submit', onLoginSubmit);
link.addEventListener('click', handleLinkClick);
