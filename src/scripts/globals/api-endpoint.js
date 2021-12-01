import CONFIG from './config';

// const category = document.querySelectorAll('a').forEach((item) => {
//   item.addEventListener('click', (e) => console.log(e.target.id));
// });

// const category = document.querySelectorAll('#category a')[5].getAttribute('id');

// ===========================
// const idCategory = [];
// const category = document.querySelectorAll('#category a');
// category.forEach((item) => {
//   idCategory.push(item.getAttribute('id'));
// });
// console.log(idCategory);
// ===========================

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}&apiKey=${CONFIG.KEY}`,
  CATEGORY_BUSINESS: `${CONFIG.BASE_URL}&category=business&apiKey=${CONFIG.KEY}`,
  CATEGORY_ENTERTAIMENT: `${CONFIG.BASE_URL}&category=entertainment&apiKey=${CONFIG.KEY}`,
  CATEGORY_HEALTH: `${CONFIG.BASE_URL}&category=health&apiKey=${CONFIG.KEY}`,
  CATEGORY_SCIENCE: `${CONFIG.BASE_URL}&category=science&apiKey=${CONFIG.KEY}`,
  CATEGORY_SPORTS: `${CONFIG.BASE_URL}&category=sports&apiKey=${CONFIG.KEY}`,
  CATEGORY_TECHNOLOGY: `${CONFIG.BASE_URL}&category=technology&apiKey=${CONFIG.KEY}`,
};

export default API_ENDPOINT;
