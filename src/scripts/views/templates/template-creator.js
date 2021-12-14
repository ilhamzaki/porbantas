const createNewsImageOverlays = (news) => `
    <div class="card bg-dark text-white mb-5 overflow-hidden">
        <img src="${news.urlToImage || 'source-image/image-not-found.png'}" class="img-fluid card-img" alt="image-news ${news.source.name}">
        <div class="card-img-overlay bg-color p-4">
            <a href='${news.url}' class="overlays-title fs-5 fw-bold card-title" target="_blank" rel="noopener">${news.title}</a>
            <p class="card-text"><span class="source-text-overlays">${news.source.name}</span> ${news.publishedAt.substring(0, 10)}</p>
        </div>
    </div>
    <h2 class="card-header">Berita Terkini</h2>
`;

const createNewsItemTemplate = (news) => `
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-lg-4">
                <img src="${news.urlToImage || 'source-image/image-not-found.png'}" class="img-fluid rounded-start pb-3" alt="image-${news.source.name}">
            </div>
            <div class="col-lg-8">
                <div class="card-body pt-0">
                    <a href='${news.url}' class="fw-bold news-title" target="_blank" rel="noopener">${news.title}</a>
                    <p class="card-text news-desciption">${news.description || ''}</p>
                    <p class="card-text"><small class="text-muted"><span class="source-text">${news.source.name}</span> ${news.publishedAt.substring(0, 10)}</small></p>
                </div>
            </div>
        </div>
    </div>
`;

const createNewsPopularSide = (news, index) => `
    <li class="list-group-item d-flex justify-content-between align-items-start">
        <span class="fs-2 fw-bold news-number">#${index + 1}</span>
        <div class="ms-3 me-auto">
            <a href='${news.url}' class="side-news-title"><div>${news.title}</div></a>
        </div>
    </li>
`;

const createInternationalNewsItemTemplate = (news) => `
<div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${news.urlToImage || 'source-image/image-not-found.png'}" class="img-fluid rounded-start news-cover pb-3" alt="image-${news.source.name}">
                </div>
                <div class="col-md-8">
                    <div class="card-body pt-0">
                        <a href='${news.url}' class="side-news-title inter" target="_blank" rel="noopener">${news.title}</a>
                        <p class="card-text"><small class="text-muted"><span class="source-text">${news.source.name}</span> ${news.publishedAt.substring(0, 10)}</small></p>
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
        <a href="https://covid19.go.id/peta-sebaran" target="_blank" rel="noopener">Lihat Selengkapnya -></a>  
    </div>
    
`;

const createTwitterTrendsTemplate = (news) => `
    <li class="list-group-item d-flex justify-content-between align-items-start border-bottom ps-0">
        <a href='https://twitter.com/search?q=${news.name.replace('#', '%23')}' class="text-dark" target="_blank" rel="noopener">${news.name}</a>
        <small class="text-muted">${news.tweet_count.replaceAll('K', ' rb Tweet') || ''}</small>
    </li>
`;

export {
  createNewsImageOverlays,
  createNewsItemTemplate,
  createNewsPopularSide,
  createInternationalNewsItemTemplate,
  createUpdateCoronaTemplate,
  createTwitterTrendsTemplate,
};
