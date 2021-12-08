import NewsSource from '../../../data/news-source';
import { createNewsImageOverlays, createNewsItemTemplate } from '../../templates/template-creator';

const Sport = {
  async render() {
    return `
    <div class="content">
        <h2 class="content__heading">Olahraga</h2>
        <div id="news" class="news">

        </div>
    </div>
    <side-bar></side-bar>
        `;
  },

  async afterRender() {
    const news = await NewsSource.category_sports();
    const newsContainer = document.querySelector('#news');
    let i = 0;
    news.forEach((item) => {
      if (i === 0) {
        newsContainer.innerHTML += createNewsImageOverlays(item);
      } else {
        newsContainer.innerHTML += createNewsItemTemplate(item);
      }
      i++;
    });
  },
};

export default Sport;
