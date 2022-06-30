const inputRef = document.querySelector('#validation-input');

const validateInput = inputRef.addEventListener('blur', event => {
  inputRef.classList.add('invalid');

  if (event.currentTarget.value.length === Number(inputRef.getAttribute('data-length'))) {
    inputRef.classList.replace('invalid', 'valid');
  } else {
    inputRef.classList.remove('valid');
  }
});
