import NewsSource from '../../data/news-source';
import {
  createNewsItemTemplate,
  createNewsImageOverlays,
  createNewsPopularSide,
  createInternationalNewsItemTemplate,
  createUpdateCoronaTemplate,
  createTwitterTrendsTemplate,
  createSkeletonNewsTemplate,
  createSecondNewsItemTemplate,
} from '../templates/template-creator';

const Home = {
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
        <section>
          <div class="content">
            <div id="secondContent" class="card-group">

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
    const news = await NewsSource.home();
    const newsContainer = document.querySelector('#news');
    const secondContent = document.querySelector('#secondContent');
    const topNewsItem = document.querySelector('#topNews');
    newsContainer.innerHTML = " ";
    topNewsItem.innerHTML = " ";
    let i = 0;
    news.slice(0, 10).forEach((item) => {
      if (i === 0) {
        newsContainer.innerHTML += createNewsImageOverlays(item);
      } else {
        newsContainer.innerHTML += createNewsItemTemplate(item);
        // setTimeout(function(){newsContainer.innerHTML += createNewsItemTemplate(item)}, 2000) ;
      }
      i++;
    });

    // news.slice(10, 13).forEach((item) => {
    //   secondContent.innerHTML += createSecondNewsItemTemplate(item);
    // });

    // const sidebarContainer = dispatchEvent.querySelector('#sidebarContainer');
    // sidebarContainer.innerHTML += '<side-bar></side-bar>';

    news.slice(15, 20).forEach((item, index) => {
      topNewsItem.innerHTML += createNewsPopularSide(item, index);
    });

    const interNews = await NewsSource.international_news();
    const internationalNewsItem = document.querySelector('#internationalNews');
    internationalNewsItem.innerHTML = " ";
    // console.log(internationalNewsItem);
    interNews.slice(0, 5).forEach((item) => {
      internationalNewsItem.innerHTML += createInternationalNewsItemTemplate(item);
    });

    const coronaUpdate = await NewsSource.corona_update();
    const coronaUpdateItem = document.querySelector('#coronaUpdate');
    coronaUpdateItem.innerHTML = " ";
    coronaUpdateItem.innerHTML += createUpdateCoronaTemplate(coronaUpdate);

    const twitterTrends = await NewsSource.twitter_trends();
    const twitterTrendsItem = document.querySelector('#twitterTrends');
    twitterTrendsItem.innerHTML = " ";
    twitterTrends.forEach((item) => {
      twitterTrendsItem.innerHTML += createTwitterTrendsTemplate(item);
    });
  },
};

export default Home;
