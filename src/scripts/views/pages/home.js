import NewsSource from '../../data/news-source';
import createNewsItemTemplate from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="content">
        <h2 class="content__heading">Berita Terkini</h2>
        <div id="news" class="news">

        </div>
    </div>
        `;
  },

  async afterRender() {
    const news = await NewsSource.home();
    const newsContainer = document.querySelector('#news');
    news.forEach((item) => {
      newsContainer.innerHTML += createNewsItemTemplate(item);
    });
  },
};

export default Home;
