import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import './component/app-bar';
import './component/side-bar';
import './component/banner-app';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
