function getNews() {
    const settings = {
        "url": "http://api.mediastack.com/v1/news?access_key=39bea7d5c8a0621ed3c1bca6730fe8d1&&languages=en",
        "method": "GET"
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        let articles = response.data;
        for (var i = 0; i < articles.length; i++) {
            if(!articles[i].image)
                articles[i].image = './news_128px.png';
            if(articles[i].published_at)
                articles[i].published_at = formatDate(articles[i].published_at);
            if(articles[i].description)
                articles[i].description = articles[i].description.substring(0, 300);
            $(".news-content").append(
                "<div class='z-depth-1 news-block'><div><img class='news-image' src=" +
                articles[i].image +
                " alt='Image not found'/></div><div class='news'><li><a class='news-title' href=" +
                articles[i].url +
                ">" +
                articles[i].title +
                "</a></li><li class='news-description'>" +
                articles[i].description +
                "</li><li><span class='published-label'>Published:</span><span class='published-value'> " +
                articles[i].published_at +
                "</span></li></div></div>"
            );
        }
    });
}
getNews();


function formatDate(date) {
    return new Date(date).toDateString();
}