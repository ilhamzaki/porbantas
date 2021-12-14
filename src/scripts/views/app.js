/* menginisiasikan komponen-komponen dari Application Shell
seperti :
1. hamburger Button
2. drawer content (menampung navigasi)
3. main content */

import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({
    button, drawer, content, sideContent,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    // this._sideContent = sideContent;

    this._initialAppShell();
  }

  // fungsi ini bertujuan untuk menginisiasikan komponen-komponen AppShell
  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      // sideContent: this._sideContent,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    // this._sideContent.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
