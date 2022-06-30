function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const colorDisplayRef = document.querySelector('.color');
const colorChangeBtnRef = document.querySelector('.change-color');

colorChangeBtnRef.addEventListener('click', () => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  colorDisplayRef.textContent = getRandomHexColor();
});
