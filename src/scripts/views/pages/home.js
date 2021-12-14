import NewsSource from '../../data/news-source';
import {
  createNewsItemTemplate,
  createNewsImageOverlays,
  createNewsPopularSide,
  createInternationalNewsItemTemplate,
  createUpdateCoronaTemplate,
  createTwitterTrendsTemplate,
} from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div id="content" class="content">
        <div id="news" class="news">

        </div>
    </div>
    
        `;
  },

  async afterRender() {
    const news = await NewsSource.home();
    const newsContainer = document.querySelector('#news');
    const topNewsItem = document.querySelector('#topNews');
    let i = 0;
    news.slice(1, 10).forEach((item) => {
      if (i === 0) {
        newsContainer.innerHTML += createNewsImageOverlays(item);
      } else {
        newsContainer.innerHTML += createNewsItemTemplate(item);
      }
      i++;
    });
    news.slice(15, 20).forEach((item, index) => {
      topNewsItem.innerHTML += createNewsPopularSide(item, index);
    });

    // const sidebarContainer = dispatchEvent.querySelector('#sidebarContainer');
    // sidebarContainer.innerHTML += '<side-bar></side-bar>';

    const interNews = await NewsSource.international_news();
    const internationalNewsItem = document.querySelector('#internationalNews');
    interNews.slice(1, 5).forEach((item) => {
      internationalNewsItem.innerHTML += createInternationalNewsItemTemplate(item);
    });

    const coronaUpdate = await NewsSource.corona_update();
    const coronaUpdateItem = document.querySelector('#coronaUpdate');
    coronaUpdateItem.innerHTML += createUpdateCoronaTemplate(coronaUpdate);

    const twitterTrends = await NewsSource.twitter_trends();
    const twitterTrendsItem = document.querySelector('#twitterTrends');
    twitterTrends.slice(0, 5).forEach((item) => {
      twitterTrendsItem.innerHTML += createTwitterTrendsTemplate(item);
    });
  },
};

export default Home;
