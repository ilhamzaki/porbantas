const createNewsItemTemplate = (news) => `
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <div class="news-source">${news.source.name}</div>
                    <img src="${news.urlToImage}" class="img-fluid rounded-start" alt="image-news ${news.source.name}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <a href='${news.url}' class="card-title" target="_blank">${news.title}</a>
                        <p class="card-text">${news.description}</p>
                        <p class="card-text"><small class="text-muted">${news.publishedAt.substring(0, 10)}</small></p>
                    </div>
                    <div class="bookmark-icon">
                        <i class="bi bi-bookmark"></i>
                    </div>
                </div>
            </div>
        </div>
`;

const createNewsImageOverlays = (news) => `
    <div class="card bg-dark text-white mb-5 overflow-hidden">
        <img src="${news.urlToImage}" class="img-fluid card-img" alt="image-news ${news.source.name}">
        <div class="card-img-overlay bg-color">
            <a href='${news.url}' class="overlays-title card-title">${news.title}</a>
            <p class="card-text">${news.publishedAt.substring(0, 10)}</p>
        </div>
    </div>
    <h2 class="content__heading">Berita Terkini</h2>
`;

export { createNewsItemTemplate, createNewsImageOverlays };
