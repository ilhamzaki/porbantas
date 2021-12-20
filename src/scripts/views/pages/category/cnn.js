import NewsSource from '../../../data/news-source';
import {
  createNewsItemTemplate,
  createNewsImageOverlays,
  createNewsPopularSide,
  createInternationalNewsItemTemplate,
  createUpdateCoronaTemplate,
  createTwitterTrendsTemplate,
  createSourceDetailTemplate,
  createSkeletonNewsTemplate,
} from '../../templates/template-creator';

const CNN = {
  async render() {
    return `
    <div class="row">
      <div class="col-lg-8 p-4 pt-0"> 
        <section>
          <div id="content" class="content">
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
    const news = await NewsSource.news('cnn', 'terbaru');
    const newsContainer = document.querySelector('#news');
    newsContainer.innerHTML = createSourceDetailTemplate(news);
    let i = 0;
    news.posts.slice(0, 15).forEach((item) => {
      if (i === 0) {
        newsContainer.innerHTML += createNewsImageOverlays(item);
      } else {
        newsContainer.innerHTML += createNewsItemTemplate(item);
      }
      i++;
    });

    const topNewsItem = document.querySelector('#topNews');
    topNewsItem.innerHTML = '';
    news.posts.slice(15, 20).forEach((item, index) => {
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

    const twitterTrends = await NewsSource.twitter_trends();
    const twitterTrendsItem = document.querySelector('#twitterTrends');
    twitterTrendsItem.innerHTML = '';
    twitterTrends.forEach((item, index) => {
      twitterTrendsItem.innerHTML += createTwitterTrendsTemplate(item, index);
    });
  },
};

export default CNN;
