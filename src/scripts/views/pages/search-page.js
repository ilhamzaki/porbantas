/* eslint-disable max-len */
import NewsSource from '../../data/news-source';
import { createNewsItemTemplate } from '../templates/template-creator';

const SearchPage = {
  async render() {
    return `
    <div class="content">
        <h5 id="heading-search" class="content__heading"></h5>
        <div id="news" class="news">

        </div>
    </div>
    <side-bar></side-bar>
        `;
  },

  async afterRender() {
    const searchElement = document.querySelector('#search-bar');
    const newsContainer = document.querySelector('#news');
    const news = await NewsSource.search_news(searchElement.value.toLowerCase());
    console.log(news);
    if (searchElement.value === '' || news.length === 0) {
      document.querySelector('#heading-search').innerHTML = `Hasil pencarian ${searchElement.value} tidak ditemukan`;
      this.render();
    } else {
      document.querySelector('#heading-search').innerHTML = `Hasil pencarian "${searchElement.value}"`;
      news.forEach((item) => {
        newsContainer.innerHTML += createNewsItemTemplate(item);
      });
    }
  },
};

export default SearchPage;
