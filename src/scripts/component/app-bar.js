class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchButtonElement').value;
  }

  render() {
    this.innerHTML = `
          <nav class="fixed-top navbar navbar-expand-lg navbar-dark bg-dark">
              <div class="container">
                  <a class="navbar-brand fw-bold" href="#/"><img src="logo-porbantas.svg" class="me-3" alt="logo">Porbantas</a>
                  <button id="hamburgerButton" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
  
                  <div id="navigationDrawer" class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                          <li class="nav-item">
                              <a id="cnn" class="nav-link p-3" href="#/cnn">CNN</a>
                          </li>
                          <li class="nav-item">
                              <a id="cnbc" class="nav-link p-3" href="#/cnbc">CNBC</a>
                          </li>
                          <li class="nav-item">
                              <a id="sindonews" class="nav-link p-3" href="#/sindonews">SINDONEWS</a>
                          </li>
                          <li class="nav-item">
                              <a id="kumparan" class="nav-link p-3" href="#/kumparan">KUMPARAN</a>
                          </li>
                          <li class="nav-item">
                              <a id="okezone" class="nav-link p-3" href="#/okezone">OKEZONE</a>
                          </li>
                      </ul>
                      <form action="#/search" class="d-flex">
                          <input id="search-bar" class="form-control me-2" type="search" placeholder="Search Title" aria-label="Search">
                          <button id="searchButtonElement" class="btn btn-dark" type="submit"><i class="bi bi-search"></i></button>
                      </form>
                  </div>
              </div>
          </nav>
        `;

    this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('app-bar', AppBar);
