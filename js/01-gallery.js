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

// Задание 1 - галерея изображений
// Создай галерею с возможностью клика по её элементам и просмотра полноразмерного изображения в модальном окне.
// 1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// 2. Реализация делегирования на div.gallery и получение url большого изображения.
// 3. Подключение скрипта и стилей библиотеки модального окна basicLightbox.
//    Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.
// 4. Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// 5. Замена значения атрибута src элемента < img > в модальном окне перед открытием.
//    Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

// Разметка элемента галереи
// Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе <img>, и указываться в href ссылки.
// Не добавляй другие HTML теги или CSS классы кроме тех, что есть в этом шаблоне.

// <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>
// Обрати внимание на то, что изображение обернуто в ссылку,
// а значит при клике по умолчанию пользователь будет перенаправлен на другую страницу.
// Запрети это поведение по умолчанию.

// Закрытие с клавиатуры
// Добавь закрытие модального окна по нажатию клавиши Escape.
// Сделай так, чтобы прослушивание клавиатуры было только пока открыто модальное окно.
// У библиотеки basicLightbox есть метод для программного закрытия модального окна.
