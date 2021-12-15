import NewsSource from '../../../data/news-source';
import {
  createNewsItemTemplate,
  createNewsImageOverlays,
  createNewsPopularSide,
  createInternationalNewsItemTemplate,
  createUpdateCoronaTemplate,
  createTwitterTrendsTemplate,
} from '../../templates/template-creator';

const Sport = {
  async render() {
    return `
    <div class="row">
      <div class="col-lg-8 p-4 pt-0"> 
        <section>
          <div id="content" class="content">
            <h2 class="card-header">Olahraga</h2>
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
    const news = await NewsSource.category_sports();
    const newsContainer = document.querySelector('#news');
    const topNewsItem = document.querySelector('#topNews');
    let i = 0;
    news.slice(0, 10).forEach((item) => {
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
    twitterTrends.forEach((item, index) => {
      twitterTrendsItem.innerHTML += createTwitterTrendsTemplate(item, index);
    });
  },
};

export default Sport;
