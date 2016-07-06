$.getJSON('https://api.soundcloud.com/playlists/235506624?client_id=f4f2237e0ee1500764af3532c6bc5e13', function(data) {
  var data = data.tracks;
  //Works the soundcloud api down to the splitting the title of our tracks to before the dash
  $(data).each(function(i) {
    // var dataTitle = data[i].title
    // console.log(dataTitle);
    var title = data[i].title.split(' -');
    // console.log(title);
    var titleSplit = title[0];

    // Accessing OMDB for movie posters by using the split title from above:
    $.getJSON('https://www.omdbapi.com/?t='+titleSplit, function (movie) {
      //adds the title of most recent track to the DOM
      $('#container').append('<h1>'+titleSplit+'</h1>');
      // console.log('https://www.omdbapi.com/?t=' + titleSplit);
        //Appending all Posters to DOM
        var poster = document.createElement('img');
        $(poster).attr('src', movie.Poster);
        $('#container').append(poster);
        //Appending al IMDB Ratings:
        $('#container').append('<p>'+'IMDB Rating: '+movie.imdbRating+'</p>');
        //Appending all Plots:
        $('#container').append('<p>'+'Plot: '+movie.Plot+'</p>');
    })
  })

  //below adds the entire Playlist to the DOM
  $('#iframe').attr('src','https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/235506624&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true')
})
