import { galleryItems } from './gallery-items.js';
// Change code below this line

const containerGallery = document.querySelector('.gallery');
const imgMarkup = createImages(galleryItems);
containerGallery.insertAdjacentHTML('beforeend', imgMarkup);

function createImages(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});
