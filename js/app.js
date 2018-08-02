$(document).ready(function () {
    var drawGifs = function (data) {
        var gif = "";
        var url = "";
        data.forEach(function (element) {
            gif = element.images.downsized_large.url;
            url = element.bitly_gif_url;
            $("#elements").append(setTemplate(gif, url));
        });
    }


var setTemplate = function (gif, url) {
    var t = "<div class ='element'><img src = '" + gif + "'/><a href = '" + url + "'>See more</a></div>"
    return t;
}

var ajaxGif = function(gif){
    $.ajax({
        url: 'http://api.giphy.com/v1/gifs/search',
        type: 'GET',
        datatype: 'json',
        data:{
            q: gif,
            api_key: 'LN5YmNSLbVRPktQIXjuln6yB9N554piB',
            limit: 6
        }
    })
    .done(function(response){
        console.log(response);
        drawGifs(response.data);
    })
    .fail(function(){
        console.log('error')
    });
}

    $('#search-gif').click(function(event){
        console.log('Inside');
        $('#elements').empty();
        var gif = $('#gif-text').val();
        ajaxGif(gif);
    });
});

