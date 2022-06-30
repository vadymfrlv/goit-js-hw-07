import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(createGalleryMarkup(galleryItems));

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);
galleryRef.addEventListener('click', onImageClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description } = {}) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </div>
    `;
    })
    .join('');
}

function onImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  console.log(event.target);

  const modal = basicLightbox.create(`<img src="${event.target.dataset.source}">`, {
    closable: true,
    onShow: modal => {
      window.addEventListener('keydown', onPressEscape);
    },
    onClose: modal => {
      window.removeEventListener('keydown', onPressEscape);
    },
  });

  modal.show();

  function onPressEscape(event) {
    if (event.code === 'Escape') {
      modal.close();
    }
    console.log(event);
  }
}
