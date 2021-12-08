import NewsSource from '../../../data/news-source';
import { createNewsImageOverlays, createNewsItemSide, createNewsItemTemplate } from '../../templates/template-creator';

const Business = {
  async render() {
    return `
    <div class="content">
        <h2 class="content__heading">Bisnis</h2>
        <div id="news" class="news">

        </div>
    </div>
    <side-bar></side-bar>
        `;
  },

  async afterRender() {
    const news = await NewsSource.category_business();
    const newsContainer = document.querySelector('#news');
    const sideNewsItem = document.querySelector('#sideItem');
    let i = 0;
    news.slice(0, 15).forEach((item) => {
      if (i === 0) {
        newsContainer.innerHTML += createNewsImageOverlays(item);
      } else {
        newsContainer.innerHTML += createNewsItemTemplate(item);
      }
      i++;
    });
    news.slice(15, 20).forEach((item, index) => {
      sideNewsItem.innerHTML += createNewsItemSide(item, index);
    });
  },
};

export default Business;
