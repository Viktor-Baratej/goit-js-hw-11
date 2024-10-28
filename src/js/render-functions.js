// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const div = document.querySelector('.wrapp');

const gallery = document.querySelector('.gallery');

export function renderImages(data, lightbox) {
  if (data.total === 0) {
    gallery.innerHTML = '';
    return undefined;
  } else {
    hideLoading();
    const smallImg = data.hits
      .map(
        item =>
          `<li class="gallery-item"><a href="${item.largeImageURL}" data-source="${item.largeImageURL}"><img src="${item.webformatURL}" alt="${item.tags}" /></a>
          <div class="wrapp-items">
          <div class="info-item"><p class="bold">Likes</p>
          <p>${item.likes}</p>
          </div>
          <div class="info-item"><p class="bold">Views</p>
          <p>${item.views}</p>
          </div>
          <div class="info-item"><p class="bold">Comments</p>
          <p>${item.comments}</p>
          </div>
          <div class="info-item"><p class="bold">Downloads</p>
          <p>${item.downloads}</p>
          </div>
          </div></li>`
      )
      .join('');
    gallery.innerHTML = smallImg;

    lightbox.refresh();
    return true;
  }
}

export function showLoading() {
  div.style.display = 'block';
}

export function hideLoading() {
  div.style.display = 'none';
}
