/* menginisiasikan komponen-komponen dari Application Shell
seperti :
1. hamburger Button
2. drawer content (menampung navigasi)
3. main content */
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  // fungsi ini bertujuan untuk menginisiasikan komponen-komponen AppShell
  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }
}

export default App;
