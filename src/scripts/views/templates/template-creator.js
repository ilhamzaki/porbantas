const createNewsItemTemplate = (news) => `
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <div class="news-source">${news.source.name}</div>
                    <img src="${news.urlToImage}" class="img-fluid rounded-start" alt="news-image">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <a href='${news.url}' class="card-title" target="_blank">${news.title}</a>
                        <p class="card-text">${news.description}</p>
                        <p class="card-text"><small class="text-muted">${news.publishedAt}</small></p>
                    </div>
                    <div class="bookmark-icon">
                        <i class="bi bi-bookmark"></i>
                    </div>
                </div>
            </div>
        </div>
`;

export default createNewsItemTemplate;
