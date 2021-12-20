import CONFIG from '../globals/config';

class NewsSource {
  static async news(source, category) {
    const response = await fetch(`${CONFIG.BASE_URL}/${source}/${category}`);
    const responeJson = await response.json();
    return responeJson.data;
  }

  static async corona_update() {
    const response = await fetch('https://apicovid19indonesia-v2.vercel.app/api/indonesia');
    const responeJson = await response.json();
    return responeJson;
  }

  static async twitter_trends() {
    const response = await fetch('https://api-twitter-trends.herokuapp.com/trends?location=indonesia');
    const responJson = await response.json();
    return responJson.data.trends[0].data;
  }
}

export default NewsSource;
