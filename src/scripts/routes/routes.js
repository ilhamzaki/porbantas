import Home from '../views/pages/home';
import CNN from '../views/pages/category/cnn';
import CNBC from '../views/pages/category/cnbc';
import SINDONEWS from '../views/pages/category/sindonews';
import KUMPARAN from '../views/pages/category/kumparan';
import OKEZONE from '../views/pages/category/okezone';
import SearchPage from '../views/pages/search-page';

const routes = {
  '/': Home,
  '/cnn': CNN,
  '/cnbc': CNBC,
  '/sindonews': SINDONEWS,
  '/kumparan': KUMPARAN,
  '/okezone': OKEZONE,
  '/search': SearchPage,
};

export default routes;
