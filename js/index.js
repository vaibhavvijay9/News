function getNews() {
    $.ajax({
        url: 'https://newsapi.org/v1/articles?source=the-times-of-india&sortBy=top&apiKey=06840ae9c7184b5b948435c6b5b41913',
        dataType: 'jsonp',
        success: function(data) {

        }
    });
}
getNews();