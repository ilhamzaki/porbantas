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
    <div class="row">
      <div class="col-lg-8 p-4 pt-0"> 
        <section>
          <div id="content" class="content">
            <h5 id="heading-search" class="card-header"></h5>
            <div id="news" class="news">

            </div>
          </div>
        </section>
      </div>
      <div id="sidebarContainer" class="col-lg-4">
        <side-bar></side-bar>
      </div>
    </div>
        `;
  },

  async afterRender() {
    const searchElement = document.querySelector('#search-bar');
    const newsContainer = document.querySelector('#news');
    const news = await NewsSource.search_news(searchElement.value.toLowerCase());
    newsContainer.innerHTML = '';
    if (searchElement.value === '' || news.length === 0) {
      document.querySelector('#heading-search').innerHTML = `Hasil pencarian ${searchElement.value} tidak ditemukan`;
    } else {
      document.querySelector('#heading-search').innerHTML = `Hasil pencarian "${searchElement.value}"`;
      news.forEach((item) => {
        newsContainer.innerHTML += createNewsItemTemplate(item);
      });
    }

    const topNews = await NewsSource.home();
    const topNewsItem = document.querySelector('#topNews');
    topNewsItem.innerHTML = '';
    topNews.slice(15, 20).forEach((item, index) => {
      topNewsItem.innerHTML += createNewsPopularSide(item, index);
    });

    const interNews = await NewsSource.international_news();
    const internationalNewsItem = document.querySelector('#internationalNews');
    internationalNewsItem.innerHTML = '';
    interNews.slice(0, 5).forEach((item) => {
      internationalNewsItem.innerHTML += createInternationalNewsItemTemplate(item);
    });

    const coronaUpdate = await NewsSource.corona_update();
    const coronaUpdateItem = document.querySelector('#coronaUpdate');
    coronaUpdateItem.innerHTML = '';
    coronaUpdateItem.innerHTML += createUpdateCoronaTemplate(coronaUpdate);

    const twitterTrends = await NewsSource.twitter_trends();
    const twitterTrendsItem = document.querySelector('#twitterTrends');
    twitterTrendsItem.innerHTML = '';
    twitterTrends.forEach((item, index) => {
      twitterTrendsItem.innerHTML += createTwitterTrendsTemplate(item, index);
    });
  },
};

export default SearchPage;
