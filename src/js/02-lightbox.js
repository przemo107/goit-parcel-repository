import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

function renderGalleryItems() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = galleryItems
    .map(
      item => `
      <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img class="gallery__image" src="${item.preview}" alt="${item.description}">
        </a>
      </li>
    `,
    )
    .join('');
}

renderGalleryItems();

document.querySelector('.gallery').addEventListener('click', event => {
  event.preventDefault();
  if (event.target.classList.contains('gallery__image')) {
    const source = event.target.dataset.source;
    const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}">
    `);
    instance.show();
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        instance.close();
      }
    });
  }
});

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
  captionsData: 'alt',
  captionsPosition: 'bottom',
});
