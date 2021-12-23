const createSkeletonNewsTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i++) {
    template += `
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-lg-4">
                <div class="skeleton skeleton-image skeleton-animation"></div>
                </div>
                <div class="col-sm-8 skeleton-animation">
                    <div class="card-body pt-0">
                        <div class="skeleton">Lorem, ipsum.</div>
                        <div class="skeleton">Lorem, ipsum.</div>
                        <div class="skeleton skeleton-sm">Lorem, ipsum.</div>
                    </div>              
                </div>
            </div>
        </div>
    `;
  }
  return template;
};

const createSkeletonNewsAsideTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i++) {
    template += `
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-lg-8">
                    <div class="card-body pt-0 skeleton-animation">
                        <div class="skeleton">Lorem ipsum dolor sit amet.</div>
                        <div class="skeleton">Lorem ipsum dolor sit amet.</div>
                        <div class="skeleton">Lorem ipsum dolor sit amet.</div>
                    </div>              
                </div>
            </div>
        </div>
    `;
  }
  return template;
};

const createNewsImageOverlays = (news) => `
    <div class="card bg-dark text-white mb-5 overflow-hidden">
        <img data-src="${news.thumbnail || 'source-image/image-not-found.png'}" class="img-fluid card-img lazyload" alt="image-news">
        <div class="card-img-overlay bg-color p-4">
            <a href='${news.link}' class="overlays-title fs-5 fw-bold card-title" target="_blank" rel="noopener">${news.title}</a>
            <p class="card-text">${news.pubDate.substring(0, 10)}</p>
        </div>s
    </div>
    <h2 class="card-header">Berita Terkini</h2>
`;

const createNewsItemTemplate = (news) => `
<div class="card mb-3">
        <div class="row g-0">
            <div class="col-lg-4">
                <img data-src="${news.thumbnail || 'source-image/image-not-found.png'}" class="img-fluid rounded-start pb-3 lazyload" alt="image-news">
            </div>
            <div class="col-lg-8">
                <div class="card-body pt-0">
                    <a href='${news.link}' class="fw-bold news-title" target="_blank" rel="noopener">${news.title}</a>
                    <p class="card-text news-desciption">${news.description || ''}</p>
                    <p class="card-text"><small class="text-muted">${news.pubDate.substring(0, 10)}</small></p>
                </div>
            </div>
        </div>
    </div>
`;

const createSourceDetailTemplate = (news) => `
    <div class="card mb-3">
        <div class="card-body px-0 py-2">
            <h2 class="card-title">${news.title}</h2>
            <p class="card-text">${news.description}</p>
        </div>
    </div>
`;

const createNewsPopularSide = (news, index) => `
    <li class="list-group-item d-flex justify-content-between align-items-start">
        <span class="fs-2 fw-bold news-number">#${index + 1}</span>
        <div class="ms-3 me-auto">
            <a href='${news.link}' class="side-news-title" target="_blank"><div>${news.title}</div></a>
        </div>
    </li>
`;

const createInternationalNewsItemTemplate = (news) => `
<div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img data-src="${news.thumbnail || 'source-image/image-not-found.png'}" class="img-fluid rounded-start news-cover pb-3 lazyload" alt="image-news">
                </div>
                <div class="col-md-8">
                    <div class="card-body pt-0">
                        <a href='${news.link}' class="side-news-title inter" target="_blank" rel="noopener">${news.title}</a>
                        <p class="card-text"><small class="text-muted">${news.pubDate.substring(0, 10)}</small></p>
                    </div>
                </div>
            </div>
        </div>
`;

const createUpdateCoronaTemplate = (news) => `
    <table class="table align-middle">
        <thead class="fw-bold table-dark">
            <td>Indonesia</td>
            <td>${news.lastUpdate.substring(0, 10)}</td>
        </thead>
        <tbody class="fw-bold">
            <tr>
                <td>Positif</td>
                <td class="text-danger number">${news.positif.toLocaleString('es-US')}</td>
            </tr>
            <tr>
                <td>Meninggal</td>
                <td class="number">${news.meninggal.toLocaleString('es-US')}</td>
            </tr>
            <tr>
                <td>Sembuh</td>
                <td class="text-success number">${news.sembuh.toLocaleString('es-US')}</td>
            </tr>
        </tbody>
    </table>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <a href="https://covid19.go.id/peta-sebaran" target="_blank" rel="noopener">Lihat Selengkapnya &#8594;</a>  
    </div>
    
`;

const createUpdateVaksinTemplate = (news) => `
    <table class="table align-middle">
        <thead class="fw-bold table-dark">
            <td>Indonesia</td>
            <td>${news.date}</td>
        </thead>
        <tbody class="fw-bold">
            <tr>
                <td>Total Sasaran</td>
                <td class="text-success number">${news.total_sasaran_vaksinasi.toLocaleString('es-US')}</td>
            </tr>
            <tr>
                <td>Total Vaksinasi Dosis 1</td>
                <td class="number">${news.vaksinasi1.toLocaleString('es-US')}</td>
            </tr>
            <tr>
                <td>Total Vaksinasi Dosis 2</td>
                <td class="number">${news.vaksinasi2.toLocaleString('es-US')}</td>
            </tr>
        </tbody>
    </table>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <a href="https://vaksin.kemkes.go.id/#/vaccines" target="_blank" rel="noopener">Lihat Selengkapnya &#8594;</a>  
    </div>
    
`;

export {
  createNewsImageOverlays,
  createNewsItemTemplate,
  createSourceDetailTemplate,
  createNewsPopularSide,
  createInternationalNewsItemTemplate,
  createUpdateCoronaTemplate,
  createUpdateVaksinTemplate,
  createSkeletonNewsTemplate,
  createSkeletonNewsAsideTemplate,
};
