const inputFontSizeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const showTextChanges = inputFontSizeRef.addEventListener('input', event => {
  textRef.style.fontSize = event.currentTarget.value + 'px';
});
