class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#/">Porbantas</a>
                <button id="hamburgerButton" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div id="navigationDrawer" class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a id="business" class="nav-link" href="#/business">Bisnis</a>
                        </li>
                        <li class="nav-item">
                            <a id="entertainment" class="nav-link" href="#/entertainment">Hiburan</a>
                        </li>
                        <li class="nav-item">
                            <a id="health" class="nav-link" href="#/health">Kesehatan</a>
                        </li>
                        <li class="nav-item">
                            <a id="science" class="nav-link" href="#/science">Sains</a>
                        </li>
                        <li class="nav-item">
                            <a id="sports" class="nav-link" href="#/sports">Olahraga</a>
                        </li>
                        <li class="nav-item">
                            <a id="technology" class="nav-link" href="#/technology">Teknologi</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#/bookmark">Bookmark</a>
                        </li>
                    </ul>
                    <form action="#/search/${Math.random()}" class="d-flex">
                        <input id="search-bar" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button id="searchButtonElement" class="btn btn-dark" type="submit" onClick="window.location.reload();"><i class="bi bi-search"></i></button>
                    </form>
                </div>
            </div>
        </nav>
        <ul id="category" class="nav justify-content-center p-2">
            
        </ul>
      `;
  }
}

customElements.define('app-bar', AppBar);