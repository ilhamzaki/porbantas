import NewsSource from '../../../data/news-source';
import { createInternationalNewsItemTemplate, createNewsImageOverlays, createNewsItemSide, createNewsItemTemplate } from '../../templates/template-creator';

const Health = {
  async render() {
    return `
    <div class="content">
        <h2 class="card-header">Kesehatan</h2>
        <div id="news" class="news">

        </div>
    </div>
    <side-bar></side-bar>
        `;
  },

  async afterRender() {
    const news = await NewsSource.category_health();
    const newsContainer = document.querySelector('#news');
    const topNewsItem = document.querySelector('#topNews');
    let i = 0;
    news.slice(0, 5).forEach((item) => {
      if (i === 0) {
        newsContainer.innerHTML += createNewsImageOverlays(item);
      } else {
        newsContainer.innerHTML += createNewsItemTemplate(item);
      }
      i++;
    });
    news.slice(15, 20).forEach((item, index) => {
      topNewsItem.innerHTML += createNewsItemSide(item, index);
    });

    const interNews = await NewsSource.international_news();
    console.log(interNews);
    const internationalNewsItem = document.querySelector('#internationalNews');
    console.log(internationalNewsItem);
    interNews.slice(0, 5).forEach((item) => {
      internationalNewsItem.innerHTML += createInternationalNewsItemTemplate(item);
    });
  },
};

export default Health;
