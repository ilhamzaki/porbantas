import Home from '../views/pages/home';
import Bookmark from '../views/pages/bookmark';
import Business from '../views/pages/category/business';
import Entertainment from '../views/pages/category/entertainment';
import Health from '../views/pages/category/health';
import Science from '../views/pages/category/science';
import Sport from '../views/pages/category/sports';
import Technology from '../views/pages/category/technology';

const routes = {
  '/': Home,
  '/business': Business,
  '/entertainment': Entertainment,
  '/health': Health,
  '/science': Science,
  '/sports': Sport,
  '/technology': Technology,
  '/bookmark': Bookmark,
};

export default routes;
