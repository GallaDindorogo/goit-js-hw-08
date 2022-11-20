// Add imports above this line

import { galleryItems } from './gallery-items.js';
import { getItemLightboxTemplate } from './getItemLightboxTemplate.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const render = () => {
  const markUp = galleryItems.map(getItemLightboxTemplate);
  gallery.innerHTML = '';
  gallery.insertAdjacentHTML('beforeend', markUp.join(''));
};

render();

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  captionPosition: 'bottom',
  overlayOpacity: 0.5,
  closeText: '×',
  scrollZoom: false,
});
// Change code below this line

console.log(galleryItems);
