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
                <ol id="topNews" class="list-group ps-3">
                    
                </ol>
              </div>
          </div>
          <div class="mb-5">
              <h2 class="card-header">Berita Internasional</h2>
              <div id="internationalNews" class="news">

              </div>
            </div>
          </div>
        </article>
    </aside>
        `;
  }
}

customElements.define('side-bar', SideBar);
