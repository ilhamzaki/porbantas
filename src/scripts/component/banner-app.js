class BannerApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    // <a href="#mainContent" class="btn btn-warning" disabled>Berita Terkini</a>
    this.innerHTML = `
    <div class="bg-dark">
      <div class="container">
        <div class="row bg-dark text-light hero">
          <div class="col-md-6 d-flex justify-content-lg-center align-items-center">
            <div class="mt-3 mb-3 me-5">
              <h2 class="fs-1 mb-3"><span class="text-warning">Kumpulan Berita</span> Dari Berbagai <span class="text-warning">Sumber Terpercaya</span></h2>
              <p>Menyediakan berita-berita yang aktual dan portal berita yang kredibel</p>
              
            </div>
          </div>
          <div class="col-md-6 p-0">
            <img src="https://images.unsplash.com/photo-1608976409757-8aa9957f98ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="img-fluid cover" alt="hero-image">
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('banner-app', BannerApp);
