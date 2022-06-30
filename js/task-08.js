const formRef = document.querySelector('.login-form');
const email = document.querySelector('[type="email"]');
const password = document.querySelector('[type="password"]');

formRef.addEventListener('submit', onFromSubmit);

function onFromSubmit(event) {
  event.preventDefault();

  if (email.value === '' || password.value === '') {
    return alert('All fields of the form must be filled!');
  }

  const formElem = event.currentTarget.elements;
  const formEmail = formElem.email.value;
  const formPassword = formElem.password.value;

  event.currentTarget.reset();

  console.log('onFromSubmit -> email', formEmail);
  console.log('onFromSubmit -> password', formPassword);
}
