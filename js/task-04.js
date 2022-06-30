let counterValue = 0;

const decrBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');
const valueUI = document.querySelector('#value');

const reduceValue = decrBtn.addEventListener('click', () => {
  counterValue -= 1;
  valueUI.textContent = counterValue;
});

const increaseValue = incrBtn.addEventListener('click', () => {
  counterValue += 1;
  valueUI.textContent = counterValue;
});
