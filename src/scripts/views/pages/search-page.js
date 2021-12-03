/* eslint-disable max-len */
import NewsSource from '../../data/news-source';
import createNewsItemTemplate from '../templates/template-creator';

const SearchPage = {
  async render() {
    return `
    <div class="content">
        <h5 id="heading-search" class="content__heading"></h5>
        <div id="news" class="news">

        </div>
    </div>
        `;
  },

  async afterRender() {
    const news = await NewsSource.home();
    const searchElement = document.querySelector('#search-bar');
    const newsContainer = document.querySelector('#news');
    const searchData = news.filter((item) => item.title.toLowerCase().includes(searchElement.value.toLowerCase()));
    console.log(searchData);
    console.log(searchElement.value);
    if (searchElement.value === '' || searchData.length === 0) {
      document.querySelector('#heading-search').innerHTML = `Hasil pencarian ${searchElement.value} tidak ditemukan`;
      this.render();
    } else {
      document.querySelector('#heading-search').innerHTML = `Hasil pencarian "${searchElement.value}"`;
      searchData.forEach((item) => {
        newsContainer.innerHTML += createNewsItemTemplate(item);
      });
    }
  },
};

export default SearchPage;
