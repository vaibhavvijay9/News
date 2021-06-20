function getNews() {
    let query = document.getElementById('search').value;
    let settings = {};

    if(query && query.length > 0) {
        settings = {
            "url": "https://gnews.io/api/v4/search?token=129e24acd3ee041963442e86f8dcd7d5&lang=en&q="+'"'+query+'"',
            "method": "GET"
        };
    }
    else {
        settings = {
            "url": "https://gnews.io/api/v4/top-headlines?token=129e24acd3ee041963442e86f8dcd7d5&lang=en",
            "method": "GET"
        };
    }

    $.ajax(settings).done(function (response) {
        let articles = response.articles;
        $(".news-content").empty();
        for (var i = 0; i < articles.length; i++) {
            if(!articles[i].image)
                articles[i].image = './news_128px.png';
            if(articles[i].publishedAt)
                articles[i].publishedAt = formatDate(articles[i].publishedAt);
            if(articles[i].description)
                articles[i].description = articles[i].description.substring(0, 300);
            $(".news-content").append(
                "<div class='news-block'><div class='img-container'><img class='news-image' src=" +
                articles[i].image +
                " alt='News'/></div><div class='news'><li><a class='news-title' href=" +
                articles[i].url +
                ">" +
                articles[i].title +
                "</a></li><li class='news-description'>" +
                articles[i].description +
                "</li><li><span class='published-label'>Published:</span><span class='published-value'> " +
                articles[i].publishedAt +
                "</span></li></div></div>"
            );
        }
    });
}

getNews();


function formatDate(date) {
    return new Date(date).toDateString();
}