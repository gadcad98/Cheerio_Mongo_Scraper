// Get articles as JSON
$.getJSON("/articles", function(data) {
    for (var i = 0; i < data.length; i++) {
        $("#articles").append("<p data-id='" + data[i]._id + "'>" +data[i],title + "<br />" + data[i].link + "</p>0")
    }
})

$(document).on("click", function(enter) {
    
})