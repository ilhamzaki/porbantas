/* eslint-disable no-plusplus */
import NewsSource from '../../data/news-source';
import { createNewsItemTemplate, createNewsImageOverlays } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="content">
        <div id="news" class="news">

        </div>
    </div>
        `;
  },

  async afterRender() {
    const news = await NewsSource.home();
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

export default Home;
