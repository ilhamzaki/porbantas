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

  static async vaksin_update() {
    const response = await fetch('https://cekdiri.id/vaksinasi/');
    const responeJson = await response.json();
    return responeJson;
  }
}

export default NewsSource;
