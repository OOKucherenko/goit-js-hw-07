import { galleryItems } from './gallery-items.js';
// Change code below this line

const containerGallery = document.querySelector('.gallery');
const imgMarkup = createImages(galleryItems);
containerGallery.insertAdjacentHTML('beforeend', imgMarkup);

function createImages(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
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
containerGallery.addEventListener('click', onImageClick);
function onImageClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const originalImage = e.target.dataset.source;
  modalImg(originalImage);
}

function modalImg(link) {
  const instance = basicLightbox.create(`<img src="${link}">`, {
    onShow: instance => window.addEventListener('keydown', onEscapePress),
    onClose: instance => window.removeEventListener('keydown', onEscapePress),
  });
  instance.show();

  function onEscapePress(event) {
    if (event.key === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', onEscapePress);
    }
  }
}
