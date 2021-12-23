import NewsSource from '../../data/news-source';
import {
  createNewsItemTemplate,
  createNewsPopularSide,
  createInternationalNewsItemTemplate,
  createUpdateCoronaTemplate,
  createSkeletonNewsTemplate,
  createUpdateVaksinTemplate,
} from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="row">
      <div class="col-lg-8 p-4 pt-0"> 
        <section>
          <div id="content" class="content">
            <div class="card-header">
              <a href="#/cnn" type="button" class="btn btn-outline-danger me-3 mb-3">CNN</a>
              <a href="#/cnbc" type="button" class="btn btn-outline-success me-3 mb-3">CNBC</a>
              <a href="#/sindonews" type="button" class="btn btn-outline-primary me-3 mb-3">SINDONEWS</a>
              <a href="#/kumparan" type="button" class="btn btn-outline-info me-3 mb-3">KUMPARAN</button>
              <a href="#/okezone" type="button" class="btn btn-outline-warning me-3 mb-3">OKEZONE</a>
            </div>
            <div id="news" class="news">
              ${createSkeletonNewsTemplate(10)}
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
    const news = await NewsSource.news('kumparan', 'terbaru');
    const newsContainer = document.querySelector('#news');
    newsContainer.innerHTML = '';
    news.posts.slice(0, 20).forEach((item) => {
      newsContainer.innerHTML += createNewsItemTemplate(item);
    });

    const topNewsItem = document.querySelector('#topNews');
    topNewsItem.innerHTML = '';
    news.posts.slice(10, 15).forEach((item, index) => {
      topNewsItem.innerHTML += createNewsPopularSide(item, index);
    });

    const interNews = await NewsSource.news('cnn', 'internasional');
    const internationalNewsItem = document.querySelector('#internationalNews');
    internationalNewsItem.innerHTML = '';
    interNews.posts.slice(0, 5).forEach((item) => {
      internationalNewsItem.innerHTML += createInternationalNewsItemTemplate(item);
    });

    const coronaUpdate = await NewsSource.corona_update();
    const coronaUpdateItem = document.querySelector('#coronaUpdate');
    coronaUpdateItem.innerHTML = '';
    coronaUpdateItem.innerHTML += createUpdateCoronaTemplate(coronaUpdate);

    const vaksinUpdate = await NewsSource.vaksin_update();
    const vaksinUpdateItem = document.querySelector('#vaksinUpdate');
    vaksinUpdateItem.innerHTML = '';
    vaksinUpdateItem.innerHTML += createUpdateVaksinTemplate(vaksinUpdate.monitoring.at(-1));
  },
};

export default Home;
