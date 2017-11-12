function getNews() {
  $.ajax({
    url:
      "https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=06840ae9c7184b5b948435c6b5b41913",
    dataType: "json",

    success: function(data) {
      console.log(data);
      for (var i = 0; i < data.articles.length; i++) {
        console.log(i);
        $(".news-content").append("<li><a href="+data.articles[i].url+">" + data.articles[i].title + "</a></li>");
        $(".news-content").append("<li>" + data.articles[i].description + "</li>");
        $(".news-content").append("<li>Published: " + data.articles[i].publishedAt + "</li>");
      }
    }
  });
}
getNews();
