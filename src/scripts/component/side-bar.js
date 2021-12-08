class SideBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <aside class="ms-4">
        <article>
        <div class="text-dark mb-3">
            <div class="card-header ps-0"><h2>Berita Terpopuler</h2></div>
            <ol id="sideItem" class="list-group ps-3">
                
            </ol>
            </div>
        </div>
        </article>
    </aside>
        `;
  }
}

customElements.define('side-bar', SideBar);
