function getNews() {
    $.ajax({
        url: "https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=06840ae9c7184b5b948435c6b5b41913",
        dataType: "json",

        success: function(data) {
            for (var i = 0; i < data.articles.length; i++) {
                $(".news-content").append(
                    "<div class='z-depth-1 news-block'><div><img class='news-image' src=" +
                    data.articles[i].urlToImage +
                    " alt='Image not found'/></div><div class='news'><li><a href=" +
                    data.articles[i].url +
                    ">" +
                    data.articles[i].title +
                    "</a></li><li>" +
                    data.articles[i].description +
                    "</li><li>Published: " +
                    data.articles[i].publishedAt +
                    "</li></div></div>"
                );
            }
        }
    });
}
getNews();
