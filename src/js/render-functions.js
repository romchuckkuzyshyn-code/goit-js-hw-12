import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
const loader = document.querySelector('.loader');
const list = document.querySelector('.gallery');
const btn = document.querySelector('.js-load-btn');

export function createGallery({
  likes,
  tags,
  views,
  downloads,
  comments,
  webformatURL,
  largeImageURL,
}) {
  return `
        <li class= "gallery-item">
          <a href="${largeImageURL}"
            ><img src="${webformatURL}" alt="${tags}" />
            <div class="gallery-info">
              <div class="gallery-info-box">
                <span class="gallery-label">Likes</span>
                <span class="gallery-value">${likes}</span>
              </div>
              <div class="gallery-info-box">
                <span class="gallery-label">Views</span>
                <span class="gallery-value">${views}</span>
              </div>
              <div class="gallery-info-box">
                <span class="gallery-label">Comments</span>
                <span class="gallery-value">${comments}</span>
              </div>
              <div class="gallery-info-box">
                <span class="gallery-label">Downloads</span>
                <span class="gallery-value">${downloads}</span>
              </div>
            </div>
          </a
          >
          </li>`;
}

export function renderGallery(images) {
  const markup = images.map(img => createGallery(img)).join('');
  // list.innerHTML = markup;
  list.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  list.innerHTML = '';
  hideLoadMoreButton();
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}

export function showLoadMoreButton() {
  btn.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  btn.classList.add('hidden');
}
