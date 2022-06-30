const refs = {
  nameInput: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};

const createGreeting = refs.nameInput.addEventListener('input', event => {
  event.currentTarget.value === ''
    ? (refs.nameOutput.textContent = 'Anonymous')
    : (refs.nameOutput.textContent = refs.nameInput.value);
});
