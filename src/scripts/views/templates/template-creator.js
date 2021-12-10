const createNewsItemTemplate = (news) => `
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${news.urlToImage || 'image-not-found.png'}" class="img-fluid rounded-start" alt="image-${news.source.name}">
                </div>
                <div class="col-md-8">
                    <div class="card-body pt-0">
                        <a href='${news.url}' class="fw-bold news-title" target="_blank">${news.title}</a>
                        <p class="card-text news-desciption">${news.description || ''}</p>
                        <p class="card-text"><small class="text-muted"><span class="source-text">${news.source.name}</span> ${news.publishedAt.substring(0, 10)}</small></p>
                    </div>
                </div>
            </div>
        </div>
`;

const createInternationalNewsItemTemplate = (news) => `
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${news.urlToImage || 'image-not-found.png'}" class="img-fluid rounded-start news-cover" alt="image-${news.source.name}">
                </div>
                <div class="col-md-8">
                    <div class="card-body pt-0">
                        <a href='${news.url}' class="side-news-title inter" target="_blank">${news.title}</a>
                        <p class="card-text"><small class="text-muted"><span class="source-text">${news.source.name}</span> ${news.publishedAt.substring(0, 10)}</small></p>
                    </div>
                </div>
            </div>
        </div>
`;

const createNewsImageOverlays = (news) => `
    <div class="card bg-dark text-white mb-5 overflow-hidden">
        <img src="${news.urlToImage || 'image-not-found.png'}" class="img-fluid card-img" alt="image-news ${news.source.name}">
        <div class="card-img-overlay bg-color">
            <a href='${news.url}' class="overlays-title card-title">${news.title}</a>
            <p class="card-text"><span class="source-text">${news.source.name}</span> ${news.publishedAt.substring(0, 10)}</p>
        </div>
    </div>
    <h2 class="card-header">Berita Terkini</h2>
`;

const createNewsItemSide = (news, index) => `
    <li class="list-group-item d-flex justify-content-between align-items-start">
        <span class="fs-2 fw-bold news-number">#${index + 1}</span>
        <div class="ms-3 me-auto">
            <a href='${news.url}' class="side-news-title"><div>${news.title}</div></a>
        </div>
    </li>
`;

export {
  createNewsItemTemplate,
  createNewsImageOverlays,
  createInternationalNewsItemTemplate,
  createNewsItemSide,
};
