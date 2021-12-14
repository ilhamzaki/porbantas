import Home from '../views/pages/home';
import Business from '../views/pages/category/business';
import Entertainment from '../views/pages/category/entertainment';
import Health from '../views/pages/category/health';
import Science from '../views/pages/category/science';
import Sport from '../views/pages/category/sports';
import Technology from '../views/pages/category/technology';
import SearchPage from '../views/pages/search-page';

const routes = {
  '/': Home,
  '/business': Business,
  '/entertainment': Entertainment,
  '/health': Health,
  '/science': Science,
  '/sports': Sport,
  '/technology': Technology,
  // search:searchElement.value (solusi untuk bug pencarian ke 2x, harus perpindah routes)
  '/search/:keyword': SearchPage,
};

export default routes;
