class BannerApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero bg-dark text-white align-items-center mb-3">
        <div class="hero-text">
            <h2 class="headline-title mb-4">Kumpulan Berita Dari Berbagai Sumber Terpercaya</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <img src="hero-image.jpg" class="cover" alt="hero-image"">
    </div>
    `;
  }
}

customElements.define('banner-app', BannerApp);
