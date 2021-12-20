import { createSkeletonNewsAsideTemplate } from '../views/templates/template-creator';

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
              ${createSkeletonNewsAsideTemplate(2)}
            </ol>
          </div>
          <div class="mb-5">
            <h2 class="card-header">Berita Internasional</h2>
            <div id="internationalNews" class="news">
              ${createSkeletonNewsAsideTemplate(2)}
            </div>
          </div>
          <div class="mb-5">
            <h2 class="card-header">Perkembangan Virus Corona</h2>
            <div id="coronaUpdate" class="news">
              ${createSkeletonNewsAsideTemplate(2)}
            </div>
          </div>
          <div class="mb-5">
            <h2 class="card-header"><img src="source-image/logo-twitter.png" class="me-2" alt="">Tren untuk Anda</h2>
            <div id="twitterTrends" class="news">
              ${createSkeletonNewsAsideTemplate(2)}
            </div>
          </div>
        </article>
    </aside>
        `;
  }
}

customElements.define('side-bar', SideBar);
