import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  hideLoader,
  showLoader,
  renderGallery,
  hideLoadMoreButton,
  showLoadMoreButton,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.js-load-btn');

let query = '';
let page = 1;
let totalHits = 0;
const PER_PAGE = 15;

form.addEventListener('submit', onClickBtn);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onClickBtn(event) {
  event.preventDefault();

  const inputValue = event.target.elements['search-text'].value.trim();
  query = inputValue;
  if (query.length === 0) {
    iziToast.error({
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  page = 1;
  totalHits = 0;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    if (totalHits > PER_PAGE) {
      showLoadMoreButton();
    }

    renderGallery(data.hits);
  } catch (error) {
    iziToast.error({
      message: 'Sorry, we have a problem. Please try again!',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }

  form.reset();
}

async function onLoadMore() {
  page += 1;
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);
    renderGallery(data.hits);

    const totalPages = Math.ceil(totalHits / PER_PAGE);
    if (page >= totalPages) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'bottomCenter',
      });
    }

    const firstCard = document.querySelector('.gallery-item');
    if (firstCard) {
      const { height } = firstCard.getBoundingClientRect();
      window.scrollBy({ top: height * 4, behavior: 'smooth' });
    }
  } catch (e) {
    iziToast.error({
      message: 'Sorry, we have a problem. Please try again!',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}
