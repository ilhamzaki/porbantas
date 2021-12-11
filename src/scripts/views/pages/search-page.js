/* eslint-disable max-len */
import NewsSource from '../../data/news-source';
import {
  createNewsItemTemplate,
  createNewsPopularSide,
  createInternationalNewsItemTemplate,
  createUpdateCoronaTemplate,
  createTwitterTrendsTemplate,
} from '../templates/template-creator';

const SearchPage = {
  async render() {
    return `
    <div class="content">
        <h5 id="heading-search" class="card-header"></h5>
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

    const topNews = await NewsSource.home();
    const topNewsItem = document.querySelector('#topNews');
    topNews.slice(15, 20).forEach((item, index) => {
      topNewsItem.innerHTML += createNewsPopularSide(item, index);
    });

    const interNews = await NewsSource.international_news();
    const internationalNewsItem = document.querySelector('#internationalNews');
    interNews.slice(0, 5).forEach((item) => {
      internationalNewsItem.innerHTML += createInternationalNewsItemTemplate(item);
    });

    const coronaUpdate = await NewsSource.corona_update();
    const coronaUpdateItem = document.querySelector('#coronaUpdate');
    coronaUpdateItem.innerHTML += createUpdateCoronaTemplate(coronaUpdate);

    const twitterTrends = await NewsSource.twitter_trends();
    const twitterTrendsItem = document.querySelector('#twitterTrends');
    twitterTrends.slice(0, 5).forEach((item, index) => {
      twitterTrendsItem.innerHTML += createTwitterTrendsTemplate(item, index);
    });
  },
};

export default SearchPage;
