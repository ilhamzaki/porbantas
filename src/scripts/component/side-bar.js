class SideBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <aside class="ms-4">
        <article>
          <div class="mb-5">
                <h2 class="card-header">Berita Terpopuler</h2>
                <ol id="topNews" class="list-group">
                    
                </ol>
              </div>
          </div>
          <div class="mb-5">
              <h2 class="card-header">Berita Internasional</h2>
              <div id="internationalNews" class="news">

              </div>
            </div>
          </div>
          <div class="mb-5">
            <h2 class="card-header">Perkembangan Virus Corona</h2>
            <div id="coronaUpdate" class="news">
              
            </div>
          </div>
          <div class="mb-5">
            <h2 class="card-header"><img src="source-logo/logo-twitter.png" class="me-2" alt="">Tren untuk Anda</h2>
            <div id="twitterTrends" class="news">
              
            </div>
          </div>
        </article>
    </aside>
        `;
  }
}

customElements.define('side-bar', SideBar);
