function getNews() {
  $.ajax({
    url:
      "https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=06840ae9c7184b5b948435c6b5b41913",
    dataType: "json",

    success: function(data) {
      console.log(data);
      $(".block").text(data.articles[0].title);
      $(".block").append(data.articles[0].description);

    }
  });
}
getNews();
