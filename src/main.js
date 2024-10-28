// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api.js';
import {
  renderImages,
  showLoading,
  hideLoading,
} from './js/render-functions.js';

let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  loop: true,
});

const form = document.querySelector('.form');
const userInput = document.querySelector('.user-input');

let userText;

form.addEventListener('submit', event => {
  event.preventDefault();
  if (userInput.value.trim()) {
    userText = userInput.value.trim();
  } else {
    userText = undefined;
  }

  if (userText) {
    showLoading();

    fetchImages(userText)
      .then(data => {
        if (renderImages(data, lightbox)) {
          return renderImages(data, lightbox);
        } else {
          throw new Error('Test error!');
        }
      })
      .catch(error => {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageSize: 18,
          messageLineHeight: 30,
          position: 'topRight',
        });
        hideLoading();
      });
  }
});
