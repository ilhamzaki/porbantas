import API_ENDPOINT from '../globals/api-endpoint';

class NewsSource {
  static async home() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responeJson = await response.json();
    return responeJson.articles;
  }

  static async category_business() {
    const response = await fetch(API_ENDPOINT.CATEGORY_BUSINESS);
    const responeJson = await response.json();
    return responeJson.articles;
  }

  static async category_entertainment() {
    const response = await fetch(API_ENDPOINT.CATEGORY_ENTERTAIMENT);
    const responeJson = await response.json();
    return responeJson.articles;
  }

  static async category_health() {
    const response = await fetch(API_ENDPOINT.CATEGORY_HEALTH);
    const responeJson = await response.json();
    return responeJson.articles;
  }

  static async category_science() {
    const response = await fetch(API_ENDPOINT.CATEGORY_SCIENCE);
    const responeJson = await response.json();
    return responeJson.articles;
  }

  static async category_sports() {
    const response = await fetch(API_ENDPOINT.CATEGORY_SPORTS);
    const responeJson = await response.json();
    return responeJson.articles;
  }

  static async category_technology() {
    const response = await fetch(API_ENDPOINT.CATEGORY_TECHNOLOGY);
    const responeJson = await response.json();
    return responeJson.articles;
  }

  static async search_news(keyword) {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=id&apiKey=4a1c0fd7b4b749818b35ff058e50912a&q=${keyword}`);
    const responeJson = await response.json();
    return responeJson.articles;
  }
}

export default NewsSource;
